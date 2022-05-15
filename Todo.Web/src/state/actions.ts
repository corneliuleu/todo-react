import { AnyAction } from "@reduxjs/toolkit";

export enum ActionType {
    ADD_TODO_ITEM = "ADD_TODO_ITEM",
    SAVE_NEW_TODO_ITEM = "SAVE_NEW_TODO_ITEM",
    CANCEL_NEW_TODO_ITEM = "CANCEL_NEW_TODO_ITEM",
    ACTION_TODO = "ACTION_TODO",
    LOAD_DATA = "LOAD_DATA"
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

export const actionTodo = (id: string) : AnyAction => ({
    type: ActionType.ACTION_TODO,
    id
});

export const actionLoadData = () : AnyAction => ({
    type: ActionType.LOAD_DATA
});