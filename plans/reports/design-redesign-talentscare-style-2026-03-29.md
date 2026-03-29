# VIETconsult Website - Design Redesign (talentscare.de Style)

**Date:** 2026-03-29
**Status:** In Progress
**Completion:** 40%

---

## Objective

Redesign VIETconsult website based on talentscare.de design analysis to achieve modern, professional corporate aesthetic with creative agency undertones.

---

## Design Analysis Completed ✅

### talentscare.de Design Characteristics

**Color Palette:**
- Primary: Dark navy (#202C58), Charcoal (#1C1D20)
- Accent: Warm gold (#FFBC00), Amber (#F0B849, #E8BF96)
- Highlight: Red (#F00000)
- Text: Dark gray (#555555)

**Typography:**
- Font: Kanit (headings), Euclid Circular B (body) - adapted to Inter for VIETconsult
- Scale: 130px, 120px, 100px, 80px, 70px, 60px (responsive)
- Body: 16-24px, line-height 1.47-1.5em
- Transform: Uppercase for navigation and section titles

**Layout:**
- Desktop: 1920px containers, 100-150px padding
- Tablet: Adaptive padding (50-30px)
- Mobile: 15px padding, full-width responsive
- Spacing: CSS custom properties (--spacing-20 through --spacing-80)

**Components:**
- Buttons: Yellow (#FFBC00) with black border, 3px solid, box-shadow (5px 5px)
- Cards: Icons, headlines (22px), consistent spacing
- Navigation: Sticky with white background, curve decoration

**Distinctive Elements:**
- Curved header shape (organic flow)
- Geometric shapes and semi-transparent overlays
- Asymmetrical layouts
- Bold gold accents against dark backgrounds
- SVG scrolling indicators

---

## Completed Tasks ✅

### 1. Global Styles Update ([src/app/globals.css](src/app/globals.css))
- ✅ Updated CSS custom properties with talentscare.de colors
- ✅ Added spacing system (--spacing-20 to --spacing-100)
- ✅ Updated typography defaults
- ✅ Maintained legacy support for gradual migration

### 2. Tailwind Configuration ([tailwind.config.ts](tailwind.config.ts))
- ✅ Updated color palette with new primary colors
- ✅ Added responsive typography scale (hero: 130px max, h1: 120px, h2: 100px)
- ✅ Added spacing tokens
- ✅ Updated gradients (navy-to-gold, dark charcoal, pure gold)
- ✅ Added bold shadow utilities (5px 5px, hover: none)

---

## Pending Tasks 📋

### High Priority

**1. Hero Section Redesign**
- [ ] Update HeroSection component with new design
- [ ] Add geometric background shapes
- [ ] Implement semi-transparent overlays
- [ ] Update typography to use new scale
- [ ] Add bold CTA buttons with shadow effect
- [ ] Add hero background image from Unsplash/Pexels

**2. Button Component**
- [ ] Create new button variants:
  - Primary: Yellow (#FFBC00) + black border + bold shadow
  - Secondary: Outlined dark border + rounded corners
- [ ] Implement hover states (shadow removal)
- [ ] Update all existing buttons across site

**3. Section Components**
- [ ] Update all section backgrounds (alternating dark/light)
- [ ] Apply new spacing system
- [ ] Update card components with new styles
- [ ] Add decorative elements (vertical dividers, geometric shapes)

### Medium Priority

**4. Navigation Header**
- [ ] Implement sticky header with curve decoration
- [ ] Add background color on scroll
- [ ] Update menu styling (uppercase, proper sizing)
- [ ] Mobile hamburger with offcanvas menu

**5. Images & Visual Assets**
- [ ] Find and integrate professional images from Unsplash/Pexels:
  - Business professionals
  - Vietnamese workers
  - German workplace
  - International collaboration
  - Healthcare/medical
  - Technical/industrial
- [ ] Create placeholder images for all sections
- [ ] Optimize images for web (WebP format)

**6. Form Components**
- [ ] Update contact form styling
- [ ] Transparent inputs with bottom border only
- [ ] White text/placeholder on dark backgrounds

### Low Priority

**7. Animations**
- [ ] Implement 0.3-0.5s CSS transitions
- [ ] Add smooth scrolling
- [ ] Scroll-triggered animations for sections
- [ ] Button hover effects

**8. Responsive Refinements**
- [ ] Test all breakpoints (767px, 880px, 1024px, 1200px, 1366px)
- [ ] Ensure proper stacking on mobile
- [ ] Font size adjustments per breakpoint

---

## Image Resources

**Free Stock Photo Sources:**
- [Unsplash Business Images](https://unsplash.com/s/photos/business) - 6M+ photos, CC0 license
- [Pexels Workplace Photos](https://www.pexels.com/search/workplace/) - 3M+ photos, free commercial use
- [Pexels Workers Photos](https://www.pexels.com/search/workers/) - Professional imagery

**Search Keywords for VIETconsult:**
- "professional business team"
- "international workplace"
- "healthcare workers"
- "technical engineers"
- "office collaboration"
- "diverse team meeting"

---

## Technical Notes

### Migration Strategy
- Maintain legacy color variables for gradual migration
- Update components incrementally
- Test each component update before proceeding
- Keep build process stable throughout redesign

### Build & Deploy
- Current: GitHub Pages (static export)
- All changes must pass: `npm run build` test
- Auto-deploy via GitHub Actions on push to main

---

## Next Steps

1. **Immediate (Today):**
   - Redesign Hero Section component
   - Update Button component with new styles
   - Find and add 5-10 placeholder images

2. **Short-term (Next session):**
   - Update all section components
   - Implement navigation header redesign
   - Add geometric background elements

3. **Testing:**
   - Run `npm run build` after each major component update
   - Test responsive design at all breakpoints
   - Verify static export compatibility

---

## References

- [talentscare.de Design Analysis](https://2025.10.29.talentscare.de/) - Original reference
- [Unsplash](https://unsplash.com/) - Free stock photos
- [Pexels](https://www.pexels.com/) - Free stock videos & photos
- [9 Best Sites for Free Business Stock Photos](https://www.foleon.com/blog/best-free-business-stock-photo-websites)

---

**Last Updated:** 2026-03-29 19:10
**Next Review:** After Hero Section & Button updates complete
