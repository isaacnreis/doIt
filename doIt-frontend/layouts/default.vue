<script setup>
import Toast from "primevue/toast";
</script>

<template>
  <div>
    <header class="bg-gray-800 text-white p-4 flex justify-between">
      <div>doIt</div>
      <nav class="flex justify-between">
        <NuxtLink to="/" class="ml-5">Home</NuxtLink>
        <NuxtLink to="/tasks" class="ml-5">Tarefas</NuxtLink>
        <NuxtLink to="/login" class="ml-5">Login</NuxtLink>
      </nav>
    </header>

    <main class="container mx-auto p-6">
      <Toast />
      <slot />
    </main>
  </div>
</template>
