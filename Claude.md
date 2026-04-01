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

**Section Order:**
```typescript
// src/app/[locale]/page.tsx
<HeroSection />
<VisionSection />
<TeamShowcaseSection />
<StatsSection />
<ServicesOverviewSection />
<BenefitsSection />
<PartnersSection />
<ProcessSection />
<ProcessVideoSection />
<InfrastructureSection />
<SpecializedAreasSection />
<SuccessStoriesSection />
<WhyUsSection />
<CTABannerSection />
```

#### Section 1.1: Hero Section
```typescript
// src/components/sections/home/hero-section.tsx
Component: HeroSection
Layout: Two-column layout (content left, visual right)
Background: Dark gradient (navy → charcoal) with geometric shapes

Left Column - Content:
- Label badge: "Fachkräfte aus Vietnam" (gold background)
- H1: Two lines with gradient
  - Line 1: "Ganzheitliche Lösungen für"
  - Line 2: "Fachkräfte aus Vietnam" (gold gradient)
- Subtitle: Large text (lg:text-2xl)
- CTA Buttons: Primary (gold) + Secondary
- Inline Stats: 3 stats with gold numbers
  - 100% Nachhaltige Integration
  - 1.200+ Kandidaten
  - 4 Schritte

Right Column - Visual:
- Professional image: /images/consultation.webp
- Floating stat cards:
  - Top-right: KDA Quality Seal (white card, Award icon)
  - Bottom-left: 99% Success Rate (dark card, TrendingUp icon)
- Decorative circles (gold/amber borders)

Geometric Background Elements:
- Large gold circle blur (top-right)
- Amber circle blur (bottom-left)
- Curved SVG path (gold, right side)
- Grid pattern overlay (gold dots)

Bottom Divider:
- White SVG curve divider

Design Features:
- Extra large typography (text-5xl → text-8xl)
- fadeInLeft animations for content
- scaleIn animation for visual
- Stagger container for sequential reveals
- Responsive: Single column on mobile

File: src/components/sections/home/hero-section.tsx
```

#### Section 1.2: Vision Section
```typescript
// src/components/sections/home/homepage-sections.tsx
Component: VisionSection
Layout: 3-column card grid
Background: Light gray (bg-light-gray)

Cards with Icons:
1. Target icon - "Nachhaltige Fachkräftegewinnung"
   - Description about sustainable recruitment
2. Handshake icon - "Verantwortungsvolle Zusammenarbeit"
   - Description about responsible collaboration
3. Heart icon - "Erfolgreiche Integration"
   - Description about successful integration

Card Styling:
- White background
- Border-3 border-black
- Shadow-bold (5px 5px 0px black)
- Icon: Gold circle background with border-2
- Hover: -translate-y-2, shadow-bold-hover
- Transition: duration-300

Animation:
- Stagger fade-in on scroll
- Icon rotate on card hover (group-hover:rotate-12)

Responsive: 1 column mobile, 3 columns desktop
```

#### Section 1.3: Team Showcase Section
```typescript
// src/components/sections/home/homepage-sections.tsx
Component: TeamShowcaseSection
Layout: Two-column (image left, content right)
Background: White

Left - Image:
- Professional team image: /images/team-professional.webp
- Rounded-2xl border-3 border-black shadow-bold
- Aspect ratio maintains image quality
- Scale animation on scroll

Right - Content:
- Section title (h2)
- Description paragraphs
- Check list items (gold check icons):
  - Über 15 Jahre Erfahrung
  - Experten in Vietnam und Deutschland
  - Persönliche Betreuung
- CTA Button: "Unser Team kennenlernen" → /uber-uns/

Design Features:
- fadeInUp animations
- Gold check icons with bg-primary-gold/10
- Responsive: Stacks vertically on mobile

File: src/components/sections/home/homepage-sections.tsx
```

#### Section 1.4: Stats Section
```typescript
// src/components/sections/home/stats-section.tsx
Component: StatsSection
Layout: Full-width with background pattern
Background: Primary navy (bg-primary-navy)

Stats Grid (4 columns):
1. "100%" - Nachhaltige Integration
2. "1.200+" - Kandidaten vermittelt
3. "15+" - Jahre Erfahrung
4. "4" - Standorte

Stat Card Styling:
- Text-center
- Number: text-5xl lg:text-6xl font-bold text-primary-gold
- Label: text-white text-lg lg:text-xl
- fadeInUp animation with stagger

Background Elements:
- Dot pattern overlay (opacity-5)
- Decorative gold blur circles (top-left, bottom-right)
- Pulsing animation on blur circles

Responsive: 2×2 grid on mobile, 4 columns on desktop

File: src/components/sections/home/stats-section.tsx
```

