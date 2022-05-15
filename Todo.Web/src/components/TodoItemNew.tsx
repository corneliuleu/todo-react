import React from 'react';
import { TodoModel, ToDoStatus } from '../state/types';

const TodoItemNew = ({ onSaveClick, onCancelClick, data }: {
  onSaveClick: (id: string, text: string | undefined) => void,
  onCancelClick: (id: string) => void,
  data: TodoModel
}) => {
  const inputEl = React.useRef<HTMLInputElement>(null);  

  return (
    <div className="card mt-2">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <input ref={inputEl} type="text" className="form-control" placeholder="" defaultValue={data.text} />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary" onClick={() => onSaveClick(data.id, inputEl.current?.value)}>Save</button>
            <button type="submit" className="btn btn-default" onClick={() => onCancelClick(data.id)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
)};

export default TodoItemNew;