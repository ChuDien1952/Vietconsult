# VIETconsult Website - Claude Code Specification

## Project Overview

**Project Name:** VIETconsult Corporate Website  
**Domain:** vietconsult.com  
**Version:** 1.0  
**Reference Design:** https://2025.10.29.talentscare.de/

### Mô tả dự án
Xây dựng website doanh nghiệp cho VIETconsult - công ty chuyên tuyển dụng và tích hợp nhân lực quốc tế từ Việt Nam sang Đức. Website cần có thiết kế hiện đại, chuyên nghiệp, đa ngôn ngữ và responsive.

---

## Tech Stack

### Frontend
```
- Framework: Next.js 14+ (App Router)
- Styling: Tailwind CSS + Framer Motion (animations)
- Language: TypeScript
- Icons: Lucide React / Heroicons
- UI Components: Radix UI / shadcn/ui
```

### Internationalization (i18n)
```
- Library: next-intl hoặc next-i18next
- Languages: 
  - DE (Deutsch) - Primary
  - EN (English)
  - VI (Tiếng Việt)
- URL Structure: /de/, /en/, /vi/
```

### Responsive Breakpoints
```css
/* Mobile First Approach */
xs: 320px   /* Small phones */
sm: 640px   /* Large phones */
md: 768px   /* Tablets/iPad */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

---

## Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --primary-blue: #1e40af;      /* VIETconsult Brand Blue */
  --primary-red: #dc2626;       /* Vietnamese Red accent */
  --primary-gold: #f59e0b;      /* Gold accent */
  
  /* Secondary Colors */
  --dark-navy: #0f172a;         /* Dark backgrounds */
  --slate-gray: #475569;        /* Body text */
  --light-gray: #f8fafc;        /* Light backgrounds */
  
  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  --gradient-dark: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  
  /* Status Colors */
  --success: #22c55e;
  --warning: #eab308;
  --error: #ef4444;
}
```

### Typography
```css
/* Font Family */
--font-heading: 'Inter', 'Segoe UI', sans-serif;
--font-body: 'Inter', 'Segoe UI', sans-serif;
--font-vietnamese: 'Be Vietnam Pro', sans-serif;

/* Font Sizes */
--text-hero: clamp(2.5rem, 5vw, 4.5rem);
--text-h1: clamp(2rem, 4vw, 3.5rem);
--text-h2: clamp(1.75rem, 3vw, 2.5rem);
--text-h3: clamp(1.25rem, 2vw, 1.75rem);
--text-body: 1rem;
--text-small: 0.875rem;
```

### Animation Guidelines
```javascript
// Framer Motion Variants (tham khảo từ talentscare)
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.3 }
};
```

---

## Site Architecture

### Sitemap Structure
```
/
├── / (Willkommen - Homepage)
├── /uber-uns/ (Über uns)
├── /partner-talentscare/ (Partner)
├── /vorteile/ (Vorteile)
├── /guetezeichen/ (Gütezeichen)
├── /services/ (Services Overview)
│   ├── /rekrutierung-auswahl/
│   ├── /sprach-kulturelle-bildung/
│   ├── /anerkennung/
│   └── /relocation-integration/
├── /kontakt/ (Contact)
├── /impressum/ (Legal)
└── /datenschutz/ (Privacy)
```

### Navigation Structure
```typescript
const navigation = {
  main: [
    { name: "Willkommen", href: "/" },
    { name: "Über uns", href: "/uber-uns" },
    { name: "Partner", href: "/partner-talentscare" },
    { name: "Vorteile", href: "/vorteile" },
    { name: "Gütezeichen", href: "/guetezeichen" },
    { 
      name: "Services", 
      href: "/services",
      children: [
        { name: "Rekrutierung & Auswahl", href: "/rekrutierung-auswahl" },
        { name: "Sprach- & kulturelle Bildung", href: "/sprach-kulturelle-bildung" },
        { name: "Anerkennung", href: "/anerkennung" },
        { name: "Relocation & Integration", href: "/relocation-integration" },
      ]
    },
    { name: "Kontakt", href: "/kontakt", isCTA: true }
  ],
  footer: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" }
  ]
};
```

