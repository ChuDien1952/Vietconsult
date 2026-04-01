# Phase 06: Kontakt (Contact) Page Redesign

**Status:** Pending | **Priority:** High | **Estimated Time:** 1-2 hours

## Overview
Redesign Contact page with form, locations section, and hotlines.

## Key Sections
1. **Contact Form** - Professional form with DSGVO compliance
   - Fields: Name, Email, Phone, Company, Message
   - DSGVO checkbox
   - Submit button (gold, shadow-bold)
2. **Locations Section** (#standorte anchor)
   - 4 locations in grid:
     - Frankfurt (HQ)
     - Hannover
     - Wilhelmshaven
     - Vietnam (HCMC)
   - Each with address, phone, email
   - Embedded Google Maps (optional)
3. **Hotlines Section**
   - Deutschland: +49 175 3889388
   - Vietnam: +84 987 188 667
   - Large, prominent display

## Design Pattern
- Two-column layout (form left, info right)
- Location cards with bold shadows
- Gold phone icons for hotlines
- Map integration (if feasible)
- Dark section for hotlines (navy background)

## Implementation
**File:** `src/app/[locale]/kontakt/page.tsx`
**Components:** Create `src/components/sections/contact/contact-sections.tsx`

## Success Criteria
- [ ] Functional contact form
- [ ] DSGVO compliance checkbox
- [ ] 4 location cards with details
- [ ] Hotlines prominently displayed
- [ ] Responsive form layout
- [ ] i18n complete
- [ ] Form validation (client-side)
