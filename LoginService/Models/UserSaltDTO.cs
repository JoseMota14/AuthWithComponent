namespace LoginService.Models
{
    public class UserSaltDTO
    {
        public string Username { get; set; }
        public string Salt { get; set; }

        public UserSaltDTO() { }
        public UserSaltDTO(User userItem) =>
        (Username, Salt) = (userItem.Username, userItem.Salt);
    }
}
