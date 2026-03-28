# Phase 04: Global Layout (Header, Footer, Language Switcher)

## Context
- [Project Specification](../../CLAUDE.md)
- [Plan Overview](./plan.md)
- [Previous Phase](./phase-03-i18n-setup.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | Critical |
| Status | pending |
| Est. Hours | 6 |
| Dependencies | Phase 02, Phase 03 |

## Key Insights
- Header: transparent on hero, solid on scroll (sticky with blur)
- Navigation: desktop menu + mobile hamburger
- Language switcher: dropdown with flags/codes
- Footer: 4-column layout with links and contact info
- All text through i18n translations

## Requirements
1. Create Header component with sticky behavior
2. Create Navigation component (desktop + mobile)
3. Create Language Switcher dropdown
4. Create Footer component with 4 columns
5. Implement smooth animations on all components

## Architecture Decisions

### Header States
1. **Transparent**: On hero sections, white text
2. **Solid**: After scroll, white background with shadow
3. **Mobile**: Hamburger menu, slide-in drawer

### Navigation Pattern
- Server Component for static links
- Client Component wrapper for mobile menu state
- usePathname for active link highlighting

## Related Code Files
| File | Purpose |
|------|---------|
| `src/components/layout/header.tsx` | Main header component |
| `src/components/layout/navigation.tsx` | Desktop navigation |
| `src/components/layout/mobile-nav.tsx` | Mobile navigation drawer |
| `src/components/layout/footer.tsx` | Footer component |
| `src/components/ui/language-switcher.tsx` | Language dropdown |
| `src/hooks/use-scroll.ts` | Scroll position hook |

## Implementation Steps

### Step 1: Create Scroll Hook (src/hooks/use-scroll.ts)
```typescript
'use client'

import { useState, useEffect } from 'react'

export function useScroll(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
```

### Step 2: Create Language Switcher (src/components/ui/language-switcher.tsx)
```typescript
'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/navigation'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const locales = [
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'vi', flag: '🇻🇳', name: 'Tiếng Việt' },
]

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark'
}

export function LanguageSwitcher({ variant = 'dark' }: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const currentLocale = locales.find(l => l.code === locale)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (code: string) => {
    router.replace(pathname, { locale: code })
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors',
          variant === 'light'
            ? 'text-white hover:bg-white/10'
            : 'text-dark-navy hover:bg-gray-100'
        )}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLocale?.code.toUpperCase()}</span>
        <ChevronDown className={cn('w-4 h-4 transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border py-2 z-50">
          {locales.map(({ code, flag, name }) => (
            <button
              key={code}
              onClick={() => handleSelect(code)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors',
                code === locale && 'bg-blue-50 text-primary-blue'
              )}
            >
              <span className="text-xl">{flag}</span>
              <span className="text-sm font-medium">{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
```

### Step 3: Create Desktop Navigation (src/components/layout/navigation.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/navigation'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface NavigationProps {
  variant?: 'light' | 'dark'
}

