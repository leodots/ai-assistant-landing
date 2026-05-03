# AI Assistente Landing

## Current status — 2026-05-03

- Landing is a standalone Next.js app in this repository, intended for Vercel hosting separate from the Phoenix operational app.
- Production build is passing with `npm run build`.
- Vercel should use the default Next.js preset with `npm run build` and no required environment variables.
- CTA routing still needs a product decision before public launch: current links point to internal paths like `/login`, `/signup`, and `/contato`; these should point to the Phoenix app URL or a real lead/contact flow.

## Near-term priorities

- Configure the Vercel project from `github.com/leodots/ai-assistant-landing`.
- Set the production domain once chosen and update `metadataBase` in `app/layout.tsx` if the final domain is not `https://aiassistente.com.br`.
- Replace placeholder CTA links with final destinations before paid traffic or customer demos.
