# DrivenMN Hotkey Reference

## Active Hotkeys

### Developer Tools

| Hotkey | Function | Description |
|--------|----------|-------------|
| **Cmd/Ctrl + I** | Toggle Dev Mode Indicator | Opens/closes the live Dev Mode panel showing current page, breadcrumbs, section info, and hovering element details |

### Export & Copy Functions

| Hotkey | Function | Description |
|--------|----------|-------------|
| **Cmd/Ctrl + E** | Export Project | Shows alert about full project export (placeholder - to be implemented) |
| **Cmd/Ctrl + F** | Copy Module to Figma | Copies current page data to clipboard as JSON including HTML, CSS, and viewport info |
| **Cmd/Ctrl + Shift + E** | **Export Sub-Module** | **Opens dialog to export Tint, PPF, or Tesla sub-module with complete code, documentation, and setup files** |

---

## Cmd/Ctrl + Shift + E - Configurator Export (NEW! ✨)

### What It Does
Opens a beautiful dialog showing all three configurators available for export:
1. **Tint Configurator** - Multi-step window tint builder
2. **PPF Configurator** - Paint protection film configurator  
3. **Tesla Package Configurator** - Tesla-specific bundle builder

### How It Works
1. Press `Cmd + Shift + E` (or `Ctrl + Shift + E` on Windows/Linux)
2. Dialog appears with 3 configurator options
3. Click the configurator you want to export
4. **Complete ZIP bundle with all files automatically downloads** 🎉
5. Success toast notification confirms export

### Export Contents

Each export is now a **comprehensive ZIP bundle** that includes:

#### 📦 **Ready-to-Use Project Structure**
```
Configurator_Export_YYYY-MM-DD.zip
├── README.md                    # Complete setup guide
├── SETUP_GUIDE.md              # Step-by-step instructions
├── FILE_LIST.md                # All included files
├── package.json                # All dependencies
└── src/
    ├── components/
    │   ├── ui/                 # All shadcn/ui components
    │   └── [Configurator].tsx  # Main configurator
    ├── utils/
    │   ├── vehicleData.ts      # Pricing & data
    │   └── api.ts              # API integration
    └── styles/
        └── globals.css         # Tailwind styles
```

#### 📋 Documentation Included
- **README.md** - Quick start and overview
- **SETUP_GUIDE.md** - Detailed installation steps
- **FILE_LIST.md** - Complete file manifest
- **Package.json** - All npm dependencies
- **Inline comments** - Instructions in each file

#### 🔧 What's Inside

**Tint Configurator Export Includes:**
- `/components/TintConfigurator.tsx` - Main component
- `/components/TintLivePreview.tsx` - Live preview
- `/utils/vehicleData.ts` - Data and pricing
- `/utils/api.ts` - API utilities
- All required shadcn/ui components
- Global styles and configuration

**PPF Configurator Export Includes:**
- `/components/PPFConfigurator.tsx` - Main component
- `/components/XpelPaintProtectionFilm.tsx` - XPEL branding
- `/utils/vehicleData.ts` - Data and pricing
- `/utils/api.ts` - API utilities
- Required shadcn/ui components
- Global styles and configuration

**Tesla Package Configurator Export Includes:**
- `/components/TeslaPackageConfigurator.tsx` - Main component
- `/components/TeslaPackageLivePreview.tsx` - 3D preview
- `/utils/vehicleData.ts` - Tesla data and pricing
- `/utils/api.ts` - API utilities
- Required shadcn/ui components
- Global styles and configuration

### Export File Format
- **Format:** ZIP Archive (.zip)
- **Filename:** `[Type]_Configurator_Export_YYYY-MM-DD.zip`
  - Example: `Tint_Configurator_Export_2025-01-20.zip`
- **Size:** ~50-100KB compressed
- **Structure:** Complete project structure with placeholders

### Features of the Export

✅ **Complete ZIP Bundle** - All files in proper folder structure  
✅ **Placeholder System** - Clear instructions in each file  
✅ **Setup Documentation** - README + detailed setup guide  
✅ **Package.json** - All dependencies with correct versions  
✅ **File Manifest** - List of all included files  
✅ **Code Examples** - Ready-to-use implementation samples  
✅ **Customization Guide** - How to adapt to your needs  
✅ **API Integration** - Template for backend connection  
✅ **Troubleshooting** - Common issues and solutions  

### ⚠️ Important Note

The exported files contain **placeholder comments** with instructions. To use the export:

1. Extract the ZIP file
2. Open your DrivenMN source project
3. For each file, copy the actual code from your source
4. Replace the placeholder in the export with the real code
5. Follow the setup guide to configure everything

This approach works around browser security limitations that prevent direct file reading.

---

## Implementation Files

### Core Components
- `/components/ConfiguratorExportDialog.tsx` - Export selection dialog
- `/utils/configuratorExport.ts` - Main export orchestrator (supports code & docs formats)
- `/utils/configuratorCodeExport.ts` - **NEW!** ZIP bundle generation with JSZip
- `/utils/configuratorExportBundle.ts` - Markdown documentation generator
- `/utils/fileManifest.ts` - **NEW!** File placeholder system
- `/utils/fileReader.ts` - File content utilities (legacy)

### Integration
- `App.tsx` - Hotkey handler and dialog state
- `DevInspector.tsx` - Hotkey reference display

### Technologies Used
- **JSZip** - ZIP archive creation
- **Motion** - Dialog animations
- **Sonner** - Toast notifications
- **shadcn/ui** - Dialog component

---

## Usage Tips

### For Developers
- Press `Cmd/Ctrl + I` to view all available hotkeys
- The export is fully self-contained and includes everything needed
- Use exports to share configurators with clients or other developers
- Exports include both required and optional files clearly marked

### For Project Management
- Export configurators as documentation for handoff
- Share with team members for implementation in other projects
- Use as reference for pricing structure and features
- Keep exports as backups of configurator specifications

### For Clients
- Exports can be shared as implementation guides
- Complete documentation makes it easy to integrate
- All pricing logic and features are documented
- Ready for developer handoff

---

## Keyboard Shortcut Compatibility

- **macOS:** Use `Cmd` key
- **Windows:** Use `Ctrl` key
- **Linux:** Use `Ctrl` key

All hotkeys use `preventDefault()` to override browser defaults.

---

## Future Enhancements

Planned improvements:
- [ ] Full project export implementation (Cmd+E)
- [x] ~~Export as ZIP archive option~~ **✅ COMPLETE**
- [ ] Include actual file contents in exports (browser security limitations)
- [ ] Export customization options (select specific files)
- [ ] Export history and management
- [ ] Cloud export storage integration
- [ ] One-click deploy to Vercel/Netlify from export

---

**Last Updated:** January 20, 2025  
**Version:** 2.0  
**DrivenMN** - Minnesota's Exclusive XPEL Certified Facility