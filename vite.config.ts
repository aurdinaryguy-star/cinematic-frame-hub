// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // IMPORTANT: this must match your repo name
  /: '/cinematic-frame-hub/',
  plugins: [react()],
})