#### Section 1.5: Services Overview Section
```typescript
// src/components/sections/home/homepage-sections.tsx
Component: ServicesOverviewSection
Layout: Title + 4 service cards + CTA
Background: Dark gradient (gradient-dark)

Service Cards (4 columns):
1. Users icon - "Rekrutierung & Auswahl"
2. BookOpen icon - "Sprach- & kulturelle Bildung"
3. Award icon - "Anerkennung"
4. Plane icon - "Relocation & Integration"

Card Styling:
- Dark charcoal background (bg-dark-charcoal)
- Border-3 border-primary-gold/30
- Shadow-bold with gold shadow
- Icon: Gold circle background
- Title: White text
- Description: Gray-400 text
- Hover: -translate-y-2, border-primary-gold, shadow-bold-hover

Bottom CTA:
- Large button: "Alle Services entdecken" → /services/
- Gold button with shadow-bold

Animation:
- fadeInUp with stagger
- Icon pulse on card hover

Responsive: 1 column mobile, 2 columns tablet, 4 columns desktop

File: src/components/sections/home/homepage-sections.tsx
```

#### Section 1.6: Benefits Section
```typescript
// src/components/sections/home/homepage-sections.tsx
Component: BenefitsSection
Layout: Title + 6 benefit cards
Background: Light gray (bg-light-gray)

Benefit Cards (2 rows × 3 columns):
1. Clock icon (red bg) - "Zeitersparnis"
2. TrendingUp icon (navy bg) - "Langfristiger Mehrwert"
3. Users icon (amber bg) - "Persönliche Begleitung"
4. CheckCircle icon (gold bg) - "Erfolg durch Integration"
5. Shield icon (red bg) - "Rechtssicherheit"
6. Globe icon (navy bg) - "Internationale Expertise"

Card Styling:
- White background
- Border-3 border-black
- Shadow-bold
- Icon: Colored circle with border-2 border-black
  - Colors rotate: red, navy, amber, gold
- Title: Bold dark charcoal
- Description: Slate gray
- Hover: -translate-y-2, icon scale-110 rotate-12

Animation:
- fadeInUp with stagger (0.1s delay)
- Icon transition on hover

Responsive: 1 column mobile, 2 columns tablet, 3 columns desktop

File: src/components/sections/home/homepage-sections.tsx
```

#### Section 1.7: Partners Section
```typescript
// src/components/sections/home/additional-sections.tsx
Component: PartnersSection
Layout: Title + rating badge + partner logos grid
Background: White

Top Section:
- Title: "Unsere Partner vertrauen uns"
- Google Rating Badge:
  - "5.0 Sterne" (large gold text)
  - Gold stars (5 stars)
  - Rating count text
  - Border-3 border-black, shadow-bold

Partner Logos Grid (3 rows × 3 columns):
- 9 placeholder boxes with company initials
- Each box: Border-2 border-slate-gray/20
- Hover: border-primary-gold, scale-105
- Grayscale logos with hover color reveal

Bottom CTA:
- Button: "Mehr über unsere Partner" → /partner-talentscare/

Animation:
- Rating badge: scaleIn
- Logo grid: stagger fadeInUp
- Individual logo hover effects

Background Pattern:
- Dot pattern (opacity-[0.02])
- Decorative gold blur (right side, pulsing)

Responsive: 2 columns mobile, 3 columns desktop

File: src/components/sections/home/additional-sections.tsx
```

