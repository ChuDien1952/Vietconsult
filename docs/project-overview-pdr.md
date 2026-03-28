# VIETconsult Website - Project Overview (PDR)

## Project Definition

**Project Name:** VIETconsult Corporate Website
**Domain:** vietconsult.com
**Version:** 1.0
**Status:** In Development
**Start Date:** March 2026

## Executive Summary

Professional corporate website for VIETconsult - company specializing in international workforce recruitment and integration from Vietnam to Germany. Multi-language (DE/EN/VI), modern design, responsive, with emphasis on professional presentation and user experience.

## Business Objectives

1. **Primary Goals:**
   - Establish professional online presence
   - Showcase comprehensive service offerings
   - Generate qualified leads through contact forms
   - Build trust through quality seal and partner presentation

2. **Target Audience:**
   - German companies seeking skilled workers
   - Healthcare facilities (Pflege & Medizin)
   - Technical & industrial companies
   - Vietnamese candidates

3. **Key Success Metrics:**
   - Contact form submissions
   - Page views and engagement
   - Multi-language usage distribution
   - Mobile vs desktop traffic

## Technical Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **i18n:** next-intl (DE/EN/VI)
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React

## Key Features

### Core Functionality
- Multi-language support (DE primary, EN, VI)
- Responsive design (mobile-first)
- Animated page transitions
- Contact forms with GDPR compliance
- Location maps integration
- Partner logos showcase
- Quality seal presentation

### Content Sections
1. Homepage with hero, services overview, benefits
2. About Us (Über uns)
3. Partner (talentsCARE)
4. Advantages (Vorteile)
5. Quality Seal (Gütezeichen)
6. Services (4 detail pages)
7. Contact with locations

## Project Structure

See [system-architecture.md](system-architecture.md) for detailed architecture.

## Design System

### Colors
- Primary Blue: #1e40af
- Vietnamese Red: #dc2626
- Gold Accent: #f59e0b

### Typography
- Headings: Inter
- Body: Inter
- Vietnamese: Be Vietnam Pro

### Responsive Breakpoints
- xs: 320px, sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px

## Development Phases

See [project-roadmap.md](project-roadmap.md) for detailed timeline.

**Phase 01:** Project Setup ✅
**Phase 02:** i18n Setup (In Progress)
**Phase 03-10:** Page Implementation
**Phase 11:** Testing & QA
**Phase 12:** Deployment

## Stakeholders

- **Client:** VIETconsult
- **Development Team:** ClaudeKit
- **Reference Design:** talentscare.de

## Constraints & Requirements

### Technical Requirements
- Lighthouse Score: >90 (all categories)
- GDPR compliant contact forms
- SEO optimized (meta tags, structured data)
- Accessibility standards (WCAG 2.1 AA)

### Business Requirements
- German as primary language
- Professional corporate aesthetic
- Mobile-responsive
- Fast page load times

## Risks & Mitigation

1. **Security Vulnerabilities:** Regular npm audit, dependency updates
2. **Performance:** Image optimization, code splitting, lazy loading
3. **Browser Compatibility:** Testing across major browsers
4. **i18n Complexity:** Structured translation keys, proper routing

## Documentation

- **Code Standards:** [code-standards.md](code-standards.md)
- **Design Guidelines:** [design-guidelines.md](design-guidelines.md)
- **System Architecture:** [system-architecture.md](system-architecture.md)
- **Deployment Guide:** [deployment-guide.md](deployment-guide.md)
- **Codebase Summary:** [codebase-summary.md](codebase-summary.md)
- **Project Roadmap:** [project-roadmap.md](project-roadmap.md)

## Version History

- **v1.0.0** (March 2026) - Initial project setup
