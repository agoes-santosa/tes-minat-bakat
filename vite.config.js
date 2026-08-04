import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project page: https://agoes-santosa.github.io/tes-minat-bakat/
export default defineConfig({
  base: '/tes-minat-bakat/',
  plugins: [react()],
})
