import React from 'react';
import { connect } from "react-redux";
import { actionAddTodoItem } from "../state/actions";

const Header = ({ onAddNewClick }: {
  onAddNewClick: () => void,
}) => (
    <div className='row'>
        <div className='col-6'>
            <h1>Tasks</h1>
        </div>
        <div className='col-6 text-end'>
            <button className='btn btn-primary' onClick={() => onAddNewClick()}>Add new</button>
        </div>
    </div>

    
)
export default connect(null, { onAddNewClick: actionAddTodoItem })(Header);