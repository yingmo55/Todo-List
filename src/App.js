import './App.css';
import Todo from './Components/TodoList/Todo/Todo';
import Timer from './Components/Pomodoro/Timer/Timer';
import CurrentTime from './Components/CurrentTime/CurrentTime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CurrentTime />
        <Timer />
      <Todo />
      </header>
    </div>
  );
}

export default App;
