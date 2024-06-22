using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Identity;
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
using social_network.backend.Service;

namespace social_network.backend.CQRS.AccountService.Handlers
{
    public class TwoFactoryAuthorizeCommandHandler : IRequestHandler<TwoFactoryAuthorizeCommand,UserDTO>
    {
        private readonly UserManager<User> _userManager;
        private readonly ITokenService _tokenService;
        private readonly MongodbSettings _mongodbSettings;
        private readonly IMongoClient _client;
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<UserToken> _collection;
        public TwoFactoryAuthorizeCommandHandler(IMediator mediator,
               UserManager<User> userManager,
               ITokenService tokenService,
               IOptions<MongodbSettings> mongodbSettings)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _mongodbSettings = mongodbSettings.Value;
            _client = new MongoClient(_mongodbSettings.ConnectionString);
            _database = _client.GetDatabase(_mongodbSettings.DatabaseName);
            _collection = _database.GetCollection<UserToken>(_mongodbSettings.CollectionName);
        }

        public async Task<UserDTO> Handle(TwoFactoryAuthorizeCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.Users.SingleOrDefaultAsync(u => u.UserName == request.Username);
            var tokencheck = await _database.GetCollection<UserToken>(_collection.ToString()).Find(t => t.Token == request.Code).FirstOrDefaultAsync();
            if (tokencheck != null)
            {
                return new UserDTO
                {
                    Username = user.UserName,
                    Token = await _tokenService.CreateToken(user),
                };
            }
            throw new HttpException(404,"Authorize code not valid...");
        }
    }
}
