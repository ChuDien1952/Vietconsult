# Phase 01: Über Uns Page Redesign

**Phase ID:** 01
**Created:** 2026-04-01
**Priority:** High
**Status:** Pending

## Context

**Parent Plan:** [plan.md](plan.md)
**Dependencies:** Homepage design system (completed)
**Docs:** [CLAUDE.md](../../CLAUDE.md), [code-standards.md](../../docs/code-standards.md)

## Overview

Redesign Über Uns (About Us) page with talentscare.de style - bold shadows, gold accents, navy backgrounds. Add rich content and professional team images.

**Implementation Status:** Not Started
**Review Status:** Pending

**Date:** 2026-04-01
**Description:** Apply design system to 5 sections of About Us page

## Key Insights

**Current State:**
- File: `src/app/[locale]/uber-uns/page.tsx`
- Components: `src/components/sections/about-us/about-us-sections.tsx`
- 5 Sections: PageHeader, IntroSection, MissionVisionSection, ValuesSection, WhyVietnamSection
- Basic styling, needs talentscare.de enhancement

**Homepage Patterns to Reuse:**
- Bold shadow cards (`border-3 border-black shadow-bold`)
- Gold accents for icons and highlights
- Navy backgrounds for dark sections
- Fadeın animations with stagger
- Dot patterns and blur decorations
- Two-column layouts (image + content)

## Requirements

### Functional Requirements
1. Redesign PageHeader as hero section with company intro
2. Update IntroSection with professional team image and story
3. Enhance MissionVisionSection with 2 card layout (mission + vision)
4. Redesign ValuesSection with 6 value cards (2 rows × 3 columns)
5. Update WhyVietnamSection with benefits list and images

### Design Requirements
1. Bold shadow style on all cards
2. Gold icons with border-2 border-black
3. Alternating dark/light backgrounds
4. Professional team images from documents/images
5. Responsive grid layouts (mobile: 1 col, desktop: 3 cols)
6. Smooth animations (fadeInUp, stagger)

### Content Requirements
1. Company history and background
2. Team introduction with expertise
3. Mission and vision statements
4. 6 core values with descriptions
5. Why Vietnam advantages
6. Team photos and office images

## Architecture

**Component Structure:**
```typescript
// src/components/sections/about-us/about-us-sections.tsx

export function PageHeader() {
  // Hero-style header
  // Dark gradient background
  // Company tagline and intro
  // Gold badge "Seit 2008"
  // CTA buttons
}

export function IntroSection() {
  // Two-column layout
  // Left: Team image (border-3, shadow-bold)
  // Right: Company story, expertise list
  // White background
  // Check icons (gold) for highlights
}

export function MissionVisionSection() {
  // 2-column card grid
  // Card 1: Mission (Navy icon background)
  // Card 2: Vision (Gold icon background)
  // Light gray background
  // Bold shadow cards
}

export function ValuesSection() {
  // 6 value cards (2×3 grid)
  // Each card: Icon (colored circle) + title + description
  // White background
  // Colored icons: gold, navy, red, amber rotation
  // Hover: -translate-y-2, shadow-bold-hover
}

export function WhyVietnamSection() {
  // Two-column layout
  // Left: Content with bullet points
  // Right: Vietnam map or office image
  // Dark gradient background
  // Gold check icons for benefits
}
```

## Related Code Files

**Pages:**
- `src/app/[locale]/uber-uns/page.tsx` - Page component

**Components:**
- `src/components/sections/about-us/about-us-sections.tsx` - Section components

**Translations:**
- `messages/de.json` - German translations (aboutUs section)
- `messages/en.json` - English translations
- `messages/vi.json` - Vietnamese translations

**Images:**
- `documents/images/hinh*.jfif` - Team and office photos
- `documents/images/Image-*.webp` - Professional photos
- `public/images/team-professional.webp` - Team image (to add)

**Design System:**
- `src/app/globals.css` - Color variables
- `tailwind.config.ts` - Design tokens
- `src/components/ui/button.tsx` - Button component

