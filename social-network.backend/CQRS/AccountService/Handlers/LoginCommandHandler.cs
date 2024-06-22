using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using social_network.backend.CQRS.AccountService.Commands;
using social_network.backend.DTOs;
using social_network.backend.Entities.Identity;
using social_network.backend.Errors;
using social_network.backend.Interfaces;
using social_network.backend.mongodb.model;
using social_network.backend.mongodb.settings;

namespace social_network.backend.CQRS.AccountService.Handlers
{
    public class LoginCommandHandler : IRequestHandler<LoginCommand, ActionResult<UserDTO>>
    {
        private readonly UserManager<User> _userManager;
        private readonly ITokenService _tokenService;
        private readonly IEmailService _emailService;
        private readonly MongodbSettings _mongodbSettings;
        private readonly IMongoClient _client;
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<UserToken> _collection;
        public LoginCommandHandler(
               UserManager<User> userManager,
               ITokenService tokenService,
               IMapper mapper,
               IEmailService emailService,
               IOptions<MongodbSettings> mongodbSettings)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _emailService = emailService;
            _mongodbSettings = mongodbSettings.Value;
            _client = new MongoClient(_mongodbSettings.ConnectionString);
            _database = _client.GetDatabase(_mongodbSettings.DatabaseName);
            _collection = _database.GetCollection<UserToken>(_mongodbSettings.CollectionName);
        }

        public async Task<ActionResult<UserDTO>> Handle(LoginCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.Users
                .Include(x => x.Photos)
                .SingleOrDefaultAsync(x => x.UserName == request.LoginDTO.Username);
            if (user == null)
                throw new HttpException(401,"Invalid login/password");

            var result = await _userManager.CheckPasswordAsync(user, request.LoginDTO.Password);
            if (!result)
                throw new HttpException(401, "Invalid password");

            if (user.TwoFactorEnabled)
                return await HandleTwoFactorLogin(user);

            var token = await _tokenService.CreateToken(user);
            return new UserDTO
            {
                Username = user.UserName,
                Token = token,
                PhotoUrl = user.Photos.FirstOrDefault(x => x.IsMain).Url
            };
        }

        private async Task<ActionResult<UserDTO>> HandleTwoFactorLogin(User user)
        {
            var code = await _userManager.GenerateTwoFactorTokenAsync(user, "Email");
            await _emailService.SendTwoFactorCodeAsync(user.Email, code);
            await SaveUserTokenToMongoDB(user.UserName, code);
            throw new HttpException(200,$"Your account verification code has been sent to your email: {user.Email}");
        }

        private async Task SaveUserTokenToMongoDB(string userName, string code)
        {
            var token = new UserToken
            {
                UserName = userName,
                Token = code,
                WasDeleted = DateTime.Now
            };
            var indexModel = new CreateIndexModel<UserToken>(
                Builders<UserToken>.IndexKeys.Ascending(k => k.WasDeleted),
                new CreateIndexOptions
                {
                    ExpireAfter = TimeSpan.FromSeconds(60)
                });
            await _collection.Indexes.CreateOneAsync(indexModel);
            await _collection.InsertOneAsync(token);
        }
    }
}
