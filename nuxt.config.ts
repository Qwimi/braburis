// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  target: 'static',
  router: {
    base: '/braburis/'
  },
  pages: true,
  css: ['~/assets/styles/base.scss', '~/assets/styles/index.scss'],
  spaLoadingTemplate: false,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  modules: [[
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
    }],
    'nuxt-swiper'
  ],

  imports: {
    dirs: ['stores']
  }
})