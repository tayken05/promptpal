# PromptPal (MVP)

Write in plain language → get a professional AI prompt back with **dynamic examples** automatically included.

## What it does
- Turns a user’s plain instruction into a 6-part prompt:
  1) Role
  2) Context
  3) Task
  4) Constraints
  5) Output format
  6) Examples (generated fresh every time)

## MVP scope
- Input → output loop (one page)
- Dynamic examples (always on)
- Coach panel (explains why the rewrite is stronger)
- Iteration controls (tone, platform, length)
- Copy to clipboard
- Simple responsive UI
- No accounts (Pro later with history, integrations, multilingual)
- Light analytics later

## Tech
- Next.js (App Router) + TypeScript
- Tailwind CSS
- API route to an AI provider (OpenAI first)

## Dev
- Start: `npm run dev` → http://localhost:3000
- Composer page lives at `/composer`
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
