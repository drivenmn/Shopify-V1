# Hardcoded Colors Audit & Remediation Plan

**Date:** Current Session  
**Scope:** Complete codebase scan  
**Total Hardcoded Colors Found:** 200+ instances across 9 files

---

## 🔍 AUDIT SUMMARY

### Files Requiring Updates

| File | Hardcoded Colors | Priority | Status |
|------|------------------|----------|--------|
| **Configurators** | | | |
| `/components/configurators/ppf/PPFConfigurator.tsx` | ~80 | 🔴 CRITICAL | ⏳ Pending |
| `/components/configurators/tint/TintConfigurator.tsx` | ~40 | 🔴 CRITICAL | ⏳ Pending |
| `/components/configurators/ppf/PPFLivePreview.tsx` | ~30 | 🔴 CRITICAL | ⏳ Pending |
| `/components/configurators/tint/TintLivePreview.tsx` | ~30 | 🔴 CRITICAL | ⏳ Pending |
| `/components/configurators/tesla/TeslaPackageConfigurator.tsx` | ~2 | 🟡 MEDIUM | ⏳ Pending |
| **Utility Components** | | | |
| `/components/ConfiguratorModuleInfo.tsx` | ~20 | 🟢 LOW | ⏳ Pending |
| `/components/DevInspector.tsx` | ~10 | 🟢 LOW | ⏳ Pending |
| `/components/CartPage.tsx` | ~5 | 🟡 MEDIUM | ⏳ Pending |
| `/components/ConfiguratorExportDialog.tsx` | ~8 | 🟢 LOW | ⏳ Pending |

**Total:** 225+ color replacements needed

---

## 🎨 COLOR PATTERNS TO REPLACE

### Text Colors
```tsx
// BEFORE → AFTER
text-gray-900 → text-foreground
text-gray-800 → text-foreground
text-gray-700 → text-foreground
text-gray-600 → text-muted-foreground
text-gray-500 → text-muted-foreground
text-gray-400 → text-muted-foreground
text-gray-300 → text-muted-foreground/70
```

### Background Colors
```tsx
// BEFORE → AFTER
bg-white → bg-background or bg-card
bg-gray-50 → bg-muted or bg-input
bg-gray-100 → bg-muted
bg-gray-200 → bg-muted
```

### Border Colors
```tsx
// BEFORE → AFTER
border-gray-200 → border-border
border-gray-300 → border-border
border-gray-400 → border-border
```

### Special Cases (KEEP AS-IS)
```tsx
// These are CORRECT - do NOT change
text-white (on brand color backgrounds like bg-[#017974])
bg-[#017974] (teal brand color)
bg-[#FDB521] (yellow brand color)
text-[#0A0A0A] (on yellow buttons)
from-[#017974] to-[#015d59] (teal gradients)
```

---

## 📋 DETAILED BREAKDOWN

### PPFConfigurator.tsx (80 instances)

**Patterns Found:**
- 20x `text-gray-900` → `text-foreground`
- 15x `text-gray-600` → `text-muted-foreground`
- 10x `text-gray-700` → `text-foreground`
- 12x `bg-gray-50` → `bg-input`
- 8x `border-gray-200` → `border-border`
- 5x `text-gray-400` → `text-muted-foreground`
- 5x `text-gray-500` → `text-muted-foreground`
- 2x `bg-white` → `bg-card`
- 2x `text-white` (KEEP - on brand backgrounds)
- 1x `border-gray-300` → `border-border`

**Critical Sections:**
- Lines 179-182: Title/subtitle
- Lines 336-401: Form inputs (Step 1)
- Lines 413-447: Vehicle type selection (Step 2)
- Lines 461-528: Package selection (Step 3)
- Lines 542-738: Film selection (Step 4)
- Lines 749-874: Review/booking (Step 5)

### TintConfigurator.tsx (40 instances)

**Patterns Found:**
- 10x `text-gray-900` → `text-foreground`
- 8x `text-gray-600` → `text-muted-foreground`
- 6x `bg-gray-50` → `bg-input`
- 5x `border-gray-200` → `border-border`
- 4x `text-gray-400` → `text-muted-foreground`
- 3x `bg-gray-100` → `bg-muted`
- 2x `text-gray-500` → `text-muted-foreground`
- 2x `text-white` (KEEP - on brand backgrounds)

