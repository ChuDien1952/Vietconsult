# Phase 08: Services Pages

## Context
- [Project Specification](../../CLAUDE.md) - See PAGE 6: SERVICES
- [Plan Overview](./plan.md)
- [Previous Phase](./phase-07-partner-page.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | High |
| Status | pending |
| Est. Hours | 10 |
| Dependencies | Phase 04, Phase 06 |

## Key Insights
- Services has 1 overview page + 4 detail pages
- Detail pages share common layout structure
- Each service has specific content and icons
- Related services sidebar for cross-linking

## Requirements
1. Services overview page with 4 service cards
2. Rekrutierung & Auswahl detail page
3. Sprach- & kulturelle Bildung detail page
4. Anerkennung detail page
5. Relocation & Integration detail page
6. Shared service page layout component

## Architecture Decisions

### Shared Service Layout
- Create reusable ServicePageLayout component
- Hero, main content, related services, CTA
- Dynamic content per service

### Service Card Pattern
```typescript
interface ServiceCard {
  slug: string
  icon: LucideIcon
  translationKey: string
}
```

## Related Code Files
| File | Purpose |
|------|---------|
| `src/app/[locale]/services/page.tsx` | Services overview |
| `src/app/[locale]/services/rekrutierung-auswahl/page.tsx` | Recruitment |
| `src/app/[locale]/services/sprach-kulturelle-bildung/page.tsx` | Language |
| `src/app/[locale]/services/anerkennung/page.tsx` | Recognition |
| `src/app/[locale]/services/relocation-integration/page.tsx` | Relocation |
| `src/components/sections/services/service-page-layout.tsx` | Shared layout |
| `src/components/sections/services/service-card.tsx` | Card component |
| `src/components/sections/services/related-services.tsx` | Sidebar |
| `locales/*/services.json` | Translations |

## Implementation Steps

### Step 1: Create Services Translations

**locales/de/services.json**
```json
{
  "meta": {
    "title": "Services | VIETconsult",
    "description": "Unsere Services von der Rekrutierung bis zur Integration."
  },
  "overview": {
    "title": "Unsere Services",
    "subtitle": "Ganzheitliche Lösungen für Ihren Fachkräftebedarf",
    "description": "Von der Suche nach qualifizierten Kandidaten über die sprachliche und kulturelle Vorbereitung bis zur erfolgreichen Integration in Deutschland - wir begleiten Sie und Ihre neuen Mitarbeiter auf dem gesamten Weg."
  },
  "cards": {
    "recruitment": {
      "title": "Rekrutierung & Auswahl",
      "shortDesc": "Gezielte Suche und sorgfältige Auswahl qualifizierter Fachkräfte aus Vietnam."
    },
    "language": {
      "title": "Sprach- & kulturelle Bildung",
      "shortDesc": "Intensive Sprachkurse und kulturelle Vorbereitung in unserer eigenen Schule."
    },
    "recognition": {
      "title": "Anerkennung",
      "shortDesc": "Professionelle Begleitung durch den Anerkennungsprozess in Deutschland."
    },
    "relocation": {
      "title": "Relocation & Integration",
      "shortDesc": "Umfassende Unterstützung bei Umzug und langfristiger Integration."
    }
  },
  "recruitment": {
    "hero": {
      "title": "Rekrutierung & Auswahl",
      "subtitle": "Wir finden die perfekten Kandidaten für Ihr Unternehmen"
    },
    "content": {
      "intro": "Unsere Rekrutierungsexperten in Vietnam haben tiefgreifendes Verständnis für beide Kulturen und den deutschen Arbeitsmarkt. Wir identifizieren qualifizierte Fachkräfte, die nicht nur fachlich überzeugen, sondern auch kulturell zu Ihrem Unternehmen passen.",
      "process": {
        "title": "Unser Rekrutierungsprozess",
        "step1": {
          "title": "Bedarfsanalyse",
          "desc": "Detaillierte Analyse Ihrer Anforderungen und Unternehmenskultur."
        },
        "step2": {
          "title": "Kandidatensuche",
          "desc": "Aktive Suche in unserem Netzwerk und über verschiedene Kanäle."
        },
        "step3": {
          "title": "Vorauswahl",
          "desc": "Gründliche Bewertung von Qualifikationen und Soft Skills."
        },
        "step4": {
          "title": "Präsentation",
          "desc": "Vorstellung geeigneter Kandidaten mit detaillierten Profilen."
        }
      },
      "benefits": {
        "title": "Ihre Vorteile",
        "point1": "Zugang zu vorab geprüften Kandidaten",
        "point2": "Zeitersparnis durch Vorauswahl",
        "point3": "Kulturelle Passung garantiert",
        "point4": "Transparenter Prozess"
      }
    }
  },
  "language": {
    "hero": {
      "title": "Sprach- & kulturelle Bildung",
      "subtitle": "Intensive Vorbereitung für den erfolgreichen Start in Deutschland"
    },
    "content": {
      "intro": "In unserer eigenen Sprachschule in Vietnam bereiten wir Kandidaten optimal auf das Leben und Arbeiten in Deutschland vor. Neben intensivem Deutschunterricht vermitteln wir kulturelles Wissen und praktische Fähigkeiten.",
      "program": {
        "title": "Unser Programm",
        "item1": {
          "title": "Sprachkurse",
          "desc": "Von A1 bis B2 mit muttersprachlichen Lehrern."
        },
        "item2": {
          "title": "Kulturtraining",
          "desc": "Deutsche Arbeitswelt, Umgangsformen und Alltag."
        },
        "item3": {
          "title": "Fachsprache",
          "desc": "Branchenspezifische Terminologie und Kommunikation."
        },
        "item4": {
          "title": "Prüfungsvorbereitung",
          "desc": "Gezielte Vorbereitung auf Sprachprüfungen."
        }
      },
      "benefits": {
        "title": "Ihre Vorteile",
        "point1": "Zertifizierte Deutschkurse",
        "point2": "Kulturelle Integration vor Ankunft",
        "point3": "Fachspezifische Vorbereitung",
        "point4": "Eigene Infrastruktur in Vietnam"
      }
    }
  },
  "recognition": {
    "hero": {
      "title": "Anerkennung",
      "subtitle": "Professionelle Begleitung durch den Anerkennungsprozess"
    },
    "content": {
      "intro": "Die Anerkennung ausländischer Berufsqualifikationen ist ein wichtiger Schritt für die erfolgreiche Integration. Wir unterstützen bei der Zusammenstellung aller Unterlagen und begleiten den gesamten Prozess.",
      "process": {
        "title": "Der Anerkennungsprozess",
        "step1": {
          "title": "Dokumentenprüfung",
          "desc": "Analyse und Aufbereitung aller relevanten Dokumente."
        },
        "step2": {
          "title": "Antragstellung",
          "desc": "Professionelle Einreichung bei zuständigen Behörden."
        },
        "step3": {
          "title": "Nachverfolgung",
          "desc": "Aktives Monitoring und Kommunikation mit Behörden."
        },
        "step4": {
          "title": "Nachqualifizierung",
          "desc": "Organisation von Anpassungsmaßnahmen wenn nötig."
        }
      },
      "benefits": {
        "title": "Ihre Vorteile",
        "point1": "Erfahrung mit deutschen Behörden",
        "point2": "Hohe Erfolgsquote",
        "point3": "Zeitoptimierter Prozess",
        "point4": "Vollständige Begleitung"
      }
    }
  },
  "relocation": {
    "hero": {
      "title": "Relocation & Integration",
      "subtitle": "Umfassende Unterstützung für einen erfolgreichen Start"
    },
    "content": {
      "intro": "Der Umzug nach Deutschland ist ein großer Schritt. Wir unterstützen bei allen praktischen Aspekten und sorgen für eine nachhaltige Integration in Unternehmen und Gesellschaft.",
      "services": {
        "title": "Unsere Leistungen",
        "item1": {
          "title": "Ankunftsservice",
          "desc": "Abholung und Unterstützung bei ersten Schritten."
        },
        "item2": {
          "title": "Wohnungssuche",
          "desc": "Hilfe bei der Suche nach geeignetem Wohnraum."
        },
        "item3": {
          "title": "Behördengänge",
          "desc": "Begleitung bei Anmeldung und Behördenangelegenheiten."
        },
        "item4": {
          "title": "Integration im Betrieb",
          "desc": "Onboarding-Unterstützung und regelmäßige Check-ins."
        }
      },
      "benefits": {
        "title": "Ihre Vorteile",
        "point1": "Rundum-Betreuung",
        "point2": "Schnelle Eingewöhnung",
        "point3": "Langfristige Begleitung",
        "point4": "Ansprechpartner vor Ort"
      }
    }
  },
  "relatedServices": {
    "title": "Weitere Services"
  }
}
```

### Step 2: Create Service Card (src/components/sections/services/service-card.tsx)
```typescript
'use client'

import { motion } from 'framer-motion'
import { Link } from '@/navigation'
import { Card } from '@/components/ui/card'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  href: string
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export function ServiceCard({ href, icon: Icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={href}>
        <Card className="p-8 h-full group cursor-pointer">
          <div className="w-14 h-14 mb-6 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-primary-blue transition-colors">
            <Icon className="w-7 h-7 text-primary-blue group-hover:text-white transition-colors" />
          </div>

          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-blue transition-colors">
            {title}
          </h3>

          <p className="text-slate-gray mb-6">{description}</p>

          <div className="flex items-center text-primary-blue font-medium">
            <span className="group-hover:mr-2 transition-all">Mehr erfahren</span>
            <ArrowRight className="w-5 h-5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
```

### Step 3: Create Services Overview Page (src/app/[locale]/services/page.tsx)
```typescript
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PageHeader } from '@/components/sections/shared/page-header'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Text } from '@/components/ui/typography'
import { ServiceCard } from '@/components/sections/services/service-card'
import { CTABanner } from '@/components/sections/home/cta-banner'
import { Search, BookOpen, Award, Plane } from 'lucide-react'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function ServicesPage() {
  const t = useTranslations('overview')
  const tCards = useTranslations('cards')

  const services = [
    { slug: 'rekrutierung-auswahl', icon: Search, key: 'recruitment' },
    { slug: 'sprach-kulturelle-bildung', icon: BookOpen, key: 'language' },
    { slug: 'anerkennung', icon: Award, key: 'recognition' },
    { slug: 'relocation-integration', icon: Plane, key: 'relocation' },
  ]

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title={t('title')}
          breadcrumbLabel="Willkommen"
        />

        <Section>
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Text className="text-lg text-slate-gray">{t('description')}</Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  icon={service.icon}
                  title={tCards(`${service.key}.title`)}
                  description={tCards(`${service.key}.shortDesc`)}
                  index={index}
                />
              ))}
            </div>
          </Container>
        </Section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
```

### Step 4: Create Service Page Layout (src/components/sections/services/service-page-layout.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading, Text } from '@/components/ui/typography'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@/navigation'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Check, ArrowRight, LucideIcon } from 'lucide-react'
import { RelatedServices } from './related-services'

interface ProcessStep {
  title: string
  desc: string
}

interface ServicePageLayoutProps {
  translationKey: string
  currentSlug: string
  processSteps?: ProcessStep[]
  programItems?: ProcessStep[]
  benefits: string[]
}

export function ServicePageLayout({
  translationKey,
  currentSlug,
  processSteps,
  programItems,
  benefits,
}: ServicePageLayoutProps) {
  const t = useTranslations(translationKey)
  const { ref, isInView } = useScrollAnimation()

  const items = processSteps || programItems || []
  const itemsTitle = processSteps ? t('content.process.title') : t('content.program.title') || t('content.services.title')

  return (
    <>
      {/* Intro Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
              >
                <Text className="text-lg text-slate-gray leading-relaxed mb-8">
                  {t('content.intro')}
                </Text>

                {/* Process/Program Steps */}
                <Heading as="h2" className="mb-6">{itemsTitle}</Heading>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 h-full">
                        <div className="w-10 h-10 mb-4 rounded-full bg-gradient-hero flex items-center justify-center">
                          <span className="text-white font-semibold">{index + 1}</span>
                        </div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-slate-gray text-sm">{item.desc}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits */}
                <Heading as="h2" className="mb-6">{t('content.benefits.title')}</Heading>

                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <RelatedServices currentSlug={currentSlug} />

              <Card className="p-6 mt-6 bg-gradient-hero text-white">
                <h3 className="font-semibold mb-3">Interesse geweckt?</h3>
                <p className="text-white/90 text-sm mb-4">
                  Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
                </p>
                <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary-blue">
                  <Link href="/kontakt">
                    Kontakt aufnehmen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
```

### Step 5: Create Related Services (src/components/sections/services/related-services.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { Card } from '@/components/ui/card'
import { Search, BookOpen, Award, Plane, ArrowRight } from 'lucide-react'

const allServices = [
  { slug: 'rekrutierung-auswahl', icon: Search, key: 'recruitment' },
  { slug: 'sprach-kulturelle-bildung', icon: BookOpen, key: 'language' },
  { slug: 'anerkennung', icon: Award, key: 'recognition' },
  { slug: 'relocation-integration', icon: Plane, key: 'relocation' },
]

interface RelatedServicesProps {
  currentSlug: string
}

export function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const t = useTranslations('relatedServices')
  const tCards = useTranslations('cards')

  const relatedServices = allServices.filter(s => s.slug !== currentSlug)

  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">{t('title')}</h3>
      <ul className="space-y-3">
        {relatedServices.map(({ slug, icon: Icon, key }) => (
          <li key={slug}>
            <Link
              href={`/services/${slug}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <Icon className="w-5 h-5 text-primary-blue" />
              <span className="flex-1 text-sm font-medium">{tCards(`${key}.title`)}</span>
              <ArrowRight className="w-4 h-4 text-primary-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
```

### Step 6: Create Recruitment Page (src/app/[locale]/services/rekrutierung-auswahl/page.tsx)
```typescript
import { useTranslations } from 'next-intl'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PageHeader } from '@/components/sections/shared/page-header'
import { ServicePageLayout } from '@/components/sections/services/service-page-layout'
import { CTABanner } from '@/components/sections/home/cta-banner'

export default function RecruitmentPage() {
  const t = useTranslations('recruitment')

  const processSteps = [
    { title: t('content.process.step1.title'), desc: t('content.process.step1.desc') },
    { title: t('content.process.step2.title'), desc: t('content.process.step2.desc') },
    { title: t('content.process.step3.title'), desc: t('content.process.step3.desc') },
    { title: t('content.process.step4.title'), desc: t('content.process.step4.desc') },
  ]

  const benefits = [
    t('content.benefits.point1'),
    t('content.benefits.point2'),
    t('content.benefits.point3'),
    t('content.benefits.point4'),
  ]

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title={t('hero.title')}
          breadcrumbLabel="Services"
          breadcrumbHref="/services"
        />
        <ServicePageLayout
          translationKey="recruitment"
          currentSlug="rekrutierung-auswahl"
          processSteps={processSteps}
          benefits={benefits}
        />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
```

### Step 7: Create Language Page (src/app/[locale]/services/sprach-kulturelle-bildung/page.tsx)
```typescript
import { useTranslations } from 'next-intl'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PageHeader } from '@/components/sections/shared/page-header'
import { ServicePageLayout } from '@/components/sections/services/service-page-layout'
import { CTABanner } from '@/components/sections/home/cta-banner'

export default function LanguagePage() {
  const t = useTranslations('language')

  const programItems = [
    { title: t('content.program.item1.title'), desc: t('content.program.item1.desc') },
    { title: t('content.program.item2.title'), desc: t('content.program.item2.desc') },
    { title: t('content.program.item3.title'), desc: t('content.program.item3.desc') },
    { title: t('content.program.item4.title'), desc: t('content.program.item4.desc') },
  ]

  const benefits = [
    t('content.benefits.point1'),
    t('content.benefits.point2'),
    t('content.benefits.point3'),
    t('content.benefits.point4'),
  ]

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title={t('hero.title')}
          breadcrumbLabel="Services"
          breadcrumbHref="/services"
        />
        <ServicePageLayout
          translationKey="language"
          currentSlug="sprach-kulturelle-bildung"
          programItems={programItems}
          benefits={benefits}
        />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
```

### Step 8: Create Recognition and Relocation Pages
Similar structure to above, using appropriate translation keys:
- `src/app/[locale]/services/anerkennung/page.tsx`
- `src/app/[locale]/services/relocation-integration/page.tsx`

## Todo List
- [ ] Create services.json translations (DE, EN, VI)
- [ ] Create ServiceCard component
- [ ] Create Services overview page
- [ ] Create ServicePageLayout shared component
- [ ] Create RelatedServices sidebar
- [ ] Create Recruitment page
- [ ] Create Language page
- [ ] Create Recognition page
- [ ] Create Relocation page
- [ ] Test all service page links
- [ ] Test responsive layouts
- [ ] Test translations

## Success Criteria
- [x] Overview page shows all 4 services
- [x] Each detail page renders correctly
- [x] Related services sidebar works
- [x] Navigation between services works
- [x] Responsive on all breakpoints
- [x] Translations work in DE/EN/VI

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Too much duplicate code | Medium | Low | Use shared layout component |
| Long translation files | Medium | Low | Split if needed |
| Broken internal links | Low | Medium | Test all navigation paths |

## Security Considerations
- No user input on these pages
- Internal links only

## Next Steps
After completion, proceed to:
- [Phase 09: Contact Page](./phase-09-contact-page.md)
