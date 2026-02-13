// Sub-Module Export System
// Exports individual configurator sub-modules with all dependencies

export type SubModuleType = 'tint' | 'ppf' | 'tesla';

interface SubModuleFile {
  sourcePath: string;
  exportPath: string;
  description: string;
  required: boolean;
}

interface SubModuleBundle {
  name: string;
  description: string;
  files: SubModuleFile[];
  uiComponents: string[];
  dependencies: string[];
  setupSteps: string[];
  features: string[];
}

export function getSubModuleBundle(type: SubModuleType): SubModuleBundle {
  const bundles: Record<SubModuleType, SubModuleBundle> = {
    tint: {
      name: 'Tint Configurator Sub-Module',
      description: 'Complete window tint configuration system with 7-step flow, live preview, and real-time pricing',
      files: [
        // Core configurator components
        {
          sourcePath: '/components/TintConfigurator.tsx',
          exportPath: 'src/components/configurators/tint/TintConfigurator.tsx',
          description: 'Main configurator component with multi-step flow',
          required: true
        },
        {
          sourcePath: '/components/TintLivePreview.tsx',
          exportPath: 'src/components/configurators/tint/TintLivePreview.tsx',
          description: 'Live preview component showing vehicle with tint',
          required: true
        },
        {
          sourcePath: '/components/configurators/tint/types.ts',
          exportPath: 'src/components/configurators/tint/types.ts',
          description: 'TypeScript type definitions for Tint module',
          required: true
        },
        {
          sourcePath: '/components/configurators/tint/index.tsx',
          exportPath: 'src/components/configurators/tint/index.tsx',
          description: 'Module export file',
          required: true
        },
        
        // Shared utilities
        {
          sourcePath: '/utils/vehicleData.ts',
          exportPath: 'src/utils/vehicleData.ts',
          description: 'Vehicle makes, models, tint packages, films, and pricing',
          required: true
        },
        {
          sourcePath: '/utils/api.ts',
          exportPath: 'src/utils/api.ts',
          description: 'API utilities for quote submission',
          required: true
        },
        {
          sourcePath: '/components/configurators/shared/vehicleData.ts',
          exportPath: 'src/components/configurators/shared/vehicleData.ts',
          description: 'Shared utilities re-export',
          required: true
        },
        {
          sourcePath: '/components/configurators/shared/api.ts',
          exportPath: 'src/components/configurators/shared/api.ts',
          description: 'Shared API re-export',
          required: true
        },
        {
          sourcePath: '/components/configurators/shared/index.ts',
          exportPath: 'src/components/configurators/shared/index.ts',
          description: 'Shared module export',
          required: true
        },
        
        // Preview assets
        {
          sourcePath: '/imports/TintLivePreview-18-126.tsx',
          exportPath: 'src/imports/TintLivePreview-18-126.tsx',
          description: 'Vehicle silhouette SVG for live preview',
          required: true
        },
        
        // Styles
        {
          sourcePath: '/styles/globals.css',
          exportPath: 'src/styles/globals.css',
          description: 'Global styles with Tailwind configuration',
          required: false
        }
      ],
      uiComponents: [
        'button',
        'card',
        'select',
        'radio-group',
        'progress',
        'input',
        'label'
      ],
      dependencies: [
        'react',
        'react-dom',
        'motion/react',
        'lucide-react',
        'sonner@2.0.3',
        'tailwindcss',
        '@tailwindcss/forms'
      ],
      setupSteps: [
        'Install dependencies: npm install',
        'Copy all files to corresponding directories',
        'Import TintConfigurator: import { TintConfigurator } from "./components/configurators/tint"',
        'Use in your app: <TintConfigurator />',
        'Customize pricing in vehicleData.ts',
        'Connect API in api.ts to your backend'
      ],
      features: [
        '7-step configuration flow',
        'Live vehicle preview with tint visualization',
        'Real-time price calculation',
        'VLT (darkness) selection: 5%, 20%, 35%, 50%',
        'Multiple film types: Prime XR Plus, Prime XR, Prime CS, Prime HP',
        'Package options: Front 2, Front 3, All Windows, Full Vehicle',
        'Add-ons: Sunroof, Moonroof, Windshield',
        'Email quote submission',
        'Mobile responsive design'
      ]
    },
    
    ppf: {
      name: 'PPF Configurator Sub-Module',
      description: 'Paint Protection Film package builder with 5 coverage tiers and XPEL film options',
      files: [
        // Core configurator components
        {
          sourcePath: '/components/PPFConfigurator.tsx',
          exportPath: 'src/components/configurators/ppf/PPFConfigurator.tsx',
          description: 'Main PPF configurator component',
          required: true
        },
        {
          sourcePath: '/components/configurators/ppf/types.ts',
          exportPath: 'src/components/configurators/ppf/types.ts',
          description: 'TypeScript type definitions for PPF module',
          required: true
        },
        {
          sourcePath: '/components/configurators/ppf/index.tsx',
          exportPath: 'src/components/configurators/ppf/index.tsx',
          description: 'Module export file',
          required: true
        },
        
        // Shared utilities
        {
          sourcePath: '/utils/vehicleData.ts',
          exportPath: 'src/utils/vehicleData.ts',
          description: 'Vehicle makes, models, PPF packages, films, and pricing',
          required: true
        },
        {
          sourcePath: '/utils/api.ts',
          exportPath: 'src/utils/api.ts',
          description: 'API utilities for quote submission',
          required: true
        },
        {
          sourcePath: '/components/configurators/shared/vehicleData.ts',
          exportPath: 'src/components/configurators/shared/vehicleData.ts',
          description: 'Shared utilities re-export',
          required: true
        },
        {
          sourcePath: '/components/configurators/shared/api.ts',
          exportPath: 'src/components/configurators/shared/api.ts',
          description: 'Shared API re-export',
          required: true
        },
        {
          sourcePath: '/components/configurators/shared/index.ts',
          exportPath: 'src/components/configurators/shared/index.ts',
          description: 'Shared module export',
          required: true
        },
        
        // Assets
        {
          sourcePath: '/imports/XpelPaintProtectionFilm.tsx',
          exportPath: 'src/imports/XpelPaintProtectionFilm.tsx',
          description: 'XPEL branding and graphics',
          required: false
        },
        
        // Styles
        {
          sourcePath: '/styles/globals.css',
          exportPath: 'src/styles/globals.css',
          description: 'Global styles with Tailwind configuration',
          required: false
        }
      ],
      uiComponents: [
        'button',
        'card',
        'select',
        'radio-group',
        'progress',
        'input',
        'label',
        'checkbox'
      ],
      dependencies: [
        'react',
        'react-dom',
        'motion/react',
        'lucide-react',
        'sonner@2.0.3',
        'tailwindcss',
        '@tailwindcss/forms'
      ],
      setupSteps: [
        'Install dependencies: npm install',
        'Copy all files to corresponding directories',
        'Import PPFConfigurator: import { PPFConfigurator } from "./components/configurators/ppf"',
        'Use in your app: <PPFConfigurator />',
        'Customize pricing in vehicleData.ts',
        'Connect API in api.ts to your backend'
      ],
      features: [
        '5 PPF coverage packages: Bumper Only, High Impact, Partial Front, Full Front, Full Body',
        'XPEL film selection: Ultimate Plus, Stealth',
        'Real-time price calculation',
        'Add-ons: Headlights, Mirrors, Door Edges, Door Handles, Rocker Panels',
        'Vehicle type-specific pricing',
        'Coverage area visualization',
        'Email quote submission',
        'Mobile responsive design'
      ]
    },
    
    tesla: {
      name: 'Tesla Package Configurator Sub-Module',
      description: 'Tesla-specific package builder combining PPF + Tint with Model 3, Y, S, X support',
      files: [
        // Core configurator components
        {
          sourcePath: '/components/TeslaPackageConfigurator.tsx',
          exportPath: 'src/components/configurators/tesla/TeslaPackageConfigurator.tsx',
          description: 'Main Tesla package configurator component',
          required: true
        },
        {
          sourcePath: '/components/TeslaPackageLivePreview.tsx',
          exportPath: 'src/components/configurators/tesla/TeslaPackageLivePreview.tsx',
          description: 'Live 3D vehicle preview for Tesla packages',
          required: true
        },
        {
          sourcePath: '/components/configurators/tesla/types.ts',
          exportPath: 'src/components/configurators/tesla/types.ts',
          description: 'TypeScript type definitions for Tesla module',
          required: true
        },
        {
          sourcePath: '/components/configurators/tesla/index.tsx',
          exportPath: 'src/components/configurators/tesla/index.tsx',
          description: 'Module export file',
          required: true
        },
        
        // Shared utilities
        {
          sourcePath: '/utils/vehicleData.ts',
          exportPath: 'src/utils/vehicleData.ts',
          description: 'Vehicle makes, models, Tesla packages, and pricing',
          required: true
        },
        {
          sourcePath: '/utils/api.ts',
          exportPath: 'src/utils/api.ts',
          description: 'API utilities for quote submission',
          required: true
        },
        {
          sourcePath: '/components/configurators/shared/vehicleData.ts',
          exportPath: 'src/components/configurators/shared/vehicleData.ts',
          description: 'Shared utilities re-export',
          required: true
        },
        {
          sourcePath: '/components/configurators/shared/api.ts',
          exportPath: 'src/components/configurators/shared/api.ts',
          description: 'Shared API re-export',
          required: true
        },
        {
          sourcePath: '/components/configurators/shared/index.ts',
          exportPath: 'src/components/configurators/shared/index.ts',
          description: 'Shared module export',
          required: true
        },
        
        // Styles
        {
          sourcePath: '/styles/globals.css',
          exportPath: 'src/styles/globals.css',
          description: 'Global styles with Tailwind configuration',
          required: false
        }
      ],
      uiComponents: [
        'button',
        'card',
        'select',
        'radio-group',
        'tabs',
        'input',
        'label'
      ],
      dependencies: [
        'react',
        'react-dom',
        'motion/react',
        'lucide-react',
        'sonner@2.0.3',
        'tailwindcss',
        '@tailwindcss/forms'
      ],
      setupSteps: [
        'Install dependencies: npm install',
        'Copy all files to corresponding directories',
        'Import TeslaPackageConfigurator: import { TeslaPackageConfigurator } from "./components/configurators/tesla"',
        'Use in your app: <TeslaPackageConfigurator />',
        'Customize pricing in vehicleData.ts',
        'Connect API in api.ts to your backend'
      ],
      features: [
        'Tesla Model 3, Y, S, X support',
        '3 package tiers: Essential, Premium, Ultimate',
        'Pre-configured PPF + Tint bundles',
        'Live 3D vehicle preview',
        'Model-specific recommendations',
        'Real-time price calculation',
        'Email quote submission',
        'Mobile responsive design'
      ]
    }
  };

  return bundles[type];
}

