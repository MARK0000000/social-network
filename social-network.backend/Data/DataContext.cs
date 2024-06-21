using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using social_network.backend.Entities;
using social_network.backend.Entities.Identity;
using social_network.backend.Entities.SignalR;
using System.Reflection.Emit;

namespace social_network.backend.Data
{
    public class DataContext : IdentityDbContext<User,
                                                 Role,
                                                 int,
                                                 IdentityUserClaim<int>,
                                                 UserRole,
                                                 IdentityUserLogin<int>,
                                                 IdentityRoleClaim<int>,
                                                 IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions options) : base(options) 
        {
        }

        public DbSet<Message> Messages { get; set; }
        public DbSet<Entities.SignalR.Group> Groups { get; set; }
        public DbSet<Connection> Connections { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Post> Posts { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>()
               .HasMany(ur => ur.UserRoles)
               .WithOne(u => u.User)
               .HasForeignKey(ur => ur.UserId)
               .IsRequired();

            builder.Entity<Role>()
               .HasMany(ur => ur.UserRoles)
               .WithOne(u => u.Role)
               .HasForeignKey(ur => ur.RoleId)
               .IsRequired();


            builder.Entity<Message>()
                .HasOne(u => u.Recipient)
                .WithMany(m => m.MessagesReceived)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Message>()
                .HasOne(u => u.Sender)
                .WithMany(m => m.MessageSent)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
