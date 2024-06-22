using System.ComponentModel.DataAnnotations;

namespace social_network.backend.DTOs
{
    public class RegisterDTO
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(12, MinimumLength = 6 )]
        public string Password { get; set; }
    }
}
