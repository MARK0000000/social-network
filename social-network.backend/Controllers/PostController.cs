using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using social_network.backend.DTOs;
using social_network.backend.Entities;
using social_network.backend.Entities.Identity;
using social_network.backend.Interfaces;

namespace social_network.backend.Controllers
{

    public class PostController : BaseController
    {
        private readonly IPostRepository _postRepository;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        public PostController(IPostRepository postRepository, IMapper mapper, UserManager<User> userManager)
        {
            _postRepository = postRepository;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet("GetAllPosts")]
        public async Task<IActionResult> GetAll()
        {
            var posts = await _postRepository.GetAllPosts();
            if (posts is not null)
            {
                return Ok(posts);
            }
            return StatusCode(500, $"Ошибка при подгрузке данных");

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var post = await _postRepository.GetPostByIdAsync(id);
                if (post == null)
                    return NotFound("Пост не найден");

                return Ok(post);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Произошла ошибка: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] PostDTO PostDTO)
        {
            var user = _userManager.Users.SingleOrDefault(x => x.UserName == PostDTO.username);
            var createdPost = await _postRepository.CreatePost(_mapper.Map<Post>(PostDTO));
            if (createdPost == null)
                return BadRequest("Ошибка добавления поста");
            return Ok(createdPost);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] PostForUpdateDTO PostUpdateDTO)
        {
            try
            {
                var updatedPost = await _postRepository.UpdatePost(id, PostUpdateDTO);
                if (updatedPost == null)
                    return NotFound("Пост не найден");

                return Ok(updatedPost);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Произошла ошибка: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            var deletedPost = await _postRepository.DeletePost(id);
            if (!deletedPost)
                return BadRequest("Ошибка удаления...");

            return Ok(deletedPost);

        }
    }
}