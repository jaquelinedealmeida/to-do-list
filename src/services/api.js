import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getTasks = async () => {
  try {
    const { data } = await api.get("/tasks");
    return data;
  } catch (error) {
    console.error("Error to get the tasks:", error);
    throw error;
  }
};

export const addTask = async (task) => {
  const { data } = await api.post("/tasks", task);
  return data;
};

export const updateTask = async (id, task) => {
  const response = await api.put(`/tasks/${id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};




