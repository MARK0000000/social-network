using MediatR;
using Microsoft.AspNetCore.Mvc;
using social_network.backend.DTOs;

namespace social_network.backend.CQRS.AccountService.Commands
{
    public class RegisterCommand : IRequest<ActionResult<UserDTO>>
    {
        public RegisterDTO RegisterDTO {  get; set; }
    }
}
