import './App.css';
import Todo from './Components/TodoList/Todo/Todo';
import CurrentTime from './Components/CurrentTime/CurrentTime';
import TimerDisplay from './Components/Pomodoro/TimerDisplay/TimerDisplay';

function App() {
  return (
    <div className="App">
        <div className='fadingAnimation'></div>
        <CurrentTime className='currentTime' />
        <Todo className='todoList' />
        <TimerDisplay className='timerDisplay' />
    </div>
  );
}

export default App;
