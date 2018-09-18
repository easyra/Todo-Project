import React, {Fragment} from 'react';
import {deleteTask, tagCompleted} from '../actions';
import {connect} from 'react-redux';

const Todo = props => {
    return (
        <Fragment>
            <li onClick={(event) =>{props.tagCompleted(props.todo.id), event.target.classList.toggle('active')}}>{props.todo.value}</li>
            <button onClick={() => props.deleteTask(props.todo.id)}>delete task</button>
        </Fragment>
        
    )
}

export default connect(null, {deleteTask, tagCompleted})(Todo) 