# Noman Nawaz — Portfolio (React + Vite + Tailwind v4 + Express + PostgreSQL)

One project, one `npm install`, one `npm run dev` — frontend and the contact-form API
live together in this repo.

## Setup

```bash
npm install
cp .env.example .env
```

### Get a Postgres database running

**Option A — Docker (easiest):**
```bash
docker compose up -d
```
Starts Postgres on `localhost:5432` with the credentials already in `.env.example`.

**Option B — a managed Postgres** (Render, Railway, Supabase, Neon, etc.): create a
database there and paste its connection string into `DATABASE_URL` in `.env`.

### Create the messages table

```bash
npm run migrate
```

### Run everything

```bash
npm run dev
```

This runs the Vite dev server (`http://localhost:5173`) **and** the Express API
(`http://localhost:5000`) together, in the same terminal, via `concurrently`. Vite
proxies any `/api/*` request to the Express server, so the contact form just calls
`/api/contact` — no separate origin or CORS config needed in dev.

## Production build

```bash
npm run build   # builds the React app into dist/
npm start        # runs Express, which now also serves dist/ as static files
```

One process, one port — the same Express server serves the built site *and* the API
in production.

## Project structure

```
src/                     React app (see below)
server/
  index.js                Express entry point — API routes + (in production) serves dist/
  routes/contact.js       POST /api/contact (save a message) + GET /api/contact (list)
  db/
    pool.js                 PostgreSQL connection (pg)
    schema.sql               messages table definition
    migrate.js                run with `npm run migrate` to (re)create the table
docker-compose.yml       Local Postgres for development
public/resume.pdf        Replace with your real CV — see below

src/
  index.css              Tailwind v4 import + @theme tokens + light/dark theme variables
  App.jsx                Routing (react-router-dom Routes/Route) + page layout
  main.jsx                React entry point, wraps App in BrowserRouter
  hooks/
    useTheme.js           Dark/light mode toggle hook (persists to localStorage)
  components/
    BackgroundDecor.jsx   Fixed grid + glow background layers
    Nav.jsx                Sticky nav — internal links use react-router `Link`,
                            includes the dark/light toggle button
                            (custom `nav` breakpoint = 860px)
    Hero.jsx                Hero + typing-effect terminal card
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Education.jsx
    Contact.jsx             Contact form, posts to /api/contact
    Footer.jsx
    FadeUp.jsx              Reusable scroll-reveal wrapper (IntersectionObserver hook)
```

## API endpoints

| Method | Path            | Description                                    |
|--------|-----------------|---------------------------------------------------|
| POST   | `/api/contact`  | Body: `{ name, email, message }` — saves a row  |
| GET    | `/api/contact`  | Returns all messages, newest first (⚠️ no auth) |
| GET    | `/api/health`   | Health check                                    |

## Routing

`react-router-dom` is wired in via `BrowserRouter` (in `main.jsx`) and `Routes`/`Route`
(in `App.jsx`). The site is still a single page, so there's one route (`/`) — internal
nav links (`About`, `Skills`, etc.) use `<Link to="/#section">` instead of raw `<a>` tags.
External links (email, GitHub, LinkedIn, résumé) stay as native `<a>` tags since they
leave the app.

## Dark mode

Default theme is dark (matching the original design). Toggle with the sun/moon button
in the nav — it flips a `.dark` class on `<html>` and persists the choice to
`localStorage`. Both themes are defined as CSS custom properties in `src/index.css`
under `:root` (light) and `.dark` (dark), so all existing utility classes
(`bg-bg`, `text-ink`, `bg-panel`, `border-border`, etc.) respond automatically —
no per-component `dark:` classes needed.

## Résumé download

The "Download résumé" buttons (Hero + Contact) point to `/resume.pdf`. Vite/Express
serve anything in `public/` at the site root untouched, so:

1. Drop your real CV in `public/resume.pdf` (replacing the placeholder that's there now).
2. That's it — no code changes needed. The file downloads as `Noman-Nawaz-Resume.pdf`.

## Deploying

- Deploy this whole repo to any Node host (Render, Railway, Fly.io, etc.) — build
  command `npm run build`, start command `npm start`.
- Set `DATABASE_URL` as an environment variable there.
- Run `npm run migrate` once against the production database (or as a one-off release
  command on your host).

## Before going to production

- `GET /api/contact` currently has no authentication — anyone with the URL can read all
  submitted messages. Add an auth check (API key, JWT, session) before deploying publicly,
  or remove the route if you don't need to read messages via the API.
- Add rate limiting (e.g. `express-rate-limit`) to `/api/contact` to prevent spam.
