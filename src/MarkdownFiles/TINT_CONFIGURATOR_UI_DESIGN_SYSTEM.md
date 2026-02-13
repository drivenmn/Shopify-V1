# Tint Configurator UI Design System

## Complete Design Documentation for `/components/configurators/tint/`

This document contains the complete UI/UX design specifications for the Tint Configurator and Tint Live Preview components.

---

## Color Palette

### Primary Brand Colors
- **Teal Primary**: `#017974`
- **Teal Dark**: `#015d59`
- **Teal Hover**: `#019a93`
- **Yellow Primary**: `#FDB521`
- **Yellow Gradient**: `#F59E0B`
- **Yellow Hover**: `#FFC107`

### Background Colors
- **Page Background**: `gradient-to-b from-[#050505] via-[#0A0A0A] to-[#050505]`
- **Card Background**: `gradient-to-br from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]`
- **Input Background**: `#0A0A0A`
- **Dark Accent**: `#0D0D0D`
- **Darker Black**: `#050505`

### Border Colors
- **Primary Border**: `#1C1C1C`
- **Border Opacity 60%**: `#1C1C1C/60`
- **Subtle Border**: `#2A2A2A`
- **White Border 10%**: `white/10`
- **Teal Border**: `#017974/30` to `#017974/40`
- **Yellow Border**: `#FDB521/40` to `#FDB521/50`

### Text Colors
- **White Primary**: `white`
- **White 90%**: `white/90`
- **White 80%**: `white/80`
- **White 70%**: `white/70`
- **White 60%**: `white/60`
- **White 50%**: `white/50`
- **White 40%**: `white/40`
- **White 30%**: `white/30`
- **White 20%**: `white/20`
- **Black Text** (on yellow buttons): `#0A0A0A`

### Status & Accent Colors
- **Success**: `#017974`
- **Warning**: `#FDB521`
- **Info**: Teal variants
- **Active**: `#FDB521`

---

## Typography

### Font Families
- **Headings**: `font-['Agdasima']` (Hero/Main headings only)
- **Body**: System default (inherited from globals.css)
- **Forms**: System default

### Font Sizes
```css
/* Hero Title */
font-size: 56px;
font-weight: 700;
line-height: 1;

/* Section Headings */
font-size: 32px;
font-weight: 700;
line-height: 1.2;

/* Live Preview Title */
font-size: 22px;
font-weight: 700;

/* Card Headings */
font-size: 20px;
font-weight: 700;

/* Price Display */
font-size: 24px;
font-weight: 700;

/* Body Text */
font-size: 18px;

/* Descriptions */
font-size: 15px;

/* Vehicle Display */
font-size: 16px;
font-weight: 600;

/* Card Subtext */
font-size: 17px;
font-weight: 600;

/* Small Text */
font-size: 13px;

/* Labels */
font-size: 12px (text-sm)
text-transform: uppercase;
letter-spacing: 0.05em (tracking-wider);
font-weight: 600;

/* Badge Text */
font-size: 10px;
text-transform: uppercase;
letter-spacing: 0.1em (tracking-wider);

/* Step Numbers */
font-size: 20px;
font-weight: 800;
```

### Font Weights
- **Ultra Bold**: `800` (Step numbers)
- **Bold**: `700` (Headings, CTAs, prices)
- **Semibold**: `600` (Labels, subheadings)
- **Medium**: `500` (Body text highlights)

### Text Transforms & Spacing
- **Uppercase**: Labels, badges, step indicators
- **Tracking Wider** (`0.05em`): Labels, small caps
- **Tracking Widest** (`0.1em`): Step labels

---

## Spacing & Layout

### Container & Grid
```css
/* Main Container */
max-width: 1400px;
margin: 0 auto;
padding: 0 1.5rem; /* 24px */

/* Page Padding */
padding-top: 5rem; /* 80px - below fixed nav */
padding-bottom: 5rem; /* 80px */

/* Grid Layout */
grid-cols-1 lg:grid-cols-2; /* Two-column on desktop */
gap: 2rem; /* 32px */
```

