# Breadcrumb Navigation Implementation

## Overview
All pages now include breadcrumb navigation showing the user's location in the site hierarchy.

## Component: PageBreadcrumb
**Location:** `/components/PageBreadcrumb.tsx`

### Usage Options

#### Option 1: Top Bar Breadcrumb (Standard - 11 pages)
For pages with standard top breadcrumb bar:
```typescript
import { PageBreadcrumb } from '../components/PageBreadcrumb';

// Light theme (default)
<PageBreadcrumb
  segments={[
    { label: 'Services' },
    { label: 'Window Tint' }
  ]}
  onNavigate={onNavigate}
/>

// Dark theme
<PageBreadcrumb
  segments={[
    { label: 'Services' },
    { label: 'Ceramic Coating' }
  ]}
  onNavigate={onNavigate}
  theme="dark"
/>
```

#### Option 2: Hero-Integrated Breadcrumb (Window Tint Pages - 4 pages)
For pages with breadcrumb in lower left of hero section:
```typescript
// In the Hero section component:
interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface HeroProps {
  onNavigate: (page: string) => void;
  breadcrumbSegments?: BreadcrumbSegment[];
}

export function Hero({ onNavigate, breadcrumbSegments }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      
      {/* Breadcrumb - Lower Left */}
      {breadcrumbSegments && breadcrumbSegments.length > 0 && (
        <div className="absolute bottom-8 left-8 z-20">
          <div className="flex items-center gap-2 text-sm">
            {/* Home + Segments */}
          </div>
        </div>
      )}
      
      {/* Hero Content */}
    </section>
  );
}

// In the page index.tsx:
<Hero 
  onNavigate={onNavigate}
  breadcrumbSegments={[
    { label: 'Services' },
    { label: 'Window Tint' },
    { label: 'Automotive Window Tint' }
  ]}
/>
```

## Breadcrumb Paths by Page

### Home
- **Path:** Home (no breadcrumb needed)

### Services

#### Paint Protection Film (PPF)
- **Windshield Protection:** Home → Services → Paint Protection Film → Windshield Protection Film
- **Tesla Package:** Home → Services → Paint Protection Film → Tesla Premium Package
- **PPF Configurator:** Home → Services → Paint Protection Film → PPF Quote Configurator

#### Window Tint
- **Auto Tint:** Home → Services → Window Tint → Automotive Window Tint
- **Marine Tint:** Home → Services → Window Tint → Marine Window Tint
- **Residential/Commercial:** Home → Services → Window Tint → Home & Office Window Tint
- **Tesla Tint:** Home → Services → Window Tint → Tesla Window Tint
- **Tint Configurator:** Home → Services → Window Tint → Tint Quote Configurator

#### Vinyl Wraps
- **Main Page:** Home → Services → Vehicle Wraps

#### Ceramic Coating
- **Main Page:** Home → Services → Ceramic Coating

#### Paint Correction
- **Main Page:** Home → Services → Paint Correction & Detail

### Other Pages
- **Blog:** Home → Blog & Resources
- **Contact:** Home → Contact Us
- **Cart:** Home → Shopping Cart

## Implementation Status

### ✅ ALL PAGES COMPLETED WITH CUSTOM POSITIONING! 
1. ✅ PageBreadcrumb component created (light + dark theme)
2. ✅ Auto Window Tint page (hero lower left - dark theme)
3. ✅ Marine Window Tint page (hero lower left - dark theme)
4. ✅ Residential/Commercial Tint page (hero lower left - dark theme)
5. ✅ Tesla Window Tint page (hero lower left - dark theme)
6. ✅ Windshield PPF page (top bar - light theme)
7. ✅ Tesla PPF Package page (top bar - dark theme)
8. ✅ Tint Configurator (top bar - light theme)
9. ✅ PPF Configurator (top bar - light theme)
10. ✅ Vinyl Wraps page (top bar - light theme)
11. ✅ Ceramic Coating page (top bar - dark theme)
12. ✅ Paint Correction page (top bar - dark theme)
13. ✅ Blog page (top bar - light theme)
14. ✅ Contact page (top bar - light theme)
15. ✅ Cart Page (top bar - light theme)

### Not Needed
- Home Page (no breadcrumb on home page)
- Tesla Package Configurator (not yet created)

## Design Specifications

