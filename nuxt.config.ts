// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Hybride rendering rules:
  routeRules: {
    '/': { ssr: true },
    '/categories': { prerender: true },
    '/categories/*': { swr: 300 },
    '/posts/*': { swr: 60 }
  }
})
