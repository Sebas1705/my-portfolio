import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sebas1705.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@domain': '/src/domain',
        '@application': '/src/application',
        '@infrastructure': '/src/infrastructure',
        '@presentation': '/src/presentation'
      }
    }
  }
});