### Light Theme Colors (Default)
- **Background:** White
- **Border:** Gray-200 border-bottom
- **Home icon:** Gray-600, hover Teal (#017974)
- **Links:** Gray-600, hover Teal (#017974)
- **Current page:** Gray-900, medium font weight
- **Separator:** ChevronRight, Gray-400

### Dark Theme Colors
- **Background:** Black/50 with backdrop blur
- **Border:** White/10 border-bottom
- **Home icon:** Gray-300, hover Cyan (#00CFBE)
- **Links:** Gray-300, hover Cyan (#00CFBE)
- **Current page:** White, medium font weight
- **Separator:** ChevronRight, Gray-600

### Styling

#### Light Theme
```typescript
// Container
className="bg-white border-b border-gray-200"

// Home link with icon
<Home className="w-4 h-4" />

// Hover states
className="text-gray-600 hover:text-[#017974] cursor-pointer transition-colors"

// Current page (no link)
className="text-gray-900 font-medium"
```

#### Dark Theme
```typescript
// Container with backdrop blur
className="bg-black/50 border-b border-white/10 backdrop-blur-sm"

// Home link with icon
<Home className="w-4 h-4" />

// Hover states
className="text-gray-300 hover:text-[#00CFBE] cursor-pointer transition-colors"

// Current page (no link)
className="text-white font-medium"
```

### Responsive Behavior
- Mobile: Text wraps naturally, maintains padding
- Tablet: Horizontal layout with comfortable spacing
- Desktop: Full breadcrumb path visible

## Accessibility
- Semantic `<nav>` with `aria-label="breadcrumb"`
- Current page marked with `aria-current="page"`
- Keyboard navigable
- Screen reader friendly

## Integration with Navigation
- All breadcrumb links use the same `onNavigate` function as the main navigation
- Clicking any breadcrumb segment navigates to that page
- Current page is non-clickable (displayed as text)

## SEO Benefits
- Structured navigation path
- Clear site hierarchy for search engines
- Breadcrumb schema markup ready (can be added via SEO component)

## Future Enhancements
1. Add structured data (schema.org breadcrumbs) for SEO
2. Auto-generate breadcrumbs based on route path
3. Add breadcrumb animations/transitions
4. Mobile: Consider collapsed/dropdown breadcrumbs for deep navigation

---

## Summary

✅ **Implementation Complete!** All 15 pages now include breadcrumb navigation with dual positioning system.

**Key Features:**
- ✅ **Hero-integrated breadcrumbs** - Window tint pages display breadcrumbs in lower left of hero
- ✅ **Dual theme support** - Light theme (white bg) and dark theme (transparent with blur)
- ✅ Consistent navigation experience across all pages
- ✅ XPEL brand colors - Light: #017974 teal, Dark: #00CFBE cyan
- ✅ Semantic HTML with accessibility support
- ✅ Mobile responsive design with wrapping
- ✅ Clear visual hierarchy showing page location
- ✅ Smooth hover transitions (300ms)

**Positioning Strategy:**
- **Hero Lower Left (4 pages):** All window tint service pages
  - **Auto Window Tint** → `Home > Services > Window Tint > Automotive Window Tint`
  - **Marine Window Tint** → `Home > Services > Window Tint > Marine Window Tint`
  - **Residential/Commercial** → `Home > Services > Window Tint > Home & Office Window Tint`
  - **Tesla Window Tint** → `Home > Services > Window Tint > Tesla Window Tint`
  - Position: `absolute bottom-8 left-8 z-20`
  - Colors: White text (70% opacity) with cyan hover (#00CFBE)
  - Overlays hero image elegantly with dark gradient background
  
- **Top of Page (11 pages):** All other pages
  - PPF pages, configurators, blog, contact, cart, vinyl wraps, ceramic coating, paint correction
  - Standard breadcrumb bar above content

**Navigation Pattern:**
```
Home → Services → Category → Subcategory → Current Page
```

**Visual Design (Hero-Integrated):**
- Home icon + text links
- Chevron separators (›) with 40% opacity
- Current page in solid white (non-clickable)
- Previous pages in white/70 (clickable, hover to cyan)
- Text size: `text-sm` (14px)
- Spacing: `gap-2` between elements

**Status:** ✅ Complete (15/15 pages implemented with proper positioning and theming)
**Last Updated:** November 18, 2025
