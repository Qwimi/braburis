export default defineNuxtConfig({
  ssr: false,

  app: {
    baseURL: '/braburis/',
    buildAssetsDir: 'assets',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  css: [
    '~/assets/styles/base.scss',
    '~/assets/styles/index.scss'
  ],

  modules: ['nuxt-swiper', "@nuxt/image"],

  compatibilityDate: '2026-01-20'
})