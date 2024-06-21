using Microsoft.AspNetCore.Identity;

namespace social_network.backend.Entities.Identity
{
    public class Role : IdentityRole<int>
    {
        public ICollection<UserRole> UserRoles { get; set; }
    }
}
