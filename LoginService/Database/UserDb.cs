using LoginService.Models;
using Microsoft.EntityFrameworkCore;

namespace LoginService.Database
{
    public class UserDb : DbContext
    {
        public UserDb(DbContextOptions<UserDb> options): base(options) { }

        public DbSet<User> Users => Set<User>();
    }
}
