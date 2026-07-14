import express from 'express'
import cors from 'cors'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import 'dotenv/config'
import contactRouter from './routes/contact.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 5000
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'
const isProd = process.env.NODE_ENV === 'production'

// In dev, Vite runs on its own port and proxies /api here (see vite.config.js),
// so CORS only matters if you ever call this API from a different origin.
app.use(cors({ origin: CLIENT_ORIGIN.split(',').map((o) => o.trim()) }))
app.use(express.json())

app.get('/api/health', (_req, res) => res.json({ ok: true }))
app.use('/api/contact', contactRouter)

// Forces an actual "Save As" download instead of opening in the browser's
// built-in PDF viewer (which is what was happening with a plain <a href> +
// download attribute — some browsers ignore that attribute for PDFs and
// open them inline instead).
app.get('/api/resume', (_req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'resume.pdf')
  res.download(filePath, 'Noman-Nawaz-Resume.pdf', (err) => {
    if (err && !res.headersSent) {
      res.status(404).json({ error: 'Resume file not found on the server.' })
    }
  })
})

if (isProd) {
  // Serve the built frontend (npm run build -> dist/) from this same server,
  // so one process handles both the site and the API in production.
  const distPath = path.join(__dirname, '..', 'dist')
  app.use(express.static(distPath))
  app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')))
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}${isProd ? ' (serving built frontend + API)' : ' (API only — Vite dev server handles the frontend)'}`)
})
