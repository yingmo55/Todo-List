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

const generateID = () => {
    return Math.floor(Math.random() * 100).toString() + todoList.length 
}

const addToTodos = () => {
    setTodoList((prev) =>
        [...prev, {
            task: todo,
            id: generateID(),
            time: '1970-1-1'
            }
        ])
    setTodo('');
    todoItems.value = '';
}

const deleteItem = deletedItem => {
    setTodoList((tasks)=> {
        console.log(tasks)
        tasks.filter((item) => item.id !== deletedItem)
    })
}

    return (
        <>
            <input id='todoItems' type='text' onChange={updateTodoField} />
            <button onClick={addToTodos}>+</button>
            <hr/>
        <TaskList todoList={todoList} deleteItem={deleteItem}/>
        </>
    )
}


export default Todo;