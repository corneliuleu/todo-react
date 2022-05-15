import React from 'react';
import ToDoList from "./components/TodoList";
import Header from "./components/Header";
import store from './state/store';
import { fetchTodosApi } from './state/reducers';

const App = () => {
  React.useEffect(() => {
    // Preload existing tasks
    store.dispatch(fetchTodosApi);
  }, []);

  return (
    <>
      <Header />
      <ToDoList />
    </>
  );
};

export default App;