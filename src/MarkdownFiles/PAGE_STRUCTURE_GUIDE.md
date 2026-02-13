# DrivenMN Page-Based Architecture Guide

## ✅ Completed: Home Page Restructure

The Home Page has been successfully restructured into a component-based architecture.

### New Structure

```
/pages
  /home
    /sections
      /Hero.tsx
      /Configurators.tsx
      /Services.tsx
      /WhyChooseUs.tsx
      /Testimonials.tsx
      /FinalCTA.tsx
    index.tsx (main page component)
```

### How It Works

#### Main Page Component (`/pages/home/index.tsx`)
The main page imports and composes all section components:

```typescript
import { Hero } from './sections/Hero';
import { Configurators } from './sections/Configurators';
import { Services } from './sections/Services';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { Testimonials } from './sections/Testimonials';
import { FinalCTA } from './sections/FinalCTA';

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Hero onNavigate={onNavigate} />
      <Configurators onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
```

#### Section Components (`/pages/home/sections/`)
Each section is a standalone component:

- **Hero.tsx** - Main hero section with CTA buttons and stats
- **Configurators.tsx** - Three configurator cards (PPF, Tint, Tesla)
- **Services.tsx** - 6 service cards grid
- **WhyChooseUs.tsx** - 4 feature highlights
- **Testimonials.tsx** - 3 customer testimonials
- **FinalCTA.tsx** - Bottom call-to-action section

## Benefits of This Architecture

### 1. **Modularity**
- Each section can be developed, tested, and modified independently
- Easy to reorder sections or add new ones
- Sections can be reused across different pages

### 2. **Maintainability**
- Smaller, focused files are easier to understand and maintain
- Clear separation of concerns
- Easy to find and modify specific sections

### 3. **Collaboration**
- Multiple developers can work on different sections simultaneously
- Less merge conflicts with smaller files
- Clear ownership of components

### 4. **Performance**
- Potential for code splitting and lazy loading sections
- Easier to optimize individual sections

### 5. **Testing**
- Sections can be unit tested in isolation
- Easier to write focused tests

## How to Apply This Pattern to Other Pages

### Example: PPF Configurator Page

```
/pages
  /configurators
    /ppf
      /sections
        /Header.tsx
        /ProgressStepper.tsx
        /VehicleSelection.tsx
        /FilmSelection.tsx
        /LivePreview.tsx
        /PricingSummary.tsx
      index.tsx (main configurator)
```

### Example: Service Page (Tesla PPF)

```
/pages
  /services
    /ppf
      /tesla
        /sections
          /Hero.tsx
          /Packages.tsx
          /Features.tsx
          /Gallery.tsx
          /FAQ.tsx
          /CTA.tsx
        index.tsx
```

## Implementation Steps for New Pages

### Step 1: Identify Sections
Look at the current page and identify distinct sections:
- Hero/Header
- Content sections
- Features/Benefits
- Testimonials/Reviews
- CTA/Footer

### Step 2: Create Folder Structure
```bash
mkdir -p pages/[page-name]/sections
```

### Step 3: Extract Sections
Move each section into its own component file:
- Keep props simple (usually just `onNavigate`)
- Import dependencies at the section level
- Maintain existing styling and functionality

### Step 4: Create Index
Create the main page component that composes sections:
```typescript
import { Section1 } from './sections/Section1';
import { Section2 } from './sections/Section2';

export function PageName({ onNavigate }) {
  return (
    <div>
      <Section1 onNavigate={onNavigate} />
      <Section2 onNavigate={onNavigate} />
    </div>
  );
}
```

### Step 5: Update App.tsx
Update the import in App.tsx:
```typescript
// Before
import { PageName } from './components/PageName';

// After
import { PageName } from './pages/page-name';
```

## Import Path Patterns

### From Section to Shared Components
```typescript
// In /pages/home/sections/Hero.tsx
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { Button } from '../../../components/ui/button';
```

### From Section to Utils
```typescript
// In /pages/home/sections/Services.tsx
import { vehicleData } from '../../../utils/vehicleData';
```

### From Main Page to Sections
```typescript
// In /pages/home/index.tsx
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
```

### From App.tsx to Pages
```typescript
// In /App.tsx
import { HomePage } from './pages/home';
import { PPFConfigurator } from './pages/configurators/ppf';
```

## Shared Components vs Page Sections

### Shared Components (`/components`)
Components that are used across multiple pages:
- Navigation
- Footer
- FloatingActions
- DevTools
- UI components (shadcn)
- Figma utilities

### Page Sections (`/pages/[page]/sections`)
Components specific to a single page:
- Hero sections
- Page-specific feature sections
- Page-specific content blocks

## Next Pages to Restructure

### Priority 1: Landing Pages
1. **Home Page** ✅ COMPLETE
2. Contact Page
3. Blog Page
4. Shop Page

### Priority 2: Service Pages
1. Tesla PPF Page
2. Auto Window Tint Page
3. Ceramic Coating Page
4. Paint Correction Page
5. Vinyl Wraps Page
6. Marine Window Tint Page
7. Tesla Window Tint Page
8. Residential/Commercial Tint Page

### Priority 3: Configurators
1. PPF Configurator
2. Tint Configurator  
3. Tesla Package Configurator

**Note:** Configurators can remain as single files if they're already well-structured, or can be broken into sections like:
- Header
- ProgressStepper
- Step1Component
- Step2Component
- etc.

## Current Status

### ✅ Completed
- Home Page restructured with 6 sections
- App.tsx updated to use new import path
- Documentation created

### 📝 Remaining
- 20+ additional pages to restructure
- Each page needs section analysis
- Import paths need updating

## Commands Reference

### Create New Page Structure
```bash
# Create page and sections folder
mkdir -p pages/[page-name]/sections

# Create index file
touch pages/[page-name]/index.tsx

# Create section files
touch pages/[page-name]/sections/Section1.tsx
touch pages/[page-name]/sections/Section2.tsx
```

### View Current Page Structure
```bash
ls -R pages/
```

## Questions & Decisions

### When to create a new section?
Create a new section when:
- The content is visually distinct (new full-width section)
- The content could be reused elsewhere
- The section has 100+ lines of JSX
- The section has its own state or logic

### When to keep content together?
Keep content together when:
- Sections are tightly coupled
- Combined they're less than 150 lines
- They share significant state

### How to handle shared data?
- Props for simple data flow
- Context for deeply nested components
- Utils for static data/config

## File Naming Conventions

### Pages
- PascalCase for component names: `HomePage`, `ContactPage`
- kebab-case for folders: `home`, `contact`, `ceramic-coating`
- Always use `index.tsx` for main page component

### Sections
- PascalCase for component files: `Hero.tsx`, `Services.tsx`
- Descriptive names that explain the section's purpose
- No `index.tsx` in sections folder

## Summary

The page-based architecture provides:
✅ Clear organization by page
✅ Modular, reusable sections
✅ Better maintainability
✅ Easier collaboration
✅ Scalable structure

Next step: Apply this pattern to remaining pages, starting with high-traffic pages like Contact and Service pages.
