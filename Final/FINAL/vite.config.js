import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use 'cheap-module-source-map' instead of Vite's default eval-based source maps.
// This prevents the browser CSP (which blocks unsafe-eval) from erroring in dev.
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,   // production: external .map files, no eval needed
  },
})
