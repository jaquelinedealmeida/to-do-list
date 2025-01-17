import React, { useState } from "react";
import '../TaskItem/TaskItem.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* function to events: show the task adds and the buttons to update and remove items*/
const TaskItem = ({ task, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false); // Control the editing state
  const [editedText, setEditedText] = useState(task.text); // Edited text

  // Switch between edit and view mode
  const handleEditedClick = () => {
    setEditedText(task.text); // Inicializa o estado com o texto atual da tarefa
    setIsEditing(true); // Ativa o modo de edição
  };

  // Save the edition
  const handleSaveClick = () => {
    if (!editedText.trim()) {
      toast.error("Task cannot be empty");
      return;
    }
    onUpdate({ ...task, text: editedText }); // Call the update
    setIsEditing(false); // Exit edit mode
  };

  // Cancel the edition
  const handleCancelClick = () => {
    setEditedText(task.text); // Restaura o texto original
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <>
          <input
            className="task-edit-input"
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)} // Atualiza o estado corretamente
          />
          <button className="btn-save" onClick={handleSaveClick} title="Save update">✓</button>
          <button className="btn-cancel" onClick={handleCancelClick} title="Cancel update">x</button>
        </>
      ) : (
        <>
          <span className="task-item-text">{task.text}</span>
          <button className="btn-update" onClick={handleEditedClick} title="Update task">↻</button>
          <button className="btn-remove" onClick={() => onRemove(task.id)} title="Remove task">-</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;