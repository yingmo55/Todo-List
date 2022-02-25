import React, {useState, useEffect} from 'react';
import './Task.css';

const Task = (props) => {
    const {todo, deleteItem} = props;

    const deleteTask = () => {
        deleteItem(todo.id);
    }

    return (
        <>
        <li>{todo.task}<button id='deleteTask' onClick={deleteTask}>-</button></li>
        <hr />
        </>
    );
}

export default Task;