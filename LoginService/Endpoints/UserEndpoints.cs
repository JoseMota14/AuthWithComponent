using LoginService.Database;
using LoginService.Models;
using LoginService.Services;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Any;


namespace LoginService.Endpoints
{
    public static class UserEndpoints
    {
        public static void Map(WebApplication app)
        {
            var usersGroup = app.MapGroup("/login");

            usersGroup.MapPost("/SignUp", async context =>
            {
                var userService = context.RequestServices.GetRequiredService<IUserService>();
                var user = await context.Request.ReadFromJsonAsync<UserDTO>();
                try
                {
                    var result = await userService.SignUp(user);
                    await context.Response.WriteAsJsonAsync(result);
                }
                catch (Exception ex)
                {
                    context.Response.StatusCode = 400;
                    await context.Response.WriteAsJsonAsync(ex.Message);
                }

            }).WithOpenApi();

            usersGroup.MapPost("/Login", async context =>
            {
                var userService = context.RequestServices.GetRequiredService<IUserService>();
                var user = await context.Request.ReadFromJsonAsync<UserDTO>();
                try
                {
                    var result = await userService.Login(user);
                    await context.Response.WriteAsJsonAsync(result);
                }
                catch (Exception ex)
                {
                    context.Response.StatusCode = 400;
                    await context.Response.WriteAsJsonAsync(ex.Message);
                }

            });

            usersGroup.MapGet("/Salt/{username}", async context =>
            {
                var userService = context.RequestServices.GetRequiredService<IUserService>();
                var username = context.Request.RouteValues["username"].ToString();
                try
                {
                    var result = await userService.GetUserSalt(username);
                    await context.Response.WriteAsJsonAsync(result);
                }
                catch (Exception ex)
                {
                    context.Response.StatusCode = 400;
                    await context.Response.WriteAsJsonAsync(ex.Message);
                }

            });

            /*usersGroup.MapGet("/{id}", async context =>
            {
                var id = int.Parse(context.Request.RouteValues["id"].ToString());
                var userService = context.RequestServices.GetRequiredService<IUserService>();
                try
                {
                    var result = await userService.GetUser(id);
                    await context.Response.WriteAsJsonAsync(result);
                }catch(Exception ex)
                {
                    context.Response.StatusCode = 400;
                    await context.Response.WriteAsJsonAsync("User not found");
                }
                
            });*/

            /*usersGroup.MapPost("/", async context =>
            {
                var userService = context.RequestServices.GetRequiredService<IUserService>();
                var user = await context.Request.ReadFromJsonAsync<UserDTO>();
                try
                {
                    var result = await userService.CreateUser(user);
                    await context.Response.WriteAsJsonAsync(result);
                }
                catch (Exception ex)
                {
                    context.Response.StatusCode = 400;
                    await context.Response.WriteAsJsonAsync("Error creating user");
                }
                
            });*/

        }
    }
}