#### Section 1.8: Process Section (4 Steps)
```typescript
// src/components/sections/home/additional-sections.tsx
Component: ProcessSection
Layout: Title + 4-step timeline
Background: Primary navy (bg-primary-navy)

4 Steps (Vertical timeline with connecting line):
1. Search icon - "Kandidatensuche in Vietnam"
   - Description about recruitment
2. BookOpen icon - "Sprach- & kulturelle Bildung"
   - Description about language training
3. Award icon - "Anerkennung & Qualifikation"
   - Description about qualification
4. Plane icon - "Ankunft in Deutschland"
   - Description about arrival

Step Styling:
- Number badge: Gold circle, border-3 border-black, shadow-bold
- Icon: White on primary-gold background, border-2
- Title: White text (xl)
- Description: Gray-300 text
- Connecting line: Vertical gold dashed line (border-l-2)

Step Number Badge (Large):
- Absolute positioning (left side)
- text-3xl font-bold
- Z-10 to overlap line

Animation:
- fadeInUp with stagger (0.15s)
- Number badge scale on hover
- Icon rotate-12 on step hover

Background:
- Decorative gold blur circles (animated pulse)
- Dot pattern overlay

Responsive: Full width on all devices, generous spacing

File: src/components/sections/home/additional-sections.tsx
```

#### Section 1.9: Process Video Section
```typescript
// src/components/sections/home/additional-sections.tsx
Component: ProcessVideoSection
Layout: Single centered video thumbnail with play button
Background: Light gray (bg-light-gray)

Content:
- Training image: /images/process-training.png
- Aspect ratio: 16:9 (aspect-video)
- Link to: https://www.youtube.com/watch?v=l_eV66VJQkU

Thumbnail Container:
- Max width: max-w-5xl mx-auto
- Border-3 border-black
- Shadow-bold
- Rounded-2xl
- Hover: shadow-bold-hover, -translate-y-2

Play Button Overlay:
- Center positioned
- Gold circle (bg-primary-gold)
- Border-4 border-black
- Shadow-bold
- Size: h-24 w-24
- Hover: scale-125, bg-primary-amber, rotate-12
- Black SVG play icon (h-12 w-12)

Animation:
- Initial: opacity 0, scale 0.95
- whileInView: opacity 1, scale 1
- Transition: duration 0.6s
- viewport: once true

Design:
- Minimal - no text, just image and play button
- Clean and professional
- Smooth hover interactions

Responsive: Full width on mobile, constrained on desktop

File: src/components/sections/home/additional-sections.tsx
Location: Between ProcessSection and InfrastructureSection
```

#### Section 1.10: Infrastructure Section
```typescript
// src/components/sections/home/additional-sections.tsx
Component: InfrastructureSection
Layout: Title + 2-column location cards
Background: White

Two Location Cards:
1. Vietnam Locations:
   - MapPin icon (red bg)
   - Title: "Vietnam - Rekrutierung & Bildung"
   - 2 locations listed:
     - Ho Chi Minh City (HQ)
     - Hanoi
   - Each with address and contact info

2. Deutschland Locations:
   - Building icon (navy bg)
   - Title: "Deutschland - Integration & Support"
   - 3 locations listed:
     - Frankfurt am Main (HQ)
     - Hannover
     - Wilhelmshaven
   - Each with address and contact info

Card Styling:
- White background
- Border-3 border-black
- Shadow-bold
- Icon: Colored circle (red/navy) with border-2
- Location items: Hover effect with gold left border
- Hover card: -translate-y-2, shadow-bold-hover

Location Item Styling:
- Flex layout with MapPin icon
- Title: Bold dark charcoal
- Address: Slate gray text-sm
- Hover: Gold left border (border-l-4), background gold/5

Animation:
- fadeInUp with stagger
- Icon scale and rotate on card hover
- Smooth transitions

Background:
- Dot pattern (opacity-[0.02])
- Gold blur decoration (left side, pulsing)

Responsive: Stack vertically on mobile, 2 columns on desktop

File: src/components/sections/home/additional-sections.tsx
```

#### Section 1.11: Specialized Areas Section
```typescript
// src/components/sections/home/additional-sections.tsx
Component: SpecializedAreasSection
Layout: Title + 3 specialized area cards
Background: Light gray (bg-light-gray)

3 Area Cards:
1. Heart icon (red bg) - "Pflege & Medizin"
   - Bullet points about healthcare specialization
2. Settings icon (navy bg) - "Technik & Industrie"
   - Bullet points about technical fields
3. GraduationCap icon (amber bg) - "Azubi-Programm"
   - Bullet points about apprenticeship program

Card Styling:
- White background
- Border-3 border-black
- Shadow-bold
- Icon: Large colored circle (red/navy/amber) with border-2
- Title: text-2xl bold
- Bullet list: CheckCircle icons (gold) + text
- Hover: -translate-y-2, shadow-bold-hover

Bullet Point Styling:
- Gold CheckCircle icon (small, h-5 w-5)
- Flex layout
- Text: Slate gray
- Each point has smooth fade-in

Animation:
- fadeInUp with stagger (0.15s)
- Icon scale-110 and rotate-12 on card hover
- Smooth transitions on all interactions

Background:
- Dot pattern
- Decorative gold blur (right side)

Responsive: 1 column mobile, 3 columns desktop

File: src/components/sections/home/additional-sections.tsx
```

