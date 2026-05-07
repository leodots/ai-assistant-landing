# AI Assistente Landing

## Current status — 2026-05-03

- Landing is a standalone Next.js app in this repository, intended for Vercel hosting separate from the Phoenix operational app.
- Production build is passing with `npm run build`.
- Vercel should use the default Next.js preset with `npm run build` and no required environment variables.
- CTA routing now points to the Phoenix operational app: login uses `https://app.aiassistente.com.br/login`, signup/workspace CTAs use `https://app.aiassistente.com.br/auth/google`, and sales CTAs use `mailto:contato@aiassistente.com.br`.
- `vercel.json` includes safety redirects so direct visits to `/login`, `/signup`, `/auth/google`, and `/app/:path*` on the landing domain are routed to the Phoenix app domain instead of showing a Vercel 404.
- Security/maintenance audit on 2026-05-03 found `npm audit --omit=dev` reporting a critical advisory through `next@15.1.11` and a moderate advisory through transitive `postcss`; update Next.js to a patched version and re-run the Vercel build before sending paid traffic.
- Dependabot is configured through `.github/dependabot.yml` for npm dependencies, scheduled weekly in `America/Sao_Paulo` with minor/patch npm updates grouped to reduce PR noise. Add a `github-actions` Dependabot entry when CI workflows exist.

## Near-term priorities

- Upgrade audited frontend dependencies, especially Next.js/PostCSS, and confirm `npm audit --omit=dev` plus `npm run build` pass cleanly.
- Configure the Vercel project from `github.com/leodots/ai-assistant-landing`.
- Set the production domain once chosen and update `metadataBase` in `app/layout.tsx` if the final domain is not `https://aiassistente.com.br`.
- Confirm the contact inbox for `contato@aiassistente.com.br` before sending paid traffic to the sales CTA, or replace it with the final CRM/WhatsApp/contact flow.
