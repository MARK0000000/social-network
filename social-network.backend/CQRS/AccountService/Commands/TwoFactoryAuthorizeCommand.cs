using Amazon.Runtime.Internal;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using social_network.backend.DTOs;

namespace social_network.backend.CQRS.AccountService.Commands
{
    public class TwoFactoryAuthorizeCommand : IRequest<UserDTO>
    {
        public string Code { get; set; }
        public string Username { get; set; }
    }
}
