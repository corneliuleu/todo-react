# todo-react


**How long did you spend on your solution?**
8 hours

**How do you build and run your solution?**
Compile the Todo.Api project in VS. Run the dotnet <Todo.Api>\bin\Debug\net6.0\Todo.Api.dll. By default the Api will listen on  https://localhost:5001 (update the frontend config.json if different).
Run npm start in the Todo.Web folder to start the frontend.

**Briefly explain your technical design and why do you think is the best approach to this problem.**
The app is a front end React app with a .NET core 6 Web API backend. Uses client side rendering which allows to handle large amount of requests without requ
- Jeact JS front end app
- Redux for state management to prevent prop drilling.
- Bootstrap for building responsive, mobile-first web app.
- Axios to make XMLHttpRequests to Web API
- TypeScript
- .NET 6 Core Web API
- Entity Framework using in memory provider