// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@storyblok/nuxt',
  ],
  storyblok: {
    accessToken: process.env.STORYBLOK_KEY,
    //cacheProvider: 'memory',
  },

  nitro: {
    prerender: {
      routes: [
        '/Submissions',
        '/ContactUs'
      ]
    }
  },

})



