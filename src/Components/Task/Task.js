import React, {useState, useEffect} from 'react';


const Task = (props) => {
    const {todo, deleteItem} = props;

    const deleteTask = () => {
        deleteItem(todo.id);
    }

    return (
        <li>{todo.task}<button onClick={deleteTask}>-</button></li>
    );
}

export default Task;