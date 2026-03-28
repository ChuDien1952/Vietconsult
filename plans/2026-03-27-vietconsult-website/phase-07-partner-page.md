# Phase 07: Partner Page (talentsCARE)

## Context
- [Project Specification](../../CLAUDE.md) - See PAGE 3: PARTNER
- [Plan Overview](./plan.md)
- [Previous Phase](./phase-06-about-page.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | Medium |
| Status | pending |
| Est. Hours | 4 |
| Dependencies | Phase 04, Phase 06 |

## Key Insights
- Partner page showcases talentsCARE collaboration
- 9 services grid (Seminare, Schulungen, Workshops, etc.)
- Collaboration model diagram
- External CTA to talentsCARE website

## Requirements
1. Partner introduction section
2. 9-service offering grid
3. Collaboration model visualization
4. CTA linking to talentsCARE

## Architecture Decisions

### Service Grid
- 3x3 responsive grid on desktop
- Cards with icons and descriptions
- Hover effects consistent with design system

### External Links
- Use rel="noopener noreferrer" for security
- Open in new tab for partner site

## Related Code Files
| File | Purpose |
|------|---------|
| `src/app/[locale]/partner-talentscare/page.tsx` | Partner page route |
| `src/components/sections/partner/partner-intro.tsx` | Introduction |
| `src/components/sections/partner/services-grid.tsx` | 9 services |
| `src/components/sections/partner/collaboration-model.tsx` | Visual diagram |
| `locales/*/partner.json` | Translations |

## Implementation Steps

### Step 1: Create Partner Translations

**locales/de/partner.json**
```json
{
  "meta": {
    "title": "Partner talentsCARE | VIETconsult",
    "description": "Unsere Partnerschaft mit talentsCARE für umfassende Integrationslösungen."
  },
  "header": {
    "title": "Partner talentsCARE",
    "breadcrumb": "Willkommen"
  },
  "intro": {
    "title": "Gemeinsam stark",
    "content": "VIETconsult und talentsCARE bilden eine strategische Partnerschaft, um Fachkräften aus Vietnam den bestmöglichen Start in Deutschland zu ermöglichen. Durch die Kombination unserer Rekrutierungsexpertise mit den Integrations- und Schulungsangeboten von talentsCARE bieten wir ein ganzheitliches Konzept."
  },
  "services": {
    "title": "Angebote von talentsCARE",
    "subtitle": "Umfassende Unterstützung für eine erfolgreiche Integration",
    "seminare": {
      "title": "Seminare",
      "desc": "Fachspezifische Seminare zu relevanten Themen."
    },
    "schulungen": {
      "title": "Schulungen",
      "desc": "Praxisorientierte Schulungen für den Berufsalltag."
    },
    "workshops": {
      "title": "Workshops",
      "desc": "Interaktive Workshops zur Kompetenzentwicklung."
    },
    "vortraege": {
      "title": "Vorträge",
      "desc": "Informative Vorträge von Experten."
    },
    "webinare": {
      "title": "Webinare",
      "desc": "Flexible Online-Weiterbildung."
    },
    "coaching": {
      "title": "Coaching",
      "desc": "Individuelles Coaching für persönliche Entwicklung."
    },
    "training": {
      "title": "Training",
      "desc": "Intensives Training für spezifische Fähigkeiten."
    },
    "mentoring": {
      "title": "Mentoring",
      "desc": "Begleitung durch erfahrene Mentoren."
    },
    "events": {
      "title": "Events",
      "desc": "Networking-Events und Kulturveranstaltungen."
    }
  },
  "collaboration": {
    "title": "So arbeiten wir zusammen",
    "step1": "VIETconsult rekrutiert und bereitet Kandidaten vor",
    "step2": "talentsCARE übernimmt Schulungen und Integration",
    "step3": "Gemeinsame Betreuung im Unternehmen"
  },
  "cta": {
    "title": "Mehr über talentsCARE erfahren",
    "subtitle": "Besuchen Sie die Website unseres Partners für weitere Informationen.",
    "button": "talentsCARE besuchen"
  }
}
```

### Step 2: Create Partner Intro (src/components/sections/partner/partner-intro.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading, Text } from '@/components/ui/typography'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Image from 'next/image'

export function PartnerIntro() {
  const t = useTranslations('intro')
  const { ref, isInView } = useScrollAnimation()

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2" className="mb-6">{t('title')}</Heading>
            <Text className="text-lg text-slate-gray leading-relaxed">
              {t('content')}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            {/* Partner logos side by side */}
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-primary-blue">
                VIET<span className="text-primary-red">consult</span>
              </div>
              <div className="text-3xl text-slate-gray">+</div>
              <div className="text-2xl font-bold text-primary-blue">
                talents<span className="text-primary-gold">CARE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
```

### Step 3: Create Services Grid (src/components/sections/partner/services-grid.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Heading, Text } from '@/components/ui/typography'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  GraduationCap,
  BookOpen,
  Users,
  Mic,
  Monitor,
  MessageCircle,
  Dumbbell,
  UserCheck,
  Calendar,
} from 'lucide-react'

export function ServicesGrid() {
  const t = useTranslations('services')
  const { ref, isInView } = useScrollAnimation()

  const services = [
    { key: 'seminare', icon: GraduationCap },
    { key: 'schulungen', icon: BookOpen },
    { key: 'workshops', icon: Users },
    { key: 'vortraege', icon: Mic },
    { key: 'webinare', icon: Monitor },
    { key: 'coaching', icon: MessageCircle },
    { key: 'training', icon: Dumbbell },
    { key: 'mentoring', icon: UserCheck },
    { key: 'events', icon: Calendar },
  ]

  return (
    <Section variant="light">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <Heading as="h2" className="mb-4">{t('title')}</Heading>
          <Text className="text-slate-gray max-w-2xl mx-auto">{t('subtitle')}</Text>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ key, icon: Icon }) => (
            <motion.div key={key} variants={staggerItem}>
              <Card className="p-6 h-full group">
                <div className="w-12 h-12 mb-4 rounded-lg bg-primary-gold/10 flex items-center justify-center group-hover:bg-primary-gold transition-colors">
                  <Icon className="w-6 h-6 text-primary-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t(`${key}.title`)}</h3>
                <p className="text-slate-gray text-sm">{t(`${key}.desc`)}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
```

### Step 4: Create Collaboration Model (src/components/sections/partner/collaboration-model.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading } from '@/components/ui/typography'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ArrowRight } from 'lucide-react'

export function CollaborationModel() {
  const t = useTranslations('collaboration')
  const { ref, isInView } = useScrollAnimation()

  const steps = [
    { num: 1, text: t('step1'), brand: 'VIETconsult' },
    { num: 2, text: t('step2'), brand: 'talentsCARE' },
    { num: 3, text: t('step3'), brand: 'Gemeinsam' },
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

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="flex-1 relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{step.num}</span>
                  </div>
                  <span className="text-xs font-semibold text-primary-blue uppercase tracking-wider">
                    {step.brand}
                  </span>
                  <p className="mt-2 text-slate-gray">{step.text}</p>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary-blue" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
```

### Step 5: Create Partner CTA (src/components/sections/partner/partner-cta.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Heading, Text } from '@/components/ui/typography'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ExternalLink } from 'lucide-react'

export function PartnerCTA() {
  const t = useTranslations('cta')
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="py-24 bg-gradient-hero">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <Heading as="h2" className="text-white mb-4">{t('title')}</Heading>
          <Text className="text-white/90 mb-8">{t('subtitle')}</Text>

          <Button
            asChild
            size="lg"
            className="bg-white text-primary-blue hover:bg-gray-100"
          >
            <a
              href="https://talentscare.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('button')}
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
```

### Step 6: Assemble Partner Page (src/app/[locale]/partner-talentscare/page.tsx)
```typescript
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PageHeader } from '@/components/sections/shared/page-header'
import { PartnerIntro } from '@/components/sections/partner/partner-intro'
import { ServicesGrid } from '@/components/sections/partner/services-grid'
import { CollaborationModel } from '@/components/sections/partner/collaboration-model'
import { PartnerCTA } from '@/components/sections/partner/partner-cta'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function PartnerPage() {
  const t = useTranslations('header')

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title={t('title')}
          breadcrumbLabel={t('breadcrumb')}
        />
        <PartnerIntro />
        <ServicesGrid />
        <CollaborationModel />
        <PartnerCTA />
      </main>
      <Footer />
    </>
  )
}
```

## Todo List
- [ ] Create partner.json translations (DE, EN, VI)
- [ ] Create PartnerIntro section
- [ ] Create ServicesGrid with 9 cards
- [ ] Create CollaborationModel diagram
- [ ] Create PartnerCTA section
- [ ] Assemble Partner page
- [ ] Test responsive layouts
- [ ] Test external link security attributes

## Success Criteria
- [x] All sections render correctly
- [x] 9-service grid displays properly
- [x] Collaboration model is clear
- [x] External CTA opens in new tab
- [x] Responsive on all breakpoints
- [x] Translations work in DE/EN/VI

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| External link broken | Low | Low | Verify URL, add error handling |
| Service descriptions too long | Low | Low | Truncate or use smaller text |

## Security Considerations
- External links use rel="noopener noreferrer"
- No sensitive data exposed

## Next Steps
After completion, proceed to:
- [Phase 08: Services Pages](./phase-08-services-pages.md)
