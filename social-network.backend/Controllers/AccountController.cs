using Microsoft.AspNetCore.Mvc;
using social_network.backend.DTOs;
using MediatR;
using social_network.backend.CQRS.AccountService.Commands;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

namespace social_network.backend.Controllers
{
    public class AccountController : BaseController
    {
        private readonly IMediator _mediator;
        public AccountController(IMediator mediator) =>  _mediator = mediator;
        
        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDto)
            => await _mediator.Send(new RegisterCommand{RegisterDTO = registerDto });

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO)
            => await _mediator.Send(new LoginCommand{ LoginDTO = loginDTO });

        [HttpPost("login-2FA")]
        public async Task<ActionResult<UserDTO>> LoginWithTwoFactoryAuthorize(string code, string username)
            => await _mediator.Send(new TwoFactoryAuthorizeCommand { Username = username,Code = code });
    }
}