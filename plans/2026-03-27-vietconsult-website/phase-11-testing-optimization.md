# Phase 11: Testing & Optimization

## Context
- [Project Specification](../../CLAUDE.md) - Performance Requirements
- [Plan Overview](./plan.md)
- [Previous Phase](./phase-10-visual-assets.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | High |
| Status | pending |
| Est. Hours | 8 |
| Dependencies | Phase 01-10 |

## Key Insights
- Target Lighthouse scores: >90 all categories
- Performance: FCP <1.5s, LCP <2.5s, TTI <3s, CLS <0.1
- Test all 3 languages (DE, EN, VI)
- Test responsive breakpoints (mobile, tablet, desktop)
- Accessibility testing required

## Requirements
1. Unit tests for utility functions
2. Component tests for critical UI
3. E2E tests for user flows
4. Performance optimization
5. Accessibility audit
6. Cross-browser testing
7. SEO validation

## Architecture Decisions

### Testing Stack
- Vitest for unit tests (fast, Vite-compatible)
- React Testing Library for component tests
- Playwright for E2E tests
- Lighthouse CI for performance

### Optimization Strategy
- Code splitting by route
- Image optimization (already via Next.js Image)
- Font subsetting
- Critical CSS inlining
- Preconnect to external resources

## Related Code Files
| File | Purpose |
|------|---------|
| `vitest.config.ts` | Unit test config |
| `playwright.config.ts` | E2E test config |
| `__tests__/**/*.test.ts` | Test files |
| `e2e/**/*.spec.ts` | E2E specs |
| `.lighthouserc.js` | Lighthouse CI config |
| `next.config.mjs` | Build optimizations |

## Implementation Steps

### Step 1: Install Testing Dependencies
```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom
npm install -D playwright @playwright/test
npm install -D @lhci/cli
```

### Step 2: Configure Vitest (vitest.config.ts)
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.test.{ts,tsx}'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Step 3: Create Test Setup (vitest.setup.ts)
```typescript
import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/',
}))

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => 'de',
}))
```

### Step 4: Write Unit Tests

**Test: lib/utils.ts**
```typescript
// __tests__/lib/utils.test.ts
import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('handles conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz')
  })

  it('merges Tailwind classes correctly', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6')
  })
})
```

**Test: Button Component**
```typescript
// __tests__/components/ui/button.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('applies variant classes', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border-2')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>
    )
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
```

### Step 5: Configure Playwright (playwright.config.ts)
```typescript
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

### Step 6: Write E2E Tests

**Test: Navigation Flow**
```typescript
// e2e/navigation.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/de')
    await expect(page).toHaveTitle(/VIETconsult/)
    await expect(page.locator('h1')).toContainText('Ganzheitliche Lösungen')
  })

  test('can navigate to About page', async ({ page }) => {
    await page.goto('/de')
    await page.click('text=Über uns')
    await expect(page).toHaveURL(/uber-uns/)
    await expect(page.locator('h1')).toContainText('Über uns')
  })

  test('language switcher works', async ({ page }) => {
    await page.goto('/de')
    await page.click('[data-testid="language-switcher"]')
    await page.click('text=English')
    await expect(page).toHaveURL(/\/en/)
  })

  test('contact form validates inputs', async ({ page }) => {
    await page.goto('/de/kontakt')
    await page.click('button[type="submit"]')
    await expect(page.locator('.text-red-500')).toBeVisible()
  })

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/de')
    await page.click('[data-testid="mobile-menu-button"]')
    await expect(page.locator('[data-testid="mobile-nav"]')).toBeVisible()
    await page.click('[data-testid="mobile-nav-close"]')
    await expect(page.locator('[data-testid="mobile-nav"]')).not.toBeVisible()
  })
})
```

**Test: Contact Form**
```typescript
// e2e/contact-form.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test('submits form successfully', async ({ page }) => {
    await page.goto('/de/kontakt')

    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('textarea[name="message"]', 'This is a test message.')
    await page.check('input[name="privacy"]')

    await page.click('button[type="submit"]')

    await expect(page.locator('text=Vielen Dank')).toBeVisible({ timeout: 5000 })
  })
})
```

### Step 7: Configure Lighthouse CI (.lighthouserc.js)
```javascript
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/de',
        'http://localhost:3000/de/uber-uns',
        'http://localhost:3000/de/kontakt',
      ],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
```

### Step 8: Add Performance Optimizations

**Update next.config.mjs:**
```javascript
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Headers for caching
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default withNextIntl(nextConfig)
```

### Step 9: Add Preconnect for External Resources

**Update src/app/[locale]/layout.tsx:**
```typescript
export default function LocaleLayout({ children }) {
  return (
    <html>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* DNS prefetch for analytics (if used) */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Step 10: Create Accessibility Checklist

**Manual A11y Checks:**
- [ ] All images have alt text
- [ ] Color contrast ratios meet WCAG AA (4.5:1)
- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation works throughout
- [ ] Skip to main content link present
- [ ] Form labels properly associated
- [ ] ARIA landmarks used correctly
- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] No auto-playing media
- [ ] Reduced motion respected

### Step 11: Add Package Scripts
```json
// package.json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "lighthouse": "lhci autorun",
    "analyze": "ANALYZE=true next build"
  }
}
```

## Todo List
- [ ] Install testing dependencies
- [ ] Configure Vitest
- [ ] Write unit tests for utilities
- [ ] Write component tests for Button, Card
- [ ] Configure Playwright
- [ ] Write E2E tests for navigation
- [ ] Write E2E tests for contact form
- [ ] Configure Lighthouse CI
- [ ] Apply performance optimizations
- [ ] Run accessibility audit
- [ ] Fix any accessibility issues
- [ ] Run all tests
- [ ] Achieve Lighthouse >90 scores

## Success Criteria
- [x] All unit tests pass
- [x] All E2E tests pass
- [x] Lighthouse Performance >90
- [x] Lighthouse Accessibility >90
- [x] Lighthouse Best Practices >90
- [x] Lighthouse SEO >90
- [x] FCP <1.5s
- [x] LCP <2.5s
- [x] CLS <0.1
- [x] No critical accessibility issues

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Flaky E2E tests | Medium | Medium | Add retries, increase timeouts |
| Poor mobile performance | Medium | High | Test on real devices |
| Accessibility violations | Low | High | Use automated tools + manual review |

## Security Considerations
- No sensitive data in test files
- Mock external APIs in tests
- Don't commit test credentials

## Next Steps
After completion, proceed to:
- [Phase 12: Documentation](./phase-12-documentation.md)
