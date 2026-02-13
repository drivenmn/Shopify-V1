# DrivenMN Development Guidelines

## 📚 Main Documentation

**Full development guidelines have been created at the project root:**

- **[`/DEVELOPMENT_GUIDELINES.md`](../DEVELOPMENT_GUIDELINES.md)** - Comprehensive guidelines covering all aspects of development
- **[`/QUICK_REFERENCE.md`](../QUICK_REFERENCE.md)** - One-page quick reference for common patterns

---

## 🎯 Quick Rules (Most Important)

### File Structure
- ✅ Pages go in `/pages/[name]/` with `sections/` subdirectory
- ✅ Configurators go in `/components/configurators/[name]/`
- ✅ Each module is self-contained with `index.tsx` and `types.ts`
- ❌ Never create large monolithic components (keep sections 50-150 lines)

### Styling
- ✅ Use semantic HTML (let `GLobal.css` handle typography)
- ✅ Use design tokens from `styles/GLobal.css` (Midnight Chrome / Auto Plum palette: `--auto-plum-deep`, `--auto-plum-neon`, neutral asphalt/carbon/gunmetal, etc.)
- ✅ Mobile-first responsive design
- ❌ **DO NOT override typography** (text-xl, font-bold, etc.) unless user explicitly requests

### Data & Imports
- ✅ Single source of truth: `/utils/vehicleData.ts`
- ✅ Configurators import from `../shared/vehicleData` (re-export)
- ✅ All API calls in `/utils/api.ts`
- ❌ No duplicate data in multiple files

### Module Boundaries
- ✅ Configurators are self-contained modules
- ✅ Use parent module exports: `from './components/configurators'`
- ✅ Shared utilities in `configurators/shared/` (re-exports from `/utils/`)
- ❌ No cross-module imports between configurators

### Protected Files
- ❌ **NEVER modify:** `/components/figma/ImageWithFallback.tsx`
- ❌ **NEVER modify:** `/components/ui/*` (shadcn components)
- ❌ **NEVER modify:** `/styles/GLobal.css` typography without user request

---

## 🏗️ Architecture Patterns

### Page Structure
```
/pages/[page-name]/
  ├── index.tsx          # Page composition (20-50 lines)
  └── sections/          # Section components (50-150 lines each)
      ├── Hero.tsx
      ├── Benefits.tsx
      └── CTA.tsx
```

### Configurator Structure
```
/components/configurators/
  ├── index.tsx          # Parent module export
  ├── shared/            # Re-exports from /utils/
  └── [name]/            # Individual configurator
      ├── index.tsx      # Module exports
      ├── types.ts       # Interfaces
      └── [Name]Configurator.tsx
```

---

## 🎨 Design System

### Colors
- **Primary (Auto Plum Deep):** `#4A148C` - Core brand / primary actions
- **Accent (Auto Plum Neon):** `#9D4EDD` - Glow / focus states / high-impact CTAs
- **Highlight (Auto Plum Mist):** `#E0AAFF` - Badges, subtle highlights
- **Background (Light Mode):** `#f8fafc` (mapped to `--background` in `GLobal.css`)
- **Background (Dark Mode):** Asphalt / Carbon surfaces from `GLobal.css` (`--auto-asphalt`, `--auto-carbon`)
- **Text:** Uses theme tokens (`--foreground`, `--muted-foreground`) for light/dark readability

### Typography
- **Headings:** Exo 2 (sporty/tech style for automotive brand)
- **Body:** Inter (clean, highly legible for configurators and forms)
- **Base Size:** `var(--font-size)` from `GLobal.css` (15px by default for dashboard readability)
- **Rule:** Use semantic HTML (`<h1>`, `<p>`, `<label>`, etc.) and let `GLobal.css` apply fonts and sizes.

### Spacing
```typescript
// Section padding
className="py-20"

// Container pattern
<div className="container mx-auto px-4">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</div>

// Grid spacing
className="gap-8"        // Standard
className="gap-12"       // Large sections
```

### Responsive Breakpoints
```typescript
// Mobile-first approach
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="text-base md:text-lg lg:text-xl"
className="p-4 md:p-6 lg:p-8"
```

---

## 📝 Component Patterns

### Standard Section Component
```typescript
interface SectionProps {
  onNavigate?: (page: string) => void;
}

export function SectionName({ onNavigate }: SectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2>Section Title</h2>
          <p>Section content...</p>
        </div>
      </div>
    </section>
  );
}
```

### Standard Page Component
```typescript
interface PageProps {
  onNavigate: (page: string) => void;
}

export function PageName({ onNavigate }: PageProps) {
  return (
    <div className="min-h-screen">
      <Hero onNavigate={onNavigate} />
      <Benefits />
      <CTA onNavigate={onNavigate} />
    </div>
  );
}
```

