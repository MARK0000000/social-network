namespace social_network.backend.DTOs
{
    public class PostForCreateDTO
    {
        public int UserId { get; set; }
        public string Title {  get; set; }
        public string Description { get; set; }
    }
}