// Generate README for exported sub-module
export function generateSubModuleReadme(type: SubModuleType): string {
  const bundle = getSubModuleBundle(type);
  
  return `# ${bundle.name}

${bundle.description}

## 📦 What's Included

This export contains everything you need to integrate the ${bundle.name.toLowerCase()} into your React application.

### Files Included

${bundle.files.map(file => `- **${file.exportPath}**${file.required ? ' (Required)' : ' (Optional)'}\n  ${file.description}`).join('\n')}

### shadcn/ui Components

The following shadcn/ui components are required:
${bundle.uiComponents.map(c => `- ${c}`).join('\n')}

Install them using:
\`\`\`bash
npx shadcn@latest add ${bundle.uiComponents.join(' ')}
\`\`\`

## 🚀 Quick Start

### 1. Install Dependencies

\`\`\`bash
npm install ${bundle.dependencies.join(' ')}
\`\`\`

### 2. Setup Steps

${bundle.setupSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

### 3. Basic Usage

\`\`\`tsx
import { ${type === 'tint' ? 'TintConfigurator' : type === 'ppf' ? 'PPFConfigurator' : 'TeslaPackageConfigurator'} } from './components/configurators/${type}';

function App() {
  return (
    <div>
      <${type === 'tint' ? 'TintConfigurator' : type === 'ppf' ? 'PPFConfigurator' : 'TeslaPackageConfigurator'} />
    </div>
  );
}
\`\`\`

## ✨ Features

${bundle.features.map(f => `- ${f}`).join('\n')}

## 📁 File Structure

After copying the files, your project should look like this:

\`\`\`
src/
├── components/
│   ├── configurators/
│   │   ├── ${type}/
│   │   │   ├── ${type === 'tint' ? 'TintConfigurator.tsx' : type === 'ppf' ? 'PPFConfigurator.tsx' : 'TeslaPackageConfigurator.tsx'}
${type === 'tint' ? '│   │   │   ├── TintLivePreview.tsx' : type === 'tesla' ? '│   │   │   ├── TeslaPackageLivePreview.tsx' : ''}
│   │   │   ├── types.ts
│   │   │   └── index.tsx
│   │   └── shared/
│   │       ├── vehicleData.ts
│   │       ├── api.ts
│   │       └── index.ts
│   └── ui/
│       └── ... (shadcn components)
├── utils/
│   ├── vehicleData.ts
│   └── api.ts
${type === 'tint' ? '├── imports/\n│   └── TintLivePreview-18-126.tsx' : type === 'ppf' ? '├── imports/\n│   └── XpelPaintProtectionFilm.tsx' : ''}
└── styles/
    └── globals.css
\`\`\`

## 🎨 Customization

### Update Pricing

Edit \`src/utils/vehicleData.ts\` to customize:
- Vehicle makes and models
- Package pricing
- Film options
- Add-on pricing

### Connect Backend

Edit \`src/utils/api.ts\` to connect to your backend:
- Update API endpoints
- Add authentication
- Customize quote submission logic

### Styling

The configurator uses Tailwind CSS. Customize colors in your \`tailwind.config.js\`:

\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#017974',
        accent: '#FDB521'
      }
    }
  }
}
\`\`\`

## 🔧 API Integration

The configurator submits quotes using the \`submit${type === 'tint' ? 'Tint' : type === 'ppf' ? 'PPF' : 'Tesla'}Quote\` function in \`api.ts\`.

### Mock Implementation (Current)

\`\`\`tsx
export async function submit${type === 'tint' ? 'Tint' : type === 'ppf' ? 'PPF' : 'Tesla'}Quote(quote: ${type === 'tint' ? 'Tint' : type === 'ppf' ? 'PPF' : 'Tesla'}Quote) {
  console.log('Quote submitted:', quote);
  return { success: true, data: quote };
}
\`\`\`

### Real Implementation (Example)

\`\`\`tsx
export async function submit${type === 'tint' ? 'Tint' : type === 'ppf' ? 'PPF' : 'Tesla'}Quote(quote: ${type === 'tint' ? 'Tint' : type === 'ppf' ? 'PPF' : 'Tesla'}Quote) {
  const response = await fetch('https://your-api.com/quotes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quote)
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit quote');
  }
  
  return await response.json();
}
\`\`\`

## 📱 Responsive Design

The configurator is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1280px - 1919px)
- Tablet (768px - 1279px)
- Mobile (320px - 767px)

## 🐛 Troubleshooting

### Import Errors

Make sure all files are in the correct directories as shown in the file structure above.

### Styling Issues

Ensure Tailwind CSS is properly configured and \`globals.css\` is imported in your root component.

### Type Errors

Make sure TypeScript is configured and all type files are imported correctly.

## 📚 Documentation

For more information, see:
- TypeScript types in \`types.ts\`
- Vehicle data structure in \`vehicleData.ts\`
- API integration in \`api.ts\`

## 🆘 Support

If you encounter issues:
1. Check file paths match the structure above
2. Verify all dependencies are installed
3. Review console for error messages
4. Ensure shadcn/ui components are installed

## 📄 License

This configurator module is exported from DrivenMN project.

---

**Generated:** ${new Date().toLocaleDateString()}  
**Module:** ${bundle.name}  
**Version:** 2.0.0
`;
}

