namespace Todo.Api.Models
{
    public class TodoItem
    {
        public Guid Id { get; set; }
        public string? Text { get; set; }
        public int Status { get; set; }
    }
}
