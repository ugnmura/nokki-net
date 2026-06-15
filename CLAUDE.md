# Nokki no Mori — ノッキの森

Static Next.js site for **nokki.net** — a creative studio by Akashi Matsumura based in Nagareyama, Chiba, Japan. Focus: digital illustration, self-publishing, 3D design for Japan/EU markets.

Built with **Next.js 15 App Router** and exported as a static site (`output: 'export'`) for GitHub Pages.

## Files

| Path | Description |
|---|---|
| `app/layout.tsx` | Root layout, fonts, `<head>` |
| `app/page.tsx` | Single page — all sections (hero, summary, infra, roadmap, contact) |
| `app/globals.css` | All styles (palette, typography, layout) |
| `app/icon.svg` | Favicon (auto-picked up by Next.js) |
| `public/image.webp` | Hero illustration (full forest scene) |
| `public/image2.webp` / `image2.png` | Forest kitchen illustration (cooking characters) |
| `public/image3.webp` | Cabin door illustration — full-width strip before contact |
| `public/CNAME` | `nokki.net` — copied into the build for GitHub Pages |
| `next.config.mjs` | `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true` |
| `.github/workflows/deploy.yml` | Build with `next build` and deploy `out/` to GitHub Pages |

The 47MB `image.png` and 31MB `image3.png` originals are gitignored. Re-generate WebPs with:
```bash
cwebp -q 82 image.png -o public/image.webp
```

## Local dev

```bash
bun install
bun run dev
# open http://localhost:3000
```

Production build (writes static site to `out/`):
```bash
bun run build
```

Preview the production build:
```bash
bunx serve out
```

## Deploy — GitHub Pages → nokki.net

CI builds and deploys automatically on push to `main` via `.github/workflows/deploy.yml`.

One-time setup on GitHub:
1. Settings → Pages → Source: **GitHub Actions**
2. Add custom domain `nokki.net` (CNAME file in `public/` keeps this set)
3. DNS records at registrar:
   - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `<github-username>.github.io`

## Design system

- **Palette:** cream `#F4F1EA`, warm cream `#F9EEE6`, ink `#38352F`, sage `#ABA87C`, peach `#C89070`
- **Fonts:** Cormorant Garamond (display), Inter (body), Noto Serif JP (Japanese)
- **Style:** Japanese minimalism — hairline borders, wide letter-spacing, no shadows

## Sections (in order)

1. Hero — full landscape illustration + title
2. Company Profile — executive summary table
3. Studio Setup — 2×2 infrastructure grid
4. Roadmap — 4-milestone timeline
5. Cabin Door — full-width dark illustration strip
6. Contact — dark section with details
