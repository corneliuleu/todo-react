using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using NUnit.Framework;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Todo.Api.Tests;

public class TodoItemsTests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    [TestCase("api/todoitems")]
    public async Task GetTodoItemsTest(string url)
    {
        using var application = new WebApplicationFactory<Program>();

        var client = application.CreateClient();

        var response = await client.GetAsync(url);

        response.EnsureSuccessStatusCode();

        Assert.NotNull(response);
        Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.OK));
    }

    [Test]
    [TestCase("api/todoitems")]
    public async Task PostTodoItemsTest(string url)
    {
        using var application = new WebApplicationFactory<Program>();

        var client = application.CreateClient();

        var jsonInString = JsonConvert.SerializeObject(new Todo.Api.Models.TodoItem
        {
            Id = System.Guid.NewGuid(),
            Text = "New test",
            Status = 1
        });

        var response = await client.PostAsync(url, new StringContent(jsonInString, Encoding.UTF8, "application/json"));

        response.EnsureSuccessStatusCode();

        Assert.NotNull(response);
        Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.Created));
    }

    [Test]
    [TestCase("api/todoitems/setstatus/00000000-0000-0000-0000-000000000000")]
    public async Task SetStatusNotFound(string url)
    {
        using var application = new WebApplicationFactory<Program>();

        var client = application.CreateClient();

        var response = await client.PutAsync(url, null);

        Assert.NotNull(response);
        Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.NotFound));
    }

    [Test]
    public async Task SetStatusSuccess()
    {
        using var application = new WebApplicationFactory<Program>();

        var client = application.CreateClient();
        var taskGuid = System.Guid.NewGuid();

        var jsonInString = JsonConvert.SerializeObject(new Todo.Api.Models.TodoItem
        {
            Id = taskGuid,
            Text = "New test",
            Status = 1
        });

        var response = await client.PostAsync("api/todoitems", new StringContent(jsonInString, Encoding.UTF8, "application/json"));


        response = await client.PutAsync($"api/todoitems/setstatus/{taskGuid}", null);

        Assert.NotNull(response);
        Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.OK));
    }
}