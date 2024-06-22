using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using social_network.backend.CQRS.AccountService.Commands;
using social_network.backend.DTOs;
using social_network.backend.Entities.Identity;
using social_network.backend.Service;

namespace social_network.backend.CQRS.AccountService.Handlers
{
    //public class ForgotPasswordCommandHandler : IRequestHandler<ForgotPasswordCommand, ActionResult>
    //{
    //    private readonly UserManager<User> _userManager;
    //    private readonly EmailService _emailService;
    //    public ForgotPasswordCommandHandler(UserManager<User> userManager,EmailService emailService) 
    //    {
    //        _userManager = userManager;
    //        _emailService = emailService;
    //    }

    //    public async Task<ActionResult> Handle(ForgotPasswordCommand request, CancellationToken cancellationToken)
    //    {
    //        var user = await _userManager.FindByEmailAsync(request.ForgotPassword.Email);

    //        if (user is not null)
    //        {
    //            var token = await _userManager.GeneratePasswordResetTokenAsync(user);

    //            await _emailService.SendPasswordResetEmail(user.Email,token);

    //        }
    //    }
    //}
}
