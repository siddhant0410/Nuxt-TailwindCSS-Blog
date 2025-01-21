// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //Environment variables like API_KEY
  compatibilityDate: '2024-11-01',
  
  css: ['~/assets/css/main.css'],
  nitro: {
    serveStatic: true, // Ensure static files are served during SSR
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      itemsPerPage: 3, // Define the pages value here
    },
  },

})
