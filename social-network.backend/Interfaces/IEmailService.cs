namespace social_network.backend.Interfaces
{
    public interface IEmailService
    {
        Task SendEmailAsync(string email,string subject,string message);
        Task SendTwoFactorCodeAsync(string email,string code);
    }
}
