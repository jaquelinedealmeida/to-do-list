import React, { useState, useEffect } from "react";
import AddTask from "../AddTask/AddTask.js"; // Certifique-se de ter este componente
import { getTasks, addTask,deleteTask } from "../../services/api.js" ; // getTasks pode ser usado para buscar as tarefas
import '../App/App.css'; // Certifique-se de ter este arquivo
import TaskList from "../TaskList/TaskList"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Função para buscar tarefas

const fetchTasks = async () => {
  try {
    const fetchedTasks = await getTasks();
    setTasks(fetchedTasks);
  } catch (error) {
    toast.error("Erro ao carregar as tarefas.");
  }
};

const handleAddTask = async (taskText) => {
  if (!taskText.trim()) {
    toast.error("A tarefa não pode estar vazia.");
    return;
  }

  try {
    const newTask = await addTask({ text: taskText });
    setTasks((prevTasks) =>
      [...prevTasks, newTask].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    );
    toast.success("Tarefa adicionada com sucesso!");
  } catch (error) {
    toast.error("Erro ao adicionar a tarefa.");
  }
};  

  // Função para remover a tarefa
  const handleTaskRemove = async (taskId) => {
    try {
      await deleteTask(taskId); // Chama a API para deletar a tarefa
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); // Atualiza o estado
      toast.success("Tarefa removida com sucesso!"); // Exibe o Toast de sucesso
    } catch (error) {
      toast.error("Erro ao remover a tarefa. Tente novamente!"); // Exibe o Toast de erro
    }
  };

  // UseEffect para carregar as tarefas ao montar o componente
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
<>
  <div className="app-container">
    <h1 className="app-title">To do List</h1>
    <h2 className="app-subtitle">Adds, updates and removes your tasks.</h2>
    {/* Componente para adicionar novas tarefas */}
    <AddTask onAddTask={handleAddTask} />

    <ul className="app-tasks">
      {/* Passando as tarefas para o TaskList */}
      <TaskList tasks={tasks} onRemoveTask={handleTaskRemove} />  
    </ul>

    {/* Adiciona o ToastContainer para exibir as mensagens de sucesso ou erro */}
    <ToastContainer />
  </div>
  <footer className="footer-container">
    <h3 className="footer-title">Desenvolvido por Jaqueline de Almeida</h3>
    <p className="footer-subtitle">&copy;  | 2025</p>
  </footer>
</>
     
  );
};

export default App;