// Generate package.json for exported sub-module
export function generateSubModulePackageJson(type: SubModuleType): string {
  const bundle = getSubModuleBundle(type);
  
  return JSON.stringify({
    name: `${type}-configurator`,
    version: '2.0.0',
    description: bundle.description,
    private: true,
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'tsc && vite build',
      preview: 'vite preview',
      lint: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0'
    },
    dependencies: {
      'react': '^18.3.1',
      'react-dom': '^18.3.1',
      'motion': '^11.15.0',
      'lucide-react': '^0.468.0',
      'sonner': '2.0.3',
      'class-variance-authority': '^0.7.1',
      'clsx': '^2.1.1',
      'tailwind-merge': '^2.6.0'
    },
    devDependencies: {
      '@types/react': '^18.3.12',
      '@types/react-dom': '^18.3.1',
      '@vitejs/plugin-react': '^4.3.4',
      'typescript': '~5.6.2',
      'vite': '^6.0.3',
      'tailwindcss': '^4.0.0',
      'eslint': '^9.17.0',
      'autoprefixer': '^10.4.20'
    }
  }, null, 2);
}

// Generate setup guide for exported sub-module
export function generateSubModuleSetupGuide(type: SubModuleType): string {
  const bundle = getSubModuleBundle(type);
  
  return `# ${bundle.name} - Setup Guide

Complete step-by-step guide to integrate this configurator into your project.

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- npm or yarn package manager
- React 18+ project set up
- Basic knowledge of React and TypeScript

## 🔧 Installation

### Step 1: Install Dependencies

Run this command in your project root:

\`\`\`bash
npm install ${bundle.dependencies.join(' ')}
\`\`\`

Or with yarn:

\`\`\`bash
yarn add ${bundle.dependencies.join(' ')}
\`\`\`

### Step 2: Install shadcn/ui Components

This configurator uses shadcn/ui components. Install them:

\`\`\`bash
npx shadcn@latest init
npx shadcn@latest add ${bundle.uiComponents.join(' ')}
\`\`\`

### Step 3: Copy Files

Copy all files from this export to your project, maintaining the directory structure:

\`\`\`
${bundle.files.filter(f => f.required).map(f => f.exportPath).join('\n')}
\`\`\`

## 📁 File Organization

### Required Files

${bundle.files.filter(f => f.required).map(f => `
#### ${f.exportPath}

${f.description}

**Location:** Copy to \`${f.exportPath}\` in your project
`).join('\n')}

