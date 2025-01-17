import React, {useState} from "react";
import TaskItem from "../TaskItem/TaskItem";
import '../TaskList/TaskList.css';

/* function to map items on the list of tasks and your buttons*/
function TaskList({ tasks, onUpdateTask, onRemoveTask}) {
  const [taskList, setTaskList] = useState(tasks);

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = taskList.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTaskList(updatedTasks);
    onUpdateTask(updatedTask); // Call the parent update function if needed
  };
  
  return (
    <>
    <div className="tasks-list-container">
      <h1 className="tasks-list-title">My Tasks</h1>
      {tasks && tasks.length > 0 ? (
        <ul className="tasks-list" aria-label="List of tasks"> 
          {tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onUpdate={handleUpdateTask}
              onRemove={onRemoveTask} 
            />
          ))}
        </ul>
      ) : (
        <p className="task-list-no-adds">There are no tasks available.</p>
      )}
    </div>
    </>
  );
}


export default TaskList;
