using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using social_network.backend.Entities.Identity;
using System.Text.Json;

namespace social_network.backend.Data
{
    public class Seed
    {

        public static async Task SeedUsers(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            if (await userManager.Users.AnyAsync()) return;


            var userDate = new List<User>() 
            { 
                new User 
                {
                    Email = "Test@gmail.com",
                    UserName = "Gena"
                },
                
            };

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            
            var roles = new List<Role>
            {
                new Role {Name = "Member"},
                new Role {Name = "Admin"},
                new Role {Name = "Moderator"}
            };

            foreach (var role in roles)
            {
                await roleManager.CreateAsync(role);
            }

            foreach (var user in userDate)
            {
                user.UserName = user.UserName.ToLower();
                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");
            }
        }
    }
}
