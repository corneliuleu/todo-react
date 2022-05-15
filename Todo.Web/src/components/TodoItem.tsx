import React from 'react';
import { TodoModel, ToDoStatus } from '../state/types';

const TodoItem = ({ onTodoClick, data }: {
  onTodoClick: (id: string) => void,
  data: TodoModel
}) => (
  <div className="card mt-2">
    <div className="card-body">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" 
          value="" id={"cbItem" + data.id} 
          defaultChecked={data.status == ToDoStatus.COMPLETED}
          // disabled={data.status == ToDoStatus.COMPLETED}
          onClick={() => onTodoClick(data.id)} />
          <label className={`form-check-label ${data.status == ToDoStatus.COMPLETED ? 'text-decoration-line-through' : ''}`} htmlFor={"cbItem" + data.id}>
          {data.text}
          </label>
      </div>
    </div>
  </div>
);

export default TodoItem;