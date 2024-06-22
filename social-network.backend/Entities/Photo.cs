using social_network.backend.Entities.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace social_network.backend.Entities
{
    [Table("Photos")]
    public class Photo : BaseEntity
    {
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }
        public int UserId { get; set; }
        public User AppUser { get; set; }
    }
}
