# Phase 10: Visual Assets Generation

## Context
- [Project Specification](../../CLAUDE.md)
- [Plan Overview](./plan.md)
- [Previous Phase](./phase-09-contact-page.md)

## Overview
| Field | Value |
|-------|-------|
| Date | 2026-03-27 |
| Priority | Medium |
| Status | pending |
| Est. Hours | 8 |
| Dependencies | Phase 05-09 |

## Key Insights
- Need hero images, team photos, office images
- Icons handled by Lucide React (no generation needed)
- Placeholder images for development
- Real images to be provided by client
- Optimize all images for web performance

## Requirements
1. Create placeholder image structure
2. Generate/source hero background images
3. Team member photo placeholders
4. Office/location images
5. Partner logo placeholders
6. OG image for social sharing
7. Favicon and app icons

## Architecture Decisions

### Image Organization
```
/public
├── /images
│   ├── /hero
│   │   └── hero-bg.webp
│   ├── /team
│   │   └── placeholder.jpg
│   ├── /offices
│   │   ├── frankfurt.jpg
│   │   ├── hannover.jpg
│   │   ├── wilhelmshaven.jpg
│   │   └── vietnam.jpg
│   ├── /partners
│   │   └── (partner logos)
│   ├── /about
│   │   └── office.jpg
│   └── /services
│       └── (service images)
├── /icons
│   └── (custom icons if needed)
├── favicon.ico
├── apple-touch-icon.png
└── og-image.jpg
```

### Image Optimization Strategy
- Use Next.js Image component for automatic optimization
- Serve WebP format where supported
- Implement blur placeholders for LCP improvement
- Lazy load below-fold images

## Related Code Files
| File | Purpose |
|------|---------|
| `public/images/*` | All image assets |
| `public/favicon.ico` | Browser favicon |
| `public/apple-touch-icon.png` | iOS home screen |
| `public/og-image.jpg` | Social media sharing |
| `src/app/[locale]/layout.tsx` | Metadata with icons |

## Implementation Steps

### Step 1: Create Directory Structure
```bash
mkdir -p public/images/hero
mkdir -p public/images/team
mkdir -p public/images/offices
mkdir -p public/images/partners
mkdir -p public/images/about
mkdir -p public/images/services
mkdir -p public/icons
```

### Step 2: Generate Placeholder Images

Use AI image generation tools or stock photos for placeholders:

**Hero Background Options:**
- Professional office environment with international team
- Abstract geometric patterns in brand colors
- Gradient with subtle pattern overlay

**Team Placeholders:**
- Generic professional headshots
- Silhouette placeholders
- Gradient avatars with initials

### Step 3: Create Favicon Set

Generate from brand logo using tools like:
- realfavicongenerator.net
- favicon.io

Required sizes:
```
favicon.ico (16x16, 32x32)
favicon-16x16.png
favicon-32x32.png
apple-touch-icon.png (180x180)
android-chrome-192x192.png
android-chrome-512x512.png
```

### Step 4: Create OG Image (Social Sharing)

**Specifications:**
- Size: 1200x630px
- Content: Logo + tagline + brand colors
- Format: JPG (better compression for social)

**Design:**
```
┌────────────────────────────────────┐
│                                    │
│     VIET[red]consult              │
│                                    │
│     Ganzheitliche Lösungen für    │
│     Fachkräfte aus Vietnam.       │
│                                    │
│     vietconsult.com               │
│                                    │
└────────────────────────────────────┘
Background: Gradient blue (#1e40af → #3b82f6)
```

### Step 5: Configure Metadata with Icons (src/app/[locale]/layout.tsx)
```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://vietconsult.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: 'VIETconsult',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIETconsult - Internationale Fachkräfte aus Vietnam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
}
```

### Step 6: Create Web App Manifest (public/site.webmanifest)
```json
{
  "name": "VIETconsult",
  "short_name": "VIETconsult",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#1e40af",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

### Step 7: Create Image Component Wrappers

**Hero Image Component:**
```typescript
// src/components/ui/hero-image.tsx
import Image from 'next/image'

interface HeroImageProps {
  src: string
  alt: string
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={85}
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAcI/8QAIhAAAgEDBAMBAQAAAAAAAAAAAQIDBAURBgcSIQAIEzFB/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAeEQABAwQDAAAAAAAAAAAAAAABAAIDBBEhMQUSQf/aAAwDAQACEQMRAD8A"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-primary-blue/50" />
    </div>
  )
}
```

**Team Avatar Component:**
```typescript
// src/components/ui/team-avatar.tsx
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TeamAvatarProps {
  src?: string
  name: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function TeamAvatar({ src, name, size = 'md', className }: TeamAvatarProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  }

  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  if (!src) {
    return (
      <div
        className={cn(
          'rounded-full bg-gradient-hero flex items-center justify-center text-white font-semibold',
          sizeClasses[size],
          className
        )}
      >
        {initials}
      </div>
    )
  }

  return (
    <div className={cn('relative rounded-full overflow-hidden', sizeClasses[size], className)}>
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover"
      />
    </div>
  )
}
```

### Step 8: Image Optimization Script

Create a script to optimize images before deployment:

```json
// package.json scripts
{
  "scripts": {
    "optimize-images": "npx sharp-cli --input public/images --output public/images-optimized"
  }
}
```

### Step 9: Asset Checklist

**Required Images:**
| Asset | Size | Format | Status |
|-------|------|--------|--------|
| Hero background | 1920x1080 | WebP | Placeholder |
| Team placeholder | 400x500 | JPG | Placeholder |
| Office Frankfurt | 800x600 | WebP | Placeholder |
| Office Hannover | 800x600 | WebP | Placeholder |
| Office Wilhelmshaven | 800x600 | WebP | Placeholder |
| Office Vietnam | 800x600 | WebP | Placeholder |
| OG Image | 1200x630 | JPG | Generate |
| Favicon | 32x32 | ICO | Generate |
| Apple Touch Icon | 180x180 | PNG | Generate |

## Todo List
- [ ] Create directory structure
- [ ] Generate/source hero placeholder image
- [ ] Create team avatar placeholders
- [ ] Create office placeholder images
- [ ] Design and export OG image
- [ ] Generate favicon set
- [ ] Create site.webmanifest
- [ ] Configure metadata in layout
- [ ] Create HeroImage component
- [ ] Create TeamAvatar component
- [ ] Test image loading performance
- [ ] Document image replacement process

## Success Criteria
- [x] All placeholder images in place
- [x] Favicon displays correctly
- [x] OG image works on social media
- [x] Images lazy load properly
- [x] No layout shift from images
- [x] Images optimized (< 200KB each)

## Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Slow image loading | Medium | High | Use Next.js Image, optimize |
| Missing client images | High | Low | Use quality placeholders |
| Wrong aspect ratios | Medium | Medium | Define standard sizes |

## Security Considerations
- Only serve images from /public
- No user-uploaded images without validation
- Sanitize image metadata

## Next Steps
After completion, proceed to:
- [Phase 11: Testing & Optimization](./phase-11-testing-optimization.md)
