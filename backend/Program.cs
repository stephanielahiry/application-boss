using Microsoft.AspNetCore.Http.HttpResults;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var jobs = new List<Job>();

app.MapGet("/jobs", () => jobs);

app.MapGet("jobs/{id}", Results<Ok<Job>, NotFound> (int id) => {
    var targetJob = jobs.SingleOrDefault(j => id == j.Id);
    return targetJob is null
        ? TypedResults.NotFound()
        : TypedResults.Ok(targetJob);
});

app.MapPost("/jobs", (Job job) =>
{
    jobs.Add(job);
    return TypedResults.Created("/jobs/{id}", job);
});

app.Run();

public record Job(
    int Id,
    string Company,
    string Position
);
