import React from 'react';
import { TodoModel, RootState, ToDoStatus } from "../state/types";
import TodoItem from './TodoItem';
import TodoItemNew from './TodoItemNew';
import { connect } from "react-redux";
import { actionTodo, actionSaveNewTodoItem, actionCancelNewTodoItem } from "../state/actions";

const TodoList = ({ todos, onTodoClick, onSaveClick, onCancelClick }: {
  todos: TodoModel[],
  onTodoClick: (id: string) => void,
  onSaveClick: (id: string, text: string | undefined) => void,
  onCancelClick: (id: string) => void,
}) => (
  <>
    <h4>Pending</h4>
    <span className='text-muted'>Tasks: {todos.filter((todo) => todo.status === ToDoStatus.PENDING).length}</span>
    {todos.filter((todo) => todo.status === ToDoStatus.DRAFT).map((todo: TodoModel) => 
      <TodoItemNew
        key={todo.id}
        data = {todo}
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
      />
    )}
    {todos.filter((todo) => todo.status === ToDoStatus.PENDING).map((todo: TodoModel) => 
      <TodoItem
        key={todo.id}
        data = {todo}
        onTodoClick={onTodoClick}
      />
    )}

    <h4 className='mt-3'>Completed</h4>
    <span className='text-muted'>Tasks: {todos.filter((todo) => todo.status === ToDoStatus.COMPLETED).length}</span>
    {todos.filter((todo) => todo.status === ToDoStatus.COMPLETED).map((todo: TodoModel) => 
      <TodoItem
        key={todo.id}
        data = {todo}
        onTodoClick={onTodoClick}
      />
    )}
  </>
);

export default connect((state: RootState) => {
  return {
    todos: state.todoItems,
  };
}, 
{
  onTodoClick: actionTodo,
  onSaveClick: actionSaveNewTodoItem,
  onCancelClick: actionCancelNewTodoItem,
})(TodoList);