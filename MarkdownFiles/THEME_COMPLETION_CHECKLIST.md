# Theme Implementation - Completion Checklist

## ✅ COMPLETED (Verified Working)

### Core Infrastructure
- [x] ThemeProvider with localStorage
- [x] CSS variables for light/dark
- [x] Theme toggle button in navigation
- [x] Smooth transitions (300ms)

### Home Page Sections
- [x] Hero stats cards - `bg-card`, visible in both modes
- [x] Services section - backgrounds and text
- [x] WhyChooseUs section - backgrounds and text
- [x] Testimonials - cards and text
- [x] Configurators section - cards and text
- [x] FinalCTA - uses brand colors (correct)

### Navigation & Layout
- [x] Navigation bar - `bg-card/95` with proper contrast
- [x] Navigation links - `text-foreground` (FIXED - was invisible in light mode)
- [x] Mega menu backgrounds - `bg-card/98`
- [x] Mega menu text - `text-card-foreground` and `text-muted-foreground`
- [x] Social dropdown - `bg-card/98` with `text-card-foreground`
- [x] Mobile menu - all text colors fixed
- [x] Theme toggle & cart icons - `text-foreground`

### Configurators
- [x] Tesla Package Configurator - all 5 steps
- [x] Tesla Package Live Preview

### Contact Page
- [x] ContactFormSteps - card background, progress indicators
- [x] Form step headings
- [x] Step 1 inputs (First Name, Last Name, Email, Mobile)

---

## 🔄 IN PROGRESS - NEEDS COMPLETION

### Contact Form (ContactFormSteps.tsx)
**Pattern to Apply:**
```tsx
// Labels
className="block text-foreground mb-2 text-sm uppercase tracking-wider"

// Inputs
className="w-full bg-input border-2 border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#017974] focus:ring-2 focus:ring-[#017974]/20 transition-all"

// Selects
className="bg-input border-2 border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#017974] focus:ring-2 focus:ring-[#017974]/20 transition-all"
```

**Step 2 (Vehicle Info) - Lines 287-372:**
- [ ] Line 289: Vehicle Year label  
- [ ] Line 297: Vehicle Year input
- [ ] Line 303: Vehicle Make label
- [ ] Line 311: Vehicle Make input
- [ ] Line 319: Vehicle Model label
- [ ] Line 327: Vehicle Model input
- [ ] Line 333: Vehicle Trim label
- [ ] Line 341: Vehicle Trim input
- [ ] Line 348: Vehicle Photo label
- [ ] Line 368: File upload helper text

**Step 3 (Service Details) - Lines 376+:**
- [ ] Service selection checkboxes
- [ ] Additional details textarea
- [ ] All labels and helper text

---

## 📋 TODO - NOT STARTED

### Configurators
**PPF Configurator (`/components/configurators/ppf/PPFConfigurator.tsx`)**
- [ ] Background gradients
- [ ] Form inputs (lines with `bg-gray-50 border-2 border-gray-200`)
- [ ] Card backgrounds
- [ ] Text colors (text-gray-900, text-gray-600)
- [ ] Progress indicators

**PPF Live Preview (`/components/configurators/ppf/PPFLivePreview.tsx`)**
- [ ] Card background
- [ ] Borders
- [ ] Text colors

**Tint Configurator (`/components/configurators/tint/TintConfigurator.tsx`)**
- [ ] Lines 289, 304, 319, 334: Form inputs
- [ ] Line 421: Empty state message
- [ ] All text colors and backgrounds

**Tint Live Preview (`/components/configurators/tint/TintLivePreview.tsx`)**
- [ ] Card backgrounds
- [ ] Text colors
- [ ] Borders

### Service Pages (All Sections)
**Pattern for All Service Pages:**
```tsx
// Section backgrounds
bg-white → bg-background
bg-gray-50 → bg-muted

// Card backgrounds  
bg-white → bg-card
from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A] → bg-card

// Text
text-gray-900 → text-foreground / text-card-foreground
text-gray-600 → text-muted-foreground
text-white (on colored bg) → Keep as-is

// Borders
border-gray-200 → border-border
border-[#1C1C1C] → border-border
```

