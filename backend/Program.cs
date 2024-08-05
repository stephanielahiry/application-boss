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

// app.MapPut("/jobs/{id}", (int id, Job updatedJob, List<Job> jobs) =>
// {
//     var jobIndex = jobs.FindIndex(j => j.Id == id);
//     if (jobIndex == -1) return Results.NotFound();

//     updatedJob = updatedJob with { Id = id };
//     jobs[jobIndex] = updatedJob;
//     return Results.NoContent();
// });

// app.MapDelete("/jobs/{id}", (int id, List<Job> jobs) =>
// {
//     var job = jobs.FirstOrDefault(j => j.Id == id);
//     if (job is null) return Results.NotFound();

//     jobs.Remove(job);
//     return Results.NoContent();
// });

app.Run();

public record Job(
    int Id,
    string Company,
    string Position
);
