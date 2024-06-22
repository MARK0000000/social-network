using AutoMapper;
using Microsoft.EntityFrameworkCore;
using social_network.backend.Interfaces;
using social_network.backend.Entities.Identity;

namespace social_network.backend.Data.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public UserRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<User> GetUserByUsernameAsync(string username)
        {
            return await _context.Users
                .Include(p => p.Photos)
                .SingleOrDefaultAsync(x => x.UserName == username);
        }

        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            return await _context.Users
                .Include(p => p.Photos).ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
            =>  await _context.SaveChangesAsync() > 0;

        public void Update(User user)
            =>  _context.Entry(user).State = EntityState.Modified;

        public async Task<User> GetUserByPhotoId(int photoId)
        {
            return await _context.Users
            .Include(p => p.Photos)
            .IgnoreQueryFilters()
            .Where(p => p.Photos.Any(p => p.Id == photoId))
            .FirstOrDefaultAsync();
        }
    }
}