---

## Page Components Specification

### Global Components

#### 1. Header Component
```typescript
// components/layout/Header.tsx
interface HeaderProps {
  transparent?: boolean; // Cho hero sections
}

Features:
- Logo bên trái
- Navigation menu giữa (desktop)
- Language switcher (DE | EN | VI)
- CTA Button "Kontakt" bên phải
- Mobile hamburger menu
- Sticky on scroll với background blur
- Animations: fade in on scroll, underline hover effects
```

#### 2. Footer Component
```typescript
// components/layout/Footer.tsx
Columns:
1. Logo + Company description
2. Unternehmen: Services, Gütezeichen, Kontakt
3. Informationen: Über uns, Partner, Vorteile  
4. Kontakt: Address, Phone, Email
5. Newsletter signup (optional)

Bottom: Social icons | Legal links | Copyright
```

#### 3. Language Switcher
```typescript
// components/ui/LanguageSwitcher.tsx
- Dropdown với flags/codes: 🇩🇪 DE | 🇬🇧 EN | 🇻🇳 VI
- Persist language preference in localStorage
- Update URL prefix on change
```

---

## Page Specifications

### PAGE 1: HOMEPAGE (Willkommen)

#### Section 1.1: Hero
```typescript
// sections/home/HeroSection.tsx
Layout: Full-width với background image/video overlay

Content:
- H1: "Ganzheitliche Lösungen für Fachkräfte aus Vietnam."
- Subheadline: "Von der Bedarfsanalyse in Deutschland..."
- CTA Button: "Kontakt aufnehmen" → /kontakt/
- Stats bar: "100% Nachhaltige Integration" | "1.200+ Kandidaten"

Animation:
- Text fade-in từ dưới lên
- Stats counter animation
- Parallax background
```

#### Section 1.2: Vision
```typescript
// sections/home/VisionSection.tsx
Layout: 3-column card grid

Cards:
1. Nachhaltige Fachkräftegewinnung
2. Verantwortungsvolle Zusammenarbeit  
3. Erfolgreiche Integration

Animation: Stagger fade-in on scroll
Hover: Card lift effect với shadow
```

#### Section 1.3: Services Overview
```typescript
// sections/home/ServicesOverview.tsx
Layout: Title + description + impact numbers + CTA

Impact Numbers (animated counters):
- 100% rechtssicherer Prozess
- 4 Schritte bis zur Integration
- Langfristige Mitarbeiterbindung
```

#### Section 1.4: Team Teaser
```typescript
// sections/home/TeamTeaser.tsx
Layout: Image left + content right (hoặc ngược lại)
CTA: "Team kennenlernen" → /uber-uns/
Animation: Image zoom on scroll, text slide-in
```

#### Section 1.5: Benefits
```typescript
// sections/home/BenefitsSection.tsx
Layout: 4-column icon cards

Cards:
1. Zeitersparnis (Clock icon)
2. Langfristiger Mehrwert (TrendingUp icon)
3. Persönliche Begleitung (Users icon)
4. Erfolg durch Integration (CheckCircle icon)

Animation: Icon bounce, card hover glow
```

#### Section 1.6: Partners
```typescript
// sections/home/PartnersSection.tsx
Layout: Logo carousel/grid
- Partner logos
- Google Rating: 5.0 Stars
- CTA: "Partner anzeigen"

Animation: Infinite scroll marquee (như talentscare)
```

#### Section 1.7: 4-Step Process
```typescript
// sections/home/ProcessSection.tsx
Layout: Horizontal timeline hoặc vertical steps

Steps:
1. Kandidatensuche
2. Sprach- & kult. Bildung
3. Anerkennung
4. Ankunft in Deutschland

Animation: 
- Step-by-step reveal on scroll
- Connecting line animation
- Number counter
```