### Component Spacing
```css
/* Section Margins */
margin-bottom: 4rem; /* 64px - Header */
margin-bottom: 1rem; /* 16px - Section title */

/* Card Padding */
padding: 2rem; /* 32px - Main cards */
padding: 1.5rem; /* 24px - Inner cards */
padding: 1.25rem; /* 20px - Compact cards */

/* Content Spacing */
space-y-6; /* 24px vertical stack */
space-y-5; /* 20px vertical stack */
space-y-4; /* 16px vertical stack */
gap-3; /* 12px flex gap */
gap-2; /* 8px flex gap */
```

---

## Border Radius

```css
/* Large Cards */
border-radius: 1rem; /* 16px - rounded-2xl */

/* Medium Cards */
border-radius: 0.75rem; /* 12px - rounded-xl */

/* Buttons & Inputs */
border-radius: 0.75rem; /* 12px - rounded-xl */

/* Small Elements */
border-radius: 0.5rem; /* 8px - rounded-lg */

/* Pills/Badges */
border-radius: 9999px; /* rounded-full */

/* Circles */
border-radius: 9999px; /* rounded-full */
```

---

## Shadows

### Card Shadows
```css
/* Large Card */
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */

/* Element Shadows */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */

/* Glow Effects */
shadow-[0_0_20px_rgba(1,121,116,0.4)]; /* Teal glow - completed step */
shadow-[0_0_30px_rgba(253,181,33,0.5)]; /* Yellow glow - active step */

/* Button Shadows */
shadow-lg shadow-[#FDB521]/30; /* Yellow button default */
shadow-lg shadow-[#FDB521]/50; /* Yellow button hover */
shadow-lg shadow-[#017974]/30; /* Teal button default */
shadow-lg shadow-[#017974]/50; /* Teal button hover */

/* Overlay Shadows */
shadow-lg shadow-[#FDB521]/20; /* Badge/overlay shadow */
```

---

## Transitions & Animations

### Duration
```css
/* Fast */
transition-all duration-300; /* 300ms - Buttons, hovers */

/* Medium */
transition-all duration-500; /* 500ms - Cards, step circles */

/* Slow */
transition-all duration-700; /* 700ms - Progress lines, major state changes */
```

### Easing
```css
ease-in-out; /* Progress stepper animations */
transition-transform; /* Icon movements */
```

### Specific Animations

#### Button Hovers
```css
/* Icon Translate Left */
group-hover:-translate-x-1 transition-transform;

/* Icon Translate Right */
group-hover:translate-x-1 transition-transform;
```

#### Active Step Glow
```css
/* Pulsing glow behind active step */
animate-pulse; /* on glow div */
blur-xl opacity-40; /* backdrop blur effect */
```

#### Completed Step Ping
```css
/* Ring animation on completed steps */
animate-ping opacity-20;
```

#### Fade In Animations
```css
/* Success confirmation boxes */
animate-in fade-in slide-in-from-bottom-4 duration-500;
```

#### Scale Effects
```css
/* Active step grows */
scale-110; /* on active step circle */
```

---

## Progress Stepper Design

### Step States

#### Pending Step (Not Yet Reached)
```css
/* Circle */
background: #1C1C1C;
border: 2px solid #2A2A2A;

/* Number */
color: white/30;
font-size: 20px;
font-weight: 800;

/* Label */
color: white/30;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.1em;
```

#### Active Step (Current)
```css
/* Background Glow */
position: absolute;
inset: 0;
background: #FDB521;
border-radius: 9999px;
filter: blur(48px);
opacity: 0.4;
animation: pulse;

/* Circle */
background: #FDB521;
box-shadow: 0 0 30px rgba(253,181,33,0.5);
transform: scale(1.1);
width: 64px;
height: 64px;

/* Number */
color: #0A0A0A;
font-size: 20px;
font-weight: 800;

/* Label */
color: #FDB521;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.1em;
```

