// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import url('https://fonts.googleapis.com/css2?family=Charis+SIL&display=swap');
            `,
          },
        },
      },
    },
    modules: [
      'nuxt-icon',
      '@element-plus/nuxt',
    ],
    elementPlus: { /** Options */ }
})