#### Section 1.8: Infrastructure
```typescript
// sections/home/InfrastructureSection.tsx
Layout: Split section với map/images

Vietnam Side:
- Eigene Rekrutierungsbüros und Trainingszentren

Deutschland Side:
- Frankfurt, Hannover, Wilhelmshaven

Animation: Map pin drop effect
```

#### Section 1.9: Specialized Areas
```typescript
// sections/home/SpecializedAreas.tsx
Layout: 3-column cards với icons

Cards:
1. Pflege & Medizin
2. Technik & Industrie  
3. Azubi-Programm

Hover: Card flip hoặc expand effect
```

#### Section 1.10: Why VIETconsult
```typescript
// sections/home/WhySection.tsx
Layout: Icon list với descriptions
Animation: Check icon reveal animation
```

#### Section 1.11: CTA Banner
```typescript
// sections/home/CTABanner.tsx
Layout: Full-width gradient background

Content:
- Title: "Jetzt gemeinsam starten"
- Description text
- Primary CTA: "Kostenloses Erstgespräch"
- Secondary CTA: "Mehr über Standorte"

Animation: Background gradient shift
```

---

### PAGE 2: ÜBER UNS

#### Sections:
```typescript
1. PageHeader với breadcrumb + USP list
2. WerWirSind - Company introduction
3. UnsereMission - 2-card layout
4. Unternehmenswerte - Values section
5. TeamSection - Team grid với photos
6. WarumVietnam - Why Vietnam section
```

---

### PAGE 3: PARTNER (talentsCARE)

```typescript
Content:
- Partner introduction
- 9 Services grid: Seminare, Schulungen, Workshops, Vorträge, 
  Webinare, Coaching, Training, Mentoring, Events
- Collaboration model diagram
- CTA to talentsCARE
```

---

### PAGE 4: VORTEILE

```typescript
Sections:
1. Benefits grid (6 cards)
2. Promise section với quote
3. Success statistics
```

---

### PAGE 5: GÜTEZEICHEN

```typescript
Sections:
1. KDA Quality seal explanation
2. Standards list (WHO, ILO, etc.)
3. Complaint management với download link
```

---

### PAGE 6: SERVICES

#### Overview Page
```typescript
4 Service cards linking to detail pages
Each card: Icon + Title + Short description + Arrow link
```

#### Detail Pages (6a-6d)
```typescript
Common layout:
- Hero section với page title
- Main content sections
- Related services sidebar
- CTA section
```

---

### PAGE 7: KONTAKT

```typescript
Sections:
1. Contact form
   - Fields: Name, Email, Phone, Company, Message
   - DSGVO checkbox
   - Submit button

2. Locations section (#standorte)
   - 4 locations với addresses + contact info
   - Embedded Google Maps

3. Hotlines section
   - Deutschland: +49 175 3889388
   - Vietnam: +84 987 188 667
```

---

## Internationalization (i18n)

### File Structure
```
/locales
├── de/
│   ├── common.json
│   ├── home.json
│   ├── about.json
│   └── ...
├── en/
│   └── ...
└── vi/
    └── ...
```

### Translation Keys Example
```json
// locales/de/home.json
{
  "hero": {
    "title": "Ganzheitliche Lösungen für Fachkräfte aus Vietnam.",
    "subtitle": "Von der Bedarfsanalyse in Deutschland über die eigene Sprachschule in Vietnam bis zur langfristigen Begleitung im Betrieb.",
    "cta": "Kontakt aufnehmen"
  },
  "stats": {
    "integration": "Nachhaltige Integration",
    "candidates": "Sorgfältig ausgewählte Kandidaten"
  }
}

// locales/en/home.json
{
  "hero": {
    "title": "Comprehensive Solutions for Skilled Workers from Vietnam.",
    "subtitle": "From needs analysis in Germany through our own language school in Vietnam to long-term support in the company.",
    "cta": "Contact us"
  }
}

// locales/vi/home.json
{
  "hero": {
    "title": "Giải pháp toàn diện cho lao động chuyên môn từ Việt Nam.",
    "subtitle": "Từ phân tích nhu cầu tại Đức qua trường ngôn ngữ riêng tại Việt Nam đến hỗ trợ dài hạn trong doanh nghiệp.",
    "cta": "Liên hệ ngay"
  }
}
```

