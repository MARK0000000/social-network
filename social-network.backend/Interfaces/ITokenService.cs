using social_network.backend.Entities.Identity;

namespace social_network.backend.Interfaces
{
    public interface ITokenService
    {
        Task<string> CreateToken(User user);
    }
}
