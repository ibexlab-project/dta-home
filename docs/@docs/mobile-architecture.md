# Mobile Architecture Guide (m subdomain)

## Overview
- Desktop: `/{locale}` (existing), `/[locale]/news`
- Mobile: `/m/{locale}`, `/m/{locale}/news`
- Separate mobile layout and components; data/translation reuse
- Mobile redirect: middleware detects mobile UA → `/m/{locale}{path}`

## Key Paths & Structure
```
src/
  middleware.ts                 # mobile UA redirect → /m/...
  app/
    [locale]/...                # desktop (existing)
    m/
      [locale]/layout.tsx       # mobile layout
      [locale]/page.tsx         # mobile home
      [locale]/news/page.tsx    # mobile news list
  components/
    mobile/                     # mobile-only UI
      MobileHeader.tsx
      MobileHero.tsx
      MobileStats.tsx
      MobilePartners.tsx
      MobileNewsList.tsx
      MobileCTA.tsx
  lib/
    media-cards.ts              # shared content data
    get-translations.ts         # shared i18n
```

## Mobile UI Guidelines (applied)
- App-bar 56px, logo left, News link + locale indicator right
- Container padding 16px; full-width cards
- Typography: H1 24px, body 14–16px, line-height 1.4–1.6
- Cards: rounded, border, ample touch area (≥48px height)
- Hero: gradient background, short copy, single CTA
- Stats: 3 simple cards (value + label)
- Partners: horizontal slider (peeking cards)
- News: list cards (thumbnail 16:9, title, short body), links to anchors
- CTA: single primary action, concise text

## Redirect Logic (middleware)
- Skips `_next`, `api`, static assets, files with `.`
- If path starts with `/m/` → pass through
- Mobile UA → redirect to `/m/{locale}{rest}`
- Locale detection: `/`, `/en`, `/th` default to `en`
- Note: Next.js warns middleware → proxy (future migration)

## Routes
- Desktop: `/{locale}`, `/[locale]/news`
- Mobile: `/m/{locale}`, `/m/{locale}/news`
- Anchors: `#news-{index}` shared between desktop/mobile

## Component Notes
- `MobileHeader`: minimal nav + locale indicator
- `MobileHero`: uses slide1 copy; CTA → `/m/{locale}/news`
- `MobileStats`: uses hero stats translations
- `MobilePartners`: uses 3 partner images (local)
- `MobileNewsList`: uses shared media cards (top 3)
- `MobileNewsPage`: full list, links back to desktop detail anchor
- `MobileCTA`: uses bottom CTA translations

## Domain / Deployment
- Desktop domain: `www` (existing)
- Mobile domain: `m.` (CNAME) → same Vercel project
- Optional host-based redirect: if host starts with `m.` force `/m/...`
- Current: UA-based redirect via `middleware.ts`

## Performance & Assets
- Use local images with `next/image` (object-cover), light gradients
- Prefer mobile-optimized image sizes for future optimization

## Future Improvements
- Migrate middleware → proxy per Next.js warning
- Add host-based redirect (m.*) alongside UA check
- Add bottom tab bar if navigation grows
- Add mobile-specific analytics events

