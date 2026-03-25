# PageSpeed Optimization Agent Log

**Date**: 2026-03-25
**Project**: Red Poppy Art House (redpoppyarthouse)

## Summary

Applied 6 performance optimizations targeting LCP, bundle size, and Core Web Vitals.

## Changes Made

### 1. Homepage Server-Side Rendering (LCP fix - highest impact)

- **Before**: `app/page.tsx` was entirely a `"use client"` component. The hero heading (LCP element) required JavaScript to render, adding significant delay to first meaningful paint.
- **After**: Split into a server-rendered page (`app/page.tsx`) that imports animated sections from a new `app/components/HomeAnimations.tsx` client component. The hero section's HTML now ships in the initial server response - verified by checking the build output for "A room on a corner" in `index.html`.
- **Impact**: LCP improvement - hero text paints immediately without waiting for JS hydration.

### 2. Font Loading Optimization (bundle size reduction)

- **Before**: Loaded Playfair_Display with 5 weights (400, 500, 600, 700, 800) and Geist_Mono (unused).
- **After**: Trimmed Playfair_Display to 2 weights (400, 700) - the only weights actually used. Removed Geist_Mono entirely (only referenced in CSS theme but never used in any component).
- **Impact**: Reduced font download size by approximately 60% (3 fewer font weight files to fetch). Faster FOIT/FOUT resolution.

### 3. Navbar Optimization (reduced critical-path JS)

- **Before**: Navbar imported `framer-motion` (AnimatePresence, motion) just for mobile menu expand/collapse animation. Since Navbar is above the fold and rendered on every page, this pulled framer-motion into the critical rendering path for all pages.
- **After**: Replaced framer-motion animation with a lightweight CSS transition using `transition-[height,opacity]` and a `useRef`/`useEffect` approach for measuring content height. Removed framer-motion import entirely from Navbar.
- **Impact**: Navbar no longer pulls framer-motion into the critical bundle. The library is now only loaded for below-the-fold sections that use `whileInView` animations.

### 4. Dynamic Import for EventbriteWidget (code splitting)

- **Before**: `EventbriteWidget` was eagerly imported in `app/event/page.tsx` despite being disabled (ENABLED=false).
- **After**: Uses `next/dynamic` with `ssr: false` and a loading placeholder. Widget code only loads when the component scrolls into view and is needed.
- **Impact**: Reduced initial JS bundle for the events page.

### 5. Performance Headers (next.config.ts)

- **Before**: Minimal config with only `reactStrictMode: true`.
- **After**: Added `poweredByHeader: false`, `compress: true`, and custom headers:
  - Security headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
  - Cache headers: Static assets (JS, CSS, fonts, SVG) get `Cache-Control: public, max-age=31536000, immutable`
- **Impact**: Better caching on repeat visits, reduced payload from removing X-Powered-By header.

### 6. CSS Cleanup (minor optimization)

- Removed unused `.texture-grain` CSS class and its `::after` pseudo-element (defined but never used in any component).
- Removed unused `--font-mono` theme variable.
- **Impact**: Small reduction in CSS file size. Cleaner codebase.

## Files Modified

- `site/app/layout.tsx` - Removed Geist_Mono, trimmed Playfair weights
- `site/app/page.tsx` - Converted from "use client" to server component
- `site/app/components/HomeAnimations.tsx` - New client component for homepage animations
- `site/app/components/Navbar.tsx` - Replaced framer-motion with CSS transitions
- `site/app/event/page.tsx` - Dynamic import for EventbriteWidget
- `site/app/globals.css` - Removed unused texture-grain, font-mono
- `site/next.config.ts` - Added performance headers and caching

## Build Verification

- Build completes successfully with no TypeScript errors
- All pages remain static or dynamic as expected
- Hero text confirmed present in server-rendered HTML output
