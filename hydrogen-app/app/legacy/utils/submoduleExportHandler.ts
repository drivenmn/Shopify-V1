// Sub-Module Export Handler
// Generates ZIP files with complete sub-module code

import JSZip from 'jszip';
import { 
  SubModuleType, 
  getSubModuleBundle, 
  generateSubModuleReadme,
  generateSubModulePackageJson,
  generateSubModuleSetupGuide
} from './submoduleExport';

// Helper to read file content (simulated - creates template files)
async function getFileContent(path: string): Promise<string> {
  // Create a template file that shows where to copy from
  return `// SOURCE: ${path}
// 
// ⚠️  IMPORTANT: This is a TEMPLATE file
// 
// To complete the export:
// 1. Open your DrivenMN project
// 2. Navigate to: ${path}
// 3. Copy the ENTIRE file content
// 4. Paste it into this file, replacing everything
//
// The actual code cannot be bundled automatically, so you'll need to
// manually copy it from your DrivenMN project source.
//
// This ensures you get the most up-to-date code with all your customizations.

// TODO: Replace this entire file with actual code from ${path}

export default {};
`;
}

// Generate file list documentation
function generateFileList(type: SubModuleType): string {
  const bundle = getSubModuleBundle(type);
  
  return `# File List - ${bundle.name}

This document lists all files included in this export and where they should be placed.

## 📁 Directory Structure

\`\`\`
${type}-configurator/
├── README.md                    # Main documentation
├── SETUP_GUIDE.md               # Step-by-step setup instructions
├── FILE_LIST.md                 # This file
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
└── src/
    ├── components/
    │   ├── configurators/
    │   │   ├── ${type}/
    │   │   │   └── ... (${type} module files)
    │   │   └── shared/
    │   │       └── ... (shared utilities)
    │   └── ui/
    │       └── ... (shadcn components)
    ├── utils/
    │   ├── vehicleData.ts
    │   └── api.ts
    ${type === 'tint' || type === 'ppf' ? `├── imports/
    │   └── ... (SVG assets)` : ''}
    └── styles/
        └── globals.css
\`\`\`

## 📄 Files Included

### Core Module Files

${bundle.files.map(f => `
**${f.exportPath}** ${f.required ? '(Required)' : '(Optional)'}
- Source: \`${f.sourcePath}\`
- Description: ${f.description}
`).join('\n')}

### Configuration Files

**package.json**
- Contains all required dependencies
- Includes build scripts

**tsconfig.json**
- TypeScript configuration
- Module resolution settings

**vite.config.ts**
- Vite build configuration
- Path aliases

**tailwind.config.js**
- Tailwind CSS configuration
- Custom colors and fonts

### shadcn/ui Components

The following components need to be installed:
${bundle.uiComponents.map(c => `- ${c}`).join('\n')}

Install command:
\`\`\`bash
npx shadcn@latest add ${bundle.uiComponents.join(' ')}
\`\`\`

## 🔄 Copy Instructions

### Method 1: Manual Copy

1. Extract this ZIP file
2. Copy files from \`src/\` to your project's \`src/\` directory
3. Merge \`package.json\` dependencies
4. Copy configuration files to project root

### Method 2: Template Approach

1. Use the template files as a reference
2. Copy actual code from your DrivenMN project
3. Update imports and paths as needed

## ✅ Verification Checklist

After copying files, verify:

- [ ] All files in correct directories
- [ ] No import errors
- [ ] TypeScript compiles without errors
- [ ] Configurator renders in browser
- [ ] Pricing calculations work
- [ ] Form submission works
- [ ] Responsive on mobile

## 📝 Notes

- Template files include SOURCE comments showing where to copy from
- Some files may need path adjustments based on your project structure
- UI components are from shadcn/ui and should be installed separately
- Customize vehicleData.ts and api.ts for your needs

## 🆘 Troubleshooting

**Missing imports?**
- Check all files are copied
- Verify file paths match structure

**Styling not working?**
- Ensure globals.css is imported
- Check Tailwind config is loaded

**Type errors?**
- Verify tsconfig.json is correct
- Check all type files are copied

---

Generated: ${new Date().toLocaleDateString()}
Module: ${bundle.name}
`;
}

// Generate config files
function generateTsConfig(): string {
  return JSON.stringify({
    compilerOptions: {
      target: 'ES2020',
      useDefineForClassFields: true,
      lib: ['ES2020', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      moduleResolution: 'bundler',
      allowImportingTsExtensions: true,
      isolatedModules: true,
      moduleDetection: 'force',
      noEmit: true,
      jsx: 'react-jsx',
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true,
      noUncheckedSideEffectImports: true,
      paths: {
        '@/*': ['./src/*']
      }
    },
    include: ['src']
  }, null, 2);
}

function generateViteConfig(): string {
  return `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
`;
}

function generateTailwindConfig(): string {
  return `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#017974',
        accent: '#FDB521',
        dark: '#0A0A0A'
      },
      fontFamily: {
        agdasima: ['Agdasima', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
`;
}

function generateIndexHtml(type: SubModuleType): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${type.charAt(0).toUpperCase() + type.slice(1)} Configurator</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

function generateMainTsx(type: SubModuleType): string {
  const componentName = type === 'tint' ? 'TintConfigurator' : type === 'ppf' ? 'PPFConfigurator' : 'TeslaPackageConfigurator';
  
  return `import React from 'react';
import ReactDOM from 'react-dom/client';
import { ${componentName} } from './components/configurators/${type}';
import { Toaster } from './components/ui/sonner';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0A0A0A] to-[#050505]">
      <${componentName} />
      <Toaster />
    </div>
  </React.StrictMode>
);
`;
}

// Main export function
export async function exportSubModule(type: SubModuleType): Promise<void> {
  const bundle = getSubModuleBundle(type);
  const zip = new JSZip();
  
  // Add documentation
  zip.file('README.md', generateSubModuleReadme(type));
  zip.file('SETUP_GUIDE.md', generateSubModuleSetupGuide(type));
  zip.file('FILE_LIST.md', generateFileList(type));
  
  // Add configuration files
  zip.file('package.json', generateSubModulePackageJson(type));
  zip.file('tsconfig.json', generateTsConfig());
  zip.file('vite.config.ts', generateViteConfig());
  zip.file('tailwind.config.js', generateTailwindConfig());
  zip.file('index.html', generateIndexHtml(type));
  
  // Add main entry point
  zip.file('src/main.tsx', generateMainTsx(type));
  
  // Add template files for each source file
  for (const file of bundle.files) {
    const content = await getFileContent(file.sourcePath);
    zip.file(file.exportPath, content);
  }
  
  // Add instructions for UI components
  const uiInstructions = `# UI Components Installation

This configurator requires the following shadcn/ui components:

${bundle.uiComponents.map(c => `- ${c}`).join('\n')}

## Installation

Run this command in your project:

\`\`\`bash
npx shadcn@latest add ${bundle.uiComponents.join(' ')}
\`\`\`

This will install all required UI components to \`src/components/ui/\`.

## Manual Installation

If you prefer to copy from DrivenMN project:

1. Copy each component from \`/components/ui/\` in DrivenMN
2. Paste to \`src/components/ui/\` in this project

Required components:
${bundle.uiComponents.map(c => `- /components/ui/${c}.tsx`).join('\n')}
`;
  
  zip.file('UI_COMPONENTS.md', uiInstructions);
  
  // Generate and download ZIP
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${type}-configurator-module.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}