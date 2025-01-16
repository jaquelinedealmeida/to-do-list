import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getTasks = async () => {
  try {
    const { data } = await api.get("/tasks");
    return data;
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    throw error; // Lança o erro para ser tratado em outro lugar
  }
};


export const addTask = async (task) => {
  const { data } = await api.post("/tasks", task);
  return data;
};

export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};


