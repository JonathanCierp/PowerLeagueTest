import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

const optionsPWA = {
  // includeAssets: ['favicon.svg'],
  // manifest: {
  //   name: 'Boo',
  //   short_name: 'Boo',
  //   theme_color: '#ffffff',
  //   id: '/',
  //   start_url: '/',
  //   scope: '/',
  //   icons: [
  //     {
  //       src: '/pwa-192x192.png', // <== don't add slash, for testing
  //       sizes: '192x192',
  //       type: 'image/png',
  //     },
  //     {
  //       src: '/pwa-512x512.png', // <== don't remove slash, for testing
  //       sizes: '512x512',
  //       type: 'image/png',
  //     },
  //   ],
  // },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(optionsPWA)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