#### Section 1.12: Success Stories Section
```typescript
// src/components/sections/home/success-stories-section.tsx
Component: SuccessStoriesSection
Layout: Title + 3 testimonial cards + bottom text
Background: Light gray (bg-light-gray)

3 Testimonial Cards:
1. Maria Nguyen (Vietnamese flag 🇻🇳)
   - Role: Krankenpflegerin
   - Company: Universitätsklinikum Frankfurt
   - Image: /images/team-member-2.webp
   - Quote about professional journey

2. Thomas Schmidt (German flag 🇩🇪)
   - Role: HR Director
   - Company: TechCorp GmbH
   - Image: /images/team-member-1.webp
   - Quote about collaboration quality

3. Dr. Minh Tran (Vietnamese flag 🇻🇳)
   - Role: Software Engineer
   - Company: Digital Solutions AG
   - Image: /images/professional-worker.webp
   - Quote about transparent process

Card Styling:
- White background
- Border-3 border-black
- Shadow-bold
- Quote icon: Gold circle bg, border-2, rotate on hover
- Quote text: Italic, slate gray
- Author section: Border-top-2 gold/20
- Avatar: Rounded-full, border-2 gold
- Flag emoji next to name
- Hover: -translate-y-2, shadow-bold-hover
- Bottom gradient bar: Gold gradient, expands on hover

Bottom Section:
- Success count: "+1.200 zufriedene Kandidaten"
- Avatar stack (5 circles)
- Text highlight

Animation:
- fadeInUp with stagger (0.2s)
- Quote icon scale-110 rotate-12 on card hover
- Bottom gradient bar width transition
- Smooth all interactions

Background:
- Dot pattern (radial gradient circles)
- Gold blur decoration (pulsing animation)

Responsive: 1 column mobile, 3 columns desktop

File: src/components/sections/home/success-stories-section.tsx
```

#### Section 1.13: Why Us Section
```typescript
// src/components/sections/home/additional-sections.tsx
Component: WhyUsSection
Layout: Title + subtitle + 6 reason cards
Background: White

6 Reason Cards (2 rows × 3 columns):
1. CheckCircle - "Erfahrung seit 2008"
2. CheckCircle - "Eigene Sprachschulen in Vietnam"
3. CheckCircle - "Rechtssichere Prozesse"
4. CheckCircle - "Persönliche Betreuung"
5. CheckCircle - "Nachhaltige Integration"
6. CheckCircle - "Transparente Kommunikation"

Card Styling:
- White background
- Border-2 border-slate-gray/20
- Rounded-xl
- Gold CheckCircle icon (large, h-8 w-8)
- Title: Bold dark charcoal
- Hover: border-primary-gold, scale-105, shadow-lg

Icon Container:
- Gold background circle (bg-primary-gold/10)
- Padding and centering
- Icon color: primary-gold

Animation:
- fadeInUp with stagger
- Icon scale on card hover
- Smooth border color transition
- Smooth shadow transition

Background:
- Dot pattern overlay
- Gold blur decoration (left side, pulsing)

Responsive: 1 column mobile, 2 columns tablet, 3 columns desktop

File: src/components/sections/home/additional-sections.tsx
```

