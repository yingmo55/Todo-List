import React, {useState, useEffect} from 'react';
import './Task.css';

const Task = (props) => {
    const {todo, deleteItem} = props;

    const deleteTask = () => {
        deleteItem(todo.id);
    }

    return (
        <>
        <li>
        <label htmlFor={props.taskId}>
            <input id={props.taskId} type='checkbox' />
            <span>{todo.task}</span>
        </label>
        <button id='deleteTask' onClick={deleteTask}>-</button></li>
        <hr />
        </>
    );
}

export default Task;