### Optional Files

${bundle.files.filter(f => !f.required).map(f => `
#### ${f.exportPath}

${f.description}
`).join('\n')}

## 🎯 Integration

### Basic Integration

\`\`\`tsx
// App.tsx or your main component
import { ${type === 'tint' ? 'TintConfigurator' : type === 'ppf' ? 'PPFConfigurator' : 'TeslaPackageConfigurator'} } from './components/configurators/${type}';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <${type === 'tint' ? 'TintConfigurator' : type === 'ppf' ? 'PPFConfigurator' : 'TeslaPackageConfigurator'} />
    </div>
  );
}

export default App;
\`\`\`

### With React Router

\`\`\`tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ${type === 'tint' ? 'TintConfigurator' : type === 'ppf' ? 'PPFConfigurator' : 'TeslaPackageConfigurator'} } from './components/configurators/${type}';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/${type}" element={<${type === 'tint' ? 'TintConfigurator' : type === 'ppf' ? 'PPFConfigurator' : 'TeslaPackageConfigurator'} />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

## ⚙️ Configuration

### 1. Update Vehicle Data

Edit \`src/utils/vehicleData.ts\`:

\`\`\`tsx
// Add your vehicle makes
export const vehicleMakes = [
  {
    id: 'tesla',
    name: 'Tesla',
    models: [
      { id: 'model-3', name: 'Model 3', trims: ['Standard', 'Long Range', 'Performance'] },
      // Add more models
    ]
  },
  // Add more makes
];

// Update pricing
${type === 'tint' ? `export const tintPackages = [
  {
    id: 'front-2',
    name: 'Front 2 Windows',
    basePrice: { sedan: 199, suv: 229, truck: 259, coupe: 199 }
  }
];` : type === 'ppf' ? `export const ppfPackages = [
  {
    id: 'bumper-only',
    name: 'Bumper Only',
    coverage: ['front-bumper'],
    basePrice: { sedan: 499, suv: 599, truck: 699, coupe: 499 }
  }
];` : `export const teslaPackages = [
  {
    id: 'essential',
    model: 'model3',
    tier: 'essential',
    price: 1999,
    features: ['Front Bumper PPF', 'Headlight PPF', '35% Front Tint']
  }
];`}
\`\`\`

### 2. Connect API

Edit \`src/utils/api.ts\`:

\`\`\`tsx
export async function submit${type === 'tint' ? 'Tint' : type === 'ppf' ? 'PPF' : 'Tesla'}Quote(quote: ${type === 'tint' ? 'Tint' : type === 'ppf' ? 'PPF' : 'Tesla'}Quote) {
  try {
    const response = await fetch('https://your-api.com/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify(quote)
    });

    if (!response.ok) {
      throw new Error('Failed to submit quote');
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Quote submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}
\`\`\`

### 3. Customize Styling

The configurator uses Tailwind CSS. Customize in \`tailwind.config.js\`:

\`\`\`js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#017974',  // Teal
        accent: '#FDB521',   // Yellow
        dark: '#0A0A0A'      // Background
      },
      fontFamily: {
        agdasima: ['Agdasima', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  }
}
\`\`\`

Add fonts to your HTML:

\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
\`\`\`

## 🧪 Testing

### Test the Configurator

1. Start your dev server: \`npm run dev\`
2. Navigate to the configurator page
3. Test each step of the flow
4. Verify pricing calculations
5. Test form submission

### Check Console

Open browser console and verify:
- No import errors
- No TypeScript errors
- Quote data logs correctly on submission

## 🚀 Deployment

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Environment Variables

Set these in your production environment:

\`\`\`
VITE_API_URL=https://your-api.com
VITE_API_KEY=your_api_key
\`\`\`

## 📊 Data Structure

### Quote Object

\`\`\`tsx
interface ${type === 'tint' ? 'Tint' : type === 'ppf' ? 'PPF' : 'Tesla'}Quote {
  vehicle_info: {
    year: number;
    make: string;
    model: string;
    trim: string;
    ${type !== 'tesla' ? 'type: string;' : ''}
  };
  configuration: {
    ${type === 'tint' ? `package: string;
    film: string;
    vlt: number;
    addons: string[];` : type === 'ppf' ? `package: string;
    film: string;
    addons: string[];` : `package: string;
    tier: string;
    customizations: string[];`}
  };
  total_price: number;
  customer_email: string;
  customer_phone?: string;
}
\`\`\`

## ✅ Checklist

- [ ] Dependencies installed
- [ ] shadcn/ui components added
- [ ] All files copied to correct locations
- [ ] Vehicle data customized
- [ ] API endpoint configured
- [ ] Styling customized
- [ ] Fonts loaded
- [ ] Configurator renders without errors
- [ ] Form submission works
- [ ] Pricing calculates correctly
- [ ] Mobile responsive
- [ ] Production build successful

## 🆘 Troubleshooting

### Common Issues

**Import errors:**
- Check file paths match the structure
- Verify all files are copied

**Styling issues:**
- Ensure Tailwind is configured
- Import globals.css in root
- Check font links in HTML

**Type errors:**
- Ensure TypeScript is set up
- Check tsconfig.json configuration

**Build errors:**
- Clear node_modules and reinstall
- Check for conflicting dependencies

## 📚 Next Steps

1. Customize vehicle makes and models
2. Update pricing to match your business
3. Connect to your backend API
4. Add analytics tracking
5. Customize email templates
6. Add additional features

## 💡 Pro Tips

- Use environment variables for API keys
- Add loading states for better UX
- Implement error boundaries
- Add analytics events
- Test on multiple devices
- Optimize images for performance

---

**Need help?** Check the main README.md or review the component source code.

**Version:** 2.0.0  
**Last Updated:** ${new Date().toLocaleDateString()}
`;
}
