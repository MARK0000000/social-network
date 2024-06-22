using Microsoft.AspNetCore.Identity;
using social_network.backend.Entities.SignalR;

namespace social_network.backend.Entities.Identity
{
    public class User : IdentityUser<int>
    {
        public DateTime DateOfBirth { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.UtcNow;

        public List<Message> MessageSent { get; set; }
        public List<Message> MessagesReceived { get; set; }
        public List<Photo> Photos { get; set; } = new();

        public ICollection<UserRole> UserRoles { get; set; }
    }
}
