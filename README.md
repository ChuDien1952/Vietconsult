# VIETconsult Corporate Website

Professional corporate website for VIETconsult - international workforce recruitment and integration from Vietnam to Germany.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **i18n:** next-intl (DE, EN, VI)
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript compiler check

## Project Structure

```
/src
├── /app              # Next.js App Router pages
├── /components       # React components
│   ├── /layout      # Layout components (Header, Footer)
│   ├── /ui          # UI primitives (Button, Card)
│   └── /sections    # Page sections
├── /lib              # Utility functions
├── /hooks            # Custom React hooks
└── /types            # TypeScript type definitions
/public
├── /images           # Static images
└── /icons            # Icons and favicons
/locales
├── /de               # German translations
├── /en               # English translations
└── /vi               # Vietnamese translations
```

## Design System

### Colors

- Primary Blue: `#1e40af`
- Vietnamese Red: `#dc2626`
- Gold Accent: `#f59e0b`

### Typography

- Headings: Inter
- Body: Inter
- Vietnamese: Be Vietnam Pro

## License

MIT License - See LICENSE file for details
