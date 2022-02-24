import React, {useState, useEffect} from 'react';
import Task from '../Task/Task';

const TaskList = (props) => {
    const todoList = props.todoList;
    const deleteItem = props.deleteItem;

    return (
        <ol>
            {todoList.map((todo) =>
            <Task taskDescription={todo.task} key={todo.id} deleteItem={deleteItem}/>
            )}
        </ol>
    );
}

export default TaskList;