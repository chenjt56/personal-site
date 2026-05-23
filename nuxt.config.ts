export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@vercel/analytics'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },
  nitro: {
    preset: 'static',
  },
  app: {
    head: {
      title: '陈剑涛 - 前端开发工程师',
      meta: [
        { name: 'description', content: '陈剑涛的个人网站，前端开发工程师，曾任职字节跳动、华为' },
      ],
    },
  },
})
