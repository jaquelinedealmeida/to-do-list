import React, { useState, useEffect } from "react";
import AddTask from "../components/AddTask/AddTask.js"; 
import { getTasks, addTask, updateTask, deleteTask } from "../services/api.js" ; // 
import './App.css'; 
import TaskList from "../components/TaskList/TaskList.js"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // UseEffect to fetch the tasks when the component is mounted.
  useEffect(() => {
    fetchTasks();
  }, []);

  // Function to fetch the tasks
  const fetchTasks = async () => {
    try {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      toast.error("Error to fetch the tasks. Try again later!");
    }
  };

  //Function to add a new task
  const handleAddTask = async (taskText) => {
    if (!taskText.trim()) {
      toast.error("Task cannot be empty");
      return;
    }

    try {
      const newTask = await addTask({ text: taskText });
      setTasks((prevTasks) =>
        //Adds a new task on the array of tasks and sort them by createdAt date
        [...prevTasks, newTask].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
      toast.success("Task added successfully!");
    } catch (error) {
      toast.error("Error adding the task. Try again later!");
    }
  };  

  // Function to update the task
  const handleUpdateTask = async (updatedTask) => {
    try {
      const updatedTaskFromAPI = await updateTask(updatedTask.id, updatedTask); 
      setTasks((prevTasks) => 
        prevTasks.map((task) =>
          task.id === updatedTaskFromAPI.id ? updatedTaskFromAPI : task
        )
      );
      toast.success("Task updated successfully!"); 
    } catch (error) {
      toast.error("Error updating the task. Try again later!"); 
    }
  };

  // Function to remove the task
  const handleTaskRemove = async (taskId) => {
    try {
      await deleteTask(taskId); 
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); 
      toast.success("Task was remove with success!"); 
    } catch (error) {
      toast.error("Error to remove the task. Try again later!"); 
    }
  };

  return (
<>
  <main className="app-content">
    <div className="app-container">
    <h1 className="app-title">To do List</h1>
    <h2 className="app-subtitle">Add, update, and removes your tasks.</h2>
    {/* Component for adding new tasks */}
    <AddTask onAddTask={handleAddTask} />

    <ul className="app-tasks">
      {/* Passing tasks to TaskList */}
      <TaskList tasks={tasks} onRemoveTask={handleTaskRemove} onUpdateTask={handleUpdateTask} />
    </ul>

    {/* Adds ToastContainer to display success or error messages */}
    <ToastContainer />
    </div>
  </main>
  <footer className="footer-container">
    <h3 className="footer-title">Developer by Jaqueline de Almeida</h3>
    <p className="footer-subtitle">&copy;  | 2025</p>
  </footer>
</>
     
  );
};

export default App;
