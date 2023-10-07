using LoginService.Crypto;
using LoginService.Database;
using LoginService.Models;
using Microsoft.EntityFrameworkCore;

namespace LoginService.Services
{
    public class UserService : IUserService
    {
        private readonly UserDb _db;
        private readonly Jwt _jwt;
        public UserService(UserDb db, Jwt jwt)
        {
            _db = db;
            _jwt = jwt;
        }

        public async Task<string> SignUp(UserDTO user)
        {
            try
            {
                var fullHashPassword = Crypto.Crypto.HashPassword(user.HashPassword, user.Salt);

                var userO = new User
                {
                    Username = user.Username,
                    HashPassword = fullHashPassword,
                    Salt = user.Salt,
                };

                _db.Users.Add(userO);
                await _db.SaveChangesAsync();
                return "Created user";
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<string> GetUserSalt(string usarname)
        {
            try
            {
                //var user = await _db.Users.FindAsync(userId);
                var user = await _db.Users.FirstOrDefaultAsync(u => u.Username == usarname);
                if (user == null)
                {
                    return "username incorrect";
                }
                return user.Salt;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public async Task<string> Login(UserDTO userDto)
        {
            try
            {
                var user = await _db.Users.FirstOrDefaultAsync(u => u.Username == userDto.Username);

                if (user == null)
                {
                    return "";
                }
                var compared = Crypto.Crypto.VerifyPassword(userDto.HashPassword, user.Salt, user.HashPassword);


                if(compared)
                {
                    return _jwt.GenerateJwtToken(user.Username);
                }

                throw new Exception("username or password is incorrect");

            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }



        /*

        public async Task<IResult> CreateUser(UserDTO user)
        {
            var userO = new User
            {
                Username = user.Username,
                Password = user.Password
            };
            _db.Users.Add(userO);
            await _db.SaveChangesAsync();

            return TypedResults.Created($"/todoitems/{userO.Id}", user);
        }

        public async Task<IResult> UpdateUser(int id, UserDTO inputUser)
        {
            var user = await _db.Users.FindAsync(id);

            if (user is null) return TypedResults.NotFound();

            user.Username = inputUser.Username;
            user.Password = inputUser.Password;

            await _db.SaveChangesAsync();

            return TypedResults.NoContent();
        }

        public async Task<IResult> DeleteUser(int id)
        {
            if (await _db.Users.FindAsync(id) is User user)
            {
                _db.Users.Remove(user);
                await _db.SaveChangesAsync();
                return TypedResults.NoContent();
            }

            return TypedResults.NotFound();
        }*/
    }
}
