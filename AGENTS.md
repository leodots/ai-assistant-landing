# AI Assistente Landing

## Current status — 2026-05-03

- Landing is a standalone Next.js app in this repository, intended for Vercel hosting separate from the Phoenix operational app.
- Production build is passing with `npm run build`.
- Vercel should use the default Next.js preset with `npm run build` and no required environment variables.
- CTA routing now points to the Phoenix operational app: login uses `https://app.aiassistente.com.br/login`, signup/workspace CTAs use `https://app.aiassistente.com.br/auth/google`, and sales CTAs use `mailto:contato@aiassistente.com.br`.
- `vercel.json` includes safety redirects so direct visits to `/login`, `/signup`, `/auth/google`, and `/app/:path*` on the landing domain are routed to the Phoenix app domain instead of showing a Vercel 404.
- Security/maintenance audit on 2026-05-03 found `npm audit --omit=dev` reporting a critical advisory through `next@15.1.11` and a moderate advisory through transitive `postcss`; update Next.js to a patched version and re-run the Vercel build before sending paid traffic.
- Dependabot is configured through `.github/dependabot.yml` for npm dependencies, scheduled weekly in `America/Sao_Paulo` with minor/patch npm updates grouped to reduce PR noise. Add a `github-actions` Dependabot entry when CI workflows exist.
- Dependabot PR #6 (`typescript-6.0.3`) exposed TypeScript 6's stricter side-effect import typing for `app/globals.css` and its new `baseUrl` deprecation error. `global.d.ts` now declares CSS module imports and `tsconfig.json` sets `ignoreDeprecations: "6.0"` so Next/Vercel type checking can compile the existing app structure. A follow-up patch updated Next to `15.5.16` and forces transitive `postcss` to `8.5.13`, leaving `npm run build` and `npm audit --omit=dev` clean.

## Near-term priorities

- Keep audited frontend dependencies current through Dependabot and confirm `npm audit --omit=dev` plus `npm run build` before sending paid traffic.
- Configure the Vercel project from `github.com/leodots/ai-assistant-landing`.
- Set the production domain once chosen and update `metadataBase` in `app/layout.tsx` if the final domain is not `https://aiassistente.com.br`.
- Confirm the contact inbox for `contato@aiassistente.com.br` before sending paid traffic to the sales CTA, or replace it with the final CRM/WhatsApp/contact flow.
