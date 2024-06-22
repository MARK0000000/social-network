using AutoMapper;
using MediatR;
using MongoDB.Driver;
using Microsoft.AspNetCore.Mvc;
using social_network.backend.DTOs;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using social_network.backend.Errors;
using social_network.backend.Interfaces;
using social_network.backend.mongodb.settings;
using social_network.backend.Entities.Identity;
using social_network.backend.CQRS.AccountService.Commands;

namespace social_network.backend.CQRS.AccountService.Handlers
{
    public class RegisterCommandHandler : IRequestHandler<RegisterCommand, ActionResult<UserDTO>>
    {
        private readonly UserManager<User> _userManager;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;

        public RegisterCommandHandler(UserManager<User> userManager,
               ITokenService tokenService,
               IMapper mapper)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _mapper = mapper;
        }
        public async Task<ActionResult<UserDTO>> Handle(RegisterCommand request, CancellationToken cancellationToken)
        {
            var registerDto = request.RegisterDTO;
            if (await UserExists(registerDto.Username))
                throw new HttpException(404, "User already exists");
            var user = _mapper.Map<User>(registerDto);

            user.UserName = registerDto.Username.ToLower();

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
                throw new HttpException(500, result.Errors.ToString());

            var roleResult = await _userManager.AddToRoleAsync(user, "Member");

            if (!roleResult.Succeeded)
                throw new HttpException(500, result.Errors.ToString());

            return new UserDTO
            {
               Username = registerDto.Username,
               Token = await _tokenService.CreateToken(user)
            };
        }

        private async Task<bool> UserExists(string username) =>
            await _userManager.Users.AnyAsync(x => x.UserName == username.ToLower());
    }
}
