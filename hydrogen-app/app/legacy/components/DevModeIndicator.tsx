import { useState, useEffect } from 'react';
import { X, Copy, ScanLine, Link as LinkIcon } from 'lucide-react';
import { initConsoleHelpers } from '~/legacy/utils/scanConsoleHelper';
import { copyToClipboard as copyText } from '~/legacy/utils/clipboard';

interface DevModeIndicatorProps {
  currentPage: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

interface HoverInfo {
  element: string;
  component: string;
  filePath: string;
  type: string;
  section?: string;
  linkDest?: string;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
    viewportX: string;
    viewportY: string;
  };
}

export function DevModeIndicator({ currentPage, breadcrumbs = [] }: DevModeIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  // Initialize console helpers
  useEffect(() => {
    initConsoleHelpers();
  }, []);

  // Track hovering elements
  useEffect(() => {
    if (isLocked) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Get component info from data attributes or infer from class names
      // Check the element and its parents for data-component
      const componentName = getClosestComponent(target) || inferComponentName(target);
      const section = target.dataset.section || inferSection(target);
      
      // Check for link destination
      const closestLink = target.closest('a');
      // Check for data-destination or data-link attributes on the element or its parents
      const closestWithDest = target.closest('[data-destination], [data-link]');
      
      const linkDest = 
        closestLink?.getAttribute('href') || 
        closestWithDest?.getAttribute('data-destination') || 
        closestWithDest?.getAttribute('data-link') || 
        undefined;
      
      // Get element position
      const rect = target.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      setHoverInfo({
        element: getElementDescription(target),
        component: componentName,
        filePath: getFilePath(componentName, section),
        type: target.tagName.toLowerCase(),
        section: section,
        linkDest: linkDest,
        position: {
          x: Math.round(rect.left),
          y: Math.round(rect.top),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          viewportX: `${Math.round((rect.left / viewportWidth) * 100)}%`,
          viewportY: `${Math.round((rect.top / viewportHeight) * 100)}%`
        }
      });
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, [isLocked]);

  // Handle Cmd/Ctrl + I to toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'i') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
      
      // Cmd/Ctrl + Click to lock element
      if ((e.metaKey || e.ctrlKey) && e.type === 'click') {
        setIsLocked(!isLocked);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, isLocked]);

  const copyToClipboard = (text: string, label: string) => {
    copyText(text, { label });
  };

  const copyPagePath = () => {
    const path = getPageFilePath(currentPage);
    copyToClipboard(path, 'Page path');
  };

  const copyHoverInfo = () => {
    if (!hoverInfo) return;
    const info = `Element: ${hoverInfo.element}
Component: ${hoverInfo.component}
Section: ${hoverInfo.section || 'N/A'}
File: ${hoverInfo.filePath}
Type: ${hoverInfo.type}
Position: (${hoverInfo.position.x}px, ${hoverInfo.position.y}px)
Size: ${hoverInfo.position.width}x${hoverInfo.position.height}px
Viewport: ${hoverInfo.position.viewportX} from left, ${hoverInfo.position.viewportY} from top`;
    copyToClipboard(info, 'Hover info');
  };

  const FieldRow = ({ label, value, copyValue }: { label: string, value: string, copyValue?: string }) => (
    <div className="flex justify-between items-center group/row hover:bg-white/5 px-2 py-1 rounded -mx-2">
      <span className="text-muted-foreground">{label}:</span>
      <div className="flex items-center">
        <span className="text-foreground text-right truncate max-w-[200px]">{value}</span>
        <button
          onClick={() => copyToClipboard(copyValue || value, label)}
          className="ml-2 p-1 text-muted-foreground hover:text-primary opacity-0 group-hover/row:opacity-100 transition-opacity"
          title={`Copy ${label}`}
        >
          <Copy className="w-3 h-3" />
        </button>
      </div>
    </div>
  );

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay Highlight Box */}
      {hoverInfo && (
        <div
          className="fixed pointer-events-none z-[9998] border-2 border-primary bg-primary/5 transition-all duration-75 ease-out"
          style={{
            left: hoverInfo.position.x,
            top: hoverInfo.position.y,
            width: hoverInfo.position.width,
            height: hoverInfo.position.height,
          }}
        >
          <div className="absolute -top-6 left-0 bg-primary text-primary-foreground text-[10px] px-2 py-0.5 rounded-t font-bold uppercase">
            {hoverInfo.component}
          </div>
        </div>
      )}

      <div className="fixed bottom-6 left-6 z-[9999] w-[440px] bg-background border-2 border-primary rounded-xl shadow-2xl font-mono text-xs">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-primary/30 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="flex items-center gap-3">
            <div className="text-primary">{'</>'}</div>
            <div>
              <div className="text-foreground font-bold">DEV MODE</div>
              <div className="text-muted-foreground text-[10px]">CMD/CTRL + I to toggle</div>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Current Page Section */}
        <div className="px-4 py-3 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <div className="text-warning uppercase tracking-wider font-bold">
              CURRENT PAGE
            </div>
            <button
              onClick={copyPagePath}
              className="flex items-center gap-1 px-2 py-1 bg-primary hover:bg-primary/80 text-primary-foreground rounded text-[10px] transition-colors"
            >
              <Copy className="w-3 h-3" />
              Copy Path
            </button>
          </div>

          <div className="space-y-1">
            <FieldRow label="Page" value={formatPageName(currentPage)} />
            
            {breadcrumbs.length > 0 && (
              <FieldRow 
                label="Breadcrumbs" 
                value={breadcrumbs.map(b => b.label).join(' > ')} 
              />
            )}
            
            <FieldRow 
              label="File Path" 
              value={getPageFilePath(currentPage)} 
            />
          </div>
        </div>

        {/* Hovering Section */}
        {hoverInfo && (
          <div className="px-4 py-3 border-b border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="text-warning uppercase tracking-wider font-bold">
                  HOVERING
                </div>
                <div className="w-2 h-2 bg-warning rounded-full animate-pulse" />
              </div>
              <button
                onClick={copyHoverInfo}
                className="flex items-center gap-1 px-2 py-1 bg-primary hover:bg-primary/80 text-primary-foreground rounded text-[10px] transition-colors"
              >
                <Copy className="w-3 h-3" />
                Copy Info
              </button>
            </div>

            <div className="space-y-1">
              <FieldRow label="Element" value={hoverInfo.element} />
              
              {hoverInfo.section && (
                <FieldRow label="Section" value={hoverInfo.section} />
              )}
              
              <FieldRow label="Component" value={hoverInfo.component} />
              
              <FieldRow label="File Path" value={hoverInfo.filePath} />
              
              <FieldRow label="Type" value={hoverInfo.type} />

              {/* Link Destination */}
              {hoverInfo.linkDest && (
                <div className="mt-2 p-2 bg-primary/10 border border-primary/30 rounded">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5 text-primary text-[10px] font-bold uppercase">
                      <LinkIcon className="w-3 h-3" />
                      LINK DESTINATION
                    </div>
                    <button
                      onClick={() => copyToClipboard(hoverInfo.linkDest!, 'Link destination')}
                      className="p-1 text-primary hover:bg-primary/20 rounded transition-colors"
                    >
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="text-foreground break-all font-medium">
                    {hoverInfo.linkDest}
                  </div>
                </div>
              )}

              {/* UI Location Section */}
              <div className="mt-3 pt-3 border-t border-border">
                <div className="text-warning uppercase tracking-wider font-bold mb-2 text-[10px]">
                  UI LOCATION
                </div>
                
                <div className="space-y-1">
                  <FieldRow label="Position" value={`(${hoverInfo.position.x}px, ${hoverInfo.position.y}px)`} />
                  <FieldRow label="Size" value={`${hoverInfo.position.width}x${hoverInfo.position.height}px`} />
                  <FieldRow label="Viewport" value={`${hoverInfo.position.viewportX}, ${hoverInfo.position.viewportY}`} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="px-4 py-2 bg-[#0A0A0A]/50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500 text-[10px]">
            <input 
              type="checkbox" 
              checked={isLocked} 
              onChange={() => setIsLocked(!isLocked)}
              className="w-3 h-3 accent-primary"
            />
            <span>Lock element tracking (Cmd/Ctrl + Click)</span>
          </div>
          
          <button
            onClick={() => (window as any).scanDOM()}
            className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-medium text-warning hover:text-warning/80 hover:bg-warning/10 rounded transition-colors"
            title="Scan DOM for missing attributes"
          >
            <ScanLine className="w-3 h-3" />
            SCAN DOM
          </button>
        </div>
      </div>
    </>
  );
}

