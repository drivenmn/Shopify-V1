# 🚀 Quick Color Migration Guide

## Remaining Files - Find & Replace Patterns

### **For `/components/configurators/ppf/PPFConfigurator.tsx` (40 remaining instances)**

#### Pattern 1: Film Selection Buttons
```typescript
// FIND
border-[#FDB521] bg-gradient-to-br from-[#FDB521]/20 to-[#FDB521]/5 shadow-lg shadow-[#FDB521]/20

// REPLACE
border-warning bg-gradient-to-br from-warning/20 to-warning/5 shadow-lg shadow-warning/20
```

```typescript
// FIND  
border-border hover:border-[#017974] hover:bg-[#017974]/5

// REPLACE
border-border hover:border-primary hover:bg-primary/5
```

#### Pattern 2: Selection Checkmarks
```typescript
// FIND
bg-[#FDB521] flex items-center justify-center">
  <Check className="w-4 h-4 text-[#0A0A0A]"

// REPLACE
bg-warning flex items-center justify-center">
  <Check className="w-4 h-4 text-background"
```

#### Pattern 3: Price Text
```typescript
// FIND
text-[#017974]

// REPLACE
text-primary
```

#### Pattern 4: Sparkles Icons
```typescript
// FIND
<Sparkles className="w-4 h-4 text-[#FDB521]"

// REPLACE
<Sparkles className="w-4 h-4 text-warning"
```

#### Pattern 5: Review Cards - Teal Gradients
```typescript
// FIND
from-[#017974]/5 to-white rounded-xl border border-[#017974]/20

// REPLACE
from-primary/5 to-card/50 rounded border border-primary/20
```

```typescript
// FIND
<Car className="w-5 h-5 text-[#017974]"

// REPLACE
<Car className="w-5 h-5 text-primary"
```

#### Pattern 6: Review Cards - Yellow Gradients
```typescript
// FIND
from-[#FDB521]/5 to-white rounded-xl border border-[#FDB521]/20

// REPLACE
from-warning/5 to-card/50 rounded border border-warning/20
```

```typescript
// FIND
<Shield className="w-5 h-5 text-[#FDB521]"

// REPLACE
<Shield className="w-5 h-5 text-warning"
```

```typescript
// FIND
<Star className="w-5 h-5 text-[#FDB521]"

// REPLACE
<Star className="w-5 h-5 text-warning"
```

#### Pattern 7: Add-on Buttons
```typescript
// FIND
bg-[#FDB521] border-[#FDB521]

// REPLACE
bg-warning border-warning
```

#### Pattern 8: Total Price Card
```typescript
// FIND
from-[#FDB521]/10 to-white rounded-xl border-2 border-[#FDB521]

// REPLACE
from-warning/10 to-card/50 rounded border-2 border-warning
```

#### Pattern 9: Info Callouts
```typescript
// FIND
bg-[#017974]/5 border border-[#017974]/20 rounded-xl

// REPLACE
bg-primary/5 border border-primary/20 rounded
```

#### Pattern 10: Typography Remove (Step Headers)
```typescript
// FIND
<h2 className="text-foreground mb-2" style={{ fontSize: '32px', fontWeight: 700, lineHeight: '1.2' }}>

// REPLACE
<h2>
```

```typescript
// FIND
<h3 className="text-foreground mb-4 uppercase tracking-wider text-sm" style={{ fontWeight: 700 }}>

// REPLACE
<h4 className="uppercase tracking-wider">
```

---

### **For `/components/configurators/ppf/PPFLivePreview.tsx`**

Use same patterns as TintLivePreview.tsx:

```typescript
// Badges
bg-[#FDB521] → bg-warning
text-[#017974] → text-primary

// Progress bars
from-[#017974] to-[#017974] → from-primary to-primary

// Borders
border-[#FDB521] → border-warning
border-[#017974] → border-primary
```

---

## 🔧 VS Code Find & Replace

### Enable Regex Mode and Use These Patterns:

#### 1. All Teal Hex Colors
```regex
FIND:    #017974|#015d59|#019a93
REPLACE: var(--primary)
```

#### 2. All Yellow Hex Colors
```regex
FIND:    #FDB521|#F59E0B|#FFC107
REPLACE: var(--warning)
```

#### 3. Black on Colored Backgrounds
```regex
FIND:    text-\[#0A0A0A\]
REPLACE: text-background
```

#### 4. Border Radius (Non-Full)
```regex
FIND:    rounded-(sm|md|lg|xl|2xl|3xl)
REPLACE: rounded
```

#### 5. Typography Classes (Remove)
```regex
FIND:    (text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl))|(font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black))
REPLACE: [empty - manually check each]
```

---

## 📝 Manual Check Required

### Typography Replacement Strategy:

**Before:**
```tsx
<h2 className="text-foreground text-3xl font-bold mb-4">
  Section Title
</h2>
```

**After:**
```tsx
<h2 className="mb-4">
  Section Title
</h2>
```

**Rationale:** `globals.css` handles all `<h2>` styling automatically (Exo 2, 2.25rem, 700).

---

## ⚡ Bulk Script (Run in Terminal)

```bash
# For PPFConfigurator.tsx
sed -i 's/#017974/var(--primary)/g' components/configurators/ppf/PPFConfigurator.tsx
sed -i 's/#FDB521/var(--warning)/g' components/configurators/ppf/PPFConfigurator.tsx
sed -i 's/#0A0A0A/var(--background)/g' components/configurators/ppf/PPFConfigurator.tsx
sed -i 's/rounded-xl/rounded/g' components/configurators/ppf/PPFConfigurator.tsx
sed -i 's/rounded-2xl/rounded/g' components/configurators/ppf/PPFConfigurator.tsx
sed -i 's/text-\[var(--background)\]/text-background/g' components/configurators/ppf/PPFConfigurator.tsx

# For PPFLivePreview.tsx (when ready)
sed -i 's/#017974/var(--primary)/g' components/configurators/ppf/PPFLivePreview.tsx
sed -i 's/#FDB521/var(--warning)/g' components/configurators/ppf/PPFLivePreview.tsx
sed -i 's/#0A0A0A/var(--background)/g' components/configurators/ppf/PPFLivePreview.tsx
```

**Note:** Test after each command. The `sed` approach is fast but needs validation.

---

## 🎯 Priority Order (Next Steps)

1. ✅ **PPFConfigurator.tsx** - Steps 4 & 5 (~40 instances)
2. ❌ **PPFLivePreview.tsx** - Full refactor (~25 instances)
3. ❌ **TeslaVisualizer.tsx** - Audit & refactor (unknown count)
4. ❌ **Page components** - Systematic audit
5. ❌ **Shared components** - Buttons, cards, etc.

---

## 💡 Tips

1. **Search First**: Use `file_search` tool to find all instances before replacing
2. **Context Matters**: Some `text-[color]` should be `text-primary`, others `text-warning`
   - Primary actions → `warning` (yellow)
   - Status/info → `primary` (plum)
3. **Test Incrementally**: After every 5-10 replacements, check the UI
4. **Preserve Logic**: Don't change conditional logic, only color values
5. **Keep Animations**: `animate-pulse`, `transition-all` are design-system-agnostic

---

**Last Updated:** December 3, 2025
