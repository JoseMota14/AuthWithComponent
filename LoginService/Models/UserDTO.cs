namespace LoginService.Models
{
    public class UserDTO
    {
        public string Username { get; set; }
        public string HashPassword { get; set; }
        public string Salt { get; set; }

        public UserDTO() { }
        public UserDTO(User userItem) =>
        (Username, HashPassword, Salt) = (userItem.Username, userItem.HashPassword, userItem.Salt);

    }
}
