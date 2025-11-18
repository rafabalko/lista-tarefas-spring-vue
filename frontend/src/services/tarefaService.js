import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8088/api", // CORRETO
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getTarefas() {
    return apiClient.get("/tarefas");
  },
  addTarefa(tarefa) {
    return apiClient.post("/tarefas", tarefa);
  },
  deleteTarefa(id) {
    return apiClient.delete(`/tarefas/${id}`);
  },
  updateStatus(id, concluida) {
    return apiClient.put(`/tarefas/${id}/status`, { concluida });
  }
};