#### Completed Step
```css
/* Circle */
background: gradient-to-br from-[#017974] to-[#015d59];
box-shadow: 0 0 20px rgba(1,121,116,0.4);

/* Check Icon */
color: white;
width: 28px;
height: 28px;
stroke-width: 3;

/* Ping Ring */
position: absolute;
inset: 0;
border: 2px solid #017974;
border-radius: 9999px;
animation: ping;
opacity: 0.2;

/* Label */
color: #017974;
font-weight: 600;
```

### Connection Lines
```css
/* Pending */
background-color: #2A2A2A;
height: 2px;

/* Completed */
background-color: #017974;
height: 2px;

/* Transition */
transition: all 700ms ease-in-out;
```

---

## Form Elements

### Text Inputs
```css
/* Default State */
width: 100%;
background: #0A0A0A;
border: 2px solid #1C1C1C;
border-radius: 0.75rem; /* rounded-xl */
padding: 1rem 1.25rem; /* py-4 px-5 */
color: white;

/* Placeholder */
color: white/30;

/* Focus - Required Fields */
border-color: #FDB521;
box-shadow: 0 10px 15px -3px rgba(253,181,33,0.2);
outline: none;

/* Focus - Optional Fields */
border-color: #017974;
box-shadow: 0 10px 15px -3px rgba(1,121,116,0.2);
outline: none;

/* Transition */
transition: all 300ms;
```

### Labels
```css
display: block;
color: white/80;
margin-bottom: 0.5rem; /* 8px */
font-size: 0.875rem; /* 14px - text-sm */
text-transform: uppercase;
letter-spacing: 0.05em; /* tracking-wider */
font-weight: 600;

/* Required Indicator */
color: #FDB521;
```

---

## Buttons

### Primary CTA (Yellow - Continue)
```css
/* Default */
display: flex;
align-items: center;
gap: 0.75rem; /* 12px */
padding: 1rem 2rem; /* py-4 px-8 */
background: linear-gradient(to right, #FDB521, #F59E0B);
border-radius: 0.75rem; /* rounded-xl */
color: #0A0A0A;
font-weight: 700;
box-shadow: 0 10px 15px -3px rgba(253,181,33,0.3);
transition: all 300ms;

/* Hover */
background: linear-gradient(to right, #FFC107, #FDB521);
box-shadow: 0 10px 15px -3px rgba(253,181,33,0.5);

/* Disabled */
opacity: 0.4;
cursor: not-allowed;
box-shadow: none;
```

### Secondary CTA (Teal - Submit)
```css
/* Default */
display: flex;
align-items: center;
gap: 0.75rem;
padding: 1rem 2.5rem; /* py-4 px-10 */
background: linear-gradient(to right, #017974, #015d59);
border-radius: 0.75rem;
color: white;
font-weight: 700;
box-shadow: 0 10px 15px -3px rgba(1,121,116,0.3);
transition: all 300ms;

/* Hover */
background: linear-gradient(to right, #019a93, #017974);
box-shadow: 0 10px 15px -3px rgba(1,121,116,0.5);

/* Disabled */
opacity: 0.4;
cursor: not-allowed;
box-shadow: none;
```

### Back Button (Outlined)
```css
/* Default */
display: flex;
align-items: center;
gap: 0.75rem;
padding: 1rem 2rem; /* py-4 px-8 */
border: 2px solid #1C1C1C;
border-radius: 0.75rem;
color: white;
font-weight: 600;
background: transparent;
transition: all 300ms;

/* Hover */
border-color: #017974;
background: rgba(1, 121, 116, 0.1);

/* Disabled */
opacity: 0.3;
cursor: not-allowed;
border-color: #1C1C1C;
background: transparent;
```

---

## Selection Cards

