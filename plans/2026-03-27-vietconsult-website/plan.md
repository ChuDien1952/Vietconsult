# VIETconsult Website Implementation Plan

## Overview
**Date:** 2026-03-27
**Project:** VIETconsult Corporate Website
**Stack:** Next.js 14+ App Router, TypeScript, Tailwind CSS, Framer Motion, next-intl
**Languages:** DE (primary), EN, VI

## Context
- [Project Specification](../../CLAUDE.md)
- [Development Rules](C:\Users\Admin\.claude\workflows\development-rules.md)

## Phase Status

| # | Phase | Status | Est. Hours |
|---|-------|--------|------------|
| 01 | [Project Setup & Configuration](./phase-01-project-setup.md) | pending | 4h |
| 02 | [Core Components & Design System](./phase-02-core-components.md) | pending | 8h |
| 03 | [i18n Setup & Translations](./phase-03-i18n-setup.md) | pending | 6h |
| 04 | [Global Layout](./phase-04-global-layout.md) | pending | 6h |
| 05 | [Homepage Implementation](./phase-05-homepage.md) | pending | 16h |
| 06 | [About Us Page](./phase-06-about-page.md) | pending | 6h |
| 07 | [Partner Page](./phase-07-partner-page.md) | pending | 4h |
| 08 | [Services Pages](./phase-08-services-pages.md) | pending | 10h |
| 09 | [Contact Page](./phase-09-contact-page.md) | pending | 6h |
| 10 | [Visual Assets](./phase-10-visual-assets.md) | pending | 8h |
| 11 | [Testing & Optimization](./phase-11-testing-optimization.md) | pending | 8h |
| 12 | [Documentation](./phase-12-documentation.md) | pending | 4h |

**Total Estimated:** ~86 hours

## Critical Path
1. Phase 01 (setup) -> Phase 02 (components) -> Phase 03 (i18n) -> Phase 04 (layout)
2. Phase 05-09 can run in parallel after Phase 04
3. Phase 10-12 finalize project

## Key Decisions
- **i18n:** next-intl (simpler than next-i18next for App Router)
- **UI:** shadcn/ui + Radix primitives
- **Animations:** Framer Motion with scroll-triggered variants
- **Icons:** Lucide React

## Dependencies
```json
{
  "next": "^14.2.0",
  "react": "^18.2.0",
  "typescript": "^5.4.0",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^11.0.0",
  "next-intl": "^3.11.0",
  "lucide-react": "^0.356.0",
  "@radix-ui/react-*": "latest"
}
```

## Notes
- Mobile-first approach per CLAUDE.md
- Reference design: talentscare.de
- Performance target: Lighthouse >90
