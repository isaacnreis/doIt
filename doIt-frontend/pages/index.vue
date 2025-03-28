<script setup lang="ts"></script>

<template>
  <div class="text-center p-10">
    <h1 class="text-3xl font-bold text-primary">
      Bem-vindo ao Gerenciador de Tarefas
    </h1>
    <p class="mt-2 text-gray-600">Organize suas tarefas com eficiência.</p>

    <NuxtLink
      to="/tasks"
      class="mt-5 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Ver Tarefas
    </NuxtLink>
  </div>
</template>
