# Theme Update Patterns

## Quick Reference: Pattern-Based Replacements

This document provides find-and-replace patterns for completing the theme conversion across all remaining files.

---

## 🎨 Color Mapping Table

### Background Colors
| Old (Hardcoded) | New (Theme-Aware) | Usage |
|----------------|-------------------|-------|
| `bg-white` | `bg-background` | Main backgrounds |
| `bg-gray-50` | `bg-muted` | Subtle backgrounds, input fields |
| `bg-gray-100` | `bg-muted` | Slightly darker subtle backgrounds |
| `bg-[#050505]` | `bg-background` | Pure black backgrounds |
| `bg-[#0A0A0A]` | `bg-card` | Card backgrounds (dark theme) |
| `bg-[#0D0D0D]` | `bg-card` | Alternative card backgrounds |

### Text Colors
| Old (Hardcoded) | New (Theme-Aware) | Usage |
|----------------|-------------------|-------|
| `text-white` (on dark bg) | `text-foreground` | Primary text on dark backgrounds |
| `text-gray-900` | `text-foreground` | Primary text |
| `text-gray-800` | `text-foreground` | Slightly lighter primary text |
| `text-gray-700` | `text-foreground` | Labels, secondary headings |
| `text-gray-600` | `text-muted-foreground` | Secondary text, descriptions |
| `text-gray-500` | `text-muted-foreground` | Tertiary text |
| `text-gray-400` | `text-muted-foreground` | Placeholder text, disabled text |
| `text-white/60` | `text-muted-foreground` | Muted white text on dark |
| `text-white/40` | `text-muted-foreground/60` | Very muted text |
| `text-white/70` | `text-muted-foreground` | Semi-muted text |

### Border Colors
| Old (Hardcoded) | New (Theme-Aware) | Usage |
|----------------|-------------------|-------|
| `border-gray-200` | `border-border` | Standard borders |
| `border-gray-300` | `border-border` | Slightly darker borders |
| `border-[#1C1C1C]` | `border-border` | Dark theme borders |
| `border-[#1C1C1C]/60` | `border-border` | Semi-transparent dark borders |

### Branded Colors (DO NOT CHANGE)
| Color | Usage | Notes |
|-------|-------|-------|
| `bg-[#017974]` | XPEL Teal (brand) | Keep as-is |
| `text-[#017974]` | XPEL Teal text | Keep as-is |
| `bg-[#FDB521]` | XPEL Yellow (brand) | Keep as-is |
| `text-[#FDB521]` | XPEL Yellow text | Keep as-is |
| `text-white` ON TEAL/YELLOW | White text on branded bg | Keep as-is (intentional contrast) |

---

## 📁 File-by-File Strategy

### Configurators (6 files total)

#### Priority: HIGH (User Interaction)

**Files:**
1. `/components/configurators/tint/TintConfigurator.tsx` (670 lines) - PARTIALLY DONE
2. `/components/configurators/tint/TintLivePreview.tsx`
3. `/components/configurators/ppf/PPFConfigurator.tsx`
4. `/components/configurators/ppf/PPFLivePreview.tsx`
5. `/components/configurators/tesla/TeslaPackageConfigurator.tsx`
6. `/components/configurators/tesla/TeslaPackageLivePreview.tsx`

**Common Patterns in Configurators:**

```typescript
// Form inputs
className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400"
// BECOMES:
className="w-full bg-muted border-2 border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground"

// Labels
className="block text-gray-700 mb-2 text-sm uppercase tracking-wider"
// BECOMES:
className="block text-foreground mb-2 text-sm uppercase tracking-wider"

// Card containers
className="bg-white border border-gray-200 rounded-2xl p-8"
// BECOMES:
className="bg-card border border-border rounded-2xl p-8"

// Section headings
className="text-gray-900 mb-2"
// BECOMES:
className="text-foreground mb-2"

// Descriptions
className="text-gray-600"
// BECOMES:
className="text-muted-foreground"

// Selection cards (unselected state)
className="border-2 border-gray-200 hover:border-[#017974]"
// BECOMES:
className="border-2 border-border hover:border-[#017974]"
```

