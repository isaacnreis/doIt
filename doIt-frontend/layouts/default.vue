<script setup lang="ts">
import { Toast } from "primevue";
</script>

<template>
  <div>
    <header class="bg-gray-800 text-white p-4">
      <nav class="container mx-auto flex justify-between">
        <NuxtLink to="/" class="font-bold text-lg">Home</NuxtLink>
        <NuxtLink to="/tasks" class="ml-4">Tarefas</NuxtLink>
        <NuxtLink to="/login" class="ml-4">Login</NuxtLink>
      </nav>
    </header>

    <main class="container mx-auto p-6">
      <Toast />
      <slot />
    </main>
  </div>
</template>
