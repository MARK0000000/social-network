using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using social_network.backend.DTOs;
using social_network.backend.Entities;
using social_network.backend.Interfaces;

namespace social_network.backend.Data.Repository
{
    public class PostRepository : IPostRepository
    {
        private readonly DataContext _context;

        public PostRepository(DataContext context)
        {
            _context = context;
        }

        //Post
        public async Task<Post> CreatePost(Post post)
        {
            if(post is null)
            {
                throw new ArgumentNullException(nameof(post));

            }
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();
            return post;
        }
        //Get
        public async Task<List<Post>> GetAllPosts() => await _context.Posts.ToListAsync();

        public Task<Post> GetPostByIdAsync(int postId)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Post>> GetPostsByUserIdAsync(int userId)
        {
            throw new NotImplementedException();
        }

        //Delete
        public async Task<bool> DeletePost(int postId)
        {
            var post = _context.Posts.FirstOrDefaultAsync(p => p.Id == postId);
            if (post == null)
                return false;

            _context.Remove(post);
            await _context.SaveChangesAsync();
            return true;
        }

        public Task<Post> UpdatePost(int id, PostForUpdateDTO postUpdateDTO)
        {
            throw new NotImplementedException();
        }
    }
}