---

### Service Page Sections (30+ files)

#### Priority: MEDIUM (Content Pages)

**Pattern:** Most service page sections have dark backgrounds that need conversion

**File Pattern:**
```
/pages/services/[service-name]/sections/Benefits.tsx
/pages/services/[service-name]/sections/Packages.tsx
/pages/services/[service-name]/sections/Process.tsx
/pages/services/[service-name]/sections/AddOns.tsx
```

**Common Patterns in Service Sections:**

```typescript
// Section background (dark)
className="py-20 bg-[#0A0A0A]"
// BECOMES:
className="py-20 bg-background"

// Card backgrounds (dark)
className="bg-gradient-to-br from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A] border border-[#1C1C1C]/60"
// BECOMES:
className="bg-card border border-border"

// White text on dark backgrounds
className="text-white"
// BECOMES:
className="text-foreground"

// Muted white text
className="text-white/60"
// BECOMES:
className="text-muted-foreground"

// Dark borders
className="border-[#1C1C1C]"
// BECOMES:
className="border-border"
```

**Exception - Hero and CTA sections:**
Hero and CTA sections intentionally use white text on branded teal backgrounds. **DO NOT CHANGE THESE:**

```typescript
// KEEP AS-IS (branded section)
<section className="pt-32 pb-20 bg-gradient-to-br from-[#017974] via-[#018A82] to-[#015d59]">
  <h1 className="text-white">...</h1> {/* Keep white text */}
  <p className="text-white/90">...</p> {/* Keep white text */}
</section>
```

---

### Utility Pages (4 files)

#### Priority: LOW (Admin/Dev Tools)

**Files:**
1. `/components/DevInspector.tsx` - Developer tool (dark theme by design)
2. `/components/ShopPage.tsx` - Commerce page
3. `/components/ServicePage.tsx` - Generic service template
4. `/components/SimplePage.tsx` - Simple template

**Same patterns apply as configurators**

---

## 🔍 Detailed Replacement Steps

### Step 1: Form Inputs (All Configurators)

**Find:**
```typescript
className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FDB521] focus:shadow-lg focus:shadow-[#FDB521]/20 transition-all duration-300"
```

**Replace:**
```typescript
className="w-full bg-muted border-2 border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#FDB521] focus:shadow-lg focus:shadow-[#FDB521]/20 transition-all duration-300"
```

### Step 2: Labels (All Configurators)

**Find:**
```typescript
className="block text-gray-700 mb-2 text-sm uppercase tracking-wider"
```

**Replace:**
```typescript
className="block text-foreground mb-2 text-sm uppercase tracking-wider"
```

### Step 3: Headings (All Files)

**Find:**
```typescript
className="text-gray-900"
```

**Replace:**
```typescript
className="text-foreground"
```

### Step 4: Body Text (All Files)

**Find:**
```typescript
className="text-gray-600"
```

**Replace:**
```typescript
className="text-muted-foreground"
```

### Step 5: Borders (All Files)

**Find:**
```typescript
border-gray-200
```

**Replace:**
```typescript
border-border
```

**Find:**
```typescript
border-[#1C1C1C]
```

**Replace:**
```typescript
border-border
```

### Step 6: Backgrounds (All Files)

**Find:**
```typescript
bg-white
```

**Replace:**
```typescript
bg-background
```

**Find:**
```typescript
bg-gray-50
```

**Replace:**
```typescript
bg-muted
```

**Find:**
```typescript
bg-[#0A0A0A]
```

**Replace:**
```typescript
bg-background
```

---

## ⚠️ Special Cases & Exceptions

### 1. White Text on Branded Backgrounds

