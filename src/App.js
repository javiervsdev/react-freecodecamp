import logo from './images/todo-logo.png';
import './App.css';
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <Header logo={logo} title='To Do'/>
      <div className="todo-container">
        <h1>My Tasks</h1>
        <Task />
      </div>
    </div>
  );
}

export default App;
