import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'aj.png', 'robots.txt'],
      manifest: {
        name: 'Ashis Jena Portfolio',
        short_name: 'AJ Portfolio',
        description: "Ashis Jena's Portfolio - Full Stack Developer",
        theme_color: '#000000',
        icons: [
          {
            src: 'aj.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'aj.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    compression()
  ],
  base: '/portfolio/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'icons': ['react-icons'],
          'i18n': ['i18next', 'react-i18next']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    reportCompressedSize: false
  },
  server: {
    port: 3000,
    strictPort: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  },
  preview: {
    port: 4173,
    strictPort: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
})