---

## Responsive Design Guidelines

### Mobile (< 768px)
```css
- Single column layouts
- Hamburger menu
- Stacked cards
- Smaller font sizes
- Touch-friendly buttons (min 44px)
- Swipeable carousels
- Collapsible sections
```

### Tablet/iPad (768px - 1024px)
```css
- 2-column grids
- Sidebar navigation optional
- Medium font sizes
- Adjusted spacing
```

### Desktop (> 1024px)
```css
- Multi-column layouts
- Full navigation
- Hover effects enabled
- Large typography
- Full animations
```

### Example Responsive Component
```typescript
// components/ui/ServiceCard.tsx
<div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-4 
  gap-4 
  sm:gap-6 
  lg:gap-8
">
  {services.map(service => (
    <ServiceCard 
      key={service.id}
      className="
        p-4 
        sm:p-6 
        lg:p-8
        text-sm 
        sm:text-base 
        lg:text-lg
      "
    />
  ))}
</div>
```

---

## Animation Specifications

### Scroll Animations (Intersection Observer)
```typescript
// hooks/useScrollAnimation.ts
const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  staggerChildren: {
    visible: { transition: { staggerChildren: 0.1 } }
  }
};
```

### Hover Effects
```css
/* Card hover */
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Button hover */
.btn-hover {
  transition: all 0.3s ease;
}
.btn-hover:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(30, 64, 175, 0.3);
}

/* Link underline animation */
.link-underline {
  position: relative;
}
.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-blue);
  transition: width 0.3s ease;
}
.link-underline:hover::after {
  width: 100%;
}
```

### Page Transitions
```typescript
// components/PageTransition.tsx
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const PageTransition = ({ children }) => (
  <AnimatePresence mode="wait">
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
```

---

## SEO Implementation

### Meta Tags per Page
```typescript
// Example: Homepage
export const metadata = {
  title: "VIETconsult – Internationale Fachkräfte & nachhaltige Integration",
  description: "Ganzheitliche Lösungen für Fachkräfte aus Vietnam. Von der Rekrutierung bis zur Integration.",
  keywords: "Fachkräfte Vietnam, Rekrutierung, Integration, Pflegefachkräfte",
  openGraph: {
    title: "VIETconsult",
    description: "...",
    images: ["/og-image.jpg"],
    locale: "de_DE",
    alternateLocales: ["en_US", "vi_VN"]
  }
};
```

### Structured Data (Schema.org)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VIETconsult",
  "url": "https://vietconsult.com",
  "logo": "https://vietconsult.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-69-8700746-80",
    "contactType": "customer service",
    "areaServed": ["DE", "VN"],
    "availableLanguage": ["German", "English", "Vietnamese"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Julius-Brecht-Str. 3",
    "addressLocality": "Frankfurt am Main",
    "postalCode": "60433",
    "addressCountry": "DE"
  }
}
```

---

## Performance Requirements

```
- Lighthouse Score: > 90 (all categories)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1
```

### Optimization Techniques
```typescript
// Image optimization
import Image from 'next/image';

<Image
  src="/hero-image.webp"
  alt="VIETconsult Hero"
  width={1920}
  height={1080}
  priority // For above-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// Font optimization
import { Inter, Be_Vietnam_Pro } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
});

const beVietnam = Be_Vietnam_Pro({ 
  subsets: ['vietnamese'],
  display: 'swap'
});
```

---

## Contact Information

### Germany Offices
```
Frankfurt (HQ):
Julius-Brecht-Str. 3, 60433 Frankfurt am Main
Tel: +49 69 8700746-80 | Fax: +49 69 8700746-85

