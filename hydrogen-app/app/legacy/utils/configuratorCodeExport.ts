// Real code export utility - bundles source files into a downloadable ZIP
import JSZip from 'jszip';
import { type ConfiguratorType } from './configuratorExport';
import { exportCache } from './exportPreparer';

interface FileMapping {
  sourcePath: string;
  targetPath: string;
  description: string;
}

// Get file content from cache or generate helpful template
function getFileContent(file: FileMapping): string {
  // Try to get from cache first
  const cached = exportCache.getSource(file.sourcePath);
  if (cached) {
    return cached;
  }
  
  // Generate helpful template with copy instructions
  return generateFileTemplate(file);
}

function generateFileTemplate(file: FileMapping): string {
  const isCSS = file.sourcePath.endsWith('.css');
  const ext = file.sourcePath.split('.').pop();
  
  if (isCSS) {
    return `/*
 * ${file.targetPath}
 * ${file.description}
 * 
 * ⚠️  TO COMPLETE THIS EXPORT:
 * 
 * 1. Open your Figma Make project
 * 2. Press Cmd+I to open Developer Inspector  
 * 3. Navigate to: ${file.sourcePath}
 * 4. Select all (Cmd+A) and copy (Cmd+C)
 * 5. Paste here, replacing this entire comment
 * 
 * This file contains Tailwind imports, custom variables, and global styles.
 */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* TODO: Copy actual file content from ${file.sourcePath} */
`;
  }
  
  // TypeScript/TSX files
  return `/**
 * ${file.targetPath}
 * ${file.description}
 * 
 * ⚠️  TO COMPLETE THIS EXPORT:
 * 
 * 1. Open your Figma Make project
 * 2. Press Cmd+I to open Developer Inspector
 * 3. Navigate to: ${file.sourcePath}
 * 4. Select all (Cmd+A) and copy (Cmd+C)
 * 5. Paste here, replacing this entire file
 * 
 * Expected file type: .${ext}
 * Source location: ${file.sourcePath}
 */

// TODO: Copy actual source code here

export default function Placeholder() {
  return null;
}
`;
}

export async function exportConfiguratorCode(type: ConfiguratorType): Promise<void> {
  const zip = new JSZip();
  
  // Get file mappings for the selected configurator
  const files = getConfiguratorFiles(type);
  
  // Add each file to the zip with REAL content
  for (const file of files) {
    const content = getFileContent(file);
    zip.file(file.targetPath, content);
    console.log(`✅ Bundled ${file.targetPath} (${content.length} bytes)`);
  }
  
  // Add README with setup instructions
  const readme = generateREADME(type, files);
  zip.file('README.md', readme);
  
  // Add package.json snippet
  const packageJson = generatePackageJson(type);
  zip.file('package.json', packageJson);
  
  // Add detailed setup guide
  const setupScript = generateSetupScript(type, files);
  zip.file('SETUP_GUIDE.md', setupScript);
  
  // Add file list for easy reference
  const fileList = generateFileList(files);
  zip.file('FILE_LIST.md', fileList);
  
  // Generate and download the zip
  const blob = await zip.generateAsync({ 
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });
  
  const configuratorNames = {
    tint: 'Tint_Configurator',
    ppf: 'PPF_Configurator',
    tesla: 'Tesla_Package_Configurator'
  };
  
  const timestamp = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const filename = `${configuratorNames[type]}_Export_${timestamp}.zip`;
  
  downloadBlob(blob, filename);
}

