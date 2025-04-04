// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from "@primeuix/themes/lara";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
  ],

  css: ["primeicons/primeicons.css"],

  primevue: {
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Lara,
        options: {
          prefix: "p",
          darkModeSelector: false || "none",
          cssLayer: false,
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE ||
        "https://doit-production-72f5.up.railway.app/",
    },
  },

  compatibilityDate: "2025-04-03",
});
