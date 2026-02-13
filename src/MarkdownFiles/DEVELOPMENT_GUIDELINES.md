# DrivenMN Development Guidelines

**Version:** 1.0  
**Last Updated:** January 2025  
**Status:** Official Project Standards

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture Principles](#architecture-principles)
3. [File Structure Rules](#file-structure-rules)
4. [Naming Conventions](#naming-conventions)
5. [Component Patterns](#component-patterns)
6. [Import Guidelines](#import-guidelines)
7. [Styling Standards](#styling-standards)
8. [Type Safety](#type-safety)
9. [Data Management](#data-management)
10. [Configurator Development](#configurator-development)
11. [Page Development](#page-development)
12. [Documentation Requirements](#documentation-requirements)
13. [Testing Considerations](#testing-considerations)
14. [Performance Guidelines](#performance-guidelines)
15. [Supabase Integration](#supabase-integration)
16. [Export System](#export-system)
17. [Common Pitfalls](#common-pitfalls)

---

## Project Overview

### Tech Stack
- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS v4.0
- **UI Components:** shadcn/ui (40+ components)
- **Backend:** Supabase (for forms, quotes, bookings, blog)
- **Icons:** lucide-react
- **Charts:** recharts
- **Animations:** motion/react (formerly Framer Motion)
- **State Management:** React Context (Cart)

### Design System
- **Primary Colors:** Teal `#017974`, Yellow `#FDB521`
- **Typography:** Poppins (headings), Inter (body)
- **Theme:** Light theme throughout (Tint Configurator converted from dark)
- **Responsive:** Mobile-first approach

### Target Audience
Minnesota's exclusive XPEL Certified Facility targeting:
- Tesla owners
- Rivian owners
- Luxury vehicle owners
- Marine vessel owners
- Residential/commercial property owners

---

## Architecture Principles

### 1. Modular Structure
**Rule:** Every component should have a clear, single responsibility.

✅ **DO:**
```typescript
// Small, focused components
export function Hero({ onNavigate }: HeroProps) {
  return <section>...</section>;
}
```

❌ **DON'T:**
```typescript
// Large monolithic components (600+ lines)
export function HomePage() {
  // Hero, Services, Testimonials, Footer all in one file
}
```

### 2. Single Source of Truth
**Rule:** Data should live in one place and be re-exported when needed.

✅ **DO:**
```typescript
// /utils/vehicleData.ts - Single source of truth
export const vehicleMakes = [...];

// /components/configurators/shared/vehicleData.ts - Re-export
export * from '../../../utils/vehicleData';
```

❌ **DON'T:**
```typescript
// Duplicate data in multiple files
const vehicleMakes = [...]; // Copy in each configurator
```

### 3. Module Boundaries
**Rule:** Keep clear separation between modules with well-defined interfaces.

✅ **DO:**
```
/components/configurators/
  ├── tint/          # Self-contained module
  ├── ppf/           # Self-contained module
  └── shared/        # Shared utilities
```

❌ **DON'T:**
```typescript
// Cross-module dependencies
import { TintConfigurator } from '../tint/TintConfigurator';
// (from inside PPFConfigurator)
```

---

## File Structure Rules

### Page Structure

**Pattern:** `/pages/[page-name]/index.tsx` + `/pages/[page-name]/sections/`

```
/pages/
  └── [page-name]/
      ├── index.tsx              # Page composition
      └── sections/              # Section components
          ├── Hero.tsx
          ├── Benefits.tsx
          └── CTA.tsx
```

**Rules:**
1. ✅ Each page has its own folder in `/pages/`
2. ✅ Main page file is `index.tsx` (imports/composes sections)
3. ✅ All sections go in `sections/` subdirectory
4. ✅ Each section is 50-150 lines (keep focused)
5. ❌ No page files in `/components/` root

**Example:**
```typescript
// /pages/services/ceramic-coating/index.tsx
import { Hero } from './sections/Hero';
import { Benefits } from './sections/Benefits';
import { Packages } from './sections/Packages';
import { CTA } from './sections/CTA';

export function CeramicCoatingPage({ onNavigate }: PageProps) {
  return (
    <div className="min-h-screen">
      <Hero onNavigate={onNavigate} />
      <Benefits />
      <Packages onNavigate={onNavigate} />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
```

### Configurator Structure

**Pattern:** `/components/configurators/[name]/`

```
/components/configurators/
  ├── index.tsx                  # Parent module export
  ├── shared/                    # Shared utilities
  │   ├── index.ts
  │   ├── vehicleData.ts         # Re-export from /utils/
  │   └── api.ts                 # Re-export from /utils/
  └── [configurator-name]/       # Individual configurator module
      ├── index.tsx              # Module exports
      ├── types.ts               # TypeScript interfaces
      ├── [Name]Configurator.tsx # Main component
      └── [Name]LivePreview.tsx  # Preview component (if needed)
```

**Rules:**
1. ✅ Each configurator is a self-contained module
2. ✅ All configurators export through parent `index.tsx`
3. ✅ Use `shared/` for common utilities (re-exports only)
4. ✅ Each module has its own `types.ts`
5. ✅ Main component ends with `Configurator.tsx`
6. ❌ No cross-module imports (use shared utilities)

### Component Organization

```
/components/
  ├── configurators/          # Configurator modules (DO NOT modify structure)
  ├── ui/                     # shadcn components (DO NOT create new files here)
  ├── figma/                  # Figma import utilities (PROTECTED)
  ├── Navigation.tsx          # Global navigation
  ├── Footer.tsx              # Global footer
  ├── CartPage.tsx            # Shopping cart
  ├── ShopPage.tsx            # E-commerce page
  └── [Utility Components]    # Other global utilities
```

**Rules:**
1. ✅ Global components stay in `/components/` root
2. ✅ Page-specific components go in `/pages/[page]/sections/`
3. ✅ Configurators go in `/components/configurators/[name]/`
4. ❌ Do NOT create files in `/components/ui/` (shadcn only)
5. ❌ Do NOT modify `/components/figma/ImageWithFallback.tsx` (protected)

---

## Naming Conventions

### Files

| Type | Convention | Example |
|------|------------|---------|
| **Pages** | PascalCase, descriptive | `CeramicCoatingPage` |
| **Sections** | PascalCase, noun | `Hero.tsx`, `Benefits.tsx` |
| **Configurators** | PascalCase + "Configurator" | `TintConfigurator.tsx` |
| **Components** | PascalCase | `Navigation.tsx` |
| **Utilities** | camelCase | `vehicleData.ts`, `api.ts` |
| **Types** | `types.ts` | Always named `types.ts` in modules |
| **Docs** | SCREAMING_SNAKE_CASE.md | `DEVELOPMENT_GUIDELINES.md` |

### Components

```typescript
// ✅ DO: PascalCase component names
export function TintConfigurator() { ... }
export function Hero() { ... }

// ❌ DON'T: camelCase or other conventions
export function tintConfigurator() { ... }
export const hero = () => { ... }
```

### Props Interfaces

```typescript
// ✅ DO: ComponentName + "Props"
interface HeroProps {
  onNavigate: (page: string) => void;
}

// ✅ DO: Export if used externally
export interface TintQuote {
  vehicle: Vehicle;
  package: string;
  // ...
}

// ❌ DON'T: Generic names
interface Props { ... }
interface IHero { ... }
```

### Variables

```typescript
// ✅ DO: Descriptive camelCase
const vehicleMakes = [...];
const [currentStep, setCurrentStep] = useState(1);
const isValidEmail = (email: string) => { ... };

// ❌ DON'T: Abbreviations or unclear names
const vm = [...];
const [step, setStep] = useState(1);
const validate = (e: string) => { ... };
```

---

## Component Patterns

### Section Components

**Standard Pattern:**
```typescript
interface SectionNameProps {
  onNavigate?: (page: string) => void;
}

export function SectionName({ onNavigate }: SectionNameProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section content */}
        </div>
      </div>
    </section>
  );
}
```

**Rules:**
1. ✅ Always wrap in `<section>` tag
2. ✅ Use consistent padding: `py-20`
3. ✅ Use container pattern: `container mx-auto px-4`
4. ✅ Use max-width wrapper: `max-w-7xl mx-auto`
5. ✅ Accept `onNavigate` prop if navigation needed

### Configurator Components

**Standard Pattern:**
```typescript
export function ConfiguratorName() {
  const { addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({...});

  // Validation
  const canProceed = useMemo(() => {
    // Validation logic
  }, [dependencies]);

  // Navigation
  const handleNext = () => {
    if (canProceed) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Configurator content */}
    </div>
  );
}
```

**Rules:**
1. ✅ Use `useCart()` hook for cart integration
2. ✅ Use `currentStep` for multi-step flows
3. ✅ Use `useMemo` for expensive validation
4. ✅ Provide clear navigation (Next/Back buttons)
5. ✅ Show loading states during API calls
6. ✅ Validate before proceeding to next step

### Page Components

**Standard Pattern:**
```typescript
interface PageNameProps {
  onNavigate: (page: string) => void;
}

export function PageName({ onNavigate }: PageNameProps) {
  return (
    <div className="min-h-screen">
      <Section1 onNavigate={onNavigate} />
      <Section2 onNavigate={onNavigate} />
      <Section3 />
      <Section4 onNavigate={onNavigate} />
    </div>
  );
}
```

**Rules:**
1. ✅ Always wrap in `<div className="min-h-screen">`
2. ✅ Import all sections from `./sections/`
3. ✅ Pass `onNavigate` to sections that need it
4. ✅ Keep composition logic minimal (just rendering sections)

---

## Import Guidelines

### Import Order

**Standard Order:**
```typescript
// 1. React imports
import { useState, useEffect, useMemo } from 'react';

// 2. Third-party libraries
import { ChevronRight, Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';

// 3. UI components (shadcn)
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';

// 4. Local components
import { Hero } from './sections/Hero';
import { TintLivePreview } from './TintLivePreview';

// 5. Utils and data
import { vehicleMakes, tintPackages } from '../shared/vehicleData';
import { useCart } from '../../../utils/cartContext';

// 6. Types
import type { TintQuote } from './types';

// 7. Assets (if needed)
import logo from '../../imports/assets/driven-logo.svg';
```

### Import Paths

**Rules:**

1. **Configurator Module Imports:**
```typescript
// ✅ DO: Import from shared re-exports
import { vehicleMakes, tintPackages } from '../shared/vehicleData';
import { submitTintQuote } from '../shared/api';

// ❌ DON'T: Import directly from utils
import { vehicleMakes } from '../../../utils/vehicleData';
```

2. **Page Imports:**
```typescript
// ✅ DO: Import sections relatively
import { Hero } from './sections/Hero';
import { Benefits } from './sections/Benefits';

// ✅ DO: Import pages from index
import { HomePage } from './pages/home';

// ❌ DON'T: Import sections from other pages
import { Hero } from '../../home/sections/Hero';
```

3. **Component Imports:**
```typescript
// ✅ DO: Import configurators from parent module
import { TintConfigurator, PPFConfigurator } from './components/configurators';

// ✅ DO: Import shadcn from relative path
import { Button } from './components/ui/button';

// ❌ DON'T: Import individual modules directly
import { TintConfigurator } from './components/configurators/tint/TintConfigurator';
```

### Special Import Rules

**Version-Specific Imports:**
```typescript
// ✅ DO: Specify version for these packages
import { toast } from 'sonner@2.0.3';
import { useForm } from 'react-hook-form@7.55.0';

// ✅ DO: Use standard import for Motion
import { motion } from 'motion/react';
// Note: Call it "Motion" not "Framer Motion"
```

**Image Imports:**
```typescript
// ✅ DO: Use ImageWithFallback for new images
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback
  src="https://images.unsplash.com/..."
  alt="Description"
  className="w-full h-64 object-cover"
/>

// ✅ DO: Use imported images from Figma
import logo from './imports/assets/driven-logo.svg';
```

---

## Styling Standards

### Tailwind Usage

**Rules:**

1. **Typography - DO NOT override unless requested:**
```typescript
// ❌ DON'T: Add font size/weight classes
<h1 className="text-4xl font-bold">Title</h1>

// ✅ DO: Use semantic HTML, let globals.css handle it
<h1>Title</h1>

// ✅ EXCEPTION: Only if user explicitly requests
<h1 className="text-6xl font-black">Custom Title</h1>
```

2. **Layout - Standard Patterns:**
```typescript
// Container pattern
<div className="container mx-auto px-4">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</div>

// Section spacing
<section className="py-20 bg-white">

// Grid layouts
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// Flex layouts
<div className="flex items-center justify-between gap-4">
```

3. **Colors - Use Design System:**
```typescript
// ✅ DO: Use brand colors
className="bg-[#017974] text-white"  // Teal
className="bg-[#FDB521] text-black"  // Yellow

// ✅ DO: Use semantic colors
className="bg-white text-gray-900"
className="bg-gray-50 border border-gray-200"

// ❌ DON'T: Random colors
className="bg-blue-500"
className="text-purple-600"
```

4. **Responsive Design:**
```typescript
// ✅ DO: Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div className="text-base md:text-lg lg:text-xl">
<div className="p-4 md:p-6 lg:p-8">

// ✅ DO: Hide on mobile when needed
<div className="hidden md:block">Desktop only</div>
<div className="md:hidden">Mobile only</div>
```

### CSS Custom Properties

**Location:** `/styles/globals.css`

**Rules:**
1. ❌ **DO NOT create** `tailwind.config.js` (using Tailwind v4.0)
2. ❌ **DO NOT modify** typography tokens unless user requests style change
3. ✅ **DO read** existing tokens before adding new ones

---

## Type Safety

### TypeScript Standards

**Rules:**

1. **Interfaces over Types (for objects):**
```typescript
// ✅ DO: Use interfaces for object shapes
export interface TintQuote {
  vehicle: Vehicle;
  package: string;
  film: string;
}

// ✅ DO: Use types for unions/primitives
export type ConfiguratorType = 'tint' | 'ppf' | 'tesla';
```

2. **Prop Interfaces:**
```typescript
// ✅ DO: Define clear prop interfaces
interface HeroProps {
  onNavigate: (page: string) => void;
  title?: string;
}

// ❌ DON'T: Use any
interface HeroProps {
  onNavigate: any;
}
```

3. **Module Types:**
```typescript
// ✅ DO: Each module has its own types.ts
// /components/configurators/tint/types.ts
export interface TintQuote {
  // ...
}

// ✅ DO: Export types that are used externally
export type { TintQuote };
```

### Type Exports

**Pattern:**
```typescript
// /components/configurators/tint/index.tsx
export { TintConfigurator } from './TintConfigurator';
export { TintLivePreview } from './TintLivePreview';
export type { TintQuote } from './types';
```

---

## Data Management

### Vehicle Data

**Location:** `/utils/vehicleData.ts`

**Rules:**
1. ✅ **Single source of truth** - All vehicle/pricing data here
2. ✅ **Re-export in configurators** via `../shared/vehicleData`
3. ❌ **No duplication** - Never copy data to other files

**Structure:**
```typescript
// Interfaces
export interface VehicleMake {
  id: string;
  name: string;
  models: VehicleModel[];
}

// Data
export const vehicleMakes: VehicleMake[] = [...];
export const tintFilms: TintFilm[] = [...];
export const tintPackages: TintPackage[] = [...];

// Helper functions
export function calculateTintPrice(params) { ... }
export function getAvailableTintFilms(type) { ... }
```

### API Functions

**Location:** `/utils/api.ts`

**Rules:**
1. ✅ All API calls centralized here
2. ✅ Mock responses during development
3. ✅ Clear function names: `submit[Feature]Quote`

**Pattern:**
```typescript
export async function submitTintQuote(quote: TintQuote): Promise<void> {
  try {
    // API call logic
    console.log('Submitting tint quote:', quote);
    
    // Mock success
    return Promise.resolve();
  } catch (error) {
    console.error('Error submitting quote:', error);
    throw error;
  }
}
```

### Cart Context

**Location:** `/utils/cartContext.tsx`

**Usage:**
```typescript
// In any component
import { useCart } from '../../utils/cartContext';

function Component() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      id: 'unique-id',
      name: 'Product Name',
      price: 1299,
      // ...
    });
  };
}
```

---

## Configurator Development

### Adding a New Configurator

**Checklist:**

1. **Create module folder:**
```bash
/components/configurators/[name]/
  ├── index.tsx
  ├── types.ts
  ├── [Name]Configurator.tsx
  └── [Name]LivePreview.tsx (if needed)
```

2. **Create types:**
```typescript
// types.ts
export interface [Name]Quote {
  vehicle: Vehicle;
  // ...configurator-specific fields
}
```

3. **Create configurator component:**
```typescript
// [Name]Configurator.tsx
import { useState, useMemo } from 'react';
import { useCart } from '../../../utils/cartContext';
import { vehicleMakes } from '../shared/vehicleData';

export function [Name]Configurator() {
  // State, logic, render
}
```

4. **Create module index:**
```typescript
// index.tsx
export { [Name]Configurator } from './[Name]Configurator';
export type { [Name]Quote } from './types';
```

5. **Add to parent module:**
```typescript
// /components/configurators/index.tsx
export * from './tint';
export * from './ppf';
export * from './[name]';  // Add this line
```

6. **Update App.tsx:**
```typescript
import {
  TintConfigurator,
  PPFConfigurator,
  [Name]Configurator  // Add import
} from './components/configurators';
```

### Configurator Standards

**Multi-Step Flow:**
```typescript
const steps = [
  { number: 1, title: 'Vehicle', description: 'Select your vehicle' },
  { number: 2, title: 'Package', description: 'Choose a package' },
  { number: 3, title: 'Options', description: 'Select options' },
  { number: 4, title: 'Review', description: 'Review & submit' },
];

// Progress indicator
<div className="flex justify-between mb-8">
  {steps.map(step => (
    <StepIndicator
      key={step.number}
      {...step}
      isActive={currentStep === step.number}
      isComplete={currentStep > step.number}
    />
  ))}
</div>
```

**Validation Pattern:**
```typescript
const canProceed = useMemo(() => {
  switch (currentStep) {
    case 1:
      return selectedVehicle && selectedMake && selectedModel;
    case 2:
      return selectedPackage !== null;
    case 3:
      return selectedFilm && selectedVLT;
    default:
      return false;
  }
}, [currentStep, selectedVehicle, selectedPackage, selectedFilm, selectedVLT]);
```

**Live Preview Integration:**
```typescript
// Two-column layout
<div className="grid lg:grid-cols-2 gap-8">
  {/* Left: Configuration Form */}
  <div>{/* Form content */}</div>
  
  {/* Right: Live Preview */}
  <div className="lg:sticky lg:top-24 lg:self-start">
    <[Name]LivePreview
      vehicle={selectedVehicle}
      // ...props
    />
  </div>
</div>
```

---

## Page Development

### Adding a New Page

**Checklist:**

1. **Create page folder:**
```bash
/pages/[page-name]/
  ├── index.tsx
  └── sections/
      ├── Hero.tsx
      ├── Section1.tsx
      ├── Section2.tsx
      └── CTA.tsx
```

2. **Create section components:**
```typescript
// sections/Hero.tsx
interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return <section className="py-20">{/* Content */}</section>;
}
```

3. **Create page index:**
```typescript
// index.tsx
import { Hero } from './sections/Hero';
import { Section1 } from './sections/Section1';

interface [Page]PageProps {
  onNavigate: (page: string) => void;
}

export function [Page]Page({ onNavigate }: [Page]PageProps) {
  return (
    <div className="min-h-screen">
      <Hero onNavigate={onNavigate} />
      <Section1 onNavigate={onNavigate} />
    </div>
  );
}
```

4. **Add to App.tsx:**
```typescript
// Import
import { [Page]Page } from './pages/[page-name]';

// Add to Page type
type Page = 
  | 'home'
  | '[page-name]'  // Add this
  | ...;

// Add to renderPage
function renderPage() {
  switch (currentPage) {
    case '[page-name]':
      return <[Page]Page onNavigate={handleNavigate} />;
    // ...
  }
}
```

### Section Guidelines

**Size:** 50-150 lines per section

**When to split:**
- ✅ Section exceeds 150 lines
- ✅ Section has multiple distinct responsibilities
- ✅ Section could be reused elsewhere

**Example Split:**
```typescript
// Before: Large section (200+ lines)
export function ServicesSection() {
  // PPF services
  // Tint services
  // Coating services
  // Wrap services
}

// After: Split into focused sections
export function PPFServices() { }
export function TintServices() { }
export function CoatingServices() { }
```

---

## Documentation Requirements

### When to Create Documentation

**Required Documentation:**
1. ✅ New configurator module → Add to `CONFIGURATORS_MODULE_SUMMARY.md`
2. ✅ New feature/hotkey → Add to `HOTKEY_REFERENCE.md`
3. ✅ Major restructure → Create progress document
4. ✅ Export feature → Create export guide

**Do NOT Create:**
1. ❌ Generic README files without user request
2. ❌ Duplicate documentation
3. ❌ Overly detailed API docs for simple functions

### Documentation Pattern

**Header:**
```markdown
# Feature Name

**Version:** 1.0
**Last Updated:** Month Year
**Status:** Active/Complete/Deprecated
```

**Sections:**
```markdown
## Overview
Brief description

## Usage
How to use

## Examples
Code examples

## Reference
Detailed information
```

### Code Comments

**Rules:**

```typescript
// ✅ DO: Comment complex logic
// Calculate total price including add-ons and discounts
const totalPrice = basePrice + addOnsTotal - (basePrice * discount);

// ✅ DO: Document non-obvious behavior
// XPEL Prime CS was removed per customer request (Dec 2024)
const films = ['XPEL Prime XR', 'XPEL Prime HP'];

// ❌ DON'T: Comment obvious code
// Set the name
setName(value);

// ❌ DON'T: Leave TODO comments
// TODO: Fix this later
```

---

## Testing Considerations

### Manual Testing Checklist

**After any configurator change:**
- [ ] All steps navigate correctly
- [ ] Validation works (can't proceed without selections)
- [ ] Pricing calculates correctly
- [ ] Cart integration works
- [ ] Live preview updates
- [ ] Form submission succeeds
- [ ] Loading states display
- [ ] Error handling works

**After any page change:**
- [ ] All sections render
- [ ] Navigation works
- [ ] Responsive design works (mobile/tablet/desktop)
- [ ] Images load
- [ ] Links work
- [ ] CTA buttons function

**After any styling change:**
- [ ] Design system colors maintained
- [ ] Typography not overridden (unless intended)
- [ ] Responsive breakpoints work
- [ ] No visual regressions

---

## Performance Guidelines

### Code Splitting

**Pattern:**
```typescript
// ✅ DO: Use lazy loading for large pages (if needed)
const ShopPage = lazy(() => import('./components/ShopPage'));

// ✅ DO: Use useMemo for expensive calculations
const availableFilms = useMemo(() => {
  return getAvailableTintFilms(vehicleType);
}, [vehicleType]);

// ❌ DON'T: Recalculate on every render
const availableFilms = getAvailableTintFilms(vehicleType);
```

### Image Optimization

**Rules:**
```typescript
// ✅ DO: Use Unsplash with appropriate size
const imageUrl = 'https://images.unsplash.com/...?w=1080';

// ✅ DO: Use lazy loading for images below fold
<ImageWithFallback loading="lazy" ... />

// ✅ DO: Provide alt text
<ImageWithFallback alt="Tesla Model 3 with window tint" ... />
```

---

## Supabase Integration

### Form Submission Pattern

```typescript
import { submitContactForm } from '../../utils/api';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    await submitContactForm(formData);
    toast.success('Form submitted successfully!');
    setFormData(initialState);
  } catch (error) {
    console.error('Error:', error);
    toast.error('Failed to submit form. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

**Rules:**
1. ✅ All API calls go through `/utils/api.ts`
2. ✅ Show loading states during submission
3. ✅ Use toast notifications for feedback
4. ✅ Reset form on success
5. ✅ Handle errors gracefully

---

## Export System

### Configurator Export (Cmd+Shift+E)

**Files Involved:**
- `/utils/configuratorExport.ts` - Export logic
- `/utils/configuratorExportBundle.ts` - Bundle definitions
- `/utils/submoduleExport.ts` - Module export utilities
- `/utils/submoduleExportHandler.ts` - ZIP generation
- `/components/ConfiguratorExportDialog.tsx` - UI

**When to Update:**
```typescript
// ✅ DO: Update bundle when adding new configurator
// /utils/configuratorExportBundle.ts
export function getConfiguratorBundle(type: ConfiguratorType): ExportBundle {
  const bundles: Record<ConfiguratorType, ExportBundle> = {
    tint: { ... },
    ppf: { ... },
    [newType]: {  // Add new configurator
      type: '[newType]',
      files: [...],
      dependencies: [...],
    }
  };
}
```

---

## Common Pitfalls

### ❌ Don't: Override Typography

```typescript
// ❌ WRONG
<h1 className="text-4xl font-bold">Title</h1>

// ✅ CORRECT
<h1>Title</h1>
```

### ❌ Don't: Create Duplicate Data

```typescript
// ❌ WRONG: Copying data
const tintFilms = ['XPEL Prime XR', ...];  // In configurator

// ✅ CORRECT: Import from single source
import { tintFilms } from '../shared/vehicleData';
```

### ❌ Don't: Break Module Boundaries

```typescript
// ❌ WRONG: Cross-module import
import { TintConfigurator } from '../tint/TintConfigurator';

// ✅ CORRECT: Import from parent or use shared utilities
import { TintConfigurator } from '../../configurators';
```

### ❌ Don't: Modify Protected Files

```typescript
// ❌ NEVER MODIFY:
// - /components/figma/ImageWithFallback.tsx
// - /components/ui/* (shadcn components - only use, don't create)
// - /styles/globals.css (typography tokens without user request)
```

### ❌ Don't: Create Large Monolithic Components

```typescript
// ❌ WRONG: 600+ line component
export function HomePage() {
  // Everything in one file
}

// ✅ CORRECT: Modular sections
export function HomePage({ onNavigate }: Props) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <Testimonials />
    </>
  );
}
```

### ❌ Don't: Use Inconsistent Import Paths

```typescript
// ❌ WRONG: Mixing import styles
import { vehicleMakes } from '../../../utils/vehicleData';  // In one place
import { vehicleMakes } from '../shared/vehicleData';       // In another

// ✅ CORRECT: Consistent within context
// In configurators: always use ../shared/
// In pages: always use ../../utils/
```

---

## Quick Reference Checklist

### Before Creating a New Component

- [ ] Does it fit the existing structure?
- [ ] Is there an existing component I can reuse?
- [ ] Should this be a section, page, or utility?
- [ ] What imports will it need?
- [ ] What props interface does it need?

### Before Modifying Existing Code

- [ ] Have I read the existing code?
- [ ] Do I understand the pattern used?
- [ ] Am I maintaining consistency?
- [ ] Am I breaking any module boundaries?
- [ ] Do I need to update documentation?

### Before Committing Changes

- [ ] All imports working?
- [ ] No TypeScript errors?
- [ ] Responsive design works?
- [ ] Manual testing complete?
- [ ] Documentation updated?
- [ ] No console errors?

---

## Summary

### Core Principles

1. **Modularity First** - Small, focused components
2. **Single Source of Truth** - No duplicate data
3. **Clear Boundaries** - Respect module separation
4. **Type Safety** - Use TypeScript properly
5. **Consistent Patterns** - Follow established conventions
6. **Documentation** - Keep docs updated
7. **Performance** - Use memoization and lazy loading
8. **Accessibility** - Semantic HTML and ARIA labels

### Key Patterns

- **Pages:** `/pages/[name]/index.tsx` + `sections/`
- **Configurators:** `/components/configurators/[name]/`
- **Shared Data:** `/utils/` → re-export in `shared/`
- **Imports:** Configurators use `../shared/`, pages use relative
- **Styling:** Use design system, don't override typography
- **Types:** Each module has `types.ts`

### Quality Standards

- Components: 50-150 lines
- Clear prop interfaces
- Proper error handling
- Loading states
- Responsive design
- Accessibility
- Performance optimization

---

**Remember:** When in doubt, follow the existing patterns. The codebase is consistent—keep it that way!

**Questions?** Check related documentation:
- `RESTRUCTURE_VERIFICATION.md` - Architecture overview
- `CONFIGURATORS_MODULE_SUMMARY.md` - Configurator details
- `PAGE_STRUCTURE_GUIDE.md` - Page patterns
- `HOTKEY_REFERENCE.md` - Developer tools
