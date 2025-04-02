import { defineStore } from "pinia";
import type { Task } from "@/types/task";
import { fetchWithAuth } from "~/composables/api";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [] as Task[],
  }),

  actions: {
    async fetchTasks() {
      try {
        this.tasks = await fetchWithAuth<Task[]>(
          `https://doit-production-72f5.up.railway.app/tasks`
        );
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    },

    async addTask(title: string, description: string) {
      try {
        const task = await fetchWithAuth<Task>(
          `https://doit-production-72f5.up.railway.app/tasks`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description }),
          }
        );
        if (task) {
          this.tasks.push(task);
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
        const response = await fetchWithAuth(
          `https://doit-production-72f5.up.railway.app/tasks/${taskId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          }
        );
        this.fetchTasks();
        return response;
      } catch (error) {
        console.error("Erro ao atualizar a tarefa:", error);
      }
    },

    async deleteTask(taskId: number) {
      try {
        const response = await fetchWithAuth(
          `https://doit-production-72f5.up.railway.app/tasks/${taskId}`,
          {
            method: "DELETE",
          }
        );
        this.fetchTasks();
        return response;
      } catch (error) {
        console.error("Erro ao excluir a tarefa:", error);
      }
    },
  },
});
