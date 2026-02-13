# Configurators Quick Reference

One-page cheat sheet for working with the configurators module.

## 📦 Import Patterns

```tsx
// ✅ Import all configurators (recommended for App.tsx)
import { 
  TintConfigurator,
  PPFConfigurator,
  TeslaPackageConfigurator
} from './components/configurators';

// ✅ Import specific configurator + utilities
import { TintConfigurator } from './components/configurators/tint';
import { calculateTintPrice } from './components/configurators/shared';

// ✅ Import types
import type { TintQuote, PPFQuote } from './components/configurators';

// ❌ Don't import from original locations (deprecated)
import { TintConfigurator } from './components/TintConfigurator'; // OLD
```

## 🎨 Available Configurators

| Configurator | Path | Components | Export Name |
|-------------|------|------------|-------------|
| **Tint** | `/configurators/tint` | TintConfigurator, TintLivePreview | `TintConfigurator` |
| **PPF** | `/configurators/ppf` | PPFConfigurator | `PPFConfigurator` |
| **Tesla** | `/configurators/tesla` | TeslaPackageConfigurator, TeslaPackageLivePreview | `TeslaPackageConfigurator` |

## 🔧 Shared Utilities

```tsx
import {
  // Vehicle Data
  vehicleMakes,
  vehicleTypes,
  getYears,
  
  // Tint
  tintFilms,
  tintPackages,
  tintAddons,
  calculateTintPrice,
  getTintPrice,
  getAvailableTintPackages,
  getAvailableTintFilms,
  getAvailableVLT,
  
  // PPF
  ppfFilms,
  ppfPackages,
  ppfAddons,
  calculatePPFPrice,
  getPPFPrice,
  
  // API
  submitTintQuote,
  submitPPFQuote,
  submitContactForm,
  getBlogPosts
} from './components/configurators/shared';
```

## 📝 Type Definitions

```tsx
// Tint Quote
interface TintQuote {
  vehicle_info: {
    year: number;
    make: string;
    model: string;
    trim: string;
    type: string;
  };
  configuration: {
    package: string;
    film: string;
    vlt: number;
    addons: string[];
  };
  total_price: number;
  customer_email: string;
  customer_phone?: string;
}

// PPF Quote
interface PPFQuote {
  vehicle_info: {
    year: number;
    make: string;
    model: string;
    trim: string;
    type: string;
  };
  configuration: {
    package: string;
    film: string;
    addons: string[];
  };
  total_price: number;
  customer_email: string;
  customer_phone?: string;
}

// Tesla Package
interface TeslaPackage {
  id: string;
  name: string;
  model: 'model3' | 'modely' | 'models' | 'modelx';
  tier: 'essential' | 'premium' | 'ultimate';
  ppf_coverage: string[];
  tint_included: boolean;
  price: number;
  features: string[];
}
```

## 🎯 Usage Examples

### Basic Usage

```tsx
function App() {
  return (
    <div>
      <TintConfigurator />
    </div>
  );
}
```

### With Routing

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TintConfigurator, PPFConfigurator } from './components/configurators';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tint" element={<TintConfigurator />} />
        <Route path="/ppf" element={<PPFConfigurator />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Custom Integration

```tsx
import { TintConfigurator } from './components/configurators/tint';
import { submitTintQuote, calculateTintPrice } from './components/configurators/shared';
import type { TintQuote } from './components/configurators';

function CustomTintPage() {
  const handleQuoteSubmit = async (quote: TintQuote) => {
    const result = await submitTintQuote(quote);
    if (result.success) {
      console.log('Quote submitted!', result.data);
    }
  };

  return (
    <div>
      <h1>Custom Tint Builder</h1>
      <TintConfigurator onSubmit={handleQuoteSubmit} />
    </div>
  );
}
```

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + I` | Open Developer Inspector |
| `Cmd/Ctrl + E` | Export Project |
| `Cmd/Ctrl + F` | Copy Module Data to Clipboard |
| `Cmd/Ctrl + Shift + E` | **Export Configurator** |

## 📤 Exporting a Configurator

1. Press `Cmd+Shift+E`
2. Select configurator (Tint, PPF, or Tesla)
3. Choose format (Code Bundle or Documentation)
4. ZIP downloads automatically
5. Follow README.md in the ZIP for setup

## 🗂️ File Locations

```
components/
  configurators/
    ├── index.tsx              # Main export
    ├── shared/
    │   ├── vehicleData.ts     # Pricing, vehicles, packages
    │   └── api.ts             # Quote submission, API calls
    ├── tint/
    │   ├── TintConfigurator.tsx
    │   ├── TintLivePreview.tsx
    │   └── types.ts
    ├── ppf/
    │   ├── PPFConfigurator.tsx
    │   └── types.ts
    └── tesla/
        ├── TeslaPackageConfigurator.tsx
        ├── TeslaPackageLivePreview.tsx
        └── types.ts
```

## 🎨 UI Components (Global)

All configurators use these shadcn components from `/components/ui`:

```tsx
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Progress } from './components/ui/progress';
import { Select } from './components/ui/select';
import { RadioGroup } from './components/ui/radio-group';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
```

## 🔄 State Management

Each configurator manages its own state:

```tsx
// Tint Configurator State
const [year, setYear] = useState('');
const [make, setMake] = useState('');
const [model, setModel] = useState('');
const [vehicleType, setVehicleType] = useState('');
const [selectedPackage, setSelectedPackage] = useState('');
const [selectedFilm, setSelectedFilm] = useState('prime-xr-plus');
const [selectedVLT, setSelectedVLT] = useState(35);
const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
const [customerEmail, setCustomerEmail] = useState('');
```

## 💰 Pricing Calculation

```tsx
import { calculateTintPrice, calculatePPFPrice } from './components/configurators/shared';

// Tint pricing
const tintPrice = calculateTintPrice(
  vehicleType,    // 'sedan', 'suv', 'truck', 'coupe'
  packageId,      // 'front-2', 'front-3', 'all-windows', 'full'
  filmId,         // 'prime-xr-plus', 'prime-xr', etc.
  vlt,            // 5, 20, 35, 50
  addonIds        // ['sunroof', 'windshield']
);

// PPF pricing
const ppfPrice = calculatePPFPrice(
  vehicleType,    // 'sedan', 'suv', 'truck', 'coupe'
  packageId,      // 'bumper-only', 'high-impact', etc.
  filmId,         // 'ultimate-plus', 'stealth'
  addonIds        // ['headlights', 'mirrors']
);
```

## 🐛 Debugging

```tsx
// Check Dev Inspector
Cmd+I → View current page components

// Check console
console.log('Vehicle Data:', vehicleMakes);
console.log('Tint Packages:', tintPackages);
console.log('Calculated Price:', calculateTintPrice(...));

// Check backend status
// Dev Inspector shows "Mock API" if Supabase not connected
```

## 📚 Documentation

- **README.md** - Overview and setup
- **MODULE_STRUCTURE.md** - Visual architecture
- **QUICK_REFERENCE.md** - This file
- `/utils/configuratorExport.ts` - Export logic
- `/utils/vehicleData.ts` - Data structures

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| Import error | Use new paths: `./components/configurators` |
| Price shows $0 | Check vehicleType and package are selected |
| Quote fails | Check backend status in Dev Inspector |
| Type errors | Import types: `import type { TintQuote } from './components/configurators'` |

## 🚀 Next Steps

1. **Read** `/components/configurators/README.md`
2. **Explore** module structure in Dev Inspector (Cmd+I)
3. **Test** configurators locally
4. **Export** a configurator (Cmd+Shift+E)
5. **Customize** pricing in `vehicleData.ts`
6. **Connect** backend in `api.ts`

---

**Need help?** Check `/components/configurators/README.md` or open Dev Inspector (Cmd+I)
