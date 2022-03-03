import React, {useState} from 'react';
import TaskList from '../TaskList/TaskList';
import './Todo.css';

function Todo(props) {
const [todo, setTodo] = useState('');
const [warning, setWarning] = useState(false);
const [todoList, setTodoList] = useState([]);
const todoInput = document.getElementById('todoInput');

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
    todoInput.value = '';
}

const deleteItem = deletedItem => {
    setTodoList((tasks)=> 
    tasks.filter((item) => item.id !== deletedItem)
    )
}

const enterByEnter = e => {
    if (document.activeElement === todoInput && e.key === 'Enter') {
        addToTodos()
    }
}

    return (
        <div className={props.className}>
        <h2 id='todoTitle'>Todo</h2>
            <input id='todoInput' type='text'
                   onChange={updateTodoField}
                   onKeyDown={enterByEnter} />
            <button onClick={addToTodos} id='addTask'>+</button>
            <hr/>
        <TaskList todoList={todoList} deleteItem={deleteItem}/>
        {warning && <p id='emptyTaskWarning'>The first character of a task or the task cannot be empty</p>}
        </div>
    )
}


export default Todo;