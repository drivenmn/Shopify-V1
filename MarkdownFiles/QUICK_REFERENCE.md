# Quick Reference - DrivenMN Development

**One-page cheat sheet for common tasks and patterns**

---

## 🎯 File Structure Quick Map

```
/pages/[page-name]/
  ├── index.tsx          ← Page composition
  └── sections/          ← Section components
      ├── Hero.tsx
      └── ...

/components/
  ├── configurators/     ← Configurator modules
  │   ├── index.tsx      ← Parent export
  │   ├── shared/        ← Re-exports from /utils/
  │   └── [name]/        ← Individual modules
  ├── ui/                ← shadcn (DON'T MODIFY)
  └── [Global].tsx       ← Global utilities

/utils/
  ├── vehicleData.ts     ← Single source of truth
  ├── api.ts             ← All API calls
  └── cartContext.tsx    ← Cart state
```

---

## 📝 Common Patterns

### New Page Section

```typescript
interface SectionProps {
  onNavigate?: (page: string) => void;
}

export function SectionName({ onNavigate }: SectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Content */}
        </div>
      </div>
    </section>
  );
}
```

### New Page

```typescript
// /pages/[name]/index.tsx
import { Section1 } from './sections/Section1';

interface PageProps {
  onNavigate: (page: string) => void;
}

export function PageName({ onNavigate }: PageProps) {
  return (
    <div className="min-h-screen">
      <Section1 onNavigate={onNavigate} />
    </div>
  );
}
```

### New Configurator Module

```
/components/configurators/[name]/
  ├── index.tsx          ← export { NameConfigurator } from './NameConfigurator';
  ├── types.ts           ← export interface NameQuote { ... }
  └── NameConfigurator.tsx
```

---

## 🔄 Import Patterns

### In Configurators
```typescript
// ✅ From shared
import { vehicleMakes, tintFilms } from '../shared/vehicleData';
import { submitTintQuote } from '../shared/api';

// ✅ Cart
import { useCart } from '../../../utils/cartContext';

// ❌ Never direct
import { vehicleMakes } from '../../../utils/vehicleData';
```

### In Pages
```typescript
// ✅ Sections
import { Hero } from './sections/Hero';

// ✅ Configurators (from parent)
import { TintConfigurator } from '../../components/configurators';
```

### In App.tsx
```typescript
// ✅ Pages
import { HomePage } from './pages/home';

// ✅ Configurators (parent module)
import { TintConfigurator, PPFConfigurator } from './components/configurators';
```

---

## 🎨 Styling Quick Rules

### ✅ DO
```typescript
// Use semantic HTML (typography from globals.css)
<h1>Title</h1>
<p>Body text</p>

// Use brand colors
className="bg-[#017974]"  // Teal
className="bg-[#FDB521]"  // Yellow

// Responsive mobile-first
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### ❌ DON'T
```typescript
// Override typography (unless user requests)
<h1 className="text-4xl font-bold">

// Random colors
className="bg-blue-500"
```

---

## 📦 Component Size Guidelines

| Type | Lines | Notes |
|------|-------|-------|
| **Section** | 50-150 | Split if larger |
| **Page Index** | 20-50 | Just composition |
| **Configurator** | 500-1000 | Can be larger |
| **Utility** | 100-300 | Keep focused |

---

## 🔐 Protected Files (NEVER MODIFY)

```
❌ /components/figma/ImageWithFallback.tsx
❌ /components/ui/*           (shadcn only)
❌ /styles/globals.css         (without user request)
```

---

## 🛠️ Common Tasks

### Add New Section to Page
1. Create `/pages/[page]/sections/NewSection.tsx`
2. Export component: `export function NewSection()`
3. Import in page index: `import { NewSection } from './sections/NewSection'`
4. Add to page: `<NewSection onNavigate={onNavigate} />`

### Add New Configurator
1. Create `/components/configurators/[name]/`
2. Add `index.tsx`, `types.ts`, `[Name]Configurator.tsx`
3. Export in parent: `/components/configurators/index.tsx`
4. Import in App.tsx

### Add Data to Vehicle Data
1. Edit `/utils/vehicleData.ts`
2. Update interface if needed
3. Add data to array
4. Export helper functions if needed

### Add API Function
1. Edit `/utils/api.ts`
2. Create `submitXQuote()` function
3. Mock response for development
4. Import where needed

---

## 🎯 Import Order

```typescript
// 1. React
import { useState } from 'react';

// 2. Third-party
import { toast } from 'sonner@2.0.3';
import { Button } from '../../ui/button';

// 3. Local components
import { Hero } from './sections/Hero';

// 4. Utils
import { vehicleMakes } from '../shared/vehicleData';

// 5. Types
import type { TintQuote } from './types';
```

---

## 🧪 Testing Checklist

After any change:
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Navigation works
- [ ] Responsive (mobile/tablet/desktop)
- [ ] Loading states display
- [ ] Form validation works

---

## 📚 Documentation Links

- **Full Guidelines:** `/DEVELOPMENT_GUIDELINES.md`
- **Architecture:** `/RESTRUCTURE_VERIFICATION.md`
- **Configurators:** `/CONFIGURATORS_MODULE_SUMMARY.md`
- **Pages:** `/PAGE_STRUCTURE_GUIDE.md`
- **Hotkeys:** `/HOTKEY_REFERENCE.md`

---

## 🚨 Common Mistakes

| ❌ Wrong | ✅ Right |
|---------|---------|
| Import from `/utils/` in configurator | Import from `../shared/` |
| `<h1 className="text-4xl">` | `<h1>` |
| 600+ line component | Split into sections |
| Duplicate data | Single source of truth |
| Cross-module imports | Use parent or shared |

---

## 💡 When to Split a Component

Split when:
- ✅ Component > 150 lines
- ✅ Multiple responsibilities
- ✅ Could be reused elsewhere
- ✅ Hard to understand/maintain

Don't split when:
- ❌ Component is cohesive
- ❌ Tightly coupled logic
- ❌ Would create complexity

---

## 🎨 Design System

**Colors:**
- Primary: `#017974` (Teal)
- Accent: `#FDB521` (Yellow)

**Typography:**
- Headings: Poppins
- Body: Inter
- Let `globals.css` handle it!

**Spacing:**
- Sections: `py-20`
- Container: `container mx-auto px-4`
- Max width: `max-w-7xl mx-auto`

---

## 🔥 Hotkeys

- **Cmd+I:** Developer Inspector
- **Cmd+E:** Project Export (placeholder)
- **Cmd+F:** Copy Module Data (Figma)
- **Cmd+Shift+E:** Export Configurator (ZIP)

---

**Remember:** Follow existing patterns. The codebase is consistent—keep it that way!