## Implementation Steps

### Step 1: Update PageHeader Section
**Objective:** Create hero-style header with company intro

**Tasks:**
1. Add dark gradient background (bg-gradient-dark)
2. Create company tagline with gold badge "Seit 2008"
3. Add H1 title with gradient text
4. Include subtitle description
5. Add 2 CTA buttons (gold primary + outline secondary)
6. Add geometric background patterns (blur circles, dots)
7. Add bottom curve SVG divider
8. Implement fadeInUp animations

**Expected Output:**
```typescript
// Dark background, large title, gold accent badge, CTA buttons
// Similar to homepage hero but focused on company intro
```

### Step 2: Redesign IntroSection
**Objective:** Two-column layout with team image and company story

**Tasks:**
1. Left column: Add professional team image
   - Use `/images/team-professional.webp` (copy from documents)
   - Border-3 border-black, shadow-bold
   - Rounded-2xl
   - Scale animation on scroll
2. Right column: Company story content
   - Section title (h2)
   - 2-3 paragraphs about company history
   - Check list with gold icons:
     - Über 15 Jahre Erfahrung
     - Standorte in Vietnam und Deutschland
     - Zertifizierte Prozesse
     - Persönliche Betreuung
   - CTA button to services
3. White background
4. Responsive: Stack vertically on mobile

**Expected Output:**
```typescript
// Image left, content right
// Professional presentation of company background
```

### Step 3: Enhance MissionVisionSection
**Objective:** 2-card layout for mission and vision

**Tasks:**
1. Light gray background (bg-light-gray)
2. Card 1 - Mission:
   - Target icon (navy circle background)
   - Title "Unsere Mission"
   - Description paragraph
   - Border-3 border-black, shadow-bold
3. Card 2 - Vision:
   - Eye icon (gold circle background)
   - Title "Unsere Vision"
   - Description paragraph
   - Border-3 border-black, shadow-bold
4. 2-column grid (1 col mobile, 2 cols desktop)
5. Hover effects: -translate-y-2, icon rotate-12
6. fadeInUp with stagger animation

**Expected Output:**
```typescript
// 2 prominent cards explaining mission and vision
// Professional styling with bold shadows
```

### Step 4: Redesign ValuesSection
**Objective:** 6 value cards showcasing core company values

**Tasks:**
1. White background
2. Section title and subtitle
3. 6 value cards (2 rows × 3 columns):
   - Values (examples):
     1. Qualität (Quality) - CheckCircle icon, gold
     2. Vertrauen (Trust) - Shield icon, navy
     3. Nachhaltigkeit (Sustainability) - Heart icon, red
     4. Innovation - Lightbulb icon, amber
     5. Partnerschaft (Partnership) - Handshake icon, gold
     6. Exzellenz (Excellence) - Award icon, navy
4. Each card:
   - Colored icon circle (border-2 border-black)
   - Title (bold, dark-charcoal)
   - Description (2-3 lines, slate-gray)
   - Border-3 border-black, shadow-bold
   - Hover: -translate-y-2, icon scale-110 rotate-12
5. Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop
6. fadeInUp stagger animation

**Expected Output:**
```typescript
// Grid of 6 professional value cards
// Consistent with homepage benefits section style
```

### Step 5: Update WhyVietnamSection
**Objective:** Explain advantages of Vietnam partnership

**Tasks:**
1. Dark gradient background (bg-gradient-dark)
2. Two-column layout:
   - Left: Content
     - Title "Warum Vietnam?"
     - Subtitle
     - Bullet points with gold check icons:
       - Hochqualifizierte Arbeitskräfte
       - Starke Arbeitsmoral
       - Hohe Lernbereitschaft
       - Kulturelle Kompatibilität
       - Langfristige Bindung
       - Kosteneffizienz
   - Right: Vietnam office image or map
     - Border-3 border-black, shadow-bold
     - Rounded-2xl
