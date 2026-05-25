import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],

  build: {
    sourcemap: true, // production: external .map files, no eval needed
  },

  server: {
    // In dev, override CSP via HTTP header so React Refresh HMR (which uses eval)
    // is not blocked. The strict meta-tag CSP in index.html applies to production builds.
    headers: {
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-eval' https://cdn.jsdelivr.net",
        "style-src 'self' https://cdn.jsdelivr.net https://fonts.googleapis.com 'unsafe-inline'",
        "connect-src 'self' https://bzqndrqhxilexwisvyme.supabase.co wss://bzqndrqhxilexwisvyme.supabase.co ws://localhost:* http://localhost:*",
        "img-src 'self' data: blob:",
        "font-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ].join('; '),
    },
  },
}))
