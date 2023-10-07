namespace LoginService.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string HashPassword { get; set; }
        public string Salt { get; set; }
    }
}
