import axios from "axios";
import { AnyAction } from "redux";
import { actionSaveNewTodoItem, actionTodo, ActionType } from "./actions";
import { TodoModel, ToDoStatus } from "./types";
import configData from "../../config.json";

const initialState: TodoModel[] = [];

const todoItems = (
  state: TodoModel[] = initialState,
  action: AnyAction
): TodoModel[] => {
  switch (action.type) {
    case ActionType.ADD_TODO_ITEM:
      // Allow only one draft todo item
      if (state.some(x => x.status == ToDoStatus.DRAFT))
        return state;

      return [
        { id: crypto.randomUUID(), status: ToDoStatus.DRAFT },
        ...state,
      ];

    case ActionType.ACTION_TODO:
      return state.map((todo: TodoModel) => {
        if (todo.id !== action.id) 
          return todo;

        // if (todo.status === ToDoStatus.PENDING )
        //   return { ...todo, status: ToDoStatus.COMPLETED };

        // if (todo.status === ToDoStatus.COMPLETED )
        //   return { ...todo, status: ToDoStatus.PENDING };

        return { ...todo, status: action.status };
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

    case ActionType.FETCH_DATA:
      return action.data;

    default:
      return state;
  }
};

export default todoItems;

// TODO: Move to config file
const baseUrl = configData.WEB_API_BASE_URL;


// TODO: change function signature
export const fetchTodosApi = async (dispatch: any) => {
    const response = await axios.get(baseUrl);
    dispatch({ type: ActionType.FETCH_DATA, data: response.data });
};

export const saveTodoApi = (id: string, text: string | undefined) => async (dispatch: any) => {
    // TODO: Add error handling and prevent action dispatch if API call fails
    const response = await axios.post(baseUrl, {id, text, status: ToDoStatus.PENDING});
    dispatch(actionSaveNewTodoItem(response.data.id, response.data.text ));
};

export const actionTodoApi = (id: string) => async (dispatch: any) => {
    // TODO: Add error handling and prevent action dispatch if API call fails
    const response = await axios.put(`${baseUrl}/setstatus/${id}`);
    dispatch(actionTodo(response.data.id, response.data.status ));
};