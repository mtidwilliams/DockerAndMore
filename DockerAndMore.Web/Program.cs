var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Serve the Angular SPA for client-side routes (e.g. /docker refresh).
app.MapFallbackToFile("index.html");

app.Run();