### Package/Film/VLT Selection Cards
```css
/* Default State */
position: relative;
width: 100%;
padding: 1.5rem; /* 24px - p-6 */
border: 2px solid #1C1C1C;
border-radius: 0.75rem; /* rounded-xl */
background: transparent;
transition: all 300ms;
text-align: left;
overflow: hidden;

/* Hover State */
border-color: #017974;
background: rgba(1, 121, 116, 0.05);

/* Selected State */
border-color: #FDB521;
background: linear-gradient(to bottom right, 
  rgba(253,181,33,0.2), 
  rgba(253,181,33,0.05)
);
box-shadow: 0 10px 15px -3px rgba(253,181,33,0.2);

/* Selected Check Badge */
position: absolute;
top: 1rem; /* 16px */
right: 1rem; /* 16px */
width: 1.5rem; /* 24px */
height: 1.5rem; /* 24px */
border-radius: 9999px;
background: #FDB521;
display: flex;
align-items: center;
justify-content: center;

/* Check Icon */
width: 1rem; /* 16px */
height: 1rem; /* 16px */
color: #0A0A0A;
```

### Vehicle Type Cards
```css
/* Icon Container */
width: 3rem; /* 48px */
height: 3rem; /* 48px */
border-radius: 0.75rem; /* rounded-xl */
display: flex;
align-items: center;
justify-content: center;

/* Default */
background: #1C1C1C;

/* Selected */
background: rgba(253,181,33,0.2);

/* Icon */
width: 1.5rem; /* 24px */
height: 1.5rem; /* 24px */

/* Default Icon Color */
color: white/60;

/* Selected Icon Color */
color: #FDB521;
```

---

## Live Preview Component

### Container
```css
/* Main Card */
background: linear-gradient(to bottom right, 
  #0A0A0A, 
  #0D0D0D, 
  #0A0A0A
);
border: 1px solid rgba(28,28,28,0.6);
border-radius: 1rem; /* rounded-2xl */
overflow: hidden;
box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
backdrop-filter: blur(12px);

/* Ambient Glow */
position: absolute;
inset: -4px;
background: linear-gradient(to right, 
  rgba(1,121,116,0.1), 
  rgba(253,181,33,0.1)
);
border-radius: 1rem;
filter: blur(48px);
opacity: 0.5;
z-index: -1;
```

### Header Section
```css
/* Container */
position: relative;
border-bottom: 1px solid rgba(255,255,255,0.1);
padding: 1.5rem; /* 24px */
background: linear-gradient(to right, #0A0A0A, #0D0D0D);

/* Icon Badge */
width: 2.5rem; /* 40px */
height: 2.5rem; /* 40px */
border-radius: 0.75rem; /* rounded-xl */
background: linear-gradient(to bottom right, #017974, #015d59);
display: flex;
align-items: center;
justify-content: center;

/* Icon */
width: 1.25rem; /* 20px */
height: 1.25rem; /* 20px */
color: white;

/* Title */
color: white;
font-size: 22px;
font-weight: 700;

/* Vehicle Type Badge */
background: linear-gradient(to right, 
  rgba(1,121,116,0.2), 
  rgba(1,121,116,0.1)
);
border: 1px solid rgba(1,121,116,0.3);
padding: 0.375rem 1rem; /* py-1.5 px-4 */
border-radius: 9999px;

/* Vehicle Type Text */
color: #017974;
font-size: 12px;
text-transform: uppercase;
letter-spacing: 0.05em;
font-weight: 600;

/* Vehicle Display */
color: #FDB521;
font-size: 16px;
font-weight: 600;
```

### Vehicle Image Section
```css
/* Container */
position: relative;
aspect-ratio: 4/3;
background: linear-gradient(to bottom right, #1C1C1C, #0A0A0A);

/* Image */
width: 100%;
height: 100%;
object-fit: cover;

/* Tint Overlay */
position: absolute;
inset: 0;
width: 100%;
height: 100%;
pointer-events: none;

/* SVG Path (Window Tint) */
fill: #000000;
opacity: /* calculated from (100 - VLT) / 100 */;
```

