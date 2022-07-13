import logo from './images/todo-logo.png';
import './App.css';
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <Header logo={logo} title='To Do'/>
      <ToDoList />
    </div>
  );
}

export default App;
