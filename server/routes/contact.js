import { Router } from 'express'
import { pool } from '../db/pool.js'

const router = Router()

// POST /api/contact — save a message from the portfolio contact form
router.post('/', async (req, res) => {
  const { name, email, message } = req.body ?? {}

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'name, email, and message are all required.' })
  }

  try {
    const result = await pool.query(
      `INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING id, created_at`,
      [name.trim(), email.trim(), message.trim()],
    )
    return res.status(201).json({ ok: true, id: result.rows[0].id })
  } catch (err) {
    console.error('Failed to save message:', err.message)
    return res.status(500).json({ error: 'Something went wrong saving your message.' })
  }
})

// GET /api/contact — list saved messages (newest first)
// ⚠️ Unprotected for now — add auth before deploying this publicly.
router.get('/', async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, name, email, message, created_at FROM messages ORDER BY created_at DESC`,
    )
    return res.json(result.rows)
  } catch (err) {
    console.error('Failed to fetch messages:', err.message)
    return res.status(500).json({ error: 'Something went wrong fetching messages.' })
  }
})

export default router
