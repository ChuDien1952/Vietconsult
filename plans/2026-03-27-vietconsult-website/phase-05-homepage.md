# Phase 05: Homepage Implementation

## Context
- [Project Specification](../../CLAUDE.md) - See PAGE 1: HOMEPAGE sections
- [Plan Overview](./plan.md)
- [Previous Phase](./phase-04-global-layout.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | High |
| Status | pending |
| Est. Hours | 16 |
| Dependencies | Phase 02, 03, 04 |

## Key Insights
- Homepage has 11 sections per CLAUDE.md specification
- Reference design: talentscare.de for animations and layout
- All sections need scroll-triggered animations
- Stats counters need animated number transitions
- Mobile-first responsive design

## Requirements
1. Implement all 11 homepage sections
2. Hero with parallax background, stats bar
3. Vision cards with stagger animation
4. 4-step process timeline
5. Partners logo carousel
6. CTA banners with gradient backgrounds

## Architecture Decisions

### Section Component Pattern
Each section is a self-contained component with:
- Own animation variants
- Translation keys from home.json
- Responsive layout built-in
- Optional background variants

### Animation Strategy
- Intersection Observer via Framer Motion useInView
- Stagger children for card grids
- Counter animation for stats
- Parallax for hero background

## Related Code Files
| File | Purpose |
|------|---------|
| `src/app/[locale]/page.tsx` | Homepage route |
| `src/components/sections/home/hero-section.tsx` | Hero with stats |
| `src/components/sections/home/vision-section.tsx` | 3-card vision |
| `src/components/sections/home/services-overview.tsx` | Services intro |
| `src/components/sections/home/team-teaser.tsx` | Team preview |
| `src/components/sections/home/benefits-section.tsx` | 4-card benefits |
| `src/components/sections/home/partners-section.tsx` | Logo carousel |
| `src/components/sections/home/process-section.tsx` | 4-step timeline |
| `src/components/sections/home/infrastructure-section.tsx` | Germany/Vietnam |
| `src/components/sections/home/specialized-areas.tsx` | 3 focus areas |
| `src/components/sections/home/why-section.tsx` | Why VIETconsult |
| `src/components/sections/home/cta-banner.tsx` | Final CTA |
| `src/hooks/use-counter.ts` | Animated counter hook |

## Implementation Steps

### Step 1: Create Counter Hook (src/hooks/use-counter.ts)
```typescript
'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return { count, ref }
}
```

### Step 2: Create Hero Section (src/components/sections/home/hero-section.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Link } from '@/navigation'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useCounter } from '@/hooks/use-counter'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const t = useTranslations('hero')
  const tStats = useTranslations('stats')
  const { count: candidateCount, ref: counterRef } = useCounter(1200)

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat" />
      </div>

      <Container className="relative z-10 pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-hero font-bold text-white leading-tight mb-6"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-primary-blue hover:bg-gray-100">
              <Link href="/kontakt">
                {t('cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl"
          ref={counterRef}
        >
          <div className="text-center sm:text-left">
            <div className="text-5xl font-bold text-white">{tStats('integrationValue')}</div>
            <div className="text-white/80 mt-1">{tStats('integration')}</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-5xl font-bold text-white">{candidateCount.toLocaleString()}+</div>
            <div className="text-white/80 mt-1">{tStats('candidates')}</div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
```

### Step 3: Create Vision Section (src/components/sections/home/vision-section.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Heading } from '@/components/ui/typography'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Users, Handshake, Target } from 'lucide-react'

export function VisionSection() {
  const t = useTranslations('vision')
  const { ref, isInView } = useScrollAnimation()

  const cards = [
    { icon: Users, titleKey: 'card1Title', descKey: 'card1Desc' },
    { icon: Handshake, titleKey: 'card2Title', descKey: 'card2Desc' },
    { icon: Target, titleKey: 'card3Title', descKey: 'card3Desc' },
  ]

  return (
    <Section variant="light">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <Heading as="h2" className="mb-4">{t('title')}</Heading>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map(({ icon: Icon, titleKey, descKey }, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="h-full text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-blue" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="mb-3">{t(titleKey)}</CardTitle>
                  <CardDescription className="text-base">{t(descKey)}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
```

### Step 4: Create Process Section (src/components/sections/home/process-section.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading, Text } from '@/components/ui/typography'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Search, BookOpen, Award, Plane } from 'lucide-react'

export function ProcessSection() {
  const t = useTranslations('process')
  const { ref, isInView } = useScrollAnimation()

  const steps = [
    { icon: Search, num: 1, titleKey: 'step1Title', descKey: 'step1Desc' },
    { icon: BookOpen, num: 2, titleKey: 'step2Title', descKey: 'step2Desc' },
    { icon: Award, num: 3, titleKey: 'step3Title', descKey: 'step3Desc' },
    { icon: Plane, num: 4, titleKey: 'step4Title', descKey: 'step4Desc' },
  ]

  return (
    <Section variant="dark">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading as="h2" className="text-white mb-4">{t('title')}</Heading>
          <Text className="text-gray-300 max-w-2xl mx-auto">{t('subtitle')}</Text>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-blue via-primary-gold to-primary-blue" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ icon: Icon, num, titleKey, descKey }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">{num}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{t(titleKey)}</h3>
                <Text className="text-gray-400">{t(descKey)}</Text>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
```

### Step 5: Create Benefits Section (src/components/sections/home/benefits-section.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Heading } from '@/components/ui/typography'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Clock, TrendingUp, Users, CheckCircle } from 'lucide-react'

export function BenefitsSection() {
  const t = useTranslations('benefits')
  const { ref, isInView } = useScrollAnimation()

  const cards = [
    { icon: Clock, titleKey: 'card1Title', descKey: 'card1Desc' },
    { icon: TrendingUp, titleKey: 'card2Title', descKey: 'card2Desc' },
    { icon: Users, titleKey: 'card3Title', descKey: 'card3Desc' },
    { icon: CheckCircle, titleKey: 'card4Title', descKey: 'card4Desc' },
  ]

  return (
    <Section>
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <Heading as="h2">{t('title')}</Heading>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map(({ icon: Icon, titleKey, descKey }, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="h-full p-6 group">
                <div className="w-12 h-12 mb-4 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-primary-blue transition-colors">
                  <Icon className="w-6 h-6 text-primary-blue group-hover:text-white transition-colors" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-lg mb-2">{t(titleKey)}</CardTitle>
                  <CardDescription>{t(descKey)}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
```

### Step 6: Create Partners Section with Marquee (src/components/sections/home/partners-section.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Link } from '@/navigation'
import { Star } from 'lucide-react'

// Placeholder partner logos - replace with actual
const partners = Array(8).fill(null).map((_, i) => ({
  id: i,
  name: `Partner ${i + 1}`,
}))

export function PartnersSection() {
  const t = useTranslations('partners')

  return (
    <Section variant="light">
      <Container>
        <div className="text-center mb-12">
          <Heading as="h2" className="mb-4">{t('title')}</Heading>
          <div className="flex items-center justify-center gap-1 text-primary-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-dark-navy font-medium">{t('rating')}</span>
          </div>
        </div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="flex gap-12"
          >
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center"
              >
                <span className="text-gray-400 font-medium">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/partner-talentscare">{t('cta')}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
```

### Step 7: Create CTA Banner (src/components/sections/home/cta-banner.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Heading, Text } from '@/components/ui/typography'
import { Link } from '@/navigation'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ArrowRight, MapPin } from 'lucide-react'

export function CTABanner() {
  const t = useTranslations('cta')
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="relative py-24 bg-gradient-hero overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-white/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-white/10"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Heading as="h2" className="text-white mb-4">{t('title')}</Heading>
          <Text className="text-white/90 text-lg mb-8">{t('subtitle')}</Text>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary-blue hover:bg-gray-100">
              <Link href="/kontakt">
                {t('primary')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-blue"
            >
              <Link href="/kontakt#standorte">
                <MapPin className="mr-2 w-5 h-5" />
                {t('secondary')}
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
```

### Step 8: Create Remaining Sections
Create similar components for:
- `services-overview.tsx` - Services intro with stats
- `team-teaser.tsx` - Team preview section
- `infrastructure-section.tsx` - Germany/Vietnam map
- `specialized-areas.tsx` - 3 focus areas
- `why-section.tsx` - Bullet points section

### Step 9: Assemble Homepage (src/app/[locale]/page.tsx)
```typescript
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/home/hero-section'
import { VisionSection } from '@/components/sections/home/vision-section'
import { ServicesOverview } from '@/components/sections/home/services-overview'
import { TeamTeaser } from '@/components/sections/home/team-teaser'
import { BenefitsSection } from '@/components/sections/home/benefits-section'
import { PartnersSection } from '@/components/sections/home/partners-section'
import { ProcessSection } from '@/components/sections/home/process-section'
import { InfrastructureSection } from '@/components/sections/home/infrastructure-section'
import { SpecializedAreas } from '@/components/sections/home/specialized-areas'
import { WhySection } from '@/components/sections/home/why-section'
import { CTABanner } from '@/components/sections/home/cta-banner'

export default function HomePage() {
  return (
    <>
      <Header transparent />
      <main>
        <HeroSection />
        <VisionSection />
        <ServicesOverview />
        <TeamTeaser />
        <BenefitsSection />
        <PartnersSection />
        <ProcessSection />
        <InfrastructureSection />
        <SpecializedAreas />
        <WhySection />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
```

### Step 10: Create Section Index (src/components/sections/home/index.ts)
```typescript
export * from './hero-section'
export * from './vision-section'
export * from './services-overview'
export * from './team-teaser'
export * from './benefits-section'
export * from './partners-section'
export * from './process-section'
export * from './infrastructure-section'
export * from './specialized-areas'
export * from './why-section'
export * from './cta-banner'
```

## Todo List
- [ ] Create use-counter hook
- [ ] Create HeroSection with stats
- [ ] Create VisionSection with 3 cards
- [ ] Create ServicesOverview
- [ ] Create TeamTeaser
- [ ] Create BenefitsSection with 4 cards
- [ ] Create PartnersSection with marquee
- [ ] Create ProcessSection timeline
- [ ] Create InfrastructureSection
- [ ] Create SpecializedAreas
- [ ] Create WhySection
- [ ] Create CTABanner
- [ ] Assemble homepage
- [ ] Test all animations
- [ ] Test responsive layouts
- [ ] Test translations in all 3 languages

## Success Criteria
- [x] All 11 sections render correctly
- [x] Animations trigger on scroll
- [x] Stats counter animates
- [x] Partner marquee scrolls infinitely
- [x] Process timeline displays correctly
- [x] All sections responsive (mobile/tablet/desktop)
- [x] Translations work in DE/EN/VI

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Animation performance | Medium | Medium | Use will-change, reduce complexity on mobile |
| Layout shift on load | Low | Medium | Use proper image dimensions, skeleton loaders |
| Too many animations | Medium | Low | Reduce motion for prefers-reduced-motion |

## Security Considerations
- Sanitize any dynamic content
- Images from /public only (no external)

## Next Steps
After completion, proceed to:
- [Phase 06: About Us Page](./phase-06-about-page.md)
