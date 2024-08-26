// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  pages: true,
  // devtools: { enabled: true },
  css: ['~/assets/styles/base.scss', '~/assets/styles/index.scss'],
  spaLoadingTemplate: false
})
