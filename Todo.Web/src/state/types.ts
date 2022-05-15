export interface TodoModel 
{
    id: string,
    text?: string,
    status: ToDoStatus
}

export enum ToDoStatus
{
    DRAFT = 0,
    PENDING = 1,
    COMPLETED = 2
}