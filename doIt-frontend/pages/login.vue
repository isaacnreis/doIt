<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
  try {
    const { data } = await useFetch<{ token: string }>("/auth/login", {
      method: "POST",
      body: { email: email.value, password: password.value },
    });

    if (data.value?.token) {
      localStorage.setItem("token", data.value.token);
      router.push("/tasks");
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-3xl font-bold text-primary mb-5">Login</h1>

    <form
      @submit.prevent="login"
      class="w-96 p-6 bg-white rounded-lg shadow-md"
    >
      <div class="mb-4">
        <label class="block text-gray-700">E-mail</label>
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
    </form>
  </div>
</template>
