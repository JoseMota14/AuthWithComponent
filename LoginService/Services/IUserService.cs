using LoginService.Models;

namespace LoginService.Services
{
    public interface IUserService
    {

        Task<string> SignUp(UserDTO user);
        Task<string> GetUserSalt(string userId);
        Task<string> Login(UserDTO user);

    }
}
