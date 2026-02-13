# Theme Implementation Quick Guide

## TL;DR
Replace hardcoded gray colors with theme-aware CSS variables. Keep XPEL brand colors (#017974, #FDB521) unchanged.

---

## Quick Conversion Table

```tsx
// Backgrounds
bg-white            →  bg-background  (or bg-card for panels)
bg-gray-50          →  bg-muted
bg-gray-100         →  bg-muted
bg-gray-200         →  bg-muted
bg-black            →  bg-background (in dark mode context)

// Text
text-gray-900       →  text-foreground  (or text-card-foreground)
text-gray-800       →  text-foreground
text-gray-700       →  text-foreground
text-gray-600       →  text-muted-foreground
text-gray-500       →  text-muted-foreground
text-gray-400       →  text-muted-foreground/70
text-white          →  Keep if on colored bg, otherwise text-foreground

// Borders
border-gray-200     →  border-border
border-gray-300     →  border-border
border-gray-400     →  border-border

// Special Cases
from-gray-50 via-white to-gray-50  →  from-muted via-background to-muted
```

---

## DO NOT Change

✅ **Keep these as-is:**
```tsx
// XPEL Brand Colors
bg-[#017974]
text-[#017974]
border-[#017974]
bg-[#FDB521]
text-[#FDB521]
border-[#FDB521]
text-[#0A0A0A]  // On yellow backgrounds
text-white       // On teal backgrounds

// Gradients with brand colors
bg-gradient-to-r from-[#FDB521] to-[#F59E0B]
bg-gradient-to-br from-[#017974] to-[#015d59]
shadow-[#017974]/30
shadow-[#FDB521]/20
```

---

## Example Conversions

### Before:
```tsx
<div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
  <h2 className="text-gray-900 mb-4">Title</h2>
  <p className="text-gray-600">Description text</p>
  <button className="border-gray-200 text-gray-700 hover:border-[#017974]">
    Click me
  </button>
</div>
```

### After:
```tsx
<div className="bg-card border border-border rounded-2xl shadow-xl p-8">
  <h2 className="text-card-foreground mb-4">Title</h2>
  <p className="text-muted-foreground">Description text</p>
  <button className="border-border text-foreground hover:border-[#017974]">
    Click me
  </button>
</div>
```

---

## Component Patterns

### Card/Panel Pattern
```tsx
<div className="bg-card border border-border rounded-2xl p-8">
  <h3 className="text-card-foreground">Heading</h3>
  <p className="text-muted-foreground">Text content</p>
</div>
```

### Selected State Pattern
```tsx
className={`border-2 ${
  selected
    ? 'border-[#FDB521] bg-gradient-to-br from-[#FDB521]/20 to-[#FDB521]/5'
    : 'border-border hover:border-[#017974] hover:bg-[#017974]/5'
}`}
```

### Progress Indicator Pattern
```tsx
className={`${
  isCompleted
    ? 'bg-[#017974]'
    : isActive
    ? 'bg-[#FDB521]'
    : 'bg-muted border-border'
}`}
```

---

## Testing Workflow

1. **Make changes** in component
2. **Toggle theme** with button in navigation (Moon/Sun icon)
3. **Verify readability** in both modes
4. **Check interactions** (hover, focus, selected states)
5. **Confirm brand colors** remain consistent

---

## Common Mistakes to Avoid

❌ **Don't do this:**
```tsx
bg-gray-900  // Too dark for light mode
text-black   // Use text-foreground instead
border-white // Use border-border instead
```

❌ **Don't change brand colors:**
```tsx
// BAD - changing brand color
className="bg-primary"  // Using generic variable

// GOOD - keeping brand color
className="bg-[#017974]"  // Using exact XPEL color
```

---

## Pro Tips

1. **Search and replace carefully** - Use find/replace in your editor for common patterns
2. **Test dark mode first** - Issues are more visible in dark mode
3. **Group similar components** - Update all cards together, all forms together, etc.
4. **Keep brand identity** - If it's teal or yellow, leave it alone
5. **Use transitions** - Add `transition-colors duration-300` for smooth theme changes

---

## File Priority Order

1. **High Priority** (user-facing):
   - Configurators (PPF, Tint)
   - Service pages
   - Home page sections
   - Contact page

2. **Medium Priority**:
   - Blog page
   - Cart page
   - Shop page

3. **Low Priority**:
   - Dev tools
   - Utility pages

---

## Quick Commands

```bash
# Find all hardcoded grays
grep -r "bg-gray-" --include="*.tsx"
grep -r "text-gray-" --include="*.tsx"
grep -r "border-gray-" --include="*.tsx"

# Find all bg-white
grep -r "bg-white" --include="*.tsx"
```

---

**Remember:** Theme-aware colors improve user experience. XPEL brand colors maintain brand identity. Use both appropriately!
