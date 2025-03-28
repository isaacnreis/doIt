<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTaskStore } from "~/store/tasks";

const taskStore = useTaskStore();

const newTitle = ref("");
const newDescription = ref("");

onMounted(() => {
  taskStore.fetchTasks();
});
</script>

<template>
  <div class="container mx-auto p-10">
    <form
      @submit.prevent="taskStore.addTask(newTitle, newDescription)"
      class="mb-5"
    >
      <div>
        <input
          v-model="newTitle"
          type="text"
          placeholder="Título"
          required
          class="border p-2 rounded-lg mr-2"
        />
        <input
          v-model="newDescription"
          type="text"
          placeholder="Descrição"
          required
          class="border p-2 rounded-lg"
        />
        <button
          type="submit"
          class="bg-green-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-green-700"
        >
          Adicionar Tarefa
        </button>
      </div>
    </form>
    <h1 class="text-2xl font-bold text-primary mb-5">Lista de Tarefas</h1>

    <ul v-if="taskStore.tasks.length" class="space-y-4">
      <li
        v-for="task in taskStore.tasks"
        :key="task.id"
        class="p-4 bg-gray-100 rounded-lg shadow"
      >
        <strong>{{ task.title }}</strong
        >: {{ task.description }}
      </li>
    </ul>

    <p v-else class="text-gray-500">Nenhuma tarefa cadastrada.</p>

    <NuxtLink
      to="/"
      class="mt-5 inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
    >
      Voltar para Home
    </NuxtLink>
  </div>
</template>
