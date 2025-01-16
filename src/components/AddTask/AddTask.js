import React, { useState } from "react";
import { toast } from "react-toastify";
import '../AddTask/AddTask.css';

const AddTask = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") {
      toast.error("It's necessary adds a task.");
      return;
    }
    onAddTask(taskText);
    setTaskText(""); // Limpa o campo após adicionar
  };


  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
      className="task-add-input"
      type="text"
      value={taskText}
      onChange={(e) => setTaskText(e.target.value)}
      placeholder="Type a task and press enter."
    />
    <button className="add-task-button" type="submit" >
      +
    </button>
  </form>
  );
};

export default AddTask;
