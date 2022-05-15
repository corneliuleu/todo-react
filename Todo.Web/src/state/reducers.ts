import { AnyAction } from "redux";
import { ActionType } from "./actions";
import { TodoModel, ToDoStatus } from "./types";

const initialState: TodoModel[] = [];

const todoItems = (
  state: TodoModel[] = initialState,
  action: AnyAction
): TodoModel[] => {
  switch (action.type) {
    case ActionType.ADD_TODO_ITEM:
      return [
        { id: crypto.randomUUID(), status: ToDoStatus.DRAFT },
        ...state,
      ];

    case ActionType.ACTION_TODO:
      return state.map((todo: TodoModel) => {
        if (todo.id !== action.id) 
          return todo;

        if (todo.status === ToDoStatus.PENDING )
          return { ...todo, status: ToDoStatus.COMPLETED };

        if (todo.status === ToDoStatus.COMPLETED )
          return { ...todo, status: ToDoStatus.PENDING };

        return todo;
      });

    case ActionType.SAVE_NEW_TODO_ITEM:
      return state.map((todo: TodoModel) => {
        if (todo.id !== action.id 
          || todo.status !== ToDoStatus.DRAFT
          || !action.text) 
          return todo;

        return { ...todo, status: ToDoStatus.PENDING, text: action.text };
      });

    case ActionType.CANCEL_NEW_TODO_ITEM:
      return state.filter((todo: TodoModel) => !(todo.id === action.id && todo.status === ToDoStatus.DRAFT));

    case ActionType.LOAD_DATA:
      return [
        {id: "11111", text: "Task 1", status: ToDoStatus.PENDING}
      ];

    default:
      return state;
  }
};

export default todoItems;