### VLT Indicator Badge
```css
/* Container */
position: absolute;
top: 1rem;
right: 1rem;
background: linear-gradient(to bottom right, 
  rgba(10,10,10,0.95), 
  rgba(28,28,28,0.95)
);
backdrop-filter: blur(12px);
padding: 0.75rem 1rem; /* py-3 px-4 */
border-radius: 0.75rem; /* rounded-xl */
border: 1px solid rgba(253,181,33,0.5);
box-shadow: 0 10px 15px -3px rgba(253,181,33,0.2);

/* VLT Percentage */
color: #FDB521;
font-size: 12px;
text-transform: uppercase;
letter-spacing: 0.05em;
font-weight: 600;
margin-bottom: 0.25rem; /* 4px */

/* Darkness Label */
color: white/60;
font-size: 12px;
```

### Coverage Areas Overlay
```css
/* Container */
position: absolute;
bottom: 0;
left: 0;
right: 0;
padding: 1rem; /* 16px */
background: linear-gradient(to top, 
  rgba(10,10,10,0.98), 
  rgba(10,10,10,0.95), 
  transparent
);
backdrop-filter: blur(12px);
z-index: 10;

/* Label */
color: white/90;
font-size: 12px;
text-transform: uppercase;
letter-spacing: 0.05em;
font-weight: 600;
margin-bottom: 0.75rem; /* 12px */

/* Area Badge */
display: flex;
align-items: center;
gap: 0.5rem; /* 8px */
background: rgba(10,10,10,0.95);
backdrop-filter: blur(4px);
padding: 0.375rem 0.75rem; /* py-1.5 px-3 */
border-radius: 0.5rem; /* rounded-lg */
border: 1px solid rgba(253,181,33,0.4);
box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);

/* Dot Indicator */
width: 0.375rem; /* 6px */
height: 0.375rem; /* 6px */
border-radius: 9999px;
background: #FDB521;

/* Area Text */
color: white;
font-size: 12px;
font-weight: 500;
```

### Configuration Summary Section
```css
/* Container */
padding: 1.5rem; /* 24px */
border-bottom: 1px solid rgba(255,255,255,0.1);
background: linear-gradient(to right, #0A0A0A, #0D0D0D);

/* Header Badge */
width: 2rem; /* 32px */
height: 2rem; /* 32px */
border-radius: 0.5rem; /* rounded-lg */
background: linear-gradient(to bottom right, #FDB521, #F59E0B);
display: flex;
align-items: center;
justify-content: center;

/* Header Icon */
width: 1rem; /* 16px */
height: 1rem; /* 16px */
color: #0A0A0A;

/* Header Text */
color: white;
text-transform: uppercase;
letter-spacing: 0.05em;
font-size: 12px;
font-weight: 700;

/* Grid */
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 0.75rem; /* 12px */
```

### Config Step Items
```css
/* Container */
background: rgba(28,28,28,0.4);
backdrop-filter: blur(4px);
padding: 0.75rem; /* 12px */
border-radius: 0.5rem; /* rounded-lg */
border: 1px solid transparent;
transition: all 300ms;

/* Completed State */
border-color: rgba(1,121,116,0.3);
background: rgba(1,121,116,0.1);

/* Pending State */
border-color: transparent;
opacity: 0.5;

/* Label */
color: white/60;
font-size: 10px;
text-transform: uppercase;
letter-spacing: 0.1em;
margin-bottom: 0.25rem; /* 4px */

/* Value */
color: white;
font-size: 13px;
font-weight: 600;
```

---

## Price Display

### Primary Price Card
```css
/* Container */
background: linear-gradient(to bottom right, 
  #0A0A0A, 
  #0D0D0D, 
  #0A0A0A
);
border: 1px solid rgba(28,28,28,0.6);
border-radius: 1rem; /* rounded-2xl */
padding: 1.5rem; /* 24px */
box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);

/* Header */
display: flex;
align-items: center;
gap: 0.75rem; /* 12px */
margin-bottom: 1rem; /* 16px */

/* Icon Badge */
width: 2.5rem; /* 40px */
height: 2.5rem; /* 40px */
border-radius: 0.75rem; /* rounded-xl */
background: linear-gradient(to bottom right, #FDB521, #F59E0B);
display: flex;
align-items: center;
justify-content: center;

/* Title */
color: white;
font-size: 18px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.05em;

/* Price Amount */
color: #FDB521;
font-size: 48px;
font-weight: 700;
line-height: 1;
margin-bottom: 0.5rem; /* 8px */

/* Price Label */
color: white/60;
font-size: 14px;
```

---

## Confirmation Boxes

### Success Confirmation
```css
/* Container */
margin-top: 1.5rem; /* 24px */
padding: 1.25rem; /* 20px */
background: linear-gradient(to right, 
  rgba(1,121,116,0.2), 
  rgba(1,121,116,0.1)
);
border: 2px solid rgba(1,121,116,0.4);
border-radius: 0.75rem; /* rounded-xl */

/* Animation */
animation: fade-in, slide-in-from-bottom-4;
animation-duration: 500ms;

/* Icon Badge */
width: 2.5rem; /* 40px */
height: 2.5rem; /* 40px */
border-radius: 9999px;
background: #017974;
display: flex;
align-items: center;
justify-content: center;

/* Icon */
width: 1.25rem; /* 20px */
height: 1.25rem; /* 20px */
color: white;

/* Label */
color: #017974;
font-size: 12px;
text-transform: uppercase;
letter-spacing: 0.05em;
font-weight: 600;

/* Value Text */
color: white;
font-size: 16px;
font-weight: 600;
```

---

## Feature Badges/Stats

### Performance Stats (Heat, Clarity, Warranty)
```css
/* Container */
background: rgba(10,10,10,0.5);
backdrop-filter: blur(4px);
padding: 0.75rem; /* 12px */
border-radius: 0.5rem; /* rounded-lg */
border: 1px solid #1C1C1C;

/* Icon + Label Row */
display: flex;
align-items: center;
gap: 0.5rem; /* 8px */
margin-bottom: 0.25rem; /* 4px */

/* Icon */
width: 0.75rem; /* 12px */
height: 0.75rem; /* 12px */
color: #FDB521;

/* Label */
color: white/40;
font-size: 12px;
text-transform: uppercase;
letter-spacing: 0.05em;

/* Value */
color: #FDB521;
font-size: 14px;
font-weight: 600;
```

---

## Loading States

### Loading Button
```css
/* Icon */
width: 1.25rem; /* 20px */
height: 1.25rem; /* 20px */
animation: spin;

/* Text */
color: white;
font-weight: 700;
```

---

## Responsive Breakpoints

```css
/* Mobile First */
default: /* Mobile styles */

/* Medium Devices (Tablets) */
md: 768px; /* grid-cols-2 for cards */

/* Large Devices (Desktop) */
lg: 1024px; /* Two-column layout, sticky preview */

/* Desktop Grid */
lg:grid-cols-2;

/* Mobile Stack */
grid-cols-1;
```

---

## Z-Index Hierarchy

```css
z-index: -1; /* Ambient glow backgrounds */
z-index: 0; /* Progress stepper connection lines */
z-index: 1; /* Progress stepper circles */
z-index: 10; /* Coverage areas overlay */
```

---

## Special Effects

### Backdrop Blur
```css
backdrop-filter: blur(12px); /* backdrop-blur-sm - Cards */
backdrop-filter: blur(4px); /* backdrop-blur-sm - Overlays */
```

### Gradient Overlays
```css
/* Ambient Glow */
background: linear-gradient(to right, 
  rgba(1,121,116,0.2), 
  rgba(253,181,33,0.2)
);
filter: blur(48px);
opacity: 0.3;

/* Card Glow */
background: linear-gradient(to right, 
  rgba(1,121,116,0.1), 
  rgba(253,181,33,0.1)
);
filter: blur(48px);
opacity: 0.5;
```

### Mix Blend Modes
```
No mix-blend-mode used in Tint Configurator
(Note: Different from PPF Configurator which uses multiply for color overlays)
```

---

## Accessibility Notes

### Focus States
- All interactive elements have focus states using border color changes
- Focus ring removed (`outline: none`) in favor of custom border/shadow states
- Color contrast maintained (Yellow on dark backgrounds, white text on dark)

