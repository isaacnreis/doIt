import { defineStore } from "pinia";
import { navigateTo } from "#app";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: useCookie("token"),
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        const { data, error } = await useFetch<{ token: string }>(
          "http://localhost:5000/auth/login",
          {
            method: "POST",
            body: { email, password },
          }
        );

        if (error.value) throw new Error("Login inválido");

        if (data.value?.token) {
          this.token = data.value.token;
          localStorage.setItem("token", data.value.token);
          navigateTo("/tasks");
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
      }
    },

    async register(name: string, email: string, password: string) {
      try {
        const { data, error } = await useFetch<{ token: string }>(
          "http://localhost:5000/auth/register",
          {
            method: "POST",
            body: { name, email, password },
          }
        );

        if (error.value) throw new Error("Erro ao registrar usuário");

        if (data.value?.token) {
          this.token = data.value.token;
          localStorage.setItem("token", data.value.token);
          navigateTo("/tasks");
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
      }
    },

    logout() {
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});
