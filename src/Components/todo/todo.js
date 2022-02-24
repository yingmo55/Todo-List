import React, {useState, useEffect} from 'react';
import TaskList from '../TaskList/TaskList';

function Todo() {
const [todo, setTodo] = useState('');
const [todoList, setTodoList] = useState([]);
const todoItems = document.getElementById('todoItems');

const updateTodoField = e => {
    e.preventDefault();
    setTodo(e.target.value);
}
const addToTodos = () => {
    setTodoList((prev) =>
        [...prev, {
            task: todo,
            time: '1970-1-1'
            }
        ])
    setTodo('')
    todoItems.value = '';
}

    return (
        <>
            <input id='todoItems' type='text' onChange={updateTodoField} />
            <button onClick={addToTodos}>+</button>
            <hr/>
        <TaskList todoList={todoList} />
        </>
    )
}


export default Todo;