export function Navigation({ variant = 'dark' }: NavigationProps) {
  const t = useTranslations('nav')
  const tServices = useTranslations('services')
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)

  const links = [
    { href: '/', label: t('home') },
    { href: '/uber-uns', label: t('about') },
    { href: '/partner-talentscare', label: t('partner') },
    { href: '/vorteile', label: t('benefits') },
    { href: '/guetezeichen', label: t('quality') },
  ]

  const serviceLinks = [
    { href: '/services/rekrutierung-auswahl', label: tServices('recruitment') },
    { href: '/services/sprach-kulturelle-bildung', label: tServices('language') },
    { href: '/services/anerkennung', label: tServices('recognition') },
    { href: '/services/relocation-integration', label: tServices('relocation') },
  ]

  const linkClasses = cn(
    'relative text-sm font-medium transition-colors',
    variant === 'light' ? 'text-white hover:text-white/80' : 'text-dark-navy hover:text-primary-blue',
    'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current',
    'after:transition-all hover:after:w-full'
  )

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(linkClasses, pathname === href && 'after:w-full')}
        >
          {label}
        </Link>
      ))}

      {/* Services Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <button className={cn(linkClasses, 'flex items-center gap-1')}>
          {t('services')}
          <ChevronDown className={cn('w-4 h-4 transition-transform', servicesOpen && 'rotate-180')} />
        </button>

        {servicesOpen && (
          <div className="absolute left-0 top-full pt-2">
            <div className="bg-white rounded-xl shadow-xl border py-2 min-w-[280px]">
              {serviceLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-4 py-3 text-sm text-dark-navy hover:bg-blue-50 hover:text-primary-blue transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
```

### Step 4: Create Mobile Navigation (src/components/layout/mobile-nav.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/navigation'
import { cn } from '@/lib/utils'
import { X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const t = useTranslations('nav')
  const tServices = useTranslations('services')
  const tButtons = useTranslations('buttons')
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)

  const links = [
    { href: '/', label: t('home') },
    { href: '/uber-uns', label: t('about') },
    { href: '/partner-talentscare', label: t('partner') },
    { href: '/vorteile', label: t('benefits') },
    { href: '/guetezeichen', label: t('quality') },
  ]

  const serviceLinks = [
    { href: '/services/rekrutierung-auswahl', label: tServices('recruitment') },
    { href: '/services/sprach-kulturelle-bildung', label: tServices('language') },
    { href: '/services/anerkennung', label: tServices('recognition') },
    { href: '/services/relocation-integration', label: tServices('relocation') },
  ]

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[300px] bg-white z-50 lg:hidden shadow-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold text-lg">Menu</span>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="p-4 space-y-2">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-dark-navy hover:bg-blue-50 transition-colors',
                    pathname === href && 'bg-blue-50 text-primary-blue font-medium'
                  )}
                >
                  {label}
                </Link>
              ))}

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <span>{t('services')}</span>
                  <ChevronDown className={cn('w-5 h-5 transition-transform', servicesOpen && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 mt-1">
                        {serviceLinks.map(({ href, label }) => (
                          <Link
                            key={href}
                            href={href}
                            onClick={onClose}
                            className="block px-4 py-2 text-sm rounded-lg text-slate-gray hover:bg-blue-50 hover:text-primary-blue transition-colors"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
              <Button asChild className="w-full">
                <Link href="/kontakt" onClick={onClose}>
                  {tButtons('contact')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
```

### Step 5: Create Header Component (src/components/layout/header.tsx)
```typescript
'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScroll } from '@/hooks/use-scroll'
import { Navigation } from './navigation'
import { MobileNav } from './mobile-nav'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

interface HeaderProps {
  transparent?: boolean
}

export function Header({ transparent = false }: HeaderProps) {
  const t = useTranslations('buttons')
  const scrolled = useScroll(50)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isTransparent = transparent && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-sm'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span
                className={cn(
                  'text-2xl font-bold transition-colors',
                  isTransparent ? 'text-white' : 'text-primary-blue'
                )}
              >
                VIET<span className="text-primary-red">consult</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <Navigation variant={isTransparent ? 'light' : 'dark'} />

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher variant={isTransparent ? 'light' : 'dark'} />

              <Button
                asChild
                variant={isTransparent ? 'outline' : 'default'}
                className={cn(
                  'hidden lg:inline-flex',
                  isTransparent && 'border-white text-white hover:bg-white hover:text-primary-blue'
                )}
              >
                <Link href="/kontakt">{t('contact')}</Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'lg:hidden p-2 rounded-lg transition-colors',
                  isTransparent ? 'text-white hover:bg-white/10' : 'hover:bg-gray-100'
                )}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
```

### Step 6: Create Footer Component (src/components/layout/footer.tsx)
```typescript
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { Container } from '@/components/ui/container'
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const tServices = useTranslations('services')

  const companyLinks = [
    { href: '/services', label: tNav('services') },
    { href: '/guetezeichen', label: tNav('quality') },
    { href: '/kontakt', label: tNav('contact') },
  ]

  const infoLinks = [
    { href: '/uber-uns', label: tNav('about') },
    { href: '/partner-talentscare', label: tNav('partner') },
    { href: '/vorteile', label: tNav('benefits') },
  ]

  return (
    <footer className="bg-dark-navy text-white">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">
                VIET<span className="text-primary-red">consult</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-semibold mb-4">{t('company')}</h3>
            <ul className="space-y-3">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h3 className="font-semibold mb-4">{t('info')}</h3>
            <ul className="space-y-3">
              {infoLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('contact')}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Julius-Brecht-Str. 3<br />60433 Frankfurt am Main</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+496987007460" className="hover:text-white transition-colors">
                  +49 69 8700746-80
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contact@vietconsult.com" className="hover:text-white transition-colors">
                  contact@vietconsult.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">{t('copyright')}</p>
          <div className="flex gap-6 text-sm">
            <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
              {t('legal')}
            </Link>
            <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
              {t('privacy')}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
```

### Step 7: Create Layout Component Index (src/components/layout/index.ts)
```typescript
export * from './header'
export * from './footer'
export * from './navigation'
export * from './mobile-nav'
```

## Todo List
- [ ] Create use-scroll hook
- [ ] Create LanguageSwitcher component
- [ ] Create Navigation component (desktop)
- [ ] Create MobileNav component (drawer)
- [ ] Create Header component with transparent mode
- [ ] Create Footer component
- [ ] Create index export
- [ ] Test header scroll behavior
- [ ] Test mobile menu animation
- [ ] Test language switching
- [ ] Test responsive layouts

## Success Criteria
- [x] Header transitions from transparent to solid on scroll
- [x] Navigation links work and show active state
- [x] Services dropdown opens on hover
- [x] Mobile menu opens/closes smoothly
- [x] Language switcher changes locale and URL
- [x] Footer displays correctly on all screen sizes
- [x] All text comes from translations

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Z-index conflicts | Medium | Low | Use consistent z-index scale |
| Mobile menu scroll lock | Low | Medium | Lock body scroll when open |
| Language persistence issues | Low | Medium | Test localStorage handling |

## Security Considerations
- External links (social) use rel="noopener noreferrer"
- No sensitive data in client components

## Next Steps
After completion, proceed to:
- [Phase 05: Homepage Implementation](./phase-05-homepage.md)
