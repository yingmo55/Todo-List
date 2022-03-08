import React, {useState, useEffect} from 'react';
import TaskList from '../TaskList/TaskList';
import './Todo.css';

function Todo(props) {
const [todo, setTodo] = useState('');
const [warning, setWarning] = useState(false);
const [todoList, setTodoList] = useState([]);
const todoInput = document.getElementById('todoInput');

// For Local Storage

const parseLocalStorage = () => {
    const data = [];
    const tasksList = Object.keys(localStorage).sort()
    for (let i = 0; i < localStorage.length; i++) {
        let itemID = tasksList[i]
        data.push({
            task: localStorage.getItem(itemID),
            id: itemID})
    }
    return data;
}


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
    let taskID = Date.now()
    setWarning(false);
    setTodoList((prev) =>
    [...prev, {
        task: todo,
        id: taskID,
        }
    ])
    localStorage.setItem(taskID, todo); //local Storage
    setTodo('');
}

const deleteItem = deletedItem => {
    setTodoList((tasks)=> 
    tasks.filter((item) => item.id !== deletedItem)
    )
    localStorage.removeItem(deletedItem);
}

const clearTodo = () => {
    localStorage.clear();
    setTodoList([]);
}

const enterByEnter = e => {
    if (document.activeElement === todoInput && e.key === 'Enter') {
        addToTodos()
    }
}

useEffect(()=> {
    if (localStorage.length > 0) {
        setTodoList(parseLocalStorage());
    }
}, [])

    return (
        <div className={props.className}>
        <h2 id='todoTitle'>Todo</h2>
            <input id='todoInput' type='text'
                   value={todo}
                   onChange={updateTodoField}
                   onKeyDown={enterByEnter} />
            <button onClick={addToTodos} id='addTask'>+</button>
            <hr/>
        <TaskList todoList={todoList} deleteItem={deleteItem}/>
        { todoList.length > 0 && 
        <button onClick={clearTodo} id='removeAll'>Remove all tasks</button> }
        {warning && <p id='emptyTaskWarning'>The first character of a task and the task cannot be empty</p>}

        </div>
    )
}


export default Todo;