Hannover:
Grosser Hillen 22, 30559 Hannover
Tel: +49 511 515291-80

Nordwest:
Am Priel 9, 26388 Wilhelmshaven
Tel: +49 4421 18142-00
```

### Vietnam Office (HDEU)
```
Part 11, Floor 17, 72 Le Thanh Ton
Ben Nghe, District 1, HCMC, Vietnam
Email: vn-office@vietconsult.com
```

### Hotlines
```
Deutschland: +49 175 3889388
Vietnam: +84 987 188 667
Email: contact@vietconsult.com
```

---

## GDPR Compliance

### Cookie Banner
```typescript
// components/CookieBanner.tsx
Categories:
- Funktional (always active)
- Präferenzen
- Statistiken  
- Marketing

Buttons: Akzeptieren | Verweigern | Einstellungen
```

### Contact Form
```typescript
// Required DSGVO checkbox
<label>
  <input type="checkbox" required />
  Ich stimme der Verarbeitung meiner Daten gemäß der 
  <a href="/datenschutz">Datenschutzerklärung</a> zu.
</label>
```

---

## File Structure

```
/vietconsult
├── /app
│   ├── /[locale]
│   │   ├── layout.tsx
│   │   ├── page.tsx (Homepage)
│   │   ├── /uber-uns/page.tsx
│   │   ├── /partner-talentscare/page.tsx
│   │   ├── /vorteile/page.tsx
│   │   ├── /guetezeichen/page.tsx
│   │   ├── /services
│   │   │   ├── page.tsx
│   │   │   ├── /rekrutierung-auswahl/page.tsx
│   │   │   ├── /sprach-kulturelle-bildung/page.tsx
│   │   │   ├── /anerkennung/page.tsx
│   │   │   └── /relocation-integration/page.tsx
│   │   ├── /kontakt/page.tsx
│   │   ├── /impressum/page.tsx
│   │   └── /datenschutz/page.tsx
│   └── globals.css
├── /components
│   ├── /layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── /ui
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── ...
│   └── /sections
│       ├── /home
│       │   ├── HeroSection.tsx
│       │   ├── VisionSection.tsx
│       │   └── ...
│       └── /shared
│           ├── CTABanner.tsx
│           └── ContactForm.tsx
├── /locales
│   ├── /de
│   ├── /en
│   └── /vi
├── /public
│   ├── /images
│   ├── /icons
│   └── /fonts
├── /lib
│   ├── i18n.ts
│   └── utils.ts
├── /hooks
│   └── useScrollAnimation.ts
└── /styles
    └── animations.css
```

---

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type check
npm run type-check
```

---

## Notes for Claude Code

1. **Luôn tham khảo design từ talentscare.de** để đảm bảo style consistency
2. **Mobile-first approach** - bắt đầu với mobile design rồi mở rộng lên desktop
3. **Animation nên subtle và professional** - không quá flashy
4. **Accessibility (a11y)** - đảm bảo contrast ratio, keyboard navigation, screen reader support
5. **Performance** - lazy load images, code splitting, font optimization
6. **i18n** - mọi text phải qua translation system, không hardcode
7. **SEO** - mỗi page cần proper meta tags và structured data

---

## Design Redesign (2026-03-29)

### Cập nhật theo phong cách talentscare.de

**Color Palette Updated:**
```css
--primary-navy: #202C58      /* Dark navy (thay #1e40af) */
--dark-charcoal: #1C1D20     /* Dark charcoal background */
--primary-gold: #FFBC00      /* Warm gold (thay #f59e0b) */
--warm-amber: #F0B849        /* Amber accent */
--light-amber: #E8BF96       /* Light amber */
--accent-red: #F00000        /* Bright red */
```

**Typography Updated:**
```css
/* Responsive Scale - talentscare.de style */
hero: clamp(3rem, 6vw, 8.125rem)  /* 130px max */
h1: clamp(2.5rem, 5vw, 7.5rem)     /* 120px max */
h2: clamp(2rem, 4vw, 6.25rem)      /* 100px max */
h3: clamp(1.5rem, 3vw, 5rem)       /* 80px max */
```

