import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: useCookie("token"),
  }),

  actions: {
    async login(email: string, password: string) {
      const { data, error } = await useFetch<{ token: string }>("/auth/login", {
        baseURL: "http://localhost:5000/api",
        method: "POST",
        body: { email, password },
      });

      if (error.value) throw new Error("Login inválido");

      this.token = data.value?.token;
    },

    logout() {
      this.token = null;
    },
  },
});
