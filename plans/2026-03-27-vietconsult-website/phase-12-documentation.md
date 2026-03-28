# Phase 12: Documentation

## Context
- [Project Specification](../../CLAUDE.md)
- [Plan Overview](./plan.md)
- [Previous Phase](./phase-11-testing-optimization.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | Medium |
| Status | pending |
| Est. Hours | 4 |
| Dependencies | Phase 01-11 |

## Key Insights
- Documentation needed for future maintenance
- Client handoff documentation required
- Developer onboarding guide essential
- Content management instructions for translations

## Requirements
1. Update README.md with project overview
2. Create docs folder structure
3. Developer onboarding guide
4. Content/translation management guide
5. Deployment documentation
6. Component documentation

## Architecture Decisions

### Documentation Structure
```
/docs
├── project-overview-pdr.md
├── code-standards.md
├── codebase-summary.md
├── design-guidelines.md
├── deployment-guide.md
├── system-architecture.md
├── project-roadmap.md
└── content-management.md
```

### Documentation Approach
- Keep in sync with code
- Use Markdown for all docs
- Include code examples where helpful
- Link to relevant source files

## Related Code Files
| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `docs/project-overview-pdr.md` | Project overview |
| `docs/code-standards.md` | Coding standards |
| `docs/codebase-summary.md` | Codebase overview |
| `docs/deployment-guide.md` | Deployment instructions |
| `docs/system-architecture.md` | Architecture |
| `docs/content-management.md` | Translation guide |

## Implementation Steps

### Step 1: Update README.md
```markdown
# VIETconsult Corporate Website

Corporate website for VIETconsult - international skilled worker recruitment from Vietnam to Germany.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **i18n:** next-intl
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/[locale]/     # Pages with i18n routing
├── components/       # React components
│   ├── layout/      # Header, Footer
│   ├── sections/    # Page sections
│   └── ui/          # Base UI components
├── lib/             # Utilities
├── hooks/           # Custom hooks
└── types/           # TypeScript types

locales/             # Translation files
├── de/
├── en/
└── vi/

public/              # Static assets
├── images/
└── icons/
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript check |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run E2E tests |

## Documentation

See `/docs` folder for detailed documentation:

- [Project Overview](./docs/project-overview-pdr.md)
- [Code Standards](./docs/code-standards.md)
- [Deployment Guide](./docs/deployment-guide.md)
- [Content Management](./docs/content-management.md)

## License

Proprietary - VIETconsult
```

### Step 2: Create Project Overview (docs/project-overview-pdr.md)
```markdown
# VIETconsult Website - Project Overview

## Purpose

Corporate website for VIETconsult showcasing services for international skilled worker recruitment from Vietnam to Germany.

## Target Audience

- German companies seeking skilled workers
- Vietnamese professionals seeking opportunities
- Partners and stakeholders

## Key Features

### Multi-language Support
- German (DE) - Primary
- English (EN)
- Vietnamese (VI)

### Pages
1. Homepage (Willkommen)
2. About Us (Über uns)
3. Partner (talentsCARE)
4. Benefits (Vorteile)
5. Quality Seal (Gütezeichen)
6. Services (4 sub-pages)
7. Contact (Kontakt)
8. Legal pages

### Technical Features
- Server-side rendering (Next.js)
- Responsive design (mobile-first)
- Scroll animations (Framer Motion)
- Contact form with validation
- SEO optimized

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | >90 |
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.5s |
| Time to Interactive | <3s |
| Cumulative Layout Shift | <0.1 |

## Design Reference

Based on: https://2025.10.29.talentscare.de/

## Brand Colors

- Primary Blue: #1e40af
- Primary Red: #dc2626
- Primary Gold: #f59e0b
- Dark Navy: #0f172a
```

### Step 3: Create Code Standards (docs/code-standards.md)
```markdown
# Code Standards

## TypeScript

- Strict mode enabled
- No `any` types (use `unknown` if needed)
- Interface naming: `PascalCase`
- Type naming: `PascalCase`

## React Components

### File Structure
```
component-name/
├── index.ts          # Export
├── component-name.tsx
└── component-name.test.tsx
```

### Component Pattern
```typescript
interface ComponentProps {
  prop: string
}

export function Component({ prop }: ComponentProps) {
  return <div>{prop}</div>
}
```

### Naming Conventions
- Components: `PascalCase`
- Files: `kebab-case`
- Functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`

## CSS/Tailwind

- Mobile-first responsive
- Use design tokens from `tailwind.config.ts`
- Prefer Tailwind classes over custom CSS
- Use `cn()` for conditional classes

## Commits

Use conventional commits:
```
feat: add new feature
fix: bug fix
docs: documentation
style: formatting
refactor: code restructure
test: testing
chore: maintenance
```

## Testing

- Unit tests for utilities
- Component tests for complex UI
- E2E tests for critical flows
```

### Step 4: Create Deployment Guide (docs/deployment-guide.md)
```markdown
# Deployment Guide

## Prerequisites

- Node.js 18+
- Domain configured
- SSL certificate

## Vercel Deployment (Recommended)

1. Connect repository to Vercel
2. Configure environment variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://vietconsult.com
   NEXT_PUBLIC_DEFAULT_LOCALE=de
   ```
3. Deploy

## Manual Deployment

### Build

```bash
npm run build
```

### Environment Variables

Create `.env.production`:
```env
NEXT_PUBLIC_SITE_URL=https://vietconsult.com
NEXT_PUBLIC_DEFAULT_LOCALE=de
CONTACT_EMAIL=contact@vietconsult.com
```

### Start Production Server

```bash
npm run start
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Post-Deployment Checklist

- [ ] Verify all pages load
- [ ] Test language switching
- [ ] Test contact form
- [ ] Check SEO meta tags
- [ ] Verify SSL certificate
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
```

### Step 5: Create Content Management Guide (docs/content-management.md)
```markdown
# Content Management Guide

## Translation Files

Translations are stored in `/locales/{language}/`:

```
locales/
├── de/              # German
│   ├── common.json  # Shared translations
│   ├── home.json    # Homepage
│   ├── about.json   # About page
│   └── ...
├── en/              # English
└── vi/              # Vietnamese
```

## Editing Translations

### 1. Locate the File

Translations are organized by page/feature:
- `common.json` - Navigation, footer, buttons
- `home.json` - Homepage sections
- `about.json` - About page
- etc.

### 2. Edit JSON

```json
{
  "hero": {
    "title": "Your new title here",
    "subtitle": "Your new subtitle"
  }
}
```

### 3. Test Changes

```bash
npm run dev
```

Visit the page in each language to verify.

## Adding New Translations

1. Add key to all language files:

```json
// locales/de/home.json
{
  "newSection": {
    "title": "Neuer Abschnitt"
  }
}

// locales/en/home.json
{
  "newSection": {
    "title": "New Section"
  }
}

// locales/vi/home.json
{
  "newSection": {
    "title": "Phần mới"
  }
}
```

2. Use in component:

```typescript
const t = useTranslations('newSection')
return <h2>{t('title')}</h2>
```

## Image Management

Images are in `/public/images/`:

```
public/images/
├── hero/       # Hero backgrounds
├── team/       # Team photos
├── offices/    # Office photos
└── partners/   # Partner logos
```

### Replacing Images

1. Add new image to appropriate folder
2. Use same filename to replace, or
3. Update image path in component

### Image Requirements

| Type | Size | Format |
|------|------|--------|
| Hero | 1920x1080 | WebP |
| Team | 400x500 | JPG |
| Office | 800x600 | WebP |
| Logo | 200x100 | PNG |

## Contact Information

Update contact info in:
- `locales/*/contact.json` - Contact page
- `locales/*/common.json` - Footer
```

### Step 6: Create System Architecture (docs/system-architecture.md)
```markdown
# System Architecture

## Overview

```
┌─────────────────────────────────────────────────────────┐
│                      Client Browser                     │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    Next.js Server                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │  App Router │  │  Middleware │  │  API Routes │    │
│  │   (Pages)   │  │   (i18n)    │  │  (Contact)  │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   External Services                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │   Email     │  │  Analytics  │  │    CDN      │    │
│  │   (SMTP)    │  │  (optional) │  │  (Vercel)   │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
└─────────────────────────────────────────────────────────┘
```

## Component Architecture

```
Layout
├── Header
│   ├── Logo
│   ├── Navigation
│   ├── LanguageSwitcher
│   └── MobileNav
├── Main
│   └── [Page Sections]
└── Footer
    ├── FooterLinks
    └── ContactInfo
```

## Data Flow

1. **Request** → Next.js Middleware detects locale
2. **Middleware** → Routes to correct locale path
3. **Page Component** → Server renders with translations
4. **Client** → Hydrates with Framer Motion animations
5. **User Action** → Client-side navigation (no full reload)

## Key Technologies

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| i18n | next-intl |
| Forms | React Hook Form + Zod |
| Testing | Vitest + Playwright |
```

### Step 7: Create Codebase Summary (docs/codebase-summary.md)
```markdown
# Codebase Summary

## Directory Structure

| Directory | Purpose |
|-----------|---------|
| `src/app/` | Next.js pages and routes |
| `src/components/` | React components |
| `src/lib/` | Utility functions |
| `src/hooks/` | Custom React hooks |
| `locales/` | Translation files |
| `public/` | Static assets |
| `docs/` | Documentation |
| `plans/` | Implementation plans |

## Key Files

| File | Purpose |
|------|---------|
| `next.config.mjs` | Next.js configuration |
| `tailwind.config.ts` | Design tokens |
| `src/i18n.ts` | i18n configuration |
| `src/middleware.ts` | Locale middleware |
| `src/navigation.ts` | Localized Link/Router |
| `src/lib/utils.ts` | Utility functions |
| `src/lib/animations.ts` | Animation variants |

## Component Categories

### UI Components (`src/components/ui/`)
Base components: Button, Card, Container, Section, Typography

### Layout Components (`src/components/layout/`)
Header, Footer, Navigation, MobileNav

### Section Components (`src/components/sections/`)
Page-specific sections organized by page:
- `/home/` - Homepage sections
- `/about/` - About page sections
- `/contact/` - Contact page sections
- `/services/` - Services page sections
- `/shared/` - Shared sections (PageHeader, CTABanner)

## Hooks

| Hook | Purpose |
|------|---------|
| `useScroll` | Track scroll position |
| `useScrollAnimation` | Intersection observer for animations |
| `useCounter` | Animated number counter |
```

## Todo List
- [ ] Update README.md
- [ ] Create docs/project-overview-pdr.md
- [ ] Create docs/code-standards.md
- [ ] Create docs/codebase-summary.md
- [ ] Create docs/deployment-guide.md
- [ ] Create docs/system-architecture.md
- [ ] Create docs/content-management.md
- [ ] Review all documentation for accuracy
- [ ] Add inline code comments where needed

## Success Criteria
- [x] README provides quick start guide
- [x] Developer can onboard within 1 hour
- [x] Content editors can update translations
- [x] Deployment process is documented
- [x] Architecture is clearly explained

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Docs become outdated | Medium | Medium | Review with each major change |
| Missing critical info | Low | High | Peer review documentation |

## Security Considerations
- No secrets in documentation
- No internal URLs exposed

## Final Steps

After completing all phases:
1. Final code review
2. Performance audit
3. Accessibility audit
4. Client handoff meeting
5. Production deployment
