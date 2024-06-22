using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using social_network.backend.Data;
using social_network.backend.Entities.Identity;
using social_network.backend.Extensions;
using social_network.backend.Hubs;
using social_network.backend.middleware;

namespace social_network.backend
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerService();
            builder.Services.AddApplicationServices(builder.Configuration);
            builder.Services.AddIdentityService(builder.Configuration);
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            app.UseMiddleware<ExeptionMiddleware>();
            app.UseHttpsRedirection();
            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseAuthorization();
            app.UseAuthentication();
            app.UseCors(builder => builder
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials()
                        .WithOrigins("http://localhost:3000"));

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.MapControllers();
            app.MapHub<PresenceHub>("hubs/presence");
            app.MapHub<MessageHub>("hubs/message");

            using var scope = app.Services.CreateScope();

            var services = scope.ServiceProvider;
            try
            {
                var context = services.GetRequiredService<DataContext>();
                if (!context.Users.Any())   
                    await context.Database.MigrateAsync();

                var userManager = services.GetRequiredService<UserManager<User>>();
                var roleManager = services.GetRequiredService<RoleManager<Role>>();
                await Seed.SeedUsers(userManager, roleManager);
            }
            catch (Exception ex)
            {
                var loger = services.GetService<ILogger<Program>>();
                loger.LogError(ex, "Invalid migration");
            }
            app.Run();
        }
    }
}
