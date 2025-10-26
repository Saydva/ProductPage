import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ProductPage/', // Zmeňte na názov vášho GitHub repozitára
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api', 'import'],
        quietDeps: true,
        charset: false,
      },
    },
  },
});