#### Section 1.14: CTA Banner Section
```typescript
// src/components/sections/home/additional-sections.tsx
Component: CTABannerSection
Layout: Full-width banner with centered content
Background: Dark gradient (gradient-dark)

Content:
- Title: "Jetzt gemeinsam starten"
  - text-4xl lg:text-6xl bold white
  - Max-w-4xl centered
- Description:
  - "Lassen Sie uns gemeinsam den Weg zu qualifizierten Fachkräften gestalten..."
  - text-xl gray-300
  - Max-w-3xl centered

CTA Buttons (2 buttons):
1. Primary: "Kostenloses Erstgespräch vereinbaren"
   - Size: xl
   - Gold button with shadow-bold
   - Link to: /kontakt/

2. Secondary: "Mehr über unsere Standorte"
   - Size: xl
   - Outline style
   - Link to: /kontakt/#standorte

Button Container:
- Flex gap-4
- Responsive: Stack on mobile, row on desktop

Animation:
- fadeInUp for title
- fadeInUp for description (delay)
- fadeInUp for buttons (delay)
- Stagger effect

Background Elements:
- Multiple decorative gold blur circles
- Animated scale and opacity pulses
- Positioned at different corners
- Creates depth and movement

Responsive:
- Padding: py-20 lg:py-32
- Button layout: Flex-col on mobile, flex-row on desktop
- Text scaling: 4xl → 6xl
- Generous spacing throughout

File: src/components/sections/home/additional-sections.tsx
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
- ✅ Design system complete (talentscare.de style)
- ✅ Hero Section redesigned (dark gradient, geometric shapes)
- ✅ Button component updated (bold shadow style)
- ✅ All homepage sections redesigned (14 sections total):
  1. ✅ Hero Section - Dark gradient with floating stats
  2. ✅ Vision Section - 3 vision cards
  3. ✅ Team Showcase Section - Image + content layout
  4. ✅ Stats Section - 4 key statistics
  5. ✅ Services Overview Section - 4 service cards
  6. ✅ Benefits Section - 6 benefit cards
  7. ✅ Partners Section - Google rating + logo grid
  8. ✅ Process Section - 4-step timeline
  9. ✅ Process Video Section - Training image + play button
  10. ✅ Infrastructure Section - Vietnam/Germany locations
  11. ✅ Specialized Areas Section - 3 specialization cards
  12. ✅ Success Stories Section - 3 testimonials
  13. ✅ Why Us Section - 6 reason cards
  14. ✅ CTA Banner Section - Final call-to-action
- ✅ Header/Navigation redesigned with scroll effect
- ✅ Build test passing (36 static pages generated)
- ✅ Professional training image integrated
- ⏳ About Us page sections (pending)
- ⏳ Other page sections (pending)
- ⏳ More professional images integration (pending)

**Files Modified:**
- `src/app/globals.css` - Color variables, spacing system
- `tailwind.config.ts` - Design tokens, typography, shadows
- `src/components/ui/button.tsx` - Bold shadow button styles
- `src/components/sections/home/hero-section.tsx` - Complete redesign
- `src/components/sections/home/homepage-sections.tsx` - Vision, Services, Benefits, Team Showcase
- `src/components/sections/home/stats-section.tsx` - Stats with navy background
- `src/components/sections/home/success-stories-section.tsx` - Testimonial cards
- `src/components/sections/home/additional-sections.tsx` - Partners, Process, ProcessVideo, Infrastructure, Specialized Areas, Why Us, CTA Banner
- `src/components/layout/header.tsx` - Uppercase nav, gold underlines, scroll effect
- `src/app/[locale]/page.tsx` - Section order and imports
- `public/images/process-training.png` - Professional training image

**References:**
- Design analysis: `plans/reports/design-redesign-talentscare-style-2026-03-29.md`
- talentscare.de: https://2025.10.29.talentscare.de/

---

---

## Homepage Implementation Summary

**Total Sections:** 14 sections implemented
**Design Style:** talentscare.de inspired (bold shadows, gold accents, navy backgrounds)
**Components:** 4 main component files
**Images:** Professional training image integrated
**Animations:** Framer Motion scroll-triggered animations throughout
**Responsive:** Mobile-first design with 3 breakpoints (sm, lg, xl)

**Component Files:**
1. `hero-section.tsx` - Hero with floating stats
2. `homepage-sections.tsx` - Vision, Team, Services, Benefits
3. `stats-section.tsx` - Navy background statistics
4. `success-stories-section.tsx` - Testimonial cards
5. `additional-sections.tsx` - Partners, Process, Video, Infrastructure, Areas, Why, CTA

**Key Design Features:**
- Bold shadow style (5px 5px 0px black)
- Border-3 border-black on interactive elements
- Hover effects: -translate-y-2, shadow-bold-hover
- Dark/light section alternation
- Gold (#FFBC00), Navy (#202C58), Red (#F00000), Amber (#F0B849) accents
- Geometric background patterns (dots, blurs, curves)
- Smooth transitions (duration-300)

---

*Document Version: 1.3 | Updated: 4 Januar 2026 | Homepage Complete (14 Sections)*
