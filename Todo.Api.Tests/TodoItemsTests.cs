using Microsoft.AspNetCore.Mvc.Testing;
using NUnit.Framework;
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
    public async Task GetTodoItemsTest([Values()] string url)
    {
        using var application = new WebApplicationFactory<Program>();

        var client = application.CreateClient();

        var response = await client.GetAsync(url);

        response.EnsureSuccessStatusCode();

        Assert.NotNull(response);
    }
}