using social_network.backend.Entities.Identity;

namespace social_network.backend.Entities.SignalR
{
    public class Message : BaseEntity
    {
        public int SenderId { get; set; }
        public string SenderUsername { get; set; }
        public User Sender { get; set; }

        public int RecipiendId { get; set; }
        public string RecipiendUsername { get; set; }
        public User Recipient { get; set; }

        public string MessageContent { get; set; }
        public DateTime? DateRead { get; set; }
        public DateTime? MessageSent { get; set; } = DateTime.UtcNow;
        public bool SenderDeleted { get; set; }
        public bool RecipiendDeleted { get; set; }
    }
}
