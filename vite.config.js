import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/webgl-video/', // Deve corresponder ao caminho após o domínio no campo "homepage"
  plugins: [react()],
})
