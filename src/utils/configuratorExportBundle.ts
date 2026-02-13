import { ConfiguratorType } from './configuratorExport';

interface ExportBundle {
  type: ConfiguratorType;
  files: Array<{
    path: string;
    description: string;
    required: boolean;
  }>;
  dependencies: string[];
  shadcnComponents: string[];
  setupInstructions: string[];
  notes: string[];
}

export function getConfiguratorBundle(type: ConfiguratorType): ExportBundle {
  const bundles: Record<ConfiguratorType, ExportBundle> = {
    tint: {
      type: 'tint',
      files: [
        {
          path: '/components/TintConfigurator.tsx',
          description: 'Main configurator component with multi-step flow',
          required: true
        },
        {
          path: '/components/TintLivePreview.tsx',
          description: 'Live preview component showing vehicle with tint',
          required: true
        },
        {
          path: '/imports/TintLivePreview-18-126.tsx',
          description: 'Vehicle silhouette SVG component for preview',
          required: true
        },
        {
          path: '/utils/vehicleData.ts',
          description: 'Vehicle makes, models, packages, and pricing data',
          required: true
        },
        {
          path: '/utils/api.ts',
          description: 'API utilities for quote submission',
          required: true
        },
        {
          path: '/components/ui/button.tsx',
          description: 'shadcn/ui Button component',
          required: true
        },
        {
          path: '/components/ui/select.tsx',
          description: 'shadcn/ui Select component',
          required: true
        },
        {
          path: '/components/ui/radio-group.tsx',
          description: 'shadcn/ui Radio Group component',
          required: true
        },
        {
          path: '/components/ui/progress.tsx',
          description: 'shadcn/ui Progress component',
          required: true
        },
        {
          path: '/components/ui/input.tsx',
          description: 'shadcn/ui Input component',
          required: true
        },
        {
          path: '/styles/globals.css',
          description: 'Global styles including Tailwind setup',
          required: false
        }
      ],
      dependencies: [
        'motion/react',
        'lucide-react',
        'sonner@2.0.3'
      ],
      shadcnComponents: [
        'button',
        'select',
        'radio-group',
        'progress',
        'input',
        'card'
      ],
      setupInstructions: [
        'Install required npm packages',
        'Add shadcn/ui components',
        'Copy all component files to /components directory',
        'Copy import files to /imports directory',
        'Copy utility files to /utils directory',
        'Import TintConfigurator in your App',
        'Update vehicleData.ts with your pricing',
        'Connect api.ts to your backend'
      ],
      notes: [
        'Pricing formula: Base (Vehicle + Package) → Film Modifier → VLT 5% adds 15%',
        'Progress indicator uses Motion for animations',
        'Live preview requires vehicle SVG imports',
        'All state managed internally with useState',
        'Mobile-responsive design included'
      ]
    },
    ppf: {
      type: 'ppf',
      files: [
        {
          path: '/components/PPFConfigurator.tsx',
          description: 'Main PPF configurator with package selection',
          required: true
        },
        {
          path: '/imports/XpelPaintProtectionFilm.tsx',
          description: 'XPEL PPF branding and visual assets',
          required: true
        },
        {
          path: '/utils/vehicleData.ts',
          description: 'Vehicle data, PPF packages, and pricing',
          required: true
        },
        {
          path: '/utils/api.ts',
          description: 'API utilities for quote submission',
          required: true
        },
        {
          path: '/components/ui/button.tsx',
          description: 'shadcn/ui Button component',
          required: true
        },
        {
          path: '/components/ui/radio-group.tsx',
          description: 'shadcn/ui Radio Group component',
          required: true
        },
        {
          path: '/components/ui/card.tsx',
          description: 'shadcn/ui Card component',
          required: true
        }
      ],
      dependencies: [
        'motion/react',
        'lucide-react',
        'sonner@2.0.3'
      ],
      shadcnComponents: [
        'button',
        'radio-group',
        'card',
        'checkbox'
      ],
      setupInstructions: [
        'Install required npm packages',
        'Add shadcn/ui components',
        'Copy PPFConfigurator to /components',
        'Copy XpelPaintProtectionFilm to /imports',
        'Copy utilities to /utils',
        'Import in your application',
        'Customize pricing in vehicleData.ts'
      ],
      notes: [
        'Supports XPEL Ultimate Plus and Stealth films',
        'Coverage tiers: Bumper, High-Impact, Track, Full Front, Full Body',
        'Real-time price calculation',
        'Package-based pricing structure'
      ]
    },
    tesla: {
      type: 'tesla',
      files: [
        {
          path: '/components/TeslaPackageConfigurator.tsx',
          description: 'Tesla-specific package builder',
          required: true
        },
        {
          path: '/components/TeslaPackageLivePreview.tsx',
          description: 'Live 3D Tesla vehicle preview',
          required: true
        },
        {
          path: '/utils/vehicleData.ts',
          description: 'Tesla models, packages, and pricing',
          required: true
        },
        {
          path: '/utils/api.ts',
          description: 'API utilities for quote submission',
          required: true
        },
        {
          path: '/components/ui/button.tsx',
          description: 'shadcn/ui Button component',
          required: true
        },
        {
          path: '/components/ui/card.tsx',
          description: 'shadcn/ui Card component',
          required: true
        },
        {
          path: '/components/ui/tabs.tsx',
          description: 'shadcn/ui Tabs component',
          required: true
        }
      ],
      dependencies: [
        'motion/react',
        'lucide-react',
        'sonner@2.0.3'
      ],
      shadcnComponents: [
        'button',
        'card',
        'tabs',
        'radio-group'
      ],
      setupInstructions: [
        'Install required npm packages',
        'Add shadcn/ui components',
        'Copy components to /components directory',
        'Copy utilities to /utils directory',
        'Import TeslaPackageConfigurator',
        'Customize Tesla-specific pricing'
      ],
      notes: [
        'Combines PPF + Tint packages',
        'Tesla Model 3, Y, S, X support',
        'Bundle pricing with discounts',
        'Live vehicle preview with coverage visualization',
        'Essential, Premium, Ultimate tiers'
      ]
    }
  };

  return bundles[type];
}

