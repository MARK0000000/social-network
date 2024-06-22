using social_network.backend.Entities.Identity;

namespace social_network.backend.Entities
{
    public class Post : BaseEntity
    {
        public int UserId { get; set;}
        public User User { get; set;}
        public string Title { get; set;}
        public string PostContent { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}