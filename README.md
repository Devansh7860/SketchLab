# SketchLab

A real-time collaborative whiteboard. Excalidraw-inspired, but built from scratch.

Multiple people can draw, write, and think on the same canvas — live cursors, live edits, zero lag (well, almost).

## What it does

- **Real-time canvas** — rectangles, ellipses, sticky notes, freehand drawing, text. The basics, done well.
- **Live collaboration** — see other people's cursors, selections, and edits as they happen. No refresh needed.
- **Organizations & boards** — create teams, manage boards, favorite the ones you care about.
- **Auth that works** — sign in, sign up, protected routes. If you're not logged in, you're not getting in.
- **Search & filter** — find boards by name, filter favorites. Because scrolling through 47 boards isn't fun.

## Tech

| What | Why |
|---|---|
| **Next.js 16** (App Router) | Because pages router is 2023 |
| **React 19** | Concurrent features, `use()` hook |
| **Convex** | Backend, database, real-time subscriptions — no REST endpoints to babysit |
| **Clerk** | Auth. Handles the OAuth pain so I don't have to |
| **Liveblocks** | Real-time presence & storage for the canvas |
| **Tailwind CSS v4** | Styling without crying |
| **shadcn/ui** | Components that look good out of the box |
| **Zustand** | State management that doesn't make you write 200 lines of boilerplate |

## Running locally

```bash
# install deps
npm install

# you need these env vars in .env
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
LIVEBLOCKS_SECRET_KEY=

# start convex (in a separate terminal)
npx convex dev

# start the app
npm run dev
```

Open `localhost:3000`. Landing page is at `/`, dashboard is at `/dashboard`.

## Project structure

```
app/
  (landing)/        → public landing page at /
  dashboard/        → authenticated dashboard
  board/[boardId]/  → canvas editor (the fun part)
  sign-in/          → clerk sign-in page
  sign-up/          → clerk sign-up page
  api/              → liveblocks auth endpoint
convex/             → backend functions, schema, auth config
components/         → shared ui components
providers/          → convex + clerk provider setup
hooks/              → custom hooks (mutations, selection bounds, etc.)
types/              → canvas types (layers, colors, tools)
```

## Deployment

Build script auto-deploys Convex functions:

```bash
npm run build  # runs: npx convex deploy --cmd 'next build'
```

Deploy to Vercel, set your env vars there, and you're live.

## License

Do whatever you want with it. Seriously.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
