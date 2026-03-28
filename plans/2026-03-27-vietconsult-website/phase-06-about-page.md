# Phase 06: About Us Page (Uber uns)

## Context
- [Project Specification](../../CLAUDE.md) - See PAGE 2: UBER UNS
- [Plan Overview](./plan.md)
- [Previous Phase](./phase-05-homepage.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | High |
| Status | pending |
| Est. Hours | 6 |
| Dependencies | Phase 04, Phase 05 |

## Key Insights
- About page has 6 main sections per CLAUDE.md
- Includes team grid with photos
- Values section with icon cards
- Why Vietnam explanatory section
- Reuse components from homepage where possible

## Requirements
1. Page header with breadcrumb
2. Company introduction section
3. Mission section (2-card layout)
4. Company values section
5. Team grid with photos
6. Why Vietnam section

## Architecture Decisions

### Component Reuse
- Reuse Card, Section, Container from Phase 02
- Reuse animation variants from lib/animations.ts
- Create shared PageHeader component for all inner pages

### Team Grid
- Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop
- Image with overlay on hover showing role/description
- Lazy load images for performance

## Related Code Files
| File | Purpose |
|------|---------|
| `src/app/[locale]/uber-uns/page.tsx` | About page route |
| `src/components/sections/shared/page-header.tsx` | Reusable page header |
| `src/components/sections/about/who-we-are.tsx` | Company intro |
| `src/components/sections/about/our-mission.tsx` | Mission cards |
| `src/components/sections/about/values-section.tsx` | Company values |
| `src/components/sections/about/team-section.tsx` | Team grid |
| `src/components/sections/about/why-vietnam.tsx` | Vietnam explanation |
| `locales/*/about.json` | Translation files |

## Implementation Steps

### Step 1: Create About Page Translations

**locales/de/about.json**
```json
{
  "meta": {
    "title": "Über uns | VIETconsult",
    "description": "Lernen Sie VIETconsult kennen - Ihr Partner für internationale Fachkräfte aus Vietnam."
  },
  "header": {
    "title": "Über uns",
    "breadcrumb": "Willkommen",
    "usps": [
      "Seit 2010 aktiv",
      "Eigene Standorte in DE & VN",
      "KDA-zertifiziert"
    ]
  },
  "whoWeAre": {
    "title": "Wer wir sind",
    "content": "VIETconsult ist ein spezialisiertes Unternehmen für die Vermittlung und Integration von qualifizierten Fachkräften aus Vietnam nach Deutschland. Mit unserer einzigartigen Infrastruktur in beiden Ländern bieten wir einen ganzheitlichen Service von der Rekrutierung bis zur erfolgreichen Integration."
  },
  "mission": {
    "title": "Unsere Mission",
    "card1Title": "Nachhaltige Vermittlung",
    "card1Desc": "Wir verbinden nicht nur Arbeitgeber und Arbeitnehmer, sondern schaffen langfristige, erfolgreiche Arbeitsbeziehungen.",
    "card2Title": "Ethische Standards",
    "card2Desc": "Wir setzen auf faire, transparente Prozesse und respektieren die Rechte und Würde aller Beteiligten."
  },
  "values": {
    "title": "Unsere Werte",
    "value1Title": "Integrität",
    "value1Desc": "Ehrlichkeit und Transparenz in allen Geschäftsbeziehungen.",
    "value2Title": "Qualität",
    "value2Desc": "Höchste Standards in Auswahl, Ausbildung und Betreuung.",
    "value3Title": "Nachhaltigkeit",
    "value3Desc": "Langfristige Partnerschaften statt kurzfristiger Vermittlung.",
    "value4Title": "Respekt",
    "value4Desc": "Wertschätzung für alle Kulturen und Menschen."
  },
  "team": {
    "title": "Unser Team",
    "subtitle": "Erfahrene Experten in Deutschland und Vietnam, die Sie auf dem gesamten Weg begleiten."
  },
  "whyVietnam": {
    "title": "Warum Vietnam?",
    "content": "Vietnam bietet einen Pool hochmotivierter und gut ausgebildeter Fachkräfte. Die vietnamesische Kultur legt großen Wert auf harte Arbeit, Respekt und kontinuierliches Lernen - Eigenschaften, die ideal zum deutschen Arbeitsmarkt passen.",
    "point1": "Hoher Bildungsstand",
    "point2": "Starke Arbeitsmoral",
    "point3": "Kulturelle Anpassungsfähigkeit",
    "point4": "Langfristige Perspektive"
  }
}
```

### Step 2: Create Page Header Component (src/components/sections/shared/page-header.tsx)
```typescript
'use client'

import { motion } from 'framer-motion'
import { Link } from '@/navigation'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/typography'
import { ChevronRight, Check } from 'lucide-react'
import { fadeInUp } from '@/lib/animations'

interface PageHeaderProps {
  title: string
  breadcrumbLabel: string
  breadcrumbHref?: string
  usps?: string[]
}

export function PageHeader({
  title,
  breadcrumbLabel,
  breadcrumbHref = '/',
  usps,
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-hero pt-32 pb-16">
      <Container>
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-white/80 text-sm mb-6"
        >
          <Link href={breadcrumbHref} className="hover:text-white transition-colors">
            {breadcrumbLabel}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{title}</span>
        </motion.div>

        {/* Title */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Heading as="h1" className="text-white mb-6">{title}</Heading>
        </motion.div>

        {/* USPs */}
        {usps && usps.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            {usps.map((usp, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <Check className="w-5 h-5 text-primary-gold" />
                <span>{usp}</span>
              </div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  )
}
```

### Step 3: Create Who We Are Section (src/components/sections/about/who-we-are.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading, Text } from '@/components/ui/typography'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Image from 'next/image'

export function WhoWeAre() {
  const t = useTranslations('whoWeAre')
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
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about/office.jpg"
              alt="VIETconsult Office"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
```

### Step 4: Create Mission Section (src/components/sections/about/our-mission.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Heading } from '@/components/ui/typography'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Heart, Shield } from 'lucide-react'

export function OurMission() {
  const t = useTranslations('mission')
  const { ref, isInView } = useScrollAnimation()

  const cards = [
    { icon: Heart, titleKey: 'card1Title', descKey: 'card1Desc' },
    { icon: Shield, titleKey: 'card2Title', descKey: 'card2Desc' },
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
          <Heading as="h2">{t('title')}</Heading>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map(({ icon: Icon, titleKey, descKey }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full p-8">
                <div className="w-14 h-14 mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary-blue" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="mb-3">{t(titleKey)}</CardTitle>
                  <CardDescription className="text-base">{t(descKey)}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
```

### Step 5: Create Values Section (src/components/sections/about/values-section.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading } from '@/components/ui/typography'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Gem, Award, Leaf, Heart } from 'lucide-react'

export function ValuesSection() {
  const t = useTranslations('values')
  const { ref, isInView } = useScrollAnimation()

  const values = [
    { icon: Gem, titleKey: 'value1Title', descKey: 'value1Desc' },
    { icon: Award, titleKey: 'value2Title', descKey: 'value2Desc' },
    { icon: Leaf, titleKey: 'value3Title', descKey: 'value3Desc' },
    { icon: Heart, titleKey: 'value4Title', descKey: 'value4Desc' },
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
          {values.map(({ icon: Icon, titleKey, descKey }, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(titleKey)}</h3>
              <p className="text-slate-gray text-sm">{t(descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
```

### Step 6: Create Team Section (src/components/sections/about/team-section.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading, Text } from '@/components/ui/typography'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Image from 'next/image'

// Placeholder team data - replace with actual
const teamMembers = [
  { name: 'Dr. Nguyen Van A', role: 'CEO & Founder', image: '/images/team/placeholder.jpg' },
  { name: 'Maria Schmidt', role: 'Operations Director', image: '/images/team/placeholder.jpg' },
  { name: 'Tran Thi B', role: 'Recruitment Lead', image: '/images/team/placeholder.jpg' },
  { name: 'Thomas Mueller', role: 'Integration Manager', image: '/images/team/placeholder.jpg' },
]

export function TeamSection() {
  const t = useTranslations('team')
  const { ref, isInView } = useScrollAnimation()

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-slate-gray">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
```

### Step 7: Create Why Vietnam Section (src/components/sections/about/why-vietnam.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading, Text } from '@/components/ui/typography'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Check } from 'lucide-react'

export function WhyVietnam() {
  const t = useTranslations('whyVietnam')
  const { ref, isInView } = useScrollAnimation()

  const points = ['point1', 'point2', 'point3', 'point4']

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-dark flex items-center justify-center"
          >
            {/* Vietnam map or image placeholder */}
            <span className="text-white/50 text-2xl">Vietnam Map</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading as="h2" className="mb-6">{t('title')}</Heading>
            <Text className="text-lg text-slate-gray mb-8">{t('content')}</Text>

            <ul className="space-y-4">
              {points.map((pointKey, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-blue flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{t(pointKey)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
```

### Step 8: Assemble About Page (src/app/[locale]/uber-uns/page.tsx)
```typescript
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PageHeader } from '@/components/sections/shared/page-header'
import { WhoWeAre } from '@/components/sections/about/who-we-are'
import { OurMission } from '@/components/sections/about/our-mission'
import { ValuesSection } from '@/components/sections/about/values-section'
import { TeamSection } from '@/components/sections/about/team-section'
import { WhyVietnam } from '@/components/sections/about/why-vietnam'
import { CTABanner } from '@/components/sections/home/cta-banner'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function AboutPage() {
  const t = useTranslations('header')

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title={t('title')}
          breadcrumbLabel={t('breadcrumb')}
          usps={[t('usps.0'), t('usps.1'), t('usps.2')]}
        />
        <WhoWeAre />
        <OurMission />
        <ValuesSection />
        <TeamSection />
        <WhyVietnam />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
```

## Todo List
- [ ] Create about.json translations (DE, EN, VI)
- [ ] Create PageHeader shared component
- [ ] Create WhoWeAre section
- [ ] Create OurMission section
- [ ] Create ValuesSection
- [ ] Create TeamSection with grid
- [ ] Create WhyVietnam section
- [ ] Assemble About page
- [ ] Add placeholder team images
- [ ] Test responsive layouts
- [ ] Test translations

## Success Criteria
- [x] All sections render correctly
- [x] Team grid displays properly
- [x] Animations work on scroll
- [x] Responsive on all breakpoints
- [x] Translations work in DE/EN/VI
- [x] Page header with breadcrumb works

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Missing team photos | High | Low | Use placeholder images |
| Layout shift on images | Low | Medium | Use aspect ratio containers |

## Security Considerations
- No user input on this page
- Images from /public only

## Next Steps
After completion, proceed to:
- [Phase 07: Partner Page](./phase-07-partner-page.md)
