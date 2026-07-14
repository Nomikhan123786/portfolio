import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { pool } from './pool.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schema = readFileSync(path.join(__dirname, 'schema.sql'), 'utf8')

async function migrate() {
  try {
    await pool.query(schema)
    console.log('✓ messages table is ready')
  } catch (err) {
    console.error('Migration failed:', err.message)
    process.exitCode = 1
  } finally {
    await pool.end()
  }
}

migrate()
