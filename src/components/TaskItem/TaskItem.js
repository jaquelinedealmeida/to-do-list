import React from "react";
import '../TaskItem/TaskItem.css';

const TaskItem = ({ task, onRemove }) => {
  return (
    <li className="task-item">
      <span className="task-item-text">{task.text}</span> {/* Exibe o texto da tarefa */}
      <button className="btn-remove" onClick={() => onRemove(task.id)}>-</button>
  </li>
  );
};

export default TaskItem;