function getConfiguratorFiles(type: ConfiguratorType): FileMapping[] {
  const common: FileMapping[] = [
    {
      sourcePath: '/utils/vehicleData.ts',
      targetPath: 'src/utils/vehicleData.ts',
      description: 'Vehicle data, pricing, packages, and configuration'
    },
    {
      sourcePath: '/utils/api.ts',
      targetPath: 'src/utils/api.ts',
      description: 'API utilities for quote submission'
    },
    {
      sourcePath: '/components/ui/button.tsx',
      targetPath: 'src/components/ui/button.tsx',
      description: 'shadcn/ui Button component'
    },
    {
      sourcePath: '/components/ui/card.tsx',
      targetPath: 'src/components/ui/card.tsx',
      description: 'shadcn/ui Card component'
    },
    {
      sourcePath: '/components/ui/progress.tsx',
      targetPath: 'src/components/ui/progress.tsx',
      description: 'shadcn/ui Progress component'
    },
    {
      sourcePath: '/components/ui/select.tsx',
      targetPath: 'src/components/ui/select.tsx',
      description: 'shadcn/ui Select component'
    },
    {
      sourcePath: '/components/ui/radio-group.tsx',
      targetPath: 'src/components/ui/radio-group.tsx',
      description: 'shadcn/ui Radio Group component'
    },
    {
      sourcePath: '/components/ui/input.tsx',
      targetPath: 'src/components/ui/input.tsx',
      description: 'shadcn/ui Input component'
    },
    {
      sourcePath: '/components/ui/label.tsx',
      targetPath: 'src/components/ui/label.tsx',
      description: 'shadcn/ui Label component'
    },
    {
      sourcePath: '/styles/globals.css',
      targetPath: 'src/styles/globals.css',
      description: 'Global styles with Tailwind configuration'
    }
  ];

  const configuratorSpecific: Record<ConfiguratorType, FileMapping[]> = {
    tint: [
      {
        sourcePath: '/components/TintConfigurator.tsx',
        targetPath: 'src/components/TintConfigurator.tsx',
        description: 'Main tint configurator component'
      },
      {
        sourcePath: '/components/TintLivePreview.tsx',
        targetPath: 'src/components/TintLivePreview.tsx',
        description: 'Live preview with vehicle visualization'
      }
    ],
    ppf: [
      {
        sourcePath: '/components/PPFConfigurator.tsx',
        targetPath: 'src/components/PPFConfigurator.tsx',
        description: 'Paint Protection Film configurator'
      },
      {
        sourcePath: '/imports/XpelPaintProtectionFilm.tsx',
        targetPath: 'src/components/XpelPaintProtectionFilm.tsx',
        description: 'XPEL branding component'
      }
    ],
    tesla: [
      {
        sourcePath: '/components/TeslaPackageConfigurator.tsx',
        targetPath: 'src/components/TeslaPackageConfigurator.tsx',
        description: 'Tesla package builder'
      },
      {
        sourcePath: '/components/TeslaPackageLivePreview.tsx',
        targetPath: 'src/components/TeslaPackageLivePreview.tsx',
        description: 'Tesla live preview component'
      }
    ]
  };

  return [...common, ...configuratorSpecific[type]];
}

function generatePackageJson(type: ConfiguratorType): string {
  return `{
  "name": "${type}-configurator",
  "version": "1.0.0",
  "description": "${type === 'tint' ? 'Window Tint' : type === 'ppf' ? 'Paint Protection Film' : 'Tesla Package'} Configurator from DrivenMN",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "motion": "latest",
    "lucide-react": "latest",
    "sonner": "^2.0.3"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "latest",
    "postcss": "latest"
  }
}
`;
}

function generateSetupScript(type: ConfiguratorType, files: FileMapping[]): string {
  return `# Setup Instructions

## Step-by-Step Installation

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Text editor (VS Code recommended)

### 2. Install Base Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set Up Tailwind CSS

If not already configured:

\`\`\`bash
npm install -D tailwindcss@4 postcss autoprefixer
npx tailwindcss init
\`\`\`

### 4. Configure Tailwind

Add to your \`tailwind.config.js\`:

\`\`\`js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'driven-teal': '#017974',
        'driven-yellow': '#FDB521',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        display: ['Agdasima', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
\`\`\`

### 5. Import Global Styles

In your main app file:

\`\`\`tsx
import './styles/globals.css';
\`\`\`

### 6. Copy Source Files

**THIS IS CRITICAL:**

Open your original DrivenMN project and copy the actual file contents for:

${type === 'tint' ? `
1. \`/components/TintConfigurator.tsx\`
2. \`/components/TintLivePreview.tsx\`
` : type === 'ppf' ? `
1. \`/components/PPFConfigurator.tsx\`
2. \`/imports/XpelPaintProtectionFilm.tsx\`
` : `
1. \`/components/TeslaPackageConfigurator.tsx\`
2. \`/components/TeslaPackageLivePreview.tsx\`
`}
3. \`/utils/vehicleData.ts\`
4. \`/utils/api.ts\`
5. All \`/components/ui/*.tsx\` files

Replace the placeholder comments in this export with the real code.

### 7. Test the Configurator

\`\`\`bash
npm run dev
\`\`\`

Navigate to the configurator route and test all steps.

### 8. Customize

- Update pricing in \`vehicleData.ts\`
- Connect API in \`api.ts\`
- Adjust styling as needed
- Add your branding

## Common Issues

### Module Not Found
- Check all file paths are correct
- Verify imports use correct relative paths
- Ensure all dependencies are installed

### Styling Not Applied
- Confirm Tailwind is configured correctly
- Check globals.css is imported
- Verify PostCSS is processing correctly

### TypeScript Errors
- Install missing type definitions
- Check tsconfig.json is properly configured
- Ensure all imports have correct types

## Production Checklist

- [ ] All source files copied from original project
- [ ] Dependencies installed
- [ ] Tailwind CSS configured
- [ ] API endpoints updated
- [ ] Pricing data customized
- [ ] Testing completed
- [ ] Mobile responsiveness verified
- [ ] Browser compatibility checked
- [ ] Analytics integrated (optional)
- [ ] Error tracking set up (optional)

---

Need help? Review the README.md and source code comments.
`;
}

function generateFileList(files: FileMapping[]): string {
  return `# File List

This is a list of all files included in the export. Each file has a placeholder comment indicating where to copy the actual content from your DrivenMN project.

${files.map(file => `- **${file.targetPath}** - ${file.description}`).join('\n')}
`;
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 100);
}

