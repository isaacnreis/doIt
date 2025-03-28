import { defineStore } from "pinia";
import type { Task } from "@/types/task";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [] as Task[],
  }),

  actions: {
    async fetchTasks() {
      try {
        const { data } = await useFetch<Task[]>(`http://localhost:5000/tasks`);
        if (data.value) {
          this.tasks = data.value;
        }
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    },

    async addTask(title: string, description: string) {
      try {
        const { data } = await useFetch<Task>(`http://localhost:5000/tasks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description }),
        });
        if (data.value) {
          this.tasks.push(data.value);
        }
      } catch (error) {
        console.error("Erro ao adicionar tarefa:", error);
      }
    },

    async updateTask(
      taskId: number,
      updatedData: { title: string; description: string }
    ) {
      try {
        await useFetch(`http://localhost:5000/tasks/${taskId}`, {
          method: "PUT",
          body: updatedData,
        });
        this.fetchTasks();
      } catch (error) {
        console.error("Erro ao atualizar a tarefa:", error);
      }
    },

    async deleteTask(taskId: number) {
      try {
        await useFetch(`http://localhost:5000/tasks/${taskId}`, {
          method: "DELETE",
        });
        this.fetchTasks();
      } catch (error) {
        console.error("Erro ao excluir a tarefa:", error);
      }
    },
  },
});
