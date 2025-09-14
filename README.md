## Description

Discover and browse iTunes podcast catalogues with a modern web UI. This monorepo contains a Next.js frontend and a NestJS backend that fetches data from the iTunes Search API and persists results in PostgreSQL via Prisma.

Built with Next.js, NestJS, Prisma, PostgreSQL, Tailwind CSS.

## Website Preview

![WebsiteShowcase](frontend/assets/screenshott.png)

**Key Features**

- Search iTunes for podcasts by term
- Store results in PostgreSQL for faster subsequent access
- Clean, responsive UI with Tailwind CSS

**Tech Stack**

- Frontend: Next.js 15, React 19, Tailwind CSS 4
- Backend: NestJS 11, Prisma 6, PostgreSQL
- Tooling: TypeScript, Jest

## Quick Start

Prerequisites

- Node.js 18+ and npm
- PostgreSQL 13+

### 1) Backend setup

```
cd backend
npm install

# Create .env
# Example:
# DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public"
# PORT=3000

# Apply Prisma migrations (creates tables)
npx prisma migrate dev

# Generate Prisma Client (usually done by migrate, but safe to run)
npm run prisma:generate

# Start the API (watch mode)
npm run start:dev
```

### 2) Frontend setup

```
cd frontend
npm install
npm run dev
```
