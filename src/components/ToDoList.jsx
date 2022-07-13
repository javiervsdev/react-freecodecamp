import '../css/ToDoList.css';
import TaskForm from "./TaskForm";
import {useState} from "react";
import Task from "./Task";

export default function ToDoList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([task, ...tasks]);
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const completeTask = id => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? {...task, completed: !task.completed}
          : task));
  }

  return (
    <div className="todo-container">
      <h1>My Tasks</h1>
      <TaskForm onSubmit={addTask}/>
      <div className="tasks-list-container">
        {
          tasks.map(task =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteHandler={deleteTask}
              completeHandler={completeTask} />
          )
        }
      </div>
    </div>
  );
}