import '../css/Task.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function Task({ text, completed }) {
  return (
    <div className={`task-container ${completed ? 'completed' : ''}`}>
      <div className="task-text">
        {text}
      </div>
      <div className="task-container-icon">
        <AiOutlineCloseCircle className="task-delete-icon" />
      </div>
    </div>
  );
}