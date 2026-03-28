# Phase 01: Project Setup & Configuration

## Context
- [Project Specification](../../CLAUDE.md)
- [Plan Overview](./plan.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | Critical |
| Status | complete (95%) |
| Est. Hours | 4 |
| Dependencies | None |
| Review Date | 2026-03-27 |
| Reviewer | code-reviewer |

## Key Insights
- Next.js 14+ with App Router provides RSC and streaming by default
- Tailwind CSS 3.4 supports container queries and new color system
- TypeScript strict mode ensures type safety
- next-intl integrates natively with App Router middleware

## Requirements
1. Initialize Next.js 14+ project with TypeScript
2. Configure Tailwind CSS with custom design tokens from CLAUDE.md
3. Setup ESLint + Prettier for code quality
4. Configure path aliases for clean imports
5. Setup environment variables structure

## Architecture Decisions

### Project Structure
```
/vietconsult
├── /src
│   ├── /app
│   │   ├── /[locale]          # i18n routing
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── /...pages
│   │   └── globals.css
│   ├── /components
│   │   ├── /layout
│   │   ├── /ui
│   │   └── /sections
│   ├── /lib
│   ├── /hooks
│   └── /types
├── /public
│   ├── /images
│   └── /icons
├── /locales
│   ├── /de
│   ├── /en
│   └── /vi
└── config files
```

### Rationale
- `/src` folder keeps root clean
- Locale-based routing with `[locale]` dynamic segment
- Separation of UI primitives (`/ui`) from layout components

## Related Code Files
| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.ts` | Design tokens, colors, fonts |
| `next.config.mjs` | Next.js configuration |
| `.env.example` | Environment variable template |
| `src/app/globals.css` | Global styles, CSS variables |

## Implementation Steps

### Step 1: Initialize Project
```bash
npx create-next-app@latest vietconsult --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Step 2: Install Core Dependencies
```bash
npm install framer-motion next-intl lucide-react clsx tailwind-merge
npm install -D @types/node prettier eslint-config-prettier
```

### Step 3: Configure Tailwind (tailwind.config.ts)
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1e40af',
          red: '#dc2626',
          gold: '#f59e0b',
        },
        dark: {
          navy: '#0f172a',
        },
        slate: {
          gray: '#475569',
        },
        light: {
          gray: '#f8fafc',
        },
      },
      fontFamily: {
        heading: ['Inter', 'Segoe UI', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'sans-serif'],
        vietnamese: ['Be Vietnam Pro', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(2.5rem, 5vw, 4.5rem)',
        h1: 'clamp(2rem, 4vw, 3.5rem)',
        h2: 'clamp(1.75rem, 3vw, 2.5rem)',
        h3: 'clamp(1.25rem, 2vw, 1.75rem)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      },
    },
  },
  plugins: [],
}
export default config
```

### Step 4: Setup Global CSS Variables (src/app/globals.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --primary-blue: #1e40af;
    --primary-red: #dc2626;
    --primary-gold: #f59e0b;
    --dark-navy: #0f172a;
    --slate-gray: #475569;
    --light-gray: #f8fafc;
    --success: #22c55e;
    --warning: #eab308;
    --error: #ef4444;
  }
}

/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap');
```

### Step 5: Configure TypeScript Path Aliases (tsconfig.json)
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/types/*": ["./src/types/*"]
    }
  }
}
```

### Step 6: Create Utility Functions (src/lib/utils.ts)
```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Step 7: Setup Environment Variables (.env.example)
```env
# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_LOCALE=de

# Contact Form (future)
CONTACT_EMAIL=contact@vietconsult.com

# Analytics (future)
NEXT_PUBLIC_GA_ID=
```

### Step 8: Configure ESLint (.eslintrc.json)
```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "prefer-const": "warn"
  }
}
```

### Step 9: Add Package Scripts (package.json)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit"
  }
}
```

## Todo List
- [x] Run create-next-app with specified options
- [x] Install all dependencies
- [x] Configure tailwind.config.ts with design tokens
- [x] Setup globals.css with CSS variables
- [x] Configure TypeScript paths
- [x] Create lib/utils.ts with cn helper
- [x] Setup .env.example
- [~] Configure ESLint (needs prettier in extends per plan spec)
- [x] Verify dev server runs
- [x] Run type-check to confirm setup
- [ ] Add Prettier configuration file
- [ ] Create docs/ directory structure
- [ ] Optimize font loading with next/font
- [ ] Add environment variable type definitions

## Success Criteria
- [x] `npm run dev` starts without errors
- [x] `npm run type-check` passes
- [x] `npm run lint` passes
- [x] Tailwind classes apply correctly
- [x] Path aliases resolve (@/components, etc.)
- [x] Design tokens (colors, fonts) available in Tailwind

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Dependency conflicts | Low | Medium | Use exact versions, test after install |
| Font loading issues | Low | Low | Use next/font for optimization |
| Path alias not working | Low | Medium | Verify tsconfig.json baseUrl |

## Security Considerations
- No secrets in .env.local committed to git
- Add .env.local to .gitignore
- Use NEXT_PUBLIC_ prefix only for client-safe vars

## Review Findings

### Code Review Report
📋 [Full Review Report](../reports/code-reviewer-260327-phase01-setup.md)

### Key Issues Identified
1. **High Priority:**
   - Missing Prettier configuration file
   - Missing docs/ directory structure (required by CLAUDE.md)
   - ESLint config incomplete (missing "prettier" in extends)

2. **Medium Priority:**
   - Font loading not optimized (using CDN instead of next/font)
   - Missing environment variable type definitions
   - Tailwind color naming may conflict with defaults

3. **Low Priority:**
   - Missing .nvmrc file
   - Package.json metadata incomplete
   - No VS Code workspace settings

### Overall Assessment
- **Status:** 95% Complete - Excellent foundation
- **Type Check:** ✅ Passing
- **Lint:** ✅ Passing
- **Build:** ✅ Success
- **Compliance:** 90/100 (CLAUDE.md specifications)

### Recommendation
Address Priority 1 items before Phase 02:
1. Create .prettierrc configuration
2. Update .eslintrc.json to include "prettier"
3. Create docs/ directory structure
4. Optimize font loading with next/font/google
5. Add environment type definitions

## Next Steps
After addressing review findings, proceed to:
- [Phase 02: Core Components & Design System](./phase-02-core-components.md)
