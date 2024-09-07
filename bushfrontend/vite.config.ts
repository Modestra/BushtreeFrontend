import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    proxy: {
      "/api": {
        //changeOrigin: true,
        target: "http://localhost:8000",
        changeOrigin: false,
        secure: false,
      }
    }
  },
})
