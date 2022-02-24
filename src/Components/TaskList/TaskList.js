import React, {useState, useEffect} from 'react';


const TaskList = (props) => {
    const todoList = props.todoList;
    const listItem = todoList.map((todo, index) =>
        <li key={'key'+index}>{todo.task}</li>
        )
    return (
        <ol>
            {listItem}
        </ol>
    );
}

export default TaskList;