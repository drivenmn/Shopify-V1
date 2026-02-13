import { toast } from 'sonner@2.0.3';

/**
 * Initializes the Console Scanner Helper
 * Exposes window.scanDOM() and window.clearScan()
 */
export function initConsoleHelpers() {
  if (typeof window === 'undefined') return;

  // Expose to window
  (window as any).scanDOM = scanDOM;
  (window as any).clearScan = clearHighlights;
  
  // Log instructions only once
  if (!(window as any)._scannerInitialized) {
    console.log(
      '%c DOM Scanner Loaded ', 
      'background: #017974; color: white; padding: 4px; border-radius: 4px; font-weight: bold;'
    );
    console.log('Run %cscanDOM()%c to find missing data-component/data-section attributes.', 'color: #00ff00; font-family: monospace;', '');
    (window as any)._scannerInitialized = true;
  }
}

interface ScanIssue {
  element: HTMLElement;
  suggestion: string;
  type: 'component' | 'section';
}

function scanDOM(options: { verbose?: boolean } = {}) {
  clearHighlights();
  
  const issues: ScanIssue[] = [];
  const { verbose = true } = options;
  
  // 1. Scan Semantic Sections
  const sections = document.querySelectorAll('section, header, footer, nav, main');
  sections.forEach(el => {
    const htmlEl = el as HTMLElement;
    // Skip if hidden or very small
    if (htmlEl.offsetParent === null || htmlEl.offsetHeight < 10) return;
    
    // Check if it's already tagged
    if (!htmlEl.dataset.section && !htmlEl.dataset.component) {
      issues.push({
        element: htmlEl,
        suggestion: inferName(htmlEl, 'section'),
        type: 'section'
      });
    }
  });
  
  // 2. Scan Potential Components (Divs inside Main/Section)
  // Heuristic: Direct children of structural elements often need component tags
  const potentialComponents = document.querySelectorAll('main > div, section > div');
  potentialComponents.forEach(el => {
    const htmlEl = el as HTMLElement;
    if (htmlEl.offsetParent === null || htmlEl.offsetHeight < 20) return;
    
    if (htmlEl.tagName === 'DIV' && !htmlEl.dataset.component) {
       issues.push({
         element: htmlEl,
         suggestion: inferName(htmlEl, 'component'),
         type: 'component'
       });
    }
  });

  // 3. Report Results
  if (verbose) {
    console.group('🔍 DOM Scan Results');
    console.log(`Found ${issues.length} elements missing attributes.`);
  }
  
  issues.forEach((issue, index) => {
    highlightElement(issue.element, index + 1, issue.suggestion);
    
    if (verbose) {
      const attr = issue.type === 'section' ? 'data-section' : 'data-component';
      const codeSnippet = `<${issue.element.tagName.toLowerCase()} ${attr}="${issue.suggestion}" ...>`;
      
      console.log(`%c${index + 1}. Missing ${attr}`, 'font-weight:bold; color: #ff4444;');
      console.log(`   Element:`, issue.element);
      console.log(`   Suggestion: ${issue.suggestion}`);
      console.log(`   Code fix: %c${codeSnippet}`, 'font-family: monospace; background: #eee; padding: 2px; border-radius: 2px;');
    }
  });
  
  if (issues.length > 0) {
    toast.warning(`Scanner found ${issues.length} missing attributes`, {
      description: 'Check console for details and auto-fix suggestions',
      duration: 4000,
      action: {
        label: 'Clear',
        onClick: () => clearHighlights()
      }
    });
  } else {
    toast.success('Scan Complete: No missing attributes found!', {
      description: 'All structural elements are properly tagged.'
    });
  }

  if (verbose) console.groupEnd();
  return issues;
}

function inferName(el: HTMLElement, type: 'section' | 'component'): string {
  const classes = el.className.toString().toLowerCase();
  const text = el.innerText.slice(0, 100).toLowerCase();
  const id = el.id;

  // Try ID
  if (id) return toPascalCase(id);

  // Try Classes
  if (classes.includes('hero')) return 'Hero';
  if (classes.includes('nav')) return 'Navigation';
  if (classes.includes('foot')) return 'Footer';
  if (classes.includes('header')) return 'Header';
  if (classes.includes('benefit')) return 'Benefits';
  if (classes.includes('feature')) return 'Features';
  if (classes.includes('cta') || classes.includes('call')) return 'CTA';
  if (classes.includes('form')) return 'ContactForm';
  if (classes.includes('price') || classes.includes('pricing')) return 'Pricing';
  if (classes.includes('testi')) return 'Testimonials';
  if (classes.includes('faq')) return 'FAQ';
  if (classes.includes('gallery')) return 'Gallery';
  if (classes.includes('grid')) return 'Grid';
  
  // Try Content
  if (text.includes('copyright') || text.includes('rights reserved')) return 'Footer';
  if (text.includes('contact us')) return 'Contact';

  return `Unknown${type === 'section' ? 'Section' : 'Component'}`;
}

function toPascalCase(str: string): string {
  return str.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text: string): string {
  return text.replace(/-/, "").toUpperCase();
}

function highlightElement(el: HTMLElement, index: number, suggestion: string) {
  el.setAttribute('data-scan-missing', 'true');
  
  // Create overlay
  const rect = el.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  const overlay = document.createElement('div');
  overlay.className = 'scan-overlay';
  overlay.style.cssText = `
    position: absolute;
    left: ${rect.left + scrollLeft}px;
    top: ${rect.top + scrollTop}px;
    width: ${rect.width}px;
    height: ${rect.height}px;
    border: 2px dashed #ff4444;
    background: rgba(255, 68, 68, 0.05);
    pointer-events: none;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  const badge = document.createElement('div');
  badge.innerHTML = `<span style="opacity:0.7">#${index} Missing Attr:</span> <b>${suggestion}</b>`;
  badge.style.cssText = `
    background: #ff4444;
    color: white;
    padding: 4px 8px;
    font-size: 12px;
    font-family: sans-serif;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    pointer-events: auto;
    cursor: help;
  `;
  badge.title = `Click element to select in Elements panel.\nSuggestion: add data-${el.tagName === 'SECTION' ? 'section' : 'component'}="${suggestion}"`;
  
  // Position badge at top-left of element
  const badgeContainer = document.createElement('div');
  badgeContainer.style.cssText = `
    position: absolute;
    top: -12px;
    left: 10px;
  `;
  badgeContainer.appendChild(badge);
  overlay.appendChild(badgeContainer);
  
  document.body.appendChild(overlay);
}

function clearHighlights() {
  document.querySelectorAll('.scan-overlay').forEach(el => el.remove());
  document.querySelectorAll('[data-scan-missing]').forEach(el => {
    el.removeAttribute('data-scan-missing');
  });
}
