# Phase 03: i18n Setup & Translation Files

## Context
- [Project Specification](../../CLAUDE.md)
- [Plan Overview](./plan.md)
- [Previous Phase](./phase-02-core-components.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | Critical |
| Status | pending |
| Est. Hours | 6 |
| Dependencies | Phase 01 |

## Key Insights
- next-intl v3.11+ supports App Router natively with middleware
- URL structure: `/de/`, `/en/`, `/vi/` per CLAUDE.md
- German (DE) is primary/default locale
- Translations structured by page/feature for easier maintenance
- Server Components can use `getTranslations` directly

## Requirements
1. Install and configure next-intl
2. Setup middleware for locale detection and routing
3. Create translation file structure
4. Implement all translations for DE, EN, VI
5. Create useTranslation hook wrapper for client components

## Architecture Decisions

### Translation File Structure
```
/locales
├── de/
│   ├── common.json      # Shared (nav, footer, buttons)
│   ├── home.json        # Homepage
│   ├── about.json       # Uber uns
│   ├── partner.json     # Partner page
│   ├── services.json    # All services pages
│   ├── contact.json     # Contact page
│   └── legal.json       # Impressum, Datenschutz
├── en/
│   └── (same structure)
└── vi/
    └── (same structure)
```

### Locale Configuration
- Default: `de`
- Supported: `de`, `en`, `vi`
- Fallback: `de` for missing translations
- URL prefix: Always show locale in URL

## Related Code Files
| File | Purpose |
|------|---------|
| `src/i18n.ts` | i18n configuration |
| `src/middleware.ts` | Locale middleware |
| `src/navigation.ts` | Localized navigation helpers |
| `locales/de/*.json` | German translations |
| `locales/en/*.json` | English translations |
| `locales/vi/*.json` | Vietnamese translations |

## Implementation Steps

### Step 1: Install next-intl
```bash
npm install next-intl
```

### Step 2: Create i18n Configuration (src/i18n.ts)
```typescript
import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['de', 'en', 'vi'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'de'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound()

  return {
    messages: {
      ...(await import(`../locales/${locale}/common.json`)).default,
      ...(await import(`../locales/${locale}/home.json`)).default,
      ...(await import(`../locales/${locale}/about.json`)).default,
      ...(await import(`../locales/${locale}/partner.json`)).default,
      ...(await import(`../locales/${locale}/services.json`)).default,
      ...(await import(`../locales/${locale}/contact.json`)).default,
      ...(await import(`../locales/${locale}/legal.json`)).default,
    },
  }
})
```

### Step 3: Create Middleware (src/middleware.ts)
```typescript
import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
})

export const config = {
  matcher: ['/', '/(de|en|vi)/:path*'],
}
```

### Step 4: Create Navigation Helpers (src/navigation.ts)
```typescript
import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { locales } from './i18n'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales })
```

### Step 5: Update Next.js Config (next.config.mjs)
```javascript
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withNextIntl(nextConfig)
```

### Step 6: Create Common Translations

**locales/de/common.json**
```json
{
  "nav": {
    "home": "Willkommen",
    "about": "Über uns",
    "partner": "Partner",
    "benefits": "Vorteile",
    "quality": "Gütezeichen",
    "services": "Services",
    "contact": "Kontakt"
  },
  "services": {
    "recruitment": "Rekrutierung & Auswahl",
    "language": "Sprach- & kulturelle Bildung",
    "recognition": "Anerkennung",
    "relocation": "Relocation & Integration"
  },
  "footer": {
    "company": "Unternehmen",
    "info": "Informationen",
    "contact": "Kontakt",
    "legal": "Impressum",
    "privacy": "Datenschutz",
    "copyright": "© 2026 VIETconsult. Alle Rechte vorbehalten.",
    "description": "Ganzheitliche Lösungen für internationale Fachkräfte aus Vietnam."
  },
  "buttons": {
    "contact": "Kontakt aufnehmen",
    "learnMore": "Mehr erfahren",
    "getStarted": "Jetzt starten",
    "readMore": "Weiterlesen"
  },
  "language": {
    "de": "Deutsch",
    "en": "English",
    "vi": "Tiếng Việt"
  }
}
```

**locales/en/common.json**
```json
{
  "nav": {
    "home": "Welcome",
    "about": "About Us",
    "partner": "Partner",
    "benefits": "Benefits",
    "quality": "Quality Seal",
    "services": "Services",
    "contact": "Contact"
  },
  "services": {
    "recruitment": "Recruitment & Selection",
    "language": "Language & Cultural Training",
    "recognition": "Recognition",
    "relocation": "Relocation & Integration"
  },
  "footer": {
    "company": "Company",
    "info": "Information",
    "contact": "Contact",
    "legal": "Legal Notice",
    "privacy": "Privacy Policy",
    "copyright": "© 2026 VIETconsult. All rights reserved.",
    "description": "Comprehensive solutions for international skilled workers from Vietnam."
  },
  "buttons": {
    "contact": "Contact Us",
    "learnMore": "Learn More",
    "getStarted": "Get Started",
    "readMore": "Read More"
  },
  "language": {
    "de": "Deutsch",
    "en": "English",
    "vi": "Tiếng Việt"
  }
}
```

**locales/vi/common.json**
```json
{
  "nav": {
    "home": "Trang chủ",
    "about": "Về chúng tôi",
    "partner": "Đối tác",
    "benefits": "Lợi ích",
    "quality": "Chứng nhận",
    "services": "Dịch vụ",
    "contact": "Liên hệ"
  },
  "services": {
    "recruitment": "Tuyển dụng & Lựa chọn",
    "language": "Đào tạo Ngôn ngữ & Văn hóa",
    "recognition": "Công nhận",
    "relocation": "Di chuyển & Hòa nhập"
  },
  "footer": {
    "company": "Công ty",
    "info": "Thông tin",
    "contact": "Liên hệ",
    "legal": "Thông tin pháp lý",
    "privacy": "Chính sách bảo mật",
    "copyright": "© 2026 VIETconsult. Đã đăng ký bản quyền.",
    "description": "Giải pháp toàn diện cho lao động chuyên môn quốc tế từ Việt Nam."
  },
  "buttons": {
    "contact": "Liên hệ ngay",
    "learnMore": "Tìm hiểu thêm",
    "getStarted": "Bắt đầu ngay",
    "readMore": "Đọc tiếp"
  },
  "language": {
    "de": "Deutsch",
    "en": "English",
    "vi": "Tiếng Việt"
  }
}
```

### Step 7: Create Home Translations

**locales/de/home.json**
```json
{
  "hero": {
    "title": "Ganzheitliche Lösungen für Fachkräfte aus Vietnam.",
    "subtitle": "Von der Bedarfsanalyse in Deutschland über die eigene Sprachschule in Vietnam bis zur langfristigen Begleitung im Betrieb.",
    "cta": "Kontakt aufnehmen"
  },
  "stats": {
    "integration": "Nachhaltige Integration",
    "integrationValue": "100%",
    "candidates": "Sorgfältig ausgewählte Kandidaten",
    "candidatesValue": "1.200+"
  },
  "vision": {
    "title": "Unsere Vision",
    "card1Title": "Nachhaltige Fachkräftegewinnung",
    "card1Desc": "Wir verbinden qualifizierte Fachkräfte aus Vietnam mit deutschen Unternehmen.",
    "card2Title": "Verantwortungsvolle Zusammenarbeit",
    "card2Desc": "Ethische Standards und transparente Prozesse in allen Phasen.",
    "card3Title": "Erfolgreiche Integration",
    "card3Desc": "Langfristige Begleitung für nachhaltige Arbeitsbeziehungen."
  },
  "servicesOverview": {
    "title": "Unsere Services",
    "subtitle": "Von der Rekrutierung bis zur Integration – alles aus einer Hand.",
    "stat1": "100% rechtssicherer Prozess",
    "stat2": "4 Schritte bis zur Integration",
    "stat3": "Langfristige Mitarbeiterbindung"
  },
  "team": {
    "title": "Unser Team",
    "subtitle": "Erfahrene Experten in Deutschland und Vietnam.",
    "cta": "Team kennenlernen"
  },
  "benefits": {
    "title": "Ihre Vorteile",
    "card1Title": "Zeitersparnis",
    "card1Desc": "Wir übernehmen den gesamten Rekrutierungsprozess.",
    "card2Title": "Langfristiger Mehrwert",
    "card2Desc": "Motivierte Fachkräfte mit langfristiger Perspektive.",
    "card3Title": "Persönliche Begleitung",
    "card3Desc": "Kontinuierliche Unterstützung vor und nach der Ankunft.",
    "card4Title": "Erfolg durch Integration",
    "card4Desc": "Umfassende Integrationsprogramme für nachhaltigen Erfolg."
  },
  "partners": {
    "title": "Unsere Partner",
    "rating": "5.0 Google-Bewertung",
    "cta": "Partner anzeigen"
  },
  "process": {
    "title": "Unser Prozess",
    "subtitle": "In 4 Schritten zu Ihren neuen Mitarbeitern.",
    "step1Title": "Kandidatensuche",
    "step1Desc": "Gezielte Suche und Auswahl qualifizierter Kandidaten.",
    "step2Title": "Sprach- & kult. Bildung",
    "step2Desc": "Intensive Sprachkurse und kulturelle Vorbereitung.",
    "step3Title": "Anerkennung",
    "step3Desc": "Begleitung durch den Anerkennungsprozess.",
    "step4Title": "Ankunft in Deutschland",
    "step4Desc": "Unterstützung bei Relocation und Integration."
  },
  "infrastructure": {
    "title": "Unsere Infrastruktur",
    "vietnam": "Eigene Rekrutierungsbüros und Trainingszentren in Vietnam",
    "germany": "Standorte in Frankfurt, Hannover und Wilhelmshaven"
  },
  "specializedAreas": {
    "title": "Fachbereiche",
    "card1Title": "Pflege & Medizin",
    "card1Desc": "Qualifizierte Pflegefachkräfte für Krankenhäuser und Pflegeeinrichtungen.",
    "card2Title": "Technik & Industrie",
    "card2Desc": "Fachkräfte für technische und industrielle Bereiche.",
    "card3Title": "Azubi-Programm",
    "card3Desc": "Ausbildungsprogramme für motivierte junge Talente."
  },
  "why": {
    "title": "Warum VIETconsult?",
    "point1": "Über 10 Jahre Erfahrung",
    "point2": "Eigene Sprachschule in Vietnam",
    "point3": "KDA-Gütezeichen für ethische Rekrutierung",
    "point4": "Ganzheitliche Betreuung von A bis Z"
  },
  "cta": {
    "title": "Jetzt gemeinsam starten",
    "subtitle": "Kontaktieren Sie uns für ein kostenloses Erstgespräch.",
    "primary": "Kostenloses Erstgespräch",
    "secondary": "Mehr über Standorte"
  }
}
```

**locales/en/home.json**
```json
{
  "hero": {
    "title": "Comprehensive Solutions for Skilled Workers from Vietnam.",
    "subtitle": "From needs analysis in Germany through our own language school in Vietnam to long-term support in the company.",
    "cta": "Contact Us"
  },
  "stats": {
    "integration": "Sustainable Integration",
    "integrationValue": "100%",
    "candidates": "Carefully Selected Candidates",
    "candidatesValue": "1,200+"
  },
  "vision": {
    "title": "Our Vision",
    "card1Title": "Sustainable Recruitment",
    "card1Desc": "We connect qualified professionals from Vietnam with German companies.",
    "card2Title": "Responsible Collaboration",
    "card2Desc": "Ethical standards and transparent processes at all stages.",
    "card3Title": "Successful Integration",
    "card3Desc": "Long-term support for sustainable working relationships."
  },
  "servicesOverview": {
    "title": "Our Services",
    "subtitle": "From recruitment to integration - everything from one source.",
    "stat1": "100% legally compliant process",
    "stat2": "4 steps to integration",
    "stat3": "Long-term employee retention"
  },
  "team": {
    "title": "Our Team",
    "subtitle": "Experienced experts in Germany and Vietnam.",
    "cta": "Meet the Team"
  },
  "benefits": {
    "title": "Your Benefits",
    "card1Title": "Time Savings",
    "card1Desc": "We handle the entire recruitment process.",
    "card2Title": "Long-term Value",
    "card2Desc": "Motivated professionals with long-term perspective.",
    "card3Title": "Personal Support",
    "card3Desc": "Continuous support before and after arrival.",
    "card4Title": "Success through Integration",
    "card4Desc": "Comprehensive integration programs for sustainable success."
  },
  "partners": {
    "title": "Our Partners",
    "rating": "5.0 Google Rating",
    "cta": "View Partners"
  },
  "process": {
    "title": "Our Process",
    "subtitle": "4 steps to your new employees.",
    "step1Title": "Candidate Search",
    "step1Desc": "Targeted search and selection of qualified candidates.",
    "step2Title": "Language & Cultural Training",
    "step2Desc": "Intensive language courses and cultural preparation.",
    "step3Title": "Recognition",
    "step3Desc": "Support through the recognition process.",
    "step4Title": "Arrival in Germany",
    "step4Desc": "Support with relocation and integration."
  },
  "infrastructure": {
    "title": "Our Infrastructure",
    "vietnam": "Own recruitment offices and training centers in Vietnam",
    "germany": "Locations in Frankfurt, Hanover and Wilhelmshaven"
  },
  "specializedAreas": {
    "title": "Specialized Areas",
    "card1Title": "Healthcare & Medicine",
    "card1Desc": "Qualified nursing professionals for hospitals and care facilities.",
    "card2Title": "Technology & Industry",
    "card2Desc": "Skilled workers for technical and industrial sectors.",
    "card3Title": "Apprenticeship Program",
    "card3Desc": "Training programs for motivated young talents."
  },
  "why": {
    "title": "Why VIETconsult?",
    "point1": "Over 10 years of experience",
    "point2": "Own language school in Vietnam",
    "point3": "KDA quality seal for ethical recruitment",
    "point4": "Comprehensive support from A to Z"
  },
  "cta": {
    "title": "Get Started Together",
    "subtitle": "Contact us for a free initial consultation.",
    "primary": "Free Consultation",
    "secondary": "More About Locations"
  }
}
```

**locales/vi/home.json**
```json
{
  "hero": {
    "title": "Giải pháp toàn diện cho lao động chuyên môn từ Việt Nam.",
    "subtitle": "Từ phân tích nhu cầu tại Đức qua trường ngôn ngữ riêng tại Việt Nam đến hỗ trợ dài hạn trong doanh nghiệp.",
    "cta": "Liên hệ ngay"
  },
  "stats": {
    "integration": "Hòa nhập Bền vững",
    "integrationValue": "100%",
    "candidates": "Ứng viên được Lựa chọn Kỹ lưỡng",
    "candidatesValue": "1.200+"
  },
  "vision": {
    "title": "Tầm nhìn của chúng tôi",
    "card1Title": "Tuyển dụng Bền vững",
    "card1Desc": "Chúng tôi kết nối chuyên gia từ Việt Nam với doanh nghiệp Đức.",
    "card2Title": "Hợp tác Có trách nhiệm",
    "card2Desc": "Tiêu chuẩn đạo đức và quy trình minh bạch trong mọi giai đoạn.",
    "card3Title": "Hòa nhập Thành công",
    "card3Desc": "Hỗ trợ dài hạn cho mối quan hệ công việc bền vững."
  },
  "servicesOverview": {
    "title": "Dịch vụ của chúng tôi",
    "subtitle": "Từ tuyển dụng đến hòa nhập - tất cả từ một nguồn.",
    "stat1": "100% quy trình hợp pháp",
    "stat2": "4 bước đến hòa nhập",
    "stat3": "Giữ chân nhân viên dài hạn"
  },
  "team": {
    "title": "Đội ngũ của chúng tôi",
    "subtitle": "Chuyên gia giàu kinh nghiệm tại Đức và Việt Nam.",
    "cta": "Gặp gỡ đội ngũ"
  },
  "benefits": {
    "title": "Lợi ích của bạn",
    "card1Title": "Tiết kiệm Thời gian",
    "card1Desc": "Chúng tôi xử lý toàn bộ quy trình tuyển dụng.",
    "card2Title": "Giá trị Dài hạn",
    "card2Desc": "Chuyên gia có động lực với triển vọng lâu dài.",
    "card3Title": "Hỗ trợ Cá nhân",
    "card3Desc": "Hỗ trợ liên tục trước và sau khi đến.",
    "card4Title": "Thành công qua Hòa nhập",
    "card4Desc": "Chương trình hòa nhập toàn diện cho thành công bền vững."
  },
  "partners": {
    "title": "Đối tác của chúng tôi",
    "rating": "Đánh giá Google 5.0",
    "cta": "Xem Đối tác"
  },
  "process": {
    "title": "Quy trình của chúng tôi",
    "subtitle": "4 bước đến nhân viên mới của bạn.",
    "step1Title": "Tìm kiếm Ứng viên",
    "step1Desc": "Tìm kiếm và lựa chọn có mục tiêu ứng viên đủ năng lực.",
    "step2Title": "Đào tạo Ngôn ngữ & Văn hóa",
    "step2Desc": "Khóa học ngôn ngữ chuyên sâu và chuẩn bị văn hóa.",
    "step3Title": "Công nhận",
    "step3Desc": "Hỗ trợ trong quá trình công nhận.",
    "step4Title": "Đến Đức",
    "step4Desc": "Hỗ trợ di chuyển và hòa nhập."
  },
  "infrastructure": {
    "title": "Cơ sở hạ tầng",
    "vietnam": "Văn phòng tuyển dụng và trung tâm đào tạo tại Việt Nam",
    "germany": "Địa điểm tại Frankfurt, Hannover và Wilhelmshaven"
  },
  "specializedAreas": {
    "title": "Lĩnh vực Chuyên môn",
    "card1Title": "Y tế & Điều dưỡng",
    "card1Desc": "Điều dưỡng viên cho bệnh viện và cơ sở chăm sóc.",
    "card2Title": "Kỹ thuật & Công nghiệp",
    "card2Desc": "Lao động lành nghề cho lĩnh vực kỹ thuật và công nghiệp.",
    "card3Title": "Chương trình Học nghề",
    "card3Desc": "Chương trình đào tạo cho tài năng trẻ có động lực."
  },
  "why": {
    "title": "Tại sao chọn VIETconsult?",
    "point1": "Hơn 10 năm kinh nghiệm",
    "point2": "Trường ngôn ngữ riêng tại Việt Nam",
    "point3": "Chứng nhận KDA cho tuyển dụng đạo đức",
    "point4": "Hỗ trợ toàn diện từ A đến Z"
  },
  "cta": {
    "title": "Bắt đầu Cùng nhau",
    "subtitle": "Liên hệ với chúng tôi để được tư vấn miễn phí.",
    "primary": "Tư vấn Miễn phí",
    "secondary": "Thêm về Địa điểm"
  }
}
```

### Step 8: Create Remaining Translation Files
Create similar structure for:
- `about.json` - About page translations
- `partner.json` - Partner page translations
- `services.json` - Services pages translations
- `contact.json` - Contact page translations
- `legal.json` - Legal pages translations

(Full content for each file should follow same pattern)

### Step 9: Update App Layout (src/app/[locale]/layout.tsx)
```typescript
import { Inter, Be_Vietnam_Pro } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { locales } from '@/i18n'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const beVietnam = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  variable: '--font-be-vietnam',
  weight: ['400', '500', '600', '700']
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as any)) notFound()

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${inter.variable} ${beVietnam.variable}`}>
      <body className="font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

