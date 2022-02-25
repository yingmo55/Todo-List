import React, {useState} from 'react';
import TaskList from '../TaskList/TaskList';

function Todo() {
const [todo, setTodo] = useState('');
const [warning, setWarning] = useState(false);
const [todoList, setTodoList] = useState([]);
const todoItems = document.getElementById('todoItems');

const updateTodoField = e => {
    e.preventDefault();
    setTodo(e.target.value);
    setWarning(false);
}

const addToTodos = () => {
    if (todo[0] === ' ' || !todo) {
        setWarning(true);
        return;
    }
    setWarning(false);
    setTodoList((prev) =>
    [...prev, {
        task: todo,
        id: Date.now()
        }
    ])
    setTodo('');
    todoItems.value = '';
}

const deleteItem = deletedItem => {
    setTodoList((tasks)=> 
    tasks.filter((item) => item.id !== deletedItem)
    )
}

    return (
        <>
        <h2>Todo List</h2>
            <input id='todoItems' type='text' onChange={updateTodoField} />
            <button onClick={addToTodos}>+</button>
            <hr/>
        <TaskList todoList={todoList} deleteItem={deleteItem}/>
        {warning && <p id='emptyTaskWarning'>The first character of a task and the task cannot be empty</p>}
        {}
        </>
    )
}


export default Todo;