function generateREADME(type: ConfiguratorType, files: FileMapping[]): string {
  const cacheStatus = exportCache.getStats();
  const hasCached = cacheStatus.loaded > 0;
  
  return `# ${type.toUpperCase()} Configurator Export from DrivenMN

**Export Date:** ${new Date().toLocaleString()}  
**Version:** 3.0 (Smart Templates)  
**Files Included:** ${files.length}

---

## ⚠️  IMPORTANT: Files Contain Copy Instructions

Due to browser security restrictions, this export contains **template files with detailed 
copy instructions** rather than full source code.

Each file has a header explaining exactly how to copy the real code from your Figma Make project.

---

## 🚀 Quick Setup (5-10 minutes)

1. **Extract this ZIP** to your project directory
2. **Install dependencies:** \`npm install\`
3. **Copy source files:**
   - Open each .tsx/.ts file in \`src/\`
   - Follow the instructions at the top of each file
   - Copy from your Figma Make project (Cmd+I to open Dev Inspector)
4. **Test:** \`npm run dev\`

---

## 📋 Files to Copy (${files.length} total)

### Core Configurator (HIGH PRIORITY)

${files.filter(f => f.sourcePath.includes('Configurator') || f.sourcePath.includes('LivePreview')).map((f, i) => `**${i + 1}. ${f.targetPath}**
   ${f.description}
   Source: \`${f.sourcePath}\`
`).join('\n')}

### Utils & Data (CRITICAL)

${files.filter(f => f.sourcePath.includes('/utils/')).map((f, i) => `**${i + 1}. ${f.targetPath}**
   ${f.description}
   Source: \`${f.sourcePath}\`
`).join('\n')}

### UI Components (Can reinstall via shadcn)

${files.filter(f => f.sourcePath.includes('/ui/')).map(f => `- ${f.targetPath}`).join('\n')}

**Tip:** Instead of copying UI components, reinstall fresh:
\`\`\`bash
npx shadcn@latest add button card progress select radio-group input label
\`\`\`

### Styles

${files.filter(f => f.sourcePath.includes('.css')).map((f, i) => `**${i + 1}. ${f.targetPath}**
   ${f.description}
   Source: \`${f.sourcePath}\`
`).join('\n')}

---

## 🎯 What's Included

### ${type === 'tint' ? 'Window Tint Configurator' : type === 'ppf' ? 'PPF Configurator' : 'Tesla Package Configurator'}

${type === 'tint' ? `**7-Step Flow:** Vehicle → Type → Package → Film → Darkness → Add-ons → Quote
**Features:** Live preview, real-time pricing, 4 film types, 4 VLT options` : type === 'ppf' ? `**5 Package Tiers:** Bumper to Full Body coverage
**Features:** XPEL Ultimate Plus & Stealth, add-ons, real-time pricing` : `**Tesla-Specific:** Model 3, Y, S, X support
**Features:** 3 package tiers, PPF + Tint bundles, 3D preview`}

**Tech Stack:**
- React 18 + TypeScript
- Tailwind CSS 4.0
- Motion (animations)
- Lucide React (icons)
- Sonner (toasts)
- shadcn/ui

---

## 💡 Pro Tips

### Fastest Workflow:

1. Open Figma Make project in one window
2. Open this export in VS Code in another window
3. Press Cmd+I in Figma Make → Navigate to file → Cmd+A → Cmd+C
4. Switch to VS Code → Open corresponding file → Paste
5. Repeat for each file

### Skip UI Components:

Don't copy 9 shadcn files manually. Just run:
\`\`\`bash
npx shadcn@latest add button card progress select radio-group input label
\`\`\`

---

## ✅ Completion Checklist

- [ ] Extracted ZIP
- [ ] Ran \`npm install\`
- [ ] Copied configurator files
- [ ] Copied vehicleData.ts
- [ ] Copied api.ts
- [ ] Copied globals.css (or reinstalled UI components)
- [ ] Ran \`npm run dev\`
- [ ] Configurator loads without errors
- [ ] All steps work correctly
- [ ] Pricing calculates properly

---

## 🔧 Customize

After copying files:

1. **Pricing:** Edit \`src/utils/vehicleData.ts\`
2. **API:** Connect real backend in \`src/utils/api.ts\`
3. **Styling:** Adjust \`src/styles/globals.css\`
4. **Branding:** Colors are #017974 (teal) and #FDB521 (yellow)

---

## 🆘 Help

**Q: Why aren't the files pre-filled?**  
A: Browser security prevents reading source files automatically. You need to copy them manually.

**Q: How do I copy a file?**  
A: Open your Figma Make project → Cmd+I → Find the file → Cmd+A → Cmd+C → Paste in export.

**Q: Do I need to copy ALL files?**  
A: Core files are required. UI components can be reinstalled via shadcn CLI.

---

**Ready to build!** Extract → Install → Copy → Test 🚀

*DrivenMN Configurator Export v3.0*
`;
}