## Todo List
- [ ] Install next-intl
- [ ] Create i18n.ts configuration
- [ ] Create middleware.ts
- [ ] Create navigation.ts helpers
- [ ] Update next.config.mjs
- [ ] Create locales/de/common.json
- [ ] Create locales/en/common.json
- [ ] Create locales/vi/common.json
- [ ] Create locales/de/home.json
- [ ] Create locales/en/home.json
- [ ] Create locales/vi/home.json
- [ ] Create remaining translation files
- [ ] Update app layout with NextIntlClientProvider
- [ ] Test locale switching works
- [ ] Verify URL structure (/de/, /en/, /vi/)

## Success Criteria
- [x] Locale routes work (/de, /en, /vi)
- [x] Middleware redirects / to /de
- [x] Translations load correctly for each locale
- [x] Language switcher changes URL
- [x] All static text uses translation keys
- [x] Vietnamese characters render correctly

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Missing translations | Medium | Low | Use fallback locale (de) |
| Vietnamese encoding | Low | Medium | Use UTF-8, test rendering |
| Middleware conflicts | Low | High | Test thoroughly with all routes |

## Security Considerations
- No user-generated content in translations
- Sanitize any dynamic values interpolated into translations

## Next Steps
After completion, proceed to:
- [Phase 04: Global Layout](./phase-04-global-layout.md)