**Files to Update:**
- [ ] `/pages/services/ceramic-coating/sections/*.tsx` (4 files)
- [ ] `/pages/services/paint-correction/sections/*.tsx` (6 files)
- [ ] `/pages/services/ppf/tesla/sections/*.tsx` (4 files)
- [ ] `/pages/services/tint/auto/sections/*.tsx` (5 files)
- [ ] `/pages/services/tint/marine/sections/*.tsx` (5 files)
- [ ] `/pages/services/tint/residential-commercial/sections/*.tsx` (6 files)
- [ ] `/pages/services/tint/tesla/sections/*.tsx` (4 files)
- [ ] `/pages/services/vinyl-wraps/sections/*.tsx` (4 files)

### Blog Page
- [ ] `/pages/blog/sections/Hero.tsx`
- [ ] `/pages/blog/sections/BlogGrid.tsx`

### Contact Page (Remaining)
- [ ] `/pages/contact/sections/Hero.tsx`
- [ ] `/pages/contact/sections/ContactInfo.tsx`

### Utility Components
- [ ] `/components/CartPage.tsx`
- [ ] `/components/ServicePage.tsx` (wrapper component)
- [ ] `/components/ShopPage.tsx`
- [ ] `/components/SimplePage.tsx`
- [ ] `/components/FloatingActions.tsx`
- [ ] `/components/DevInspector.tsx`
- [ ] `/components/DevPageIndicator.tsx`

---

## 🔍 SEARCH PATTERNS FOR REMAINING WORK

Use these to find all instances that need updating:

```bash
# Find hardcoded gray backgrounds
grep -r "bg-gray-50" --include="*.tsx" pages/
grep -r "bg-gray-100" --include="*.tsx" pages/
grep -r "bg-white" --include="*.tsx" pages/

# Find hardcoded text colors
grep -r "text-gray-900" --include="*.tsx" pages/
grep -r "text-gray-600" --include="*.tsx" pages/
grep -r "text-gray-700" --include="*.tsx" pages/

# Find hardcoded borders
grep -r "border-gray-200" --include="*.tsx" pages/
grep -r "border-gray-300" --include="*.tsx" pages/

# Find dark gradients (need card bg)
grep -r "from-\[#0A0A0A\]" --include="*.tsx" pages/
```

---

## ⚠️ IMPORTANT NOTES

### DO NOT Change:
1. **Brand colors** - #017974 (teal), #FDB521 (yellow)
2. **Gradients with brand colors** - Keep as-is
3. **Footer background** - #017974 (teal) - stays consistent
4. **Hero overlay** - Dark overlay on image works in both themes
5. **Text on brand-colored backgrounds** - text-white, text-[#0A0A0A]

### DO Change:
1. **All `bg-gray-*`** → theme variables
2. **All `text-gray-*`** → theme variables (except on brand colors)
3. **All `border-gray-*`** → `border-border`
4. **All `bg-white`** (except Footer inputs) → `bg-background` or `bg-card`
5. **Dark card backgrounds** → `bg-card`

---

## 🎯 PRIORITY ORDER

1. **HIGH** - Complete ContactFormSteps (user-facing, frequently used)
2. **HIGH** - Update remaining configurators (PPF, Tint)
3. **MEDIUM** - Service page sections (many files, systematic work)
4. **LOW** - Blog page
5. **LOW** - Utility components and dev tools

---

## ✅ VERIFICATION STEPS

After each component update:
1. View in Light mode - check readability
2. Toggle to Dark mode - check readability
3. Check hover states work
4. Check focus states work
5. Verify brand colors remain unchanged
6. Test interactive elements

---

## 📊 PROGRESS SUMMARY

- Core Infrastructure: 100% ✅
- Home Page: 100% ✅
- Navigation: 100% ✅
- Tesla Configurator: 100% ✅
- Contact Form: 30% (Step 1 done, Step 2-3 remaining)
- PPF Configurator: 0%
- Tint Configurator: 0%
- Service Pages: 0% (32 section files)
- Blog: 0%
- Utilities: 0%

**Overall Progress: ~25%**

---

## 🚀 NEXT IMMEDIATE STEPS

1. Finish ContactFormSteps Step 2 & 3 labels/inputs
2. Update PPF Configurator & Live Preview
3. Update Tint Configurator & Live Preview
4. Systematically update all service page sections
5. Update blog page
6. Update utility components
7. Final verification pass

---

**Last Updated:** After fixing Home page sections and starting Contact form