### Configurator Pattern
```typescript
export function NameConfigurator() {
  const { addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({...});

  // Validation
  const canProceed = useMemo(() => {
    // Validation logic
  }, [dependencies]);

  // Two-column layout with live preview
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>{/* Configuration form */}</div>
        <div className="lg:sticky lg:top-24">
          {/* Live preview */}
        </div>
      </div>
    </div>
  );
}
```

---

## 🔄 Import Guidelines

### Import Order
```typescript
// 1. React imports
import { useState, useEffect } from 'react';

// 2. Third-party libraries
import { ChevronRight } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

// 3. UI components
import { Button } from '../../ui/button';

// 4. Local components
import { Hero } from './sections/Hero';

// 5. Utils and data
import { vehicleMakes } from '../shared/vehicleData';
import { useCart } from '../../../utils/cartContext';

// 6. Types
import type { Quote } from './types';
```

### Configurator Imports
```typescript
// ✅ ALWAYS use shared re-exports
import { vehicleMakes, tintFilms } from '../shared/vehicleData';
import { submitTintQuote } from '../shared/api';

// ❌ NEVER import directly from utils
import { vehicleMakes } from '../../../utils/vehicleData';
```

### Page Imports
```typescript
// ✅ Import sections relatively
import { Hero } from './sections/Hero';

// ✅ Import configurators from parent
import { TintConfigurator } from '../../components/configurators';
```

---

## 🧪 Quality Checklist

### Before Committing
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] All imports working
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] Navigation works
- [ ] Forms validate
- [ ] Loading states display
- [ ] Error handling works
- [ ] Documentation updated (if needed)

### Component Quality
- [ ] Component < 150 lines (sections)
- [ ] Clear prop interface
- [ ] Proper TypeScript types
- [ ] Follows naming conventions
- [ ] Uses design system colors
- [ ] No typography overrides (unless requested)
- [ ] Accessibility (semantic HTML, ARIA labels)

---

## 🚨 Common Mistakes to Avoid

| ❌ Wrong | ✅ Right |
|---------|---------|
| `<h1 className="text-4xl font-bold">` | `<h1>Title</h1>` |
| Import from `/utils/` in configurator | Import from `../shared/` |
| 600+ line component | Split into 4-6 sections |
| Duplicate vehicle data | Import from single source |
| Cross-module imports | Use parent or shared |
| Create file in `/components/ui/` | Only use existing shadcn components |
| Modify `ImageWithFallback.tsx` | Never modify (protected) |
| Random colors like `bg-blue-500` | Use design tokens from `GLobal.css` (e.g. `bg-primary`, `.bg-auto-plum-deep`, `.bg-auto-plum-neon`) |

---

## 📚 Additional Resources

**Detailed Documentation:**
- [`/DEVELOPMENT_GUIDELINES.md`](../DEVELOPMENT_GUIDELINES.md) - Full guidelines (17 sections)
- [`/QUICK_REFERENCE.md`](../QUICK_REFERENCE.md) - One-page cheat sheet
- [`/RESTRUCTURE_VERIFICATION.md`](../RESTRUCTURE_VERIFICATION.md) - Architecture verification
- [`/CONFIGURATORS_MODULE_SUMMARY.md`](../CONFIGURATORS_MODULE_SUMMARY.md) - Configurator details
- [`/PAGE_STRUCTURE_GUIDE.md`](../PAGE_STRUCTURE_GUIDE.md) - Page architecture
- [`/HOTKEY_REFERENCE.md`](../HOTKEY_REFERENCE.md) - Developer tools

**Module-Specific:**
- [`/components/configurators/README.md`](../components/configurators/README.md) - Configurator usage
- [`/components/configurators/MODULE_STRUCTURE.md`](../components/configurators/MODULE_STRUCTURE.md) - Module architecture
- [`/components/configurators/QUICK_REFERENCE.md`](../components/configurators/QUICK_REFERENCE.md) - Import guide

---

## 🎯 Core Principles

1. **Modularity First** - Small, focused components (50-150 lines)
2. **Single Source of Truth** - No duplicate data (`/utils/vehicleData.ts`)
3. **Clear Boundaries** - Respect module separation (no cross-module imports)
4. **Type Safety** - Proper TypeScript interfaces in `types.ts`
5. **Consistent Patterns** - Follow established conventions
6. **Design System** - Use brand colors, semantic HTML
7. **Performance** - useMemo for calculations, lazy loading
8. **Accessibility** - Semantic HTML, ARIA labels, alt text

---

## 🔥 Hotkeys

- **Cmd+I:** Toggle Dev Mode Indicator (live page, section, breadcrumb tracking)
- **Cmd+E:** Project Export (placeholder)
- **Cmd+F:** Copy Module Data (Figma integration)
- **Cmd+Shift+E:** Export Configurator (creates ZIP bundle)

---

**When in doubt, follow the existing patterns. The codebase is consistent—keep it that way!**
