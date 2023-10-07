using System.Security.Cryptography;
using System.Text;

namespace LoginService.Crypto
{
    public class Crypto
    {
        private const int ITERATIONS = 100000;
        private const string PEPPER = "test";

        public static string HashPassword(string password, string salt)
        {
            string pepperedPassword = password + PEPPER;

            byte[] saltBytes = Convert.FromBase64String(salt);
            byte[] passwordBytes = Encoding.UTF8.GetBytes(pepperedPassword);

            var pbkdf2 = new Rfc2898DeriveBytes(passwordBytes, saltBytes, ITERATIONS);
            byte[] hashBytes = pbkdf2.GetBytes(20);

            byte[] combinedBytes = new byte[36];
            Array.Copy(saltBytes, 0, combinedBytes, 0, 16);
            Array.Copy(hashBytes, 0, combinedBytes, 16, 20);
            string hashWithSalt = Convert.ToBase64String(combinedBytes);

            return hashWithSalt;
        }

        public static bool VerifyPassword(string password, string salt, string hashedPassword)
        {
            // Create the hash with the same salt and peppered password as before
            string newHashedPassword = HashPassword(password, salt);

            // Compare the new hash with the stored hash
            return newHashedPassword == hashedPassword;
        }
    }
}