**DO NOT CHANGE:**
```typescript
// Hero sections with teal gradient
<section className="bg-gradient-to-br from-[#017974]...">
  <h1 className="text-white">Title</h1> {/* Keep white */}
</section>

// CTA sections with teal gradient
<section className="bg-gradient-to-r from-[#017974]...">
  <p className="text-white/90">...</p> {/* Keep white */}
</section>
```

### 2. Active/Selected States with Brand Colors

**DO NOT CHANGE:**
```typescript
// Selected state with yellow background
className={selectedId === id 
  ? 'bg-[#FDB521] text-[#0A0A0A]'  // Keep brand colors
  : 'bg-muted text-foreground'      // Use theme colors
}
```

### 3. Gradient Backgrounds with Mixed Colors

**PARTIAL UPDATE:**
```typescript
// Old:
className="bg-gradient-to-br from-gray-50 to-white border border-gray-200"

// New:
className="bg-gradient-to-br from-muted to-background border border-border"
```

### 4. Conditional Classes

**UPDATE BOTH STATES:**
```typescript
// Old:
className={`${isActive ? 'text-gray-900' : 'text-gray-400'}`}

// New:
className={`${isActive ? 'text-foreground' : 'text-muted-foreground/60'}`}
```

---

## 📊 Progress Tracking

### Completed Files (✅)
- Navigation.tsx
- Footer.tsx
- CartPage.tsx
- All Home page sections (Hero, Services, WhyChooseUs, Testimonials, Configurators, FinalCTA)
- Contact page (ContactFormSteps, ContactInfo)
- Blog page (BlogGrid)

### Partially Updated (~)
- TintConfigurator.tsx (header, progress, buttons updated; 500+ lines of form content remains)
- TintLivePreview.tsx (header, main containers updated; nested motion divs have hardcoded colors in whileHover props)

### Remaining Files (❌)
- 4 configurator files (all PPF/Tesla files)
- 30+ service page section files
- 4 utility page files

**Note:** Motion animation components with inline `whileHover` props containing hardcoded color values (e.g., `borderColor: "#d1d5db"`) require special handling - these need to reference CSS custom properties like `hsl(var(--border))` instead.

---

## 🚀 Quick Update Script

For bulk updates, use this regex pattern (in your code editor):

### Pattern 1: Simple Class Replacements
```regex
Find:    text-gray-900
Replace: text-foreground

Find:    text-gray-600
Replace: text-muted-foreground

Find:    border-gray-200
Replace: border-border

Find:    bg-gray-50
Replace: bg-muted
```

### Pattern 2: Complex Conditional Classes
```regex
Find:    text-white/60
Replace: text-muted-foreground

Find:    bg-\[#0A0A0A\]
Replace: bg-background

Find:    border-\[#1C1C1C\]
Replace: border-border
```

---

## ✅ Verification Checklist

After updating each file:

- [ ] Toggle theme in Navigation (Sun/Moon icon)
- [ ] Verify light mode: backgrounds are white/light gray
- [ ] Verify dark mode: backgrounds are dark
- [ ] Check text is readable in both modes
- [ ] Verify borders are visible in both modes
- [ ] Confirm branded teal/yellow colors unchanged
- [ ] Test on mobile viewport
- [ ] Check for any hardcoded `#0A0A0A`, `gray-900`, etc.

---

## 📝 Notes

1. **Globals.css tokens** - All theme colors defined in `/styles/globals.css`
2. **Brand consistency** - Teal (#017974) and Yellow (#FDB521) stay across all themes
3. **Typography** - Do NOT add font-size, font-weight classes unless explicitly requested
4. **Intentional white text** - Hero/CTA sections with teal backgrounds use white text for brand identity
5. **DevInspector** - Can remain dark-themed (developer tool)

---

**This document is a comprehensive guide for completing the theme conversion. Use it as a reference for pattern-based updates across all remaining files.**
