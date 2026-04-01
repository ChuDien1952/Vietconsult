# Phase 05: Services Pages Redesign

**Status:** Pending | **Priority:** High | **Estimated Time:** 2-3 hours

## Overview
Redesign Services overview page and 4 service detail pages with consistent design.

## Pages to Redesign

### 1. Services Overview (`/services/page.tsx`)
- Hero section with services intro
- 4 service cards in grid:
  1. Rekrutierung & Auswahl
  2. Sprach- & kulturelle Bildung
  3. Anerkennung
  4. Relocation & Integration
- Each card links to detail page
- Bold shadow cards with icons

### 2-5. Service Detail Pages
**Pattern for all 4 pages:**
- Hero section with service name
- Process overview (steps/timeline)
- Key features/benefits list
- Image showcase
- Related services sidebar
- CTA section

**Files:**
- `/services/rekrutierung-auswahl/page.tsx`
- `/services/sprach-kulturelle-bildung/page.tsx`
- `/services/anerkennung/page.tsx`
- `/services/relocation-integration/page.tsx`

## Design Pattern
- Consistent hero sections
- Icon-based feature cards
- Process timelines (like homepage)
- Professional service imagery
- Gold CTAs

## Implementation
**Components:**
- `src/components/sections/services/services-sections.tsx` (overview)
- `src/components/sections/services/service-detail-sections.tsx` (reusable for all 4)

## Success Criteria
- [ ] Services overview with 4 service cards
- [ ] All 4 detail pages with consistent design
- [ ] Process visualizations
- [ ] Professional service images
- [ ] Related services navigation
- [ ] i18n complete for all 5 pages
