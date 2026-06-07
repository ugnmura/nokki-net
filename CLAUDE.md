# Nokki no Mori — ノッキの森

Static HTML website for **nokki.net** — a creative studio by Akashi Matsumura based in Nagareyama, Chiba, Japan. Focus: digital illustration, self-publishing, 3D design for Japan/EU markets.

## Files

| File | Description |
|---|---|
| `index.html` | Single-file site — all CSS inline, no build step |
| `image.webp` | Hero illustration (full forest scene, 2.7MB) |
| `image2.webp` / `image2.png` | Forest kitchen illustration (cooking characters) |
| `image3.webp` | Cabin door illustration — full-width strip before contact |

The 47MB `image.png` and 31MB `image3.png` originals are gitignored. Re-generate WebPs with:
```bash
cwebp -q 82 image.png -o image.webp
```

## Local dev

```bash
python3 -m http.server 8743
# open http://localhost:8743
```

Share publicly with:
```bash
ngrok http 8743
```

## Deploy — GitHub Pages → nokki.net

1. Push to `main` on GitHub (`nokki-net` repo)
2. Settings → Pages → Source: Deploy from branch `main` / `/ (root)`
3. Add custom domain `nokki.net` in Pages settings
4. DNS records at your registrar:
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
