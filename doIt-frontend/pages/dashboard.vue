<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTaskStore } from "@/store/tasks";

const taskStore = useTaskStore();
const newTask = ref({ title: "", description: "" });

const addTask = async () => {
  await taskStore.addTask(newTask.value.title, newTask.value.description);
  newTask.value = { title: "", description: "" };
};

onMounted(() => {
  taskStore.fetchTasks();
});
</script>

<template>
  <div>
    <h1>Dashboard</h1>

    <input v-model="newTask.title" placeholder="Título" />
    <input v-model="newTask.description" placeholder="Descrição" />
    <button @click="addTask">Adicionar</button>

    <ul>
      <li v-for="task in taskStore.tasks" :key="task.id">
        {{ task.title }} - {{ task.description }}
      </li>
    </ul>
  </div>
</template>
