import './App.css';
import Todo from './Components/TodoList/Todo/Todo';
import Timer from './Components/Pomodoro/Timer/Timer';
import CurrentTime from './Components/CurrentTime/CurrentTime';

function App() {
  return (
    <div className="App">
        <div className='fadingAnimation'></div>
        <CurrentTime className='currentTime' />
        <Timer className='timer' />
        <Todo className='todoList' />
    </div>
  );
}

export default App;
