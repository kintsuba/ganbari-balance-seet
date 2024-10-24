// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-10-23",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@nuxt/fonts",
    "@formkit/auto-animate/nuxt",
  ],

  colorMode: {
    preference: "light",
  },

  googleFonts: {
    families: {
      "Mochiy+Pop+One": true,
    },
    display: "swap",
  },
});
