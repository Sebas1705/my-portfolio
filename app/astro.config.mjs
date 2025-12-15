import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.amksandbox.cloud/',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    plugins: [tailwindcss()],
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