**Critical Sections:**
- Lines 350-412: Vehicle summary
- Lines 412-478: Package selection (Step 3)
- Lines 480-523: VLT selection (Step 4)
- Lines 530-604: Film selection (Step 5)
- Lines 611-680: Review (Step 6)

### PPFLivePreview.tsx (30 instances)

**Patterns Found:**
- 8x `text-gray-900` → `text-foreground`
- 6x `text-gray-600` → `text-muted-foreground`
- 5x `border-gray-200` → `border-border`
- 4x `bg-gray-50` → `bg-muted`
- 3x `text-gray-500` → `text-muted-foreground`
- 2x `bg-white` → `bg-card`
- 2x `text-white` (KEEP - on brand backgrounds)

**Critical Sections:**
- Lines 98-177: Preview header/display
- Lines 204-329: Step progress indicators
- Lines 451-460: Price summary

### TintLivePreview.tsx (30 instances)

**Patterns Found:**
- 8x `text-gray-900` → `text-foreground`
- 6x `text-gray-600` → `text-muted-foreground`
- 5x `border-gray-200` → `border-border`
- 4x `bg-gray-50` → `bg-muted`
- 3x `text-gray-500` → `text-muted-foreground`
- 2x `bg-white` → `bg-card`
- 2x `text-white` (KEEP - on brand backgrounds)

**Critical Sections:**
- Lines 139-199: Preview display
- Lines 300-488: Step progress indicators

### ConfiguratorModuleInfo.tsx (20 instances)

**Note:** This is a developer tool, all `text-white` on dark backgrounds are CORRECT.
- 10x `text-white` (KEEP - on dark background)
- 5x `text-white/60` (KEEP - opacity variants)
- 5x `text-white/40` (KEEP - opacity variants)

**Action:** No changes needed - this component has a fixed dark theme.

### DevInspector.tsx (10 instances)

**Note:** This is a developer tool with dark theme.
- 5x `text-white` (KEEP - on dark background)
- 2x `text-white/80` (KEEP - opacity variants)
- 1x `bg-black/80` (KEEP - dark overlay)
- 1x `bg-yellow-500` → Should be `bg-[#FDB521]` (brand yellow)
- 1x `text-white/60` (KEEP - opacity variant)

**Action:** Replace `bg-yellow-500` with `bg-[#FDB521]`

### CartPage.tsx (5 instances)

**Patterns Found:**
- 2x `text-white` (KEEP - on brand color buttons)
- 1x `hover:text-red-500` → Should be `hover:text-destructive`
- 1x `hover:bg-red-500/10` → Should be `hover:bg-destructive/10`
- 1x Uses theme tokens already

**Action:** Replace red-500 with destructive semantic token

### ConfiguratorExportDialog.tsx (8 instances)

**Note:** This is a developer tool with dark theme.
- 5x `text-white` (KEEP - on dark background)
- 2x `text-white/50` (KEEP - opacity variants)
- 1x `text-white/70` (KEEP - opacity variant)

**Action:** No changes needed - this component has a fixed dark theme.

---

## ✅ REMEDIATION STRATEGY

### Phase 1: Critical Customer-Facing Components (PRIORITY)
1. ✅ PPFConfigurator.tsx (~80 replacements)
2. ✅ TintConfigurator.tsx (~40 replacements)
3. ✅ PPFLivePreview.tsx (~30 replacements)
4. ✅ TintLivePreview.tsx (~30 replacements)
5. ✅ TeslaPackageConfigurator.tsx (~2 replacements)

**Impact:** Customer-facing configurators will properly support light/dark modes

### Phase 2: Utility Components (MEDIUM PRIORITY)
6. ✅ CartPage.tsx (~3 replacements - fix red-500)
7. ✅ DevInspector.tsx (~1 replacement - fix yellow-500)

**Impact:** Cart and dev tools will use brand colors consistently

