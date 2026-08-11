import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração mínima — build estático puro, sem SSR, sem plugins
// específicos de Netlify ou TanStack Start. Funciona em qualquer
// hospedagem de arquivos estáticos (Vercel, Netlify, Cloudflare Pages).
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
