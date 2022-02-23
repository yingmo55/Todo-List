import React, {useState, useEffect} from 'react';

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


const renderList = () => {
    const listItem = todoList.map(todo, index =>
        <li key={'key'+index}>{todo.task}</li>
        )
    return listItem;
}

    return (
        <>
            <input id='todoItems' type='text' onChange={updateTodoField} />
            <button onClick={addToTodos}>+</button>
        <ol>
            <hr/>
        </ol>
        </>
    )
}


export default Todo;