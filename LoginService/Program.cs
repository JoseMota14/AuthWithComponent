using LoginService.Database;
using LoginService.Endpoints;
using LoginService.Models;
using LoginService.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.OpenApi.Models;
using LoginService;
using Microsoft.Extensions.Configuration;
using LoginService.Crypto;


var builder = WebApplication.CreateBuilder(args);

var configuration = new ConfigurationBuilder()
    .SetBasePath(builder.Environment.ContentRootPath)
    .AddJsonFile("appsettings.json") // Adjust the path to your configuration file
    .Build();

var issuer = configuration["JwtSettings:Issuer"];
var audience = configuration["JwtSettings:Audience"];
var securityKey = configuration["JwtSettings:SecurityKey"];
var durationInMinutes = configuration.GetValue<int>("JwtSettings:DurationInMinutes");

builder.Services.Configure<JwtSettings>(configuration.GetSection("JwtSettings"));
builder.Services.AddScoped<Jwt>();

builder.Services.AddDbContext<UserDb>(opt => opt.UseInMemoryDatabase("UsersList"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddTransient<UserDb>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1",
        new OpenApiInfo
        {
            Title = "Login",
            Description = "Login Swagger",
            Version = "v1",
        });
});

builder.Services.AddCors();

var app = builder.Build();

app.Logger.LogInformation("The app started");

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Login v1");
});

app.UseCors(builder => builder
    .WithOrigins("http://localhost:5173")
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
);

UserEndpoints.Map(app);

app.Run();