import './App.css';
import Todo from './Components/TodoList/Todo/Todo';
import Timer from './Components/Pomodoro/Timer/Timer';
import CurrentTime from './Components/CurrentTime/CurrentTime';
import TomatoButton from './Components/Pomodoro/TomatoButton/TomatoButton';

function App() {
  return (
    <div className="App">
        <div className='fadingAnimation'></div>
        <CurrentTime className='currentTime' />
        <Todo className='todoList' />
        <TomatoButton className='tomatoTimer' />
    </div>
  );
}

export default App;
