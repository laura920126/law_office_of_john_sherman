import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { readFileSync, existsSync } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Serve /admin as static files (for Decap CMS)
    {
      name: 'serve-admin',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/admin')) {
            let filePath = req.url
            if (filePath === '/admin' || filePath === '/admin/') {
              filePath = '/admin/index.html'
            }
            const fullPath = resolve(__dirname, 'public' + filePath)
            if (existsSync(fullPath)) {
              const content = readFileSync(fullPath)
              const ext = filePath.split('.').pop()
              const mimeTypes = {
                html: 'text/html',
                yml: 'text/yaml',
                yaml: 'text/yaml',
                js: 'application/javascript',
                css: 'text/css',
              }
              res.setHeader('Content-Type', mimeTypes[ext] || 'text/plain')
              res.end(content)
              return
            }
          }
          next()
        })
      },
    },
  ],
})
