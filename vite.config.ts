import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    // Add the TanStack Router plugin for file-based routing
    TanStackRouterVite(),
  ],
})