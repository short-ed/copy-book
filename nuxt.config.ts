// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxthq/studio',
    '@nuxt/content',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
})
