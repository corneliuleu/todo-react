import { AnyAction } from "@reduxjs/toolkit";
import { TodoModel, ToDoStatus } from "./types";

export enum ActionType {
    ADD_TODO_ITEM = "ADD_TODO_ITEM",
    SAVE_NEW_TODO_ITEM = "SAVE_NEW_TODO_ITEM",
    CANCEL_NEW_TODO_ITEM = "CANCEL_NEW_TODO_ITEM",
    ACTION_TODO = "ACTION_TODO",
    FETCH_DATA = "FETCH_DATA"
};

export const actionAddTodoItem = () : AnyAction => ({
    type: ActionType.ADD_TODO_ITEM
});

export const actionSaveNewTodoItem = (id: string, text: string | undefined) : AnyAction => ({
    type: ActionType.SAVE_NEW_TODO_ITEM,
    id,
    text
});

export const actionCancelNewTodoItem = (id: string) : AnyAction => ({
    type: ActionType.CANCEL_NEW_TODO_ITEM,
    id
});

export const actionTodo = (id: string, status: ToDoStatus) : AnyAction => ({
    type: ActionType.ACTION_TODO,
    id,
    status
});

export const actionFetchData = (data: TodoModel[]) : AnyAction => ({
    type: ActionType.FETCH_DATA,
    data
});