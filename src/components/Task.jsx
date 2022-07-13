import '../css/Task.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function Task({id, text, completed, completeHandler, deleteHandler}) {
  return (
    <div className={`task-container ${completed ? 'completed' : ''}`}>
      <div
        className="task-text"
        onClick={() => completeHandler(id)}>
        {text}
      </div>
      <div
        className="task-container-icon"
        onClick={() => deleteHandler(id)}>
        <AiOutlineCloseCircle className="task-delete-icon"/>
      </div>
    </div>
  );
}