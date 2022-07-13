import '../css/TaskForm.css';
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export default function TaskForm({ onSubmit }) {

  const [input, setInput] = useState('');

  const changeHandler = event =>
    setInput(event.target.value)

  const submitHandler = event => {
    event.preventDefault();

    const task = {
      id: uuidv4(),
      text: input.trim(),
      completed: false
    }

    input.trim() && onSubmit(task);
  }

  return (
    <form
      className="task-form"
      onSubmit={submitHandler}>
      <input
        type="text"
        name="task"
        className="task-input"
        placeholder="What needs to be done?"
        onChange={changeHandler}/>
      <button className="task-button">
        Add
      </button>
    </form>
  )
}