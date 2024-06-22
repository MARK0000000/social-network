using social_network.backend.Entities.Identity;

namespace social_network.backend.Interfaces
{
    public interface IUserRepository
    {
        void Update(User user);

        Task<bool> SaveAllAsync();

        Task<IEnumerable<User>> GetUsersAsync();
        Task<User> GetUserByIdAsync(int id);
        Task<User> GetUserByUsernameAsync(string username);
        //Task<PagedList<MemberDTO>> GetMembersAsync(UserParams userParams);
        //Task<MemberDTO> GetMemberAsync(string username);
    }
}
