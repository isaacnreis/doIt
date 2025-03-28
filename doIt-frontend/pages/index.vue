<script setup lang="ts"></script>

<template>
  <div class="text-center p-10">
    <h1 class="text-3xl font-bold text-primary">
      Bem-vindo ao Gerenciador de Tarefas
    </h1>
    <p class="mt-2 text-gray-600">Organize suas tarefas com eficiência.</p>

    <div class="text-center p-2">
      <NuxtLink
        to="/login"
        class="mt-5 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Faça login com seu usuário
      </NuxtLink>
    </div>
    <div class="text-center p-2">
      <NuxtLink
        to="/register"
        class="mt-5 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Ou Registre um novo usuário
      </NuxtLink>
    </div>
  </div>
</template>