### Phase 3: Developer Tools (LOW PRIORITY)
8. ⏭️ ConfiguratorModuleInfo.tsx (NO CHANGES - correct as-is)
9. ⏭️ ConfiguratorExportDialog.tsx (NO CHANGES - correct as-is)

**Impact:** None - these are correctly using fixed dark themes

---

## 🔧 IMPLEMENTATION APPROACH

### Automated Search & Replace Strategy
For each file, perform these replacements in order:

**Step 1: Text Colors**
```bash
text-gray-900 → text-foreground
text-gray-800 → text-foreground
text-gray-700 → text-foreground
text-gray-600 → text-muted-foreground
text-gray-500 → text-muted-foreground
text-gray-400 → text-muted-foreground
```

**Step 2: Backgrounds**
```bash
bg-gray-50 → bg-input (for form inputs)
bg-gray-50 → bg-muted (for sections)
bg-gray-100 → bg-muted
bg-white → bg-card (for cards)
bg-white → bg-background (for main backgrounds)
```

**Step 3: Borders**
```bash
border-gray-200 → border-border
border-gray-300 → border-border
border-gray-400 → border-border
```

**Step 4: Manual Review**
- Check each `text-white` - keep if on brand color background
- Check each `bg-[#...]` - keep if brand color (#017974, #FDB521)
- Verify gradients are using brand colors correctly

---

## 🎯 EXPECTED OUTCOMES

### After Remediation

**Light Mode:**
- All text will be dark gray (#0A0A0A) on light backgrounds
- All cards will have white backgrounds with shadows
- All inputs will have light gray backgrounds
- All borders will be light gray

**Dark Mode:**
- All text will be off-white (#FAFAFA) on dark backgrounds
- All cards will have near-black backgrounds (#141414)
- All inputs will have dark backgrounds
- All borders will be dark gray (#27272A)

**Both Modes:**
- Brand teal (#017974) remains consistent
- Brand yellow (#FDB521) remains consistent
- White text on brand backgrounds remains consistent
- All interactive elements will be readable

---

## 📊 PROGRESS TRACKING

### Status Legend
- 🔴 CRITICAL - Customer-facing, must fix
- 🟡 MEDIUM - Important but not blocking
- 🟢 LOW - Developer tools, nice-to-have
- ✅ COMPLETE - Fixed and verified
- ⏳ PENDING - Not yet started
- ⏭️ SKIP - Intentionally not changed

### Current Status
- **Files Fixed:** 0/9
- **Colors Replaced:** 0/225
- **Progress:** 0%

---

## 🚨 IMPORTANT NOTES

### DO NOT Change
1. `text-white` when used on brand color backgrounds:
   - `bg-[#017974]` (teal)
   - `bg-[#FDB521]` (yellow)  
   - `bg-gradient-to-r from-[#017974] to-[#015d59]`

2. Brand color hex codes:
   - `#017974` / `#00968F` (teal)
   - `#FDB521` / `#FFB900` (yellow)
   - `#0A0A0A` / `#000000` (black on yellow)

3. Developer tools with fixed dark themes:
   - ConfiguratorModuleInfo.tsx
   - ConfiguratorExportDialog.tsx
   - DevInspector.tsx (except yellow-500 fix)

### DO Change
1. ALL `text-gray-*` to semantic tokens
2. ALL `bg-gray-*` to semantic tokens
3. ALL `border-gray-*` to semantic tokens
4. `bg-white` to `bg-card` or `bg-background`
5. Utility colors like `text-red-500` to semantic tokens

---

## 🎬 NEXT STEPS

1. **Start with PPFConfigurator.tsx** (largest file, 80 replacements)
2. **Continue with TintConfigurator.tsx** (40 replacements)
3. **Fix both LivePreview components** (30 each)
4. **Update utility components** (CartPage, DevInspector)
5. **Test in both light and dark modes**
6. **Verify all configurators work correctly**
7. **Update this document with completion status**

---

**Estimated Time:** 3-4 hours for all replacements and testing  
**Risk Level:** Medium - Many changes, but systematic patterns  
**Testing Required:** Yes - full light/dark mode verification

---

**Ready to begin systematic remediation of hardcoded colors across the entire codebase.**
