namespace LoginService
{
    public class SettingObjects
    {
        public string Pepper {  get; set; }
    }

    public class JwtSettings
    {
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public string SecurityKey { get; set; }
        public double DurationInMinutes { get; set; }
    }
}
