# VIETconsult - Code Standards

## General Principles

### Design Principles
- **YAGNI:** You Aren't Gonna Need It
- **KISS:** Keep It Simple, Stupid
- **DRY:** Don't Repeat Yourself

### Code Quality
- Write self-documenting code
- Add comments only for complex logic
- Follow TypeScript strict mode
- Maintain 100% type coverage

## TypeScript Standards

### Type Definitions
```typescript
// ✅ Good - Explicit types
interface UserData {
  name: string
  email: string
  phone?: string
}

// ❌ Bad - Any types
const data: any = {}
```

### Naming Conventions
```typescript
// Interfaces - PascalCase
interface ServiceCard {}

// Types - PascalCase
type ButtonVariant = 'primary' | 'secondary'

// Components - PascalCase
const HeroSection = () => {}

// Functions - camelCase
function formatPhoneNumber() {}

// Constants - UPPER_SNAKE_CASE
const MAX_RETRIES = 3

// Files - kebab-case
// hero-section.tsx, contact-form.tsx
```

## React/Next.js Standards

### Component Structure
```typescript
// ✅ Preferred structure
import { FC } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  variant?: 'default' | 'large'
}

export const ComponentName: FC<Props> = ({ title, variant = 'default' }) => {
  return (
    <div className={cn('base-classes', variant === 'large' && 'large-classes')}>
      {title}
    </div>
  )
}
```

### File Organization
```
/components
  /layout     - Header, Footer, Navigation
  /ui         - Button, Card, Input (primitives)
  /sections   - HeroSection, ServicesSection (page sections)
```

### Import Order
```typescript
// 1. React/Next.js
import { FC } from 'react'
import Image from 'next/image'

// 2. External libraries
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

// 3. Internal components
import { Button } from '@/components/ui/button'

// 4. Utilities
import { cn } from '@/lib/utils'

// 5. Types
import type { ServiceType } from '@/types'
```

## CSS/Tailwind Standards

### Class Naming
```typescript
// ✅ Good - Use cn() utility
<div className={cn(
  'base-classes here',
  isActive && 'active-classes',
  variant === 'large' && 'large-classes'
)} />

// ❌ Bad - String concatenation
<div className={`base ${isActive ? 'active' : ''}`} />
```

### Responsive Design
```typescript
// ✅ Mobile-first approach
<div className="
  text-sm      /* mobile */
  sm:text-base /* tablet */
  lg:text-lg   /* desktop */
" />
```

### Custom CSS Variables
```css
/* Use CSS variables from globals.css */
.element {
  color: var(--primary-blue);
  background: var(--gradient-hero);
}
```

## Animation Standards

### Framer Motion
```typescript
// ✅ Reusable variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
/>
```

## Internationalization (i18n)

### Translation Keys
```typescript
// ✅ Good - Namespaced keys
t('home.hero.title')
t('services.rekrutierung.description')

// ❌ Bad - Flat keys
t('title')
t('description')
```

### Text Content
```typescript
// ✅ Good - All text through i18n
const t = useTranslations('home')
<h1>{t('hero.title')}</h1>

// ❌ Bad - Hardcoded text
<h1>Welcome to VIETconsult</h1>
```

## Performance Standards

### Image Optimization
```typescript
// ✅ Use Next.js Image component
import Image from 'next/image'

<Image
  src="/hero.webp"
  alt="Hero"
  width={1920}
  height={1080}
  priority // for above-fold images
  placeholder="blur"
/>
```

### Code Splitting
```typescript
// ✅ Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('@/components/Map'), {
  loading: () => <p>Loading map...</p>,
  ssr: false
})
```

## Accessibility Standards

### Semantic HTML
```typescript
// ✅ Good - Semantic tags
<nav>
<main>
<article>
<section>

// ❌ Bad - Div soup
<div className="nav">
<div className="main">
```

### ARIA Labels
```typescript
// ✅ Descriptive labels
<button aria-label="Open navigation menu">
  <MenuIcon />
</button>
```

## File Naming

### Components
- PascalCase for component files: `HeroSection.tsx`
- kebab-case for utilities: `format-date.ts`
- kebab-case for pages: `uber-uns/page.tsx`

### Consistency
```
✅ components/layout/Header.tsx
✅ components/ui/button.tsx
✅ lib/format-phone.ts
✅ hooks/use-scroll-animation.ts
```

## Git Standards

### Commit Messages
```bash
# Format: <type>: <description>

feat: add hero section animation
fix: resolve mobile menu overflow
docs: update README with setup instructions
style: format code with prettier
refactor: extract button variants to separate file
test: add unit tests for contact form
chore: update dependencies
```

### Branch Naming
```bash
feature/hero-section
fix/mobile-menu-bug
docs/api-documentation
refactor/button-component
```

## Documentation Standards

### Code Comments
```typescript
// ✅ Good - Explain WHY, not WHAT
// Debounce search to avoid excessive API calls
const debouncedSearch = useDebouncedValue(searchTerm, 300)

// ❌ Bad - Obvious comments
// Set the title
const title = 'VIETconsult'
```

### JSDoc for Complex Functions
```typescript
/**
 * Formats Vietnamese phone number to international format
 * @param phone - Raw phone number (e.g., "0987188667")
 * @returns Formatted number (e.g., "+84 987 188 667")
 */
function formatVietnamesePhone(phone: string): string {
  // implementation
}
```

## Error Handling

### Try-Catch
```typescript
// ✅ Specific error handling
try {
  await submitContactForm(data)
} catch (error) {
  if (error instanceof ValidationError) {
    showValidationErrors(error.fields)
  } else {
    showGenericError()
  }
}
```

## Environment Variables

### Type Safety
```typescript
// src/types/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL: string
    NEXT_PUBLIC_DEFAULT_LOCALE: 'de' | 'en' | 'vi'
    CONTACT_EMAIL: string
  }
}
```

## Testing Standards

(To be defined in Phase 11)

## Security Standards

### Input Validation
- Validate all user inputs
- Sanitize data before display
- Use CSRF tokens for forms
- Implement rate limiting

### Dependencies
- Regular `npm audit` checks
- Keep dependencies updated
- Review security advisories

## Code Review Checklist

- [ ] TypeScript types defined
- [ ] No `any` types
- [ ] Responsive design tested
- [ ] i18n keys used (no hardcoded text)
- [ ] Images optimized
- [ ] Accessibility checked
- [ ] Performance optimized
- [ ] Error handling implemented
- [ ] Code formatted with Prettier
- [ ] ESLint passes
- [ ] No console.log in production code

## Tools

- **Formatter:** Prettier
- **Linter:** ESLint + eslint-config-next
- **Type Checker:** TypeScript strict mode
- **Git Hooks:** (To be configured)

---

*Last Updated: March 2026*
