# Phase 02: Core Components & Design System

## Context
- [Project Specification](../../CLAUDE.md)
- [Plan Overview](./plan.md)
- [Previous Phase](./phase-01-project-setup.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | Critical |
| Status | pending |
| Est. Hours | 8 |
| Dependencies | Phase 01 |

## Key Insights
- shadcn/ui approach: copy components into codebase, full control
- Radix primitives provide accessible foundations
- Framer Motion variants enable reusable animations
- Mobile-first responsive design per CLAUDE.md

## Requirements
1. Setup shadcn/ui CLI and base configuration
2. Create Button component with variants (primary, secondary, outline, ghost)
3. Create Card component with hover effects
4. Create Container component for consistent max-width
5. Create Section component for page sections
6. Create Typography components (Heading, Text)
7. Create animation variants and hooks

## Architecture Decisions

### Component Composition Pattern
```typescript
// Compound component pattern for complex UI
<Card>
  <Card.Image />
  <Card.Content>
    <Card.Title />
    <Card.Description />
  </Card.Content>
  <Card.Footer />
</Card>
```

### Animation Strategy
- Use Framer Motion `motion` components
- Define reusable variants in `/lib/animations.ts`
- Use `useInView` hook for scroll animations
- Stagger children animations for card grids

## Related Code Files
| File | Purpose |
|------|---------|
| `components.json` | shadcn/ui configuration |
| `src/components/ui/button.tsx` | Button variants |
| `src/components/ui/card.tsx` | Card component |
| `src/components/ui/container.tsx` | Layout container |
| `src/components/ui/section.tsx` | Page sections |
| `src/components/ui/typography.tsx` | Text components |
| `src/lib/animations.ts` | Framer Motion variants |
| `src/hooks/use-scroll-animation.ts` | Scroll animation hook |

## Implementation Steps

### Step 1: Initialize shadcn/ui
```bash
npx shadcn-ui@latest init
# Select: TypeScript, src/app, tailwind.config.ts, CSS variables, neutral, no
```

### Step 2: Create Button Component (src/components/ui/button.tsx)
```typescript
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary-blue text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:scale-105',
        secondary: 'bg-slate-gray text-white hover:bg-slate-600',
        outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
        ghost: 'hover:bg-gray-100',
        link: 'text-primary-blue underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
```

### Step 3: Create Card Component (src/components/ui/card.tsx)
```typescript
import * as React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border bg-white shadow-sm transition-all duration-300',
        'hover:-translate-y-2 hover:shadow-xl',
        className
      )}
      {...props}
    />
  )
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-xl font-semibold leading-tight', className)} {...props} />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-slate-gray', className)} {...props} />
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

### Step 4: Create Container Component (src/components/ui/container.tsx)
```typescript
import * as React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'wide' | 'narrow'
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'default', ...props }, ref) => {
    const sizeClasses = {
      default: 'max-w-7xl',
      wide: 'max-w-[1400px]',
      narrow: 'max-w-4xl',
    }

    return (
      <div
        ref={ref}
        className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeClasses[size], className)}
        {...props}
      />
    )
  }
)
Container.displayName = 'Container'

export { Container }
```

### Step 5: Create Section Component (src/components/ui/section.tsx)
```typescript
import * as React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'dark' | 'light' | 'gradient'
  spacing?: 'default' | 'compact' | 'large'
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', spacing = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'bg-white',
      dark: 'bg-dark-navy text-white',
      light: 'bg-light-gray',
      gradient: 'bg-gradient-hero text-white',
    }

    const spacingClasses = {
      default: 'py-16 sm:py-20 lg:py-24',
      compact: 'py-8 sm:py-12 lg:py-16',
      large: 'py-24 sm:py-32 lg:py-40',
    }

    return (
      <section
        ref={ref}
        className={cn(variantClasses[variant], spacingClasses[spacing], className)}
        {...props}
      />
    )
  }
)
Section.displayName = 'Section'

export { Section }
```

### Step 6: Create Animation Variants (src/lib/animations.ts)
```typescript
import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

// Counter animation for stats
export const counterAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}
```

### Step 7: Create Scroll Animation Hook (src/hooks/use-scroll-animation.ts)
```typescript
'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UseScrollAnimationOptions {
  once?: boolean
  amount?: number | 'some' | 'all'
  margin?: string
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { once = true, amount = 0.3, margin = '0px' } = options
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount, margin })

  return { ref, isInView }
}
```

### Step 8: Create Typography Components (src/components/ui/typography.tsx)
```typescript
import * as React from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = 'h2', className, ...props }, ref) => {
    const sizeClasses = {
      h1: 'text-h1 font-bold tracking-tight',
      h2: 'text-h2 font-bold tracking-tight',
      h3: 'text-h3 font-semibold',
      h4: 'text-xl font-semibold',
      h5: 'text-lg font-semibold',
      h6: 'text-base font-semibold',
    }

    return (
      <Tag
        ref={ref}
        className={cn('font-heading', sizeClasses[Tag], className)}
        {...props}
      />
    )
  }
)
Heading.displayName = 'Heading'

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'base' | 'lg'
  muted?: boolean
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ size = 'base', muted = false, className, ...props }, ref) => {
    const sizeClasses = {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    }

    return (
      <p
        ref={ref}
        className={cn(
          'font-body leading-relaxed',
          sizeClasses[size],
          muted && 'text-slate-gray',
          className
        )}
        {...props}
      />
    )
  }
)
Text.displayName = 'Text'

export { Heading, Text }
```

### Step 9: Create Index Export (src/components/ui/index.ts)
```typescript
export * from './button'
export * from './card'
export * from './container'
export * from './section'
export * from './typography'
```

## Todo List
- [ ] Initialize shadcn/ui
- [ ] Install class-variance-authority
- [ ] Create Button component with all variants
- [ ] Create Card compound component
- [ ] Create Container component
- [ ] Create Section component
- [ ] Create animation variants file
- [ ] Create useScrollAnimation hook
- [ ] Create Typography components
- [ ] Create index export file
- [ ] Test all components render correctly

## Success Criteria
- [x] All components render without errors
- [x] Button variants display correctly
- [x] Card hover effects work
- [x] Responsive classes apply properly
- [x] Animations trigger on scroll
- [x] Components are type-safe

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| CVA version mismatch | Low | Low | Pin exact version |
| Animation jank | Medium | Medium | Use will-change, test performance |
| SSR hydration errors | Low | Medium | Use 'use client' directives appropriately |

## Security Considerations
- No user input handling in base components
- Sanitize any dynamic className props

## Next Steps
After completion, proceed to:
- [Phase 03: i18n Setup & Translations](./phase-03-i18n-setup.md)
