<script setup lang="ts">
import { ref } from "vue";
import { navigateTo } from "#app";
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();

const email = ref("");
const password = ref("");

const login = (email: string, password: string) => {
  authStore.login(email, password);
};

const goToRegister = () => {
  navigateTo("/register");
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold text-primary mb-5">Login</h1>

    <form
      @submit.prevent="login(email, password)"
      class="w-96 p-6 bg-white rounded-lg shadow-md"
    >
      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input
          v-model="email"
          type="email"
          required
          class="w-full p-2 border rounded-lg"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Senha</label>
        <input
          v-model="password"
          type="password"
          required
          class="w-full p-2 border rounded-lg"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Entrar
      </button>

      <p class="mt-2 text-gray-600">Não tem uma conta? Faça seu registro</p>
    </form>
    <div class="w-96 p-6">
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        @click="goToRegister"
      >
        Registrar
      </button>
    </div>
  </div>
</template>