**Button Styles - Bold Shadow:**
```css
/* Primary Button (Yellow + Bold Shadow) */
bg-primary-gold text-black
border-3 border-black
shadow-bold (5px 5px 0px black)
hover:shadow-none hover:translate-y-1 hover:translate-x-1

/* Secondary Button (Navy Outline) */
border-2 border-primary-navy
text-primary-navy
hover:bg-primary-navy hover:text-white
rounded-[25px]
```

**Hero Section - Redesigned:**
- Dark gradient background (navy → charcoal)
- Geometric shapes overlay (gold circles, curves, grid pattern)
- Two-column layout (content left, visual right)
- Extra large typography (up to 8xl)
- Floating stat cards on image placeholder
- Bottom curve SVG divider
- Inline stats with gold numbers

**Gradients:**
```css
gradient-hero: navy → gold (135deg)
gradient-dark: charcoal → navy (180deg)
gradient-gold: pure gold gradient (90deg)
```

**Components Updated - Phase 2:**
- [x] Button component - bold shadow style
- [x] Hero Section - dark background, geometric shapes
- [x] Vision Section - light background, bold shadow cards
- [x] Services Overview - dark gradient background
- [x] Benefits Section - colorful icon badges with bold shadows
- [x] Partners Section - enhanced rating badge
- [x] Process Section - gold timeline with numbered badges
- [x] Infrastructure Section - bold shadow cards for Vietnam/Germany
- [x] Specialized Areas - red/navy/amber icon backgrounds
- [x] Why Us Section - checkmark cards with borders
- [x] CTA Banner - full dark gradient with large buttons
- [x] Header/Navigation - uppercase links with gold underline animation, scroll-responsive background

**Design Patterns Applied:**
- Bold shadow style (5px 5px 0px black) on cards and buttons
- Border-3 border-black on interactive elements
- Hover effects: shadow removal + translate(1px, 1px)
- Dark/light section alternation (dark → light → dark)
- Navy/Gold/Red/Amber color accents throughout
- Large responsive typography (h2, h3 scales)
- Icon badges with border-2 border-black
- Geometric background elements on dark sections

**Images Placeholder:**
Professional images từ Unsplash/Pexels:
- Business teams
- Vietnamese workers
- German workplace
- International collaboration
- Healthcare/Technical workers

**Deployment:**
- GitHub Pages: https://chudien1952.github.io/Vietconsult
- Auto-deploy via GitHub Actions
- Static HTML export (3 languages × 12 pages = 36 pages)

**Status - Phase 2 Complete:**
- ✅ Design system complete
- ✅ Hero Section redesigned
- ✅ Button component updated
- ✅ All homepage sections redesigned (10 sections)
- ✅ Header/Navigation redesigned with scroll effect
- ✅ Build test passing (36 static pages generated)
- ⏳ About Us page sections (pending)
- ⏳ Other page sections (pending)
- ⏳ Professional images integration (pending)

**Files Modified:**
- `src/app/globals.css` - Color variables, spacing system
- `tailwind.config.ts` - Design tokens, typography, shadows
- `src/components/ui/button.tsx` - Bold shadow button styles
- `src/components/sections/home/hero-section.tsx` - Complete redesign
- `src/components/sections/home/homepage-sections.tsx` - Vision, Services, Benefits
- `src/components/sections/home/additional-sections.tsx` - Partners, Process, Infrastructure, Specialized Areas, Why Us, CTA Banner
- `src/components/layout/header.tsx` - Uppercase nav, gold underlines, scroll effect

**References:**
- Design analysis: `plans/reports/design-redesign-talentscare-style-2026-03-29.md`
- talentscare.de: https://2025.10.29.talentscare.de/

---

*Document Version: 1.2 | Updated: 29 März 2026 | Homepage Redesign Complete*