// Helper functions
function getClosestComponent(element: HTMLElement | null): string | null {
  let current = element;
  while (current) {
    if (current.dataset?.component) {
      return current.dataset.component;
    }
    current = current.parentElement;
  }
  return null;
}

function formatPageName(page: string): string {
  const pageNames: Record<string, string> = {
    'home': 'Home Dashboard',
    'services': 'Services Overview',
    'ppf-configurator': 'PPF Configurator',
    'tint-configurator': 'Tint Configurator',
    'tesla-package': 'Tesla Package Configurator',
    'tesla-ppf': 'Tesla Premium PPF',
    'windshield-ppf': 'Windshield Protection Film',
    'tesla-tint': 'Tesla Window Tint',
    'auto-tint': 'Automotive Window Tint',
    'marine-tint': 'Marine Window Tint',
    'residential-tint': 'Home & Office Window Tint',
    'ceramic-coating': 'Ceramic Coating',
    'paint-correction': 'Paint Correction',
    'vinyl-wraps': 'Vinyl Wraps',
    'contact': 'Contact Us',
    'blog': 'Blog & Resources',
    'cart': 'Shopping Cart',
  };
  
  return pageNames[page] || page.split('-').map(w => 
    w.charAt(0).toUpperCase() + w.slice(1)
  ).join(' ');
}

