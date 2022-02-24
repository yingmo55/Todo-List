import './App.css';
import Todo from './Components/TodoList/Todo/Todo';
import Timer from './Components/Pomodoro/Timer/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
      <Todo />
      </header>
    </div>
  );
}

export default App;
