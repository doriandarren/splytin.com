// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  i18n: {
      locales: ['es', 'en'],
      defaultLocale: 'es',
      routing: { prefixDefaultLocale: false }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  //Variables Entorno
  env: {
    schema: {
      SITE_NAME: envField.string({ 
        context: "client", 
        access: "public", 
        optional: true, 
        default: "WebSite",
      }),
    }
  }
});