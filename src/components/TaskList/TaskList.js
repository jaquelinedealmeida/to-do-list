import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import '../TaskList/TaskList.css';

function TaskList({ tasks, onRemoveTask }) {
  return (
    <>
    <div className="tasks-list-container">
      <h1 className="tasks-list-title">My Tasks</h1>
      <ul className="tasks-list" aria-label="List of tasks">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} onRemove={onRemoveTask} />
          ))
          ) : (
          <li className="task-list-no-adds">There are no tasks available.</li>
        )}
       </ul>
    </div>
    </>
  );
}


export default TaskList;