export function generateBundleMarkdown(bundle: ExportBundle): string {
  const typeNames = {
    tint: 'Window Tint Configurator',
    ppf: 'Paint Protection Film Configurator',
    tesla: 'Tesla Package Configurator'
  };

  let md = `# ${typeNames[bundle.type]} - Complete Export Bundle\n\n`;
  md += `**Generated:** ${new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  })}\n\n`;
  md += `---\n\n`;

  // Quick Start
  md += `## 🚀 Quick Start\n\n`;
  md += `### 1. Install Dependencies\n\n`;
  md += '```bash\n';
  md += `npm install ${bundle.dependencies.join(' ')}\n`;
  md += '```\n\n';

  md += `### 2. Install shadcn/ui Components\n\n`;
  md += '```bash\n';
  bundle.shadcnComponents.forEach(comp => {
    md += `npx shadcn@latest add ${comp}\n`;
  });
  md += '```\n\n';

  md += `### 3. Copy Required Files\n\n`;
  md += `Copy the following files from your DrivenMN project:\n\n`;
  bundle.files.filter(f => f.required).forEach(file => {
    md += `- **${file.path}**  \n  ${file.description}\n\n`;
  });

  // File Structure
  md += `## 📁 Complete File Structure\n\n`;
  md += '```\n';
  md += 'your-project/\n';
  md += '├── components/\n';
  bundle.files.filter(f => f.path.startsWith('/components/')).forEach(file => {
    const name = file.path.replace('/components/', '');
    md += `│   ├── ${name}${file.required ? ' (required)' : ' (optional)'}\n`;
  });
  md += '├── imports/\n';
  bundle.files.filter(f => f.path.startsWith('/imports/')).forEach(file => {
    const name = file.path.replace('/imports/', '');
    md += `│   ├── ${name}\n`;
  });
  md += '├── utils/\n';
  bundle.files.filter(f => f.path.startsWith('/utils/')).forEach(file => {
    const name = file.path.replace('/utils/', '');
    md += `│   ├── ${name}\n`;
  });
  md += '└── styles/\n';
  md += '    └── globals.css\n';
  md += '```\n\n';

  // Setup Instructions
  md += `## 📋 Setup Instructions\n\n`;
  bundle.setupInstructions.forEach((instruction, i) => {
    md += `${i + 1}. ${instruction}\n`;
  });
  md += '\n';

  // Usage Example
  md += `## 💻 Usage Example\n\n`;
  const componentName = bundle.type === 'tint' 
    ? 'TintConfigurator' 
    : bundle.type === 'ppf' 
    ? 'PPFConfigurator' 
    : 'TeslaPackageConfigurator';
  
  md += '```tsx\n';
  md += `import { ${componentName} } from './components/${componentName}';\n\n`;
  md += `export default function App() {\n`;
  md += `  return (\n`;
  md += `    <div className="min-h-screen bg-black">\n`;
  md += `      <${componentName} />\n`;
  md += `    </div>\n`;
  md += `  );\n`;
  md += `}\n`;
  md += '```\n\n';

  // Important Notes
  md += `## 📝 Important Notes\n\n`;
  bundle.notes.forEach(note => {
    md += `- ${note}\n`;
  });
  md += '\n';

  // File Descriptions
  md += `## 📦 File Descriptions\n\n`;
  bundle.files.forEach(file => {
    md += `### \`${file.path}\`\n\n`;
    md += `${file.description}\n\n`;
    md += `**Required:** ${file.required ? 'Yes ✅' : 'No (Optional)'}\n\n`;
    md += `**To export this file from your project:**\n\n`;
    md += `1. Open your DrivenMN project\n`;
    md += `2. Navigate to \`${file.path}\`\n`;
    md += `3. Copy the entire file content\n`;
    md += `4. Create the same file path in your new project\n`;
    md += `5. Paste the content\n\n`;
    md += `---\n\n`;
  });

  // Configuration
  md += `## ⚙️ Configuration\n\n`;
  md += `### Customizing Pricing\n\n`;
  md += `Edit \`/utils/vehicleData.ts\` to update:\n\n`;
  md += `- Vehicle makes and models\n`;
  md += `- Package prices\n`;
  md += `- Film options\n`;
  md += `- Add-ons and extras\n\n`;

  md += `### Customizing Styles\n\n`;
  md += `The configurator uses Tailwind CSS with these DrivenMN brand colors:\n\n`;
  md += `- **Primary (Teal):** \`#017974\`\n`;
  md += `- **Accent (Yellow):** \`#FDB521\`\n`;
  md += `- **Background:** Black gradients\n\n`;

  md += `Update colors in your Tailwind config or directly in component classes.\n\n`;

  // API Integration
  md += `## 🔌 API Integration\n\n`;
  md += `The configurator uses \`/utils/api.ts\` for backend communication.\n\n`;
  md += `**Current Implementation:** Mock/placeholder\n\n`;
  md += `**To connect to your backend:**\n\n`;
  md += `1. Open \`/utils/api.ts\`\n`;
  md += `2. Replace mock functions with real API calls\n`;
  md += `3. Update endpoint URLs\n`;
  md += `4. Add authentication if needed\n\n`;

  md += `Example API integration:\n\n`;
  md += '```tsx\n';
  md += `export async function submitTintQuote(quote: TintQuote) {\n`;
  md += `  const response = await fetch('https://your-api.com/quotes', {\n`;
  md += `    method: 'POST',\n`;
  md += `    headers: { 'Content-Type': 'application/json' },\n`;
  md += `    body: JSON.stringify(quote)\n`;
  md += `  });\n`;
  md += `  return response.json();\n`;
  md += `}\n`;
  md += '```\n\n';

  // Troubleshooting
  md += `## 🔧 Troubleshooting\n\n`;
  md += `### Common Issues\n\n`;
  md += `**Import errors:**\n`;
  md += `- Ensure all file paths match your project structure\n`;
  md += `- Check that shadcn/ui components are installed\n`;
  md += `- Verify all dependencies are in package.json\n\n`;

  md += `**Styling issues:**\n`;
  md += `- Confirm Tailwind CSS is configured correctly\n`;
  md += `- Check that globals.css is imported in your app\n`;
  md += `- Verify Agdasima font is loaded (or update font-family)\n\n`;

  md += `**Preview not showing:**\n`;
  md += `- Verify import SVG files are in /imports directory\n`;
  md += `- Check console for import errors\n`;
  md += `- Ensure Motion is installed correctly\n\n`;

  // Footer
  md += `---\n\n`;
  md += `## 📞 Support\n\n`;
  md += `This is an export from the DrivenMN web application.\n\n`;
  md += `**DrivenMN** - Minnesota's Exclusive XPEL Certified Facility\n\n`;
  md += `For technical questions about this export:\n`;
  md += `- Review component source code for inline comments\n`;
  md += `- Check the vehicleData.ts file for data structures\n`;
  md += `- Refer to shadcn/ui documentation for component usage\n\n`;

  md += `---\n\n`;
  md += `**Export Version:** 1.0  \n`;
  md += `**Configurator Type:** ${typeNames[bundle.type]}  \n`;
  md += `**Files Included:** ${bundle.files.length}  \n`;
  md += `**Dependencies:** ${bundle.dependencies.length}  \n`;

  return md;
}
