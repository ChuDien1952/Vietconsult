# Phase 09: Contact Page with Form

## Context
- [Project Specification](../../CLAUDE.md) - See PAGE 7: KONTAKT
- [Plan Overview](./plan.md)
- [Previous Phase](./phase-08-services-pages.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | High |
| Status | pending |
| Est. Hours | 6 |
| Dependencies | Phase 04 |

## Key Insights
- Contact form with DSGVO compliance required
- 4 office locations with addresses
- Hotline section for Germany and Vietnam
- Google Maps embed for locations
- Form validation and submission handling

## Requirements
1. Contact form with validation
2. DSGVO/privacy checkbox required
3. 4 office locations section (#standorte)
4. Hotlines display
5. Optional: Google Maps embed
6. Form submission handling (API route or email service)

## Architecture Decisions

### Form Handling
- React Hook Form for form state management
- Zod for validation schema
- Server Action for form submission (Next.js 14+)
- Success/error states with user feedback

### DSGVO Compliance
- Required checkbox with link to privacy policy
- No data stored without explicit consent
- Clear purpose statement

## Related Code Files
| File | Purpose |
|------|---------|
| `src/app/[locale]/kontakt/page.tsx` | Contact page |
| `src/components/sections/contact/contact-form.tsx` | Form component |
| `src/components/sections/contact/locations-section.tsx` | Office locations |
| `src/components/sections/contact/hotlines-section.tsx` | Phone numbers |
| `src/app/api/contact/route.ts` | Form API handler |
| `src/lib/validations/contact.ts` | Zod schema |
| `locales/*/contact.json` | Translations |

## Implementation Steps

### Step 1: Install Form Dependencies
```bash
npm install react-hook-form @hookform/resolvers zod
```

### Step 2: Create Contact Translations

**locales/de/contact.json**
```json
{
  "meta": {
    "title": "Kontakt | VIETconsult",
    "description": "Kontaktieren Sie VIETconsult für Fachkräfte aus Vietnam."
  },
  "header": {
    "title": "Kontakt",
    "breadcrumb": "Willkommen"
  },
  "form": {
    "title": "Schreiben Sie uns",
    "subtitle": "Wir freuen uns auf Ihre Nachricht und melden uns schnellstmöglich zurück.",
    "name": {
      "label": "Name",
      "placeholder": "Ihr Name"
    },
    "email": {
      "label": "E-Mail",
      "placeholder": "ihre.email@beispiel.de"
    },
    "phone": {
      "label": "Telefon (optional)",
      "placeholder": "+49 123 456789"
    },
    "company": {
      "label": "Unternehmen (optional)",
      "placeholder": "Ihr Unternehmen"
    },
    "message": {
      "label": "Nachricht",
      "placeholder": "Wie können wir Ihnen helfen?"
    },
    "privacy": {
      "text": "Ich stimme der Verarbeitung meiner Daten gemäß der",
      "link": "Datenschutzerklärung",
      "suffix": "zu."
    },
    "submit": "Nachricht senden",
    "sending": "Wird gesendet...",
    "success": {
      "title": "Vielen Dank!",
      "message": "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen."
    },
    "error": {
      "title": "Fehler",
      "message": "Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut.",
      "required": "Dieses Feld ist erforderlich.",
      "email": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      "privacyRequired": "Sie müssen der Datenschutzerklärung zustimmen."
    }
  },
  "locations": {
    "title": "Unsere Standorte",
    "subtitle": "Wir sind in Deutschland und Vietnam für Sie da.",
    "frankfurt": {
      "name": "Frankfurt (HQ)",
      "address": "Julius-Brecht-Str. 3",
      "city": "60433 Frankfurt am Main",
      "phone": "+49 69 8700746-80",
      "fax": "+49 69 8700746-85"
    },
    "hannover": {
      "name": "Hannover",
      "address": "Grosser Hillen 22",
      "city": "30559 Hannover",
      "phone": "+49 511 515291-80"
    },
    "wilhelmshaven": {
      "name": "Nordwest",
      "address": "Am Priel 9",
      "city": "26388 Wilhelmshaven",
      "phone": "+49 4421 18142-00"
    },
    "vietnam": {
      "name": "Vietnam (HDEU)",
      "address": "Part 11, Floor 17, 72 Le Thanh Ton",
      "city": "Ben Nghe, District 1, HCMC",
      "email": "vn-office@vietconsult.com"
    }
  },
  "hotlines": {
    "title": "Hotlines",
    "subtitle": "Direkter Kontakt zu unseren Teams",
    "germany": {
      "label": "Deutschland",
      "number": "+49 175 3889388"
    },
    "vietnam": {
      "label": "Vietnam",
      "number": "+84 987 188 667"
    },
    "email": {
      "label": "E-Mail",
      "address": "contact@vietconsult.com"
    }
  }
}
```

### Step 3: Create Validation Schema (src/lib/validations/contact.ts)
```typescript
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben.'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen haben.'),
  privacy: z.boolean().refine(val => val === true, {
    message: 'Sie müssen der Datenschutzerklärung zustimmen.',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

### Step 4: Create Contact Form (src/components/sections/contact/contact-form.tsx)
```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heading, Text } from '@/components/ui/typography'
import { contactFormSchema, ContactFormData } from '@/lib/validations/contact'
import { cn } from '@/lib/utils'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export function ContactForm() {
  const t = useTranslations('form')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClasses = 'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors'
  const labelClasses = 'block text-sm font-medium mb-2'
  const errorClasses = 'text-sm text-red-500 mt-1'

  return (
    <Card className="p-8">
      <Heading as="h2" className="mb-2">{t('title')}</Heading>
      <Text className="text-slate-gray mb-8">{t('subtitle')}</Text>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('success.title')}</h3>
            <p className="text-slate-gray">{t('success.message')}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Name & Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>{t('name.label')} *</label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder={t('name.placeholder')}
                  className={cn(inputClasses, errors.name && 'border-red-500')}
                />
                {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
              </div>

              <div>
                <label className={labelClasses}>{t('email.label')} *</label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder={t('email.placeholder')}
                  className={cn(inputClasses, errors.email && 'border-red-500')}
                />
                {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
              </div>
            </div>

            {/* Phone & Company row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>{t('phone.label')}</label>
                <input
                  type="tel"
                  {...register('phone')}
                  placeholder={t('phone.placeholder')}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>{t('company.label')}</label>
                <input
                  type="text"
                  {...register('company')}
                  placeholder={t('company.placeholder')}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className={labelClasses}>{t('message.label')} *</label>
              <textarea
                {...register('message')}
                placeholder={t('message.placeholder')}
                rows={5}
                className={cn(inputClasses, 'resize-none', errors.message && 'border-red-500')}
              />
              {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
            </div>

            {/* Privacy Checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('privacy')}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-primary-blue focus:ring-primary-blue"
                />
                <span className="text-sm text-slate-gray">
                  {t('privacy.text')}{' '}
                  <Link href="/datenschutz" className="text-primary-blue hover:underline">
                    {t('privacy.link')}
                  </Link>{' '}
                  {t('privacy.suffix')} *
                </span>
              </label>
              {errors.privacy && <p className={errorClasses}>{errors.privacy.message}</p>}
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span>{t('error.message')}</span>
              </div>
            )}

            {/* Submit Button */}
            <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full md:w-auto">
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  {t('sending')}
                </>
              ) : (
                <>
                  <Send className="mr-2 w-5 h-5" />
                  {t('submit')}
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </Card>
  )
}
```

### Step 5: Create Locations Section (src/components/sections/contact/locations-section.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Heading, Text } from '@/components/ui/typography'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { MapPin, Phone, Mail, Printer } from 'lucide-react'

export function LocationsSection() {
  const t = useTranslations('locations')
  const { ref, isInView } = useScrollAnimation()

  const locations = [
    {
      key: 'frankfurt',
      hasPhone: true,
      hasFax: true,
    },
    {
      key: 'hannover',
      hasPhone: true,
      hasFax: false,
    },
    {
      key: 'wilhelmshaven',
      hasPhone: true,
      hasFax: false,
    },
    {
      key: 'vietnam',
      hasPhone: false,
      hasEmail: true,
    },
  ]

  return (
    <Section id="standorte" variant="light">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <Heading as="h2" className="mb-4">{t('title')}</Heading>
          <Text className="text-slate-gray">{t('subtitle')}</Text>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {locations.map((location) => (
            <motion.div key={location.key} variants={staggerItem}>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary-blue" />
                  <h3 className="font-semibold">{t(`${location.key}.name`)}</h3>
                </div>

                <div className="space-y-2 text-sm text-slate-gray">
                  <p>{t(`${location.key}.address`)}</p>
                  <p>{t(`${location.key}.city`)}</p>

                  {location.hasPhone && (
                    <p className="flex items-center gap-2 mt-4">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${t(`${location.key}.phone`).replace(/\s/g, '')}`} className="hover:text-primary-blue">
                        {t(`${location.key}.phone`)}
                      </a>
                    </p>
                  )}

                  {location.hasFax && (
                    <p className="flex items-center gap-2">
                      <Printer className="w-4 h-4" />
                      {t(`${location.key}.fax`)}
                    </p>
                  )}

                  {location.hasEmail && (
                    <p className="flex items-center gap-2 mt-4">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${t(`${location.key}.email`)}`} className="hover:text-primary-blue">
                        {t(`${location.key}.email`)}
                      </a>
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
```

### Step 6: Create Hotlines Section (src/components/sections/contact/hotlines-section.tsx)
```typescript
'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading, Text } from '@/components/ui/typography'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Phone, Mail } from 'lucide-react'

export function HotlinesSection() {
  const t = useTranslations('hotlines')
  const { ref, isInView } = useScrollAnimation()

  return (
    <Section>
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <Heading as="h2" className="mb-4">{t('title')}</Heading>
          <Text className="text-slate-gray">{t('subtitle')}</Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Germany */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary-blue" />
            </div>
            <span className="text-sm text-slate-gray">{t('germany.label')}</span>
            <a
              href={`tel:${t('germany.number').replace(/\s/g, '')}`}
              className="block text-xl font-semibold text-primary-blue hover:underline mt-1"
            >
              {t('germany.number')}
            </a>
          </motion.div>

          {/* Vietnam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary-red" />
            </div>
            <span className="text-sm text-slate-gray">{t('vietnam.label')}</span>
            <a
              href={`tel:${t('vietnam.number').replace(/\s/g, '')}`}
              className="block text-xl font-semibold text-primary-red hover:underline mt-1"
            >
              {t('vietnam.number')}
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-100 flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary-gold" />
            </div>
            <span className="text-sm text-slate-gray">{t('email.label')}</span>
            <a
              href={`mailto:${t('email.address')}`}
              className="block text-xl font-semibold text-primary-blue hover:underline mt-1"
            >
              {t('email.address')}
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
```

### Step 7: Create Contact API Route (src/app/api/contact/route.ts)
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // TODO: Implement actual email sending
    // Options:
    // 1. Resend: https://resend.com
    // 2. SendGrid: https://sendgrid.com
    // 3. Nodemailer with SMTP

    console.log('Contact form submission:', validatedData)

    // For now, just return success
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Invalid form data' },
      { status: 400 }
    )
  }
}
```

### Step 8: Assemble Contact Page (src/app/[locale]/kontakt/page.tsx)
```typescript
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PageHeader } from '@/components/sections/shared/page-header'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ContactForm } from '@/components/sections/contact/contact-form'
import { LocationsSection } from '@/components/sections/contact/locations-section'
import { HotlinesSection } from '@/components/sections/contact/hotlines-section'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function ContactPage() {
  const t = useTranslations('header')

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title={t('title')}
          breadcrumbLabel={t('breadcrumb')}
        />

        <Section>
          <Container size="narrow">
            <ContactForm />
          </Container>
        </Section>

        <LocationsSection />
        <HotlinesSection />
      </main>
      <Footer />
    </>
  )
}
```

## Todo List
- [ ] Install react-hook-form and zod
- [ ] Create contact.json translations (DE, EN, VI)
- [ ] Create contact form validation schema
- [ ] Create ContactForm component
- [ ] Create LocationsSection
- [ ] Create HotlinesSection
- [ ] Create Contact API route
- [ ] Assemble Contact page
- [ ] Test form validation
- [ ] Test form submission
- [ ] Test responsive layouts
- [ ] Test DSGVO checkbox

## Success Criteria
- [x] Form validates correctly
- [x] DSGVO checkbox is required
- [x] Success/error states display properly
- [x] All locations display correctly
- [x] Hotlines are clickable (tel: links)
- [x] Responsive on all breakpoints
- [x] Translations work in DE/EN/VI

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Form spam | High | Medium | Add reCAPTCHA in production |
| Email delivery fails | Medium | High | Use reliable email service |
| Validation messages wrong lang | Low | Medium | Use translated messages |

## Security Considerations
- Validate all input server-side
- Sanitize data before storage/email
- Rate limit API endpoint
- Add CAPTCHA for spam prevention
- DSGVO compliant data handling

## Next Steps
After completion, proceed to:
- [Phase 10: Visual Assets](./phase-10-visual-assets.md)
