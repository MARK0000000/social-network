using System.ComponentModel.DataAnnotations;

namespace social_network.backend.DTOs
{
    public class ForgotPasswordDTO
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