function getPageFilePath(page: string): string {
  const pathMap: Record<string, string> = {
    'home': '/pages/home/index.tsx',
    'services': '/components/ServicePage.tsx',
    'ppf-configurator': '/components/configurators/ppf/PPFConfigurator.tsx',
    'tint-configurator': '/components/configurators/tint/TintConfigurator.tsx',
    'tesla-package': '/components/configurators/tesla/TeslaPackageConfigurator.tsx',
    'tesla-ppf': '/pages/services/ppf/tesla/index.tsx',
    'windshield-ppf': '/pages/services/ppf/windshield/index.tsx',
    'tesla-tint': '/pages/services/tint/tesla/index.tsx',
    'auto-tint': '/pages/services/tint/auto/index.tsx',
    'marine-tint': '/pages/services/tint/marine/index.tsx',
    'residential-tint': '/pages/services/tint/residential-commercial/index.tsx',
    'ceramic-coating': '/pages/services/ceramic-coating/index.tsx',
    'paint-correction': '/pages/services/paint-correction/index.tsx',
    'vinyl-wraps': '/pages/services/vinyl-wraps/index.tsx',
    'contact': '/pages/contact/index.tsx',
    'blog': '/pages/blog/index.tsx',
    'cart': '/components/CartPage.tsx',
  };
  
  return pathMap[page] || '/App.tsx';
}

function inferComponentName(element: HTMLElement): string {
  // Try to infer from class names or parent elements
  const classes = element.className.toString();
  
  if (classes.includes('hero')) return 'Hero Component';
  if (classes.includes('navigation')) return 'Navigation';
  if (classes.includes('footer')) return 'Footer';
  if (classes.includes('configurator')) return 'Configurator';
  if (classes.includes('preview')) return 'Live Preview';
  if (classes.includes('card')) return 'Card Component';
  if (classes.includes('button')) return 'Button';
  if (classes.includes('benefits')) return 'Benefits Component';
  if (classes.includes('features')) return 'Features Component';
  if (classes.includes('testimonial')) return 'Testimonials';
  if (classes.includes('pricing')) return 'Pricing Component';
  if (classes.includes('cta')) return 'CTA Component';
  if (classes.includes('form')) return 'Form Component';
  
  return 'Unknown Component';
}

function inferSection(element: HTMLElement): string | undefined {
  // Try to find parent section
  let current = element.parentElement;
  while (current) {
    if (current.tagName === 'SECTION') {
      const classes = current.className.toString();
      if (classes.includes('hero')) return 'Hero';
      if (classes.includes('benefits')) return 'Benefits';
      if (classes.includes('features')) return 'Features';
      if (classes.includes('pricing')) return 'Pricing';
      if (classes.includes('testimonials')) return 'Testimonials';
      if (classes.includes('cta')) return 'CTA';
      if (classes.includes('packages')) return 'Packages';
      if (classes.includes('process')) return 'Process';
      if (classes.includes('comparison')) return 'Comparison';
      if (classes.includes('coverage')) return 'Coverage';
    }
    current = current.parentElement;
  }
  return undefined;
}

function getElementDescription(element: HTMLElement): string {
  const tag = element.tagName.toLowerCase();
  const id = element.id ? `#${element.id}` : '';
  const classes = element.className ? `.${element.className.toString().split(' ')[0]}` : '';
  
  return `${tag}${id}${classes}`;
}

function getFilePath(componentName: string, section?: string): string {
  if (section) {
    return `/sections/${section}.tsx`;
  }
  
  return `/components/${componentName.replace(' ', '')}.tsx`;
}