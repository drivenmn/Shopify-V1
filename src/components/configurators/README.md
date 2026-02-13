# Configurators Module

This is the parent module for all DrivenMN configurators. Each configurator is organized as a self-contained sub-module with its own components, types, and utilities.

## Structure

```
configurators/
├── README.md                    # This file
├── index.tsx                    # Main module export
├── shared/                      # Shared utilities across all configurators
│   ├── index.ts
│   ├── vehicleData.ts          # Vehicle data and pricing
│   └── api.ts                  # API integration
├── tint/                        # Window Tint Configurator
│   ├── index.tsx               # Tint module export
│   ├── types.ts                # Tint-specific types
│   ├── TintConfigurator.tsx    # Main configurator component
│   └── TintLivePreview.tsx     # Live preview component
├── ppf/                         # PPF (Paint Protection Film) Configurator
│   ├── index.tsx               # PPF module export
│   ├── types.ts                # PPF-specific types
│   └── PPFConfigurator.tsx     # Main configurator component
└── tesla/                       # Tesla Package Configurator
    ├── index.tsx               # Tesla module export
    ├── types.ts                # Tesla-specific types
    ├── TeslaPackageConfigurator.tsx        # Main configurator component
    └── TeslaPackageLivePreview.tsx         # Live preview component
```

## Sub-Modules

### Tint Configurator (`/tint`)
Multi-step window tint configuration tool with:
- 7-step flow: Vehicle → Type → Package → Film → Darkness → Add-ons → Quote
- Live vehicle preview with tint visualization
- Real-time pricing calculator
- VLT (Visible Light Transmission) selection
- Multiple film types (Prime XR Plus, Prime XR, Prime CS, Prime HP)
- Add-ons (sunroof, moonroof, windshield)

**Usage:**
```tsx
import { TintConfigurator } from './components/configurators/tint';

function App() {
  return <TintConfigurator />;
}
```

### PPF Configurator (`/ppf`)
Paint Protection Film package builder with:
- 5 coverage tiers (Bumper Only → Full Body)
- Film selection (XPEL Ultimate Plus, XPEL Stealth)
- Add-ons (headlights, mirrors, door edges, handles)
- Coverage area visualization
- Real-time pricing

**Usage:**
```tsx
import { PPFConfigurator } from './components/configurators/ppf';

function App() {
  return <PPFConfigurator />;
}
```

### Tesla Package Configurator (`/tesla`)
Tesla-specific package builder combining PPF + Tint with:
- Tesla Model 3, Y, S, X support
- 3 package tiers (Essential, Premium, Ultimate)
- Pre-configured bundles
- 3D vehicle visualization
- Model-specific recommendations

**Usage:**
```tsx
import { TeslaPackageConfigurator } from './components/configurators/tesla';

function App() {
  return <TeslaPackageConfigurator />;
}
```

## Shared Module (`/shared`)

Contains utilities and data used across all configurators:

- **`vehicleData.ts`** - Vehicle makes, models, pricing, packages, films
- **`api.ts`** - Quote submission, form handling, Supabase integration

**Usage:**
```tsx
import { 
  vehicleMakes, 
  tintPackages, 
  ppfPackages,
  calculateTintPrice,
  calculatePPFPrice 
} from './components/configurators/shared';
```

## Import Patterns

### From outside the configurators module:
```tsx
// Import all configurators
import { 
  TintConfigurator,
  PPFConfigurator,
  TeslaPackageConfigurator
} from './components/configurators';

// Import specific sub-module
import { TintConfigurator, TintLivePreview } from './components/configurators/tint';

// Import types
import type { TintQuote, PPFQuote } from './components/configurators';

// Import shared utilities
import { calculateTintPrice, submitTintQuote } from './components/configurators/shared';
```

### From within the configurators module:
```tsx
// Tint configurator importing shared utilities
import { vehicleMakes, tintPackages } from '../shared/vehicleData';
import { submitTintQuote } from '../shared/api';
import type { TintQuote } from './types';

// PPF configurator importing shared utilities
import { vehicleMakes, ppfPackages } from '../shared/vehicleData';
import { submitPPFQuote } from '../shared/api';
import type { PPFQuote } from './types';
```

## Global Dependencies

All configurators use these global UI components from `/components/ui`:
- `Button`, `Card`, `Progress`, `Select`, `RadioGroup`
- `Input`, `Label`, `Dialog`, `Sheet`
- Lucide React icons
- Sonner toasts
- Motion/React animations

## Exporting Configurators

Use the configurator export system to bundle any configurator as a standalone module:

**Keyboard Shortcut:** `Cmd+Shift+E`

This generates a ZIP with:
- All configurator files
- Shared utilities
- UI components
- Setup documentation
- package.json with dependencies

## Migration Status

Currently, the configurators are **partially migrated**:
- ✅ Module structure created
- ✅ Type definitions separated
- ✅ Index files with re-exports
- ✅ Shared utilities module
- 🔄 Components still reference original locations (will migrate incrementally)

The re-export pattern allows the new structure to work immediately while we incrementally move files.

## Future Enhancements

- [ ] Add unit tests for each configurator
- [ ] Create Storybook stories for components
- [ ] Add configurator analytics tracking
- [ ] Build configurator preview/demo page
- [ ] Add A/B testing framework
- [ ] Create configurator admin panel

## Development Guidelines

1. **Self-contained** - Each configurator should be fully functional on its own
2. **Shared first** - Common utilities go in `/shared`, not duplicated
3. **Type safety** - Use TypeScript types from `types.ts` files
4. **Consistent UX** - Follow the same patterns across configurators
5. **Mobile-first** - All configurators must be fully responsive
6. **Accessibility** - Proper ARIA labels, keyboard navigation, screen reader support

## Questions?

- Check `/utils/configuratorExport.ts` for export logic
- Review `/App.tsx` for integration examples
- See individual configurator files for implementation details
