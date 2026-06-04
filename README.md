# The Red Cow, Chesterton

Reference doc for the Red Cow website build.

**Client:** Anthony Parry  
**Developer:** Jack Rockell (`jack@shiftaitech.com`)  
**Live site:** https://theredcowchesterton.co.uk  
**GitHub:** https://github.com/EagleAIbot/red-cow-chesterton  
**Local path:** `red-cow/`

---

## What it is

Standalone static village pub website. Replaced the old Wix site. No backend, no CMS. GitHub Pages + custom domain.

---

## Stack

| Layer | Tech |
|-------|------|
| Markup | Single `index.html` (all sections) |
| Styles | `styles.css` — forest green, cream, cognac aesthetic |
| JS | `script.js` — nav, menu tabs, scroll reveals, social config |
| Fonts | Fraunces (display) + Inter (body) |
| Hosting | GitHub Pages |
| Domain | `CNAME` → `theredcowchesterton.co.uk` |

---

## Site sections

| Section | Anchor | Notes |
|---------|--------|-------|
| Nav | `#nav` | Logo, links, phone CTA, mobile burger |
| Hero | `#top` | Full-bleed image, CTAs, scrolling marquee |
| Our Story | `#about` | Vintage hero photo + pillars |
| Gallery | `#gallery` | Carousel of pub interior/exterior photos (`assets/img/gallery/`) |
| What's On | `#events` | Coffee afternoon, burger night, quiz night |
| Menu | `#menu` | Tabbed: Dinner · Burger Night · Sunday · Children · Dessert & Drinks |
| The Bar | `#bar` | Real ales, wine, spirits |
| Visit | `#visit` | Google Maps embed, opening hours, social links |
| Contact | `#contact` | Form stub (not wired to backend yet) |
| Social | `#social` | Facebook + Instagram cards |
| Footer | — | Logo, address, links |

---

## What's On

**Coffee Afternoon** — Every Wednesday from 12pm, usually done by 1.30pm. Cafetières and teapots, help-yourself cake, biscuits, sugar and milk. Coffee and tea £3.50 (regular or decaf). Cake and biscuits free. Photo: `assets/img/coffee-afternoon.jpg` (displayed flipped 180°).

**Burger Night** — Every Thursday. Photo: `assets/img/gallery/burger-night.jpg`. Links to `#menu` burgers tab.

**Quiz Night** — 3rd Tuesday of every month, 8pm. Interactive games, trivia, music round, bonus money round. Teams of up to 4. £2 per person. Booking essential. Poster: `assets/img/quiz-poster.png`.

**Private hire** — Mon/Tue closed to public; private events available. Call 01869 932495.

---

## Opening hours

| Day | Hours |
|-----|-------|
| Mon | Closed (private events) |
| Tue | Closed (private events) |
| Wed | 12–3, 6–10 · food 12–2, 6–8.30 |
| Thu | 12–3, 6–10 · food 12–2, 6–8.30 · burger night |
| Fri | 12–3, 5–11 · food 12–2, 5–8.30 |
| Sat | 12pm – 11pm · food 12pm – 8.30pm |
| Sun | 12pm – 10pm · food 12pm – 4pm |

---

## Social links

Configured in `script.js` → `SOCIAL` object:

- **Facebook:** https://www.facebook.com/people/The-RED-COW/61564161263680/
- **Instagram:** https://www.instagram.com/redcowchesterton/ (`@redcowchesterton`)
- **Instagram embed:** Paste SnapWidget/Behold URL into `instagramEmbedSrc` when ready for live feed

---

## Assets (`assets/img/`)

| File | Use |
|------|-----|
| `logo.png` | Nav + footer (Anthony's TRC logo) |
| `hero.jpg` | About section vintage photo |
| `pub-1.jpg` | Hero background, OG image |
| `pub-2.jpg` | Bar section, Facebook social card bg |
| `coffee-afternoon.jpg` | What's On + Instagram social card bg |
| `quiz-poster.png` | What's On quiz card |
| `extra.jpg` | Spare |
| `gallery/pub-01.jpg` … `pub-08.jpg` | Gallery carousel |
| `gallery/burger-night.jpg` | Burger night card |
| `pub-video.mov` | Walkthrough video under gallery (`PUB_VIDEO` in `script.js`) |

**Dropbox photos:** https://www.dropbox.com/scl/fo/hbrq2dq8rn9tlwnsbv5gx/ADMq3v4YsV_za7zGw5ryZi8?rlkey=9xk7gxagkjt7rrn7kushgdake — Dropbox stars are not visible without login; ask Anthony for starred filenames to swap into `gallery/`.

---

## Run locally

```bash
cd "red-cow"
python3 -m http.server 8080
# → http://localhost:8080
```

---

## Deploy

```bash
cd "red-cow"
git add -A
git commit -m "Your message"
git push origin main
```

GitHub Pages auto-deploys from `main`. SSL enforced.

---

## Pending / TODO

- [ ] Wire contact form (Formspree or similar)
- [x] Pub walkthrough video (`pub-video.mov` from Dropbox)
- [ ] Swap gallery images if Anthony sends starred filenames
- [ ] Instagram live feed embed when SnapWidget/Behold URL ready
- [ ] Facebook Meta embed when page is fully public

---

## Pricing context

Light refresh quoted at **£400**. Tiers discussed: £400 / £750 / £1,200–1,500.

---

*Last updated: June 2026*
