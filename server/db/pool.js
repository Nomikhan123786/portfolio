import pg from 'pg'
import 'dotenv/config'

const { Pool } = pg

// Uses DATABASE_URL if set, otherwise falls back to PG* env vars (pg reads
// PGHOST/PGPORT/PGUSER/PGPASSWORD/PGDATABASE automatically).
export const pool = new Pool(
  process.env.DATABASE_URL ? { connectionString: process.env.DATABASE_URL } : undefined,
)

pool.on('error', (err) => {
  console.error('Unexpected PostgreSQL error on idle client', err)
})
