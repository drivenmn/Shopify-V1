# XPEL Products Section - Typography & Sizing Guide

**Component:** `/pages/services/tint/auto/sections/XPELProducts.tsx`  
**Section:** Product Grid Cards

---

## 🎨 Layout Structure

### Grid System
```
grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12
```
- **Mobile:** Single column
- **Desktop (lg+):** 2 columns
- **Gap between cards:** 32px (gap-8)
- **Bottom margin:** 48px (mb-12)

---

## 📦 Product Card Structure

### Card Container
```
rounded-3xl (border-radius: 24px)
border-2 border-gray-700/50
```

---

## 🏷️ Badge (Top Right)

**Position:** `absolute top-6 right-6`

### Typography
- **Font Size:** `text-xs` (0.75rem / 12px)
- **Font Weight:** `font-bold` (700)
- **Text Color:** `text-white`
- **Background:** `bg-primary` (XPEL Teal #017974)
- **Padding:** `px-4 py-2` (16px horizontal, 8px vertical)
- **Border Radius:** `rounded-full`

### Content Examples
- "MOST POPULAR"
- "BEST VALUE"
- "PREMIUM"

---

## 🎯 Header Section

**Padding:** `p-8` (32px all sides)  
**Background:** `bg-gradient-to-br from-primary/5 to-transparent`  
**Border:** `border-b border-gray-700/50`

### Product Name (H3)
- **Element:** `<h3>`
- **Font Size:** Default from globals.css (typically 1.875rem / 30px)
- **Font Weight:** Default bold from globals.css
- **Text Color:** `text-white`
- **Bottom Margin:** `mb-2` (8px)

### Tier Label
- **Font Size:** Default paragraph size
- **Text Color:** `text-primary` (#017974)
- **Bottom Margin:** `mb-2` (8px)

### Description
- **Font Size:** `text-sm` (0.875rem / 14px)
- **Text Color:** `text-gray-400`
- **Bottom Margin:** `mb-4` (16px)

### Price
- **Font Size:** `text-2xl` (1.5rem / 24px)
- **Font Weight:** `font-bold` (700)
- **Text Color:** `text-white`

---

## 📝 Content Section

**Padding:** `p-8` (32px all sides)  
**Spacing:** `space-y-8` (32px between subsections)

---

## 🛡️ Key Features

### Subsection Heading (H4)
- **Element:** `<h4>`
- **Font Size:** Default from globals.css (typically 1.5rem / 24px)
- **Text Color:** `text-white`
- **Bottom Margin:** `mb-4` (16px)
- **Icon:** Shield icon, 20x20px (`w-5 h-5`), `text-primary`
- **Layout:** `flex items-center gap-2`

### Feature List Items
- **Container:** `<ul>` with `space-y-3` (12px between items)
- **Layout:** `flex items-start gap-3`
- **Icon:** Check icon, 20x20px (`w-5 h-5`), `text-primary`, `mt-0.5`
- **Font Size:** `text-sm` (0.875rem / 14px)
- **Line Height:** `leading-relaxed` (1.625)
- **Text Color:** 
  - Default: `text-gray-300`
  - Highlighted: `text-white font-semibold`

### Feature Content Examples
- "Superior nano-ceramic construction for maximum heat rejection"
- "Blocks 99% of harmful UV rays protecting your skin and interior"
- "Non-metallic design won't interfere with electronics or signals"
- "Excellent color stability - won't fade or purple over time"
- "Lifetime manufacturer warranty against fading, peeling, cracking"

---

## 🔧 Technical Specifications

**Container:**
- **Padding:** `p-6` (24px all sides)
- **Border Radius:** `rounded-2xl` (16px)
- **Background:** `bg-black/30`
- **Border:** `border border-gray-700/30`

### Subsection Heading (H5)
- **Element:** `<h5>`
- **Font Size:** Default from globals.css (typically 1.25rem / 20px)
- **Text Color:** `text-white`
- **Bottom Margin:** `mb-4` (16px)

### Specs Grid
```
grid grid-cols-2 gap-4
```
- **Columns:** 2
- **Gap:** 16px

### Spec Label (Top)
- **Font Size:** `text-xs` (0.75rem / 12px)
- **Text Color:** `text-gray-500`
- **Text Transform:** `uppercase`
- **Letter Spacing:** `tracking-wider` (0.05em)
- **Bottom Margin:** `mb-1` (4px)

### Spec Value (Bottom)
- **Font Size:** `text-sm` (0.875rem / 14px)
- **Font Weight:** `font-semibold` (600)
- **Text Color:** `text-white`

### Spec Categories & Content

#### Construction
- "Nano-Ceramic"
- "Multi-layer ceramic technology"
- "Dual-reflective nano-ceramic"
- "Hybrid dye and ceramic"

#### Heat Rejection
- "Up to 88%"
- "Up to 98%"
- "Up to 65%"
- "Up to 40%"

#### UV Rejection
- "99%"
- "99.9%"

#### Warranty
- "Lifetime"
- "Limited Lifetime"
- "10 Years"

---

## 🎚️ Available Tint Levels (VLT)

### Subsection Heading (H5)
- **Element:** `<h5>`
- **Font Size:** Default from globals.css (typically 1.25rem / 20px)
- **Text Color:** `text-white`
- **Bottom Margin:** `mb-3` (12px)

### VLT Chips Container
```
flex flex-wrap gap-2
```
- **Layout:** Flexbox with wrapping
- **Gap:** 8px between chips

### Individual VLT Chip
- **Padding:** `px-3 py-1.5` (12px horizontal, 6px vertical)
- **Border Radius:** `rounded-lg` (8px)
- **Background:** `bg-gray-800/50`
- **Border:** `border border-gray-700/50`
- **Font Size:** `text-sm` (0.875rem / 14px)
- **Font Weight:** `font-semibold` (600)
- **Text Color:** `text-gray-300`

### VLT Content Examples
- "5%"
- "15%"
- "20%"
- "25%"
- "30%"
- "35%"
- "40%"
- "50%"
- "70%"

---

## 🔘 CTA Button

### Button Styling
- **Width:** `w-full` (100%)
- **Background:** `bg-[#FDB521]` (XPEL Yellow)
- **Hover:** `hover:bg-[#FDB521]/90`
- **Text Color:** `text-black`
- **Font Weight:** `font-bold` (700)
- **Padding:** `py-6` (24px vertical)
- **Border Radius:** `rounded-xl` (12px)
- **Font Size:** `text-base` (1rem / 16px)
- **Shadow:** `shadow-lg shadow-[#FDB521]/20`
- **Hover Shadow:** `hover:shadow-xl hover:shadow-[#FDB521]/30`
- **Layout:** `flex items-center justify-center gap-2`

### Button Content
**Text:** "Schedule your Window Tint Today"  
**Icon:** ArrowRight, 20x20px (`w-5 h-5`)

---

## 📊 Product Data Structure

### XPEL PRIME XR Plus
**Tier:** "Premium"  
**Badge:** "MOST POPULAR"  
**Price:** "From $499"  
**Description:** "Our most advanced nano-ceramic film with superior heat rejection and optical clarity. The pinnacle of automotive window tint technology."

**Features:**
- Superior nano-ceramic construction for maximum heat rejection
- Blocks 99% of harmful UV rays protecting your skin and interior
- Non-metallic design won't interfere with electronics or signals
- Excellent color stability - won't fade or purple over time
- Lifetime manufacturer warranty against fading, peeling, cracking

**Specs:**
- Technology: "Nano-Ceramic"
- Heat Rejection: "Up to 88%"
- UV Rejection: "99%"
- Warranty: "Lifetime"

**VLT Options:** 5%, 15%, 20%, 30%, 40%, 50%, 70%

---

### XPEL PRIME CS
**Tier:** "Premium Plus"  
**Badge:** "BEST VALUE"  
**Price:** "From $699"  
**Description:** "Advanced carbon-ceramic hybrid technology delivering exceptional performance and a sleek, dark appearance perfect for luxury vehicles."

**Features:**
- Multi-layer ceramic technology for industry-leading heat control
- 99.9% UV protection - highest in the industry
- Superior infrared heat rejection keeps your vehicle cooler
- Deep charcoal appearance with no signal interference
- Premium lifetime warranty for complete peace of mind

**Specs:**
- Technology: "Multi-layer ceramic technology"
- Heat Rejection: "Up to 98%"
- UV Rejection: "99.9%"
- Warranty: "Lifetime"

**VLT Options:** 5%, 15%, 20%, 25%, 35%, 40%, 50%

---

### XPEL PRIME XR
**Tier:** "Standard"  
**Price:** "From $399"  
**Description:** "Outstanding nano-ceramic performance at an accessible price point. Excellent heat rejection and UV protection for everyday comfort."

**Features:**
- Dual-reflective nano-ceramic construction
- Blocks 99% of UV rays for skin and interior protection
- Metal-free formula maintains electronic signal clarity
- Color-stable technology prevents fading and discoloration
- Comprehensive lifetime warranty coverage

**Specs:**
- Technology: "Dual-reflective nano-ceramic"
- Heat Rejection: "Up to 65%"
- UV Rejection: "99%"
- Warranty: "Lifetime"

**VLT Options:** 15%, 20%, 30%, 40%, 50%, 70%

---

### XPEL PRIME HP
**Tier:** "Entry Level"  
**Price:** "From $299"  
**Description:** "Quality hybrid film combining dye and ceramic technology for reliable performance and value. Perfect for drivers seeking proven protection."

**Features:**
- Hybrid dye and ceramic construction for balanced performance
- Effective 99% UV ray blocking for health protection
- Won't interfere with GPS, satellite radio, or mobile devices
- Maintains color integrity without purpling or fading
- Limited lifetime warranty for lasting protection

**Specs:**
- Technology: "Hybrid dye and ceramic"
- Heat Rejection: "Up to 40%"
- UV Rejection: "99%"
- Warranty: "Limited Lifetime"

**VLT Options:** 5%, 15%, 20%, 30%, 35%, 50%

---

## 🎨 Color Palette

### Primary Colors
- **XPEL Teal:** `#017974` (Primary brand color)
- **XPEL Yellow:** `#FDB521` (CTA accent color)
- **Neon Violet:** `#9D4EDD` (Accent color)

### Text Colors
- **White:** `text-white` - Primary headings and important text
- **Gray 300:** `text-gray-300` - Body text and feature descriptions
- **Gray 400:** `text-gray-400` - Secondary descriptions
- **Gray 500:** `text-gray-500` - Labels and metadata
- **Primary:** `text-primary` - Tier labels and icons

### Background Colors
- **Gray 800/50:** `bg-gray-800/50` - Card backgrounds
- **Gray 900/50:** `bg-gray-900/50` - Dark card backgrounds
- **Black/30:** `bg-black/30` - Technical specs background

### Border Colors
- **Gray 700/50:** `border-gray-700/50` - Card borders
- **Gray 700/30:** `border-gray-700/30` - Spec box borders
- **Primary/50:** `border-primary/50` - Hover state borders

---

## 📐 Spacing System

### Padding
- `p-6` = 24px (Technical specs box)
- `p-8` = 32px (Header and content sections)

### Margins
- `mb-1` = 4px (Spec label bottom margin)
- `mb-2` = 8px (Product name, tier bottom margin)
- `mb-3` = 12px (VLT heading bottom margin)
- `mb-4` = 16px (Description, section heading bottom margins)
- `mb-12` = 48px (Grid bottom margin)

### Gaps
- `gap-2` = 8px (Badge content, VLT chips, button content)
- `gap-3` = 12px (Feature list items)
- `gap-4` = 16px (Specs grid)
- `gap-8` = 32px (Product cards grid)

### Spacing Between Sections
- `space-y-3` = 12px (Feature list items)
- `space-y-8` = 32px (Content subsections)

---

## 🔤 Typography Hierarchy

1. **H3 (Product Name)** - Largest, most prominent
2. **H4 (Subsection Headings)** - "Key Features"
3. **H5 (Minor Headings)** - "Technical Specifications", "Available Tint Levels"
4. **Body Text** - Feature descriptions, tier labels
5. **Small Text** - Technical spec labels
6. **Extra Small** - Badge text

---

## ⚙️ Component Behavior

### Animations
- **Card Entrance:** Fade in + slide up (30px)
- **Stagger Delay:** 0.1s between cards
- **Viewport Trigger:** `once: true` (animates once when scrolled into view)

### Hover States
- **Card Border:** Transitions to `border-primary/50`
- **Button Background:** Fades to 90% opacity
- **Button Shadow:** Increases from `lg` to `xl`

---

## 📱 Responsive Breakpoints

### Mobile (< 1024px)
- Single column layout
- Full width cards

### Desktop (≥ 1024px - lg)
- 2 column grid
- Cards side-by-side

---

## ✅ Best Practices

1. **Consistency:** All cards use identical typography and spacing
2. **Readability:** Proper contrast ratios (white text on dark backgrounds)
3. **Hierarchy:** Clear visual distinction between heading levels
4. **Accessibility:** Semantic HTML elements (h3, h4, h5, ul, li)
5. **Scannability:** Bullet points with check icons for easy scanning
6. **Technical Data:** Structured grid layout for specs comparison
7. **Progressive Disclosure:** Information organized from general to specific

---

**Last Updated:** December 6, 2024  
**Design System:** DrivenMN XPEL Services  
**Color Scheme:** Tri-color accent (Teal, Yellow, Violet)