3. Decorative elements (blur circles, dots)
4. fadeInUp animations
5. Responsive: Stack vertically on mobile

**Expected Output:**
```typescript
// Dark section explaining Vietnam advantages
// Professional image + content layout
```

### Step 6: Add Translations
**Objective:** Complete i18n for all sections

**Tasks:**
1. Extract all text content to translation files
2. Add German translations to `messages/de.json`
3. Add English translations to `messages/en.json`
4. Add Vietnamese translations to `messages/vi.json`
5. Use translation keys in components

**Translation Keys Structure:**
```json
{
  "aboutUs": {
    "pageHeader": {
      "badge": "Seit 2008",
      "title": "...",
      "subtitle": "...",
      "cta": "...",
      "ctaSecondary": "..."
    },
    "intro": {
      "title": "...",
      "description1": "...",
      "description2": "...",
      "check1": "...",
      ...
    },
    ...
  }
}
```

### Step 7: Copy and Optimize Images
**Objective:** Prepare professional images for About Us page

**Tasks:**
1. Select appropriate images from documents/images:
   - Team photos (hinh*.jfif)
   - Office photos (Image-*.webp)
   - Professional workers (cong-ty-*.webp)
2. Copy to `public/images/about-us/`
3. Rename descriptively:
   - `team-main.webp`
   - `office-vietnam.webp`
   - `office-germany.webp`
4. Optimize file sizes if needed
5. Update image references in components

## Todo List

- [ ] Step 1: Redesign PageHeader as hero section
- [ ] Step 2: Update IntroSection with team image
- [ ] Step 3: Enhance MissionVisionSection (2 cards)
- [ ] Step 4: Redesign ValuesSection (6 cards)
- [ ] Step 5: Update WhyVietnamSection
- [ ] Step 6: Add complete translations (DE/EN/VI)
- [ ] Step 7: Copy and optimize images
- [ ] Test responsive design
- [ ] Verify all animations working
- [ ] Build without errors

## Success Criteria

**Design:**
- [ ] All sections use bold shadow style
- [ ] Gold accents on icons and highlights
- [ ] Dark/light background alternation
- [ ] Professional team images integrated
- [ ] Consistent with homepage design system

**Functionality:**
- [ ] Responsive layouts work on mobile, tablet, desktop
- [ ] All animations smooth and performant
- [ ] CTA buttons link correctly
- [ ] Images load properly

**Content:**
- [ ] Company story compelling and complete
- [ ] Mission and vision clearly stated
- [ ] 6 values well-defined with descriptions
- [ ] Vietnam advantages explained

**i18n:**
- [ ] All text in translation files
- [ ] German, English, Vietnamese complete
- [ ] Translation keys follow naming convention

**Quality:**
- [ ] TypeScript build successful
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Accessible (WCAG AA)

## Risk Assessment

**Risk 1:** Image quality insufficient
- **Impact:** Medium
- **Probability:** Low
- **Mitigation:** Review documents/images, select high-quality photos

**Risk 2:** Content too generic
- **Impact:** Medium
- **Probability:** Medium
- **Mitigation:** Add specific details about VIETconsult's unique approach

**Risk 3:** Responsive layout breaks
- **Impact:** High
- **Probability:** Low
- **Mitigation:** Test on multiple screen sizes, use proven grid patterns

**Risk 4:** Performance issues
- **Impact:** Medium
- **Probability:** Low
- **Mitigation:** Optimize images, lazy load, efficient animations

## Security Considerations

- No user input on this page (informational only)
- Image optimization to prevent large file exploits
- Proper Content Security Policy headers
- No external resource loading without verification

## Next Steps

1. **Immediate:** Begin Step 1 (PageHeader redesign)
2. **After Completion:** Move to Phase 02 (Partner page)
3. **Blockers:** None identified
4. **Dependencies:** Homepage design system (completed)

---

**Implementation Ready:** Yes
**Requires Research:** No
**Estimated Time:** 2-3 hours