### Required Field Indicators
- Asterisk `*` in yellow (`#FDB521`) next to required labels
- Optional fields marked with `(Optional)` in `white/40`

### Disabled States
- Clear opacity reduction (`0.3` to `0.4`)
- Cursor changes to `not-allowed`
- Hover states disabled
- Shadow effects removed

---

## Toast Notifications

```javascript
// Success Toast
toast.success('Booking request sent!', {
  description: `${year} ${make} ${model} - $${price.toLocaleString()}`
});

// Info Toast
toast.info('Please use our contact form for exotic and sports car quotes');
```

---

## Animation Keyframes

```css
/* Pulse (Active step glow) */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Ping (Completed step ring) */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Spin (Loading icon) */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

---

## Component Hierarchy

```
TintConfigurator (Parent)
├── Header Section
│   ├── Badge (Premium Window Tinting)
│   ├── Title (H1)
│   └── Subtitle (P)
├── Progress Stepper
│   ├── Connection Lines
│   └── Step Circles (6)
│       ├── Glow (Active)
│       ├── Circle
│       ├── Number/Check
│       └── Label
├── Navigation Buttons
│   ├── Back Button
│   └── Continue/Submit Button
└── Grid Layout
    ├── Configuration Panel (Left)
    │   ├── Step 1: Vehicle Info
    │   ├── Step 2: Vehicle Type
    │   ├── Step 3: Package Selection
    │   ├── Step 4: Film Selection
    │   ├── Step 5: VLT/Darkness
    │   └── Step 6: Review
    └── Live Preview (Right - Sticky)
        ├── Header
        ├── Vehicle Image + Tint Overlay
        │   ├── SVG Tint Paths
        │   ├── VLT Badge
        │   └── Coverage Areas
        ├── Configuration Summary
        └── Price Display
```

---

## File Structure

```
/components/configurators/tint/
├── TintConfigurator.tsx      (Main configurator logic & UI)
├── TintLivePreview.tsx        (Live preview component)
├── index.tsx                  (Module exports)
└── types.ts                   (TypeScript interfaces)
```

---

## State Management

### TintConfigurator State
```typescript
const [currentStep, setCurrentStep] = useState(1);
const [loading, setLoading] = useState(false);
const [year, setYear] = useState('');
const [make, setMake] = useState('');
const [model, setModel] = useState('');
const [trim, setTrim] = useState('');
const [vehicleType, setVehicleType] = useState('');
const [selectedFilm, setSelectedFilm] = useState('prime-xr-plus');
const [selectedPackage, setSelectedPackage] = useState('');
const [selectedVLT, setSelectedVLT] = useState(35);
```

### Step Validation Logic
```typescript
switch (currentStep) {
  case 1: return year && make && model;
  case 2: return vehicleType !== '';
  case 3: return selectedPackage !== '';
  case 4: return selectedFilm !== '';
  case 5: return selectedVLT > 0;
  case 6: return true;
}
```

---

## Version & Compatibility

- **React**: 18+
- **TypeScript**: Yes
- **Tailwind CSS**: v4.0
- **Icons**: Lucide React
- **Toast**: Sonner@2.0.3
- **Image Component**: ImageWithFallback (custom)

---

## Notes for Developers

1. **All font sizes are inline** using `style={{ fontSize: 'XXpx' }}` to override globals.css defaults
2. **Font weights are inline** where specific weight is needed
3. **Gradients are inline** for precise color control
4. **No custom Tailwind config** - using Tailwind v4.0 defaults + inline styles
5. **Progress stepper uses absolute positioning** with z-index layering
6. **Live preview is sticky** on desktop (`sticky top-24`)
7. **Mobile-first responsive** design with lg: breakpoint for desktop
8. **All transitions are CSS-based** (no JS animation libraries)
9. **SVG paths** are hardcoded for tint overlay visualization
10. **VLT opacity** calculated as `(100 - vlt) / 100`

---

**Last Updated**: January 11, 2025  
**Component Version**: 2.0  
**Design System Version**: 1.0
