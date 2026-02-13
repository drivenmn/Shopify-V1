import {useNavigate} from '@remix-run/react';
import {useCallback} from 'react';

/**
 * Maps the old SPA page keys (used in onNavigate) to Remix routes.
 * This allows existing components to work without full refactoring.
 */
const PAGE_TO_ROUTE: Record<string, string> = {
  home: '/',
  
  // Services - Protection Film
  'xpel-protection-film': '/services/xpel-protection-film',
  'paint-protection-film': '/services/paint-protection-film',
  ppf: '/services/paint-protection-film',
  'windshield-protection-film': '/services/windshield-protection-film',
  'headlight-protection-film': '/services/headlight-protection-film',
  'interior-protection-film': '/services/interior-protection-film',

  // Services - Window Tint
  'xpel-prime-window-tint': '/services/xpel-prime-window-tint',
  'auto-window-tint': '/services/auto-window-tint',
  'marine-window-tint': '/services/marine-window-tint',
  'home-office-window-tint': '/services/home-office-window-tint',

  // Services - Vehicle Wraps
  'vehicle-wraps': '/services/vehicle-wraps',
  'color-change-vehicle-wrap': '/services/color-change-vehicle-wrap',
  'graphic-printed-wrap': '/services/graphic-printed-wrap',
  'fleet-graphic-wrap': '/services/fleet-graphic-wrap',
  'accent-vinyl-wrap': '/services/accent-vinyl-wrap',

  // Services - Ceramic Coating
  'xpel-fusion-ceramic-coating': '/services/xpel-fusion-ceramic-coating',
  'automotive-ceramic-coating': '/services/automotive-ceramic-coating',
  'marine-ceramic-coating': '/services/marine-ceramic-coating',

  // Services - Correction & Detail
  'paint-correction-detail': '/services/paint-correction-detail',
  'paint-correction': '/services/paint-correction',
  'exterior-detail': '/services/exterior-detail',
  'full-detail': '/services/full-detail',

  // By Make
  tesla: '/tesla',
  'tesla-ppf': '/tesla/ppf',
  'tesla-tint': '/tesla/tint',
  'tesla-package': '/tesla/package',
  rivian: '/rivian',

  // Standalone
  about: '/about',
  contact: '/contact',
  shop: '/shop',
  blog: '/blogs/news',
  services: '/services/xpel-protection-film',

  // Configurators
  'ppf-configurator': '/ppf-configurator',
  'tint-configurator': '/tint-configurator',
  'color-ppf-visualizer': '/color-ppf-visualizer',
  'vehicle-configurator': '/vehicle-configurator',
};

/**
 * Returns an `onNavigate` function compatible with the existing SPA components.
 * Maps old page-key strings to actual Remix routes and uses `useNavigate()`.
 */
export function useOnNavigate() {
  const navigate = useNavigate();

  const onNavigate = useCallback(
    (page: string) => {
      // Handle blog post deep links
      if (page.startsWith('blog/')) {
        const slug = page.split('/')[1];
        navigate(`/blogs/news/${slug}`);
        return;
      }

      const route = PAGE_TO_ROUTE[page];
      if (route) {
        navigate(route);
      } else {
        // Fallback: if it looks like a path already, use it directly
        if (page.startsWith('/')) {
          navigate(page);
        } else {
          console.warn(`[useOnNavigate] Unknown page key: "${page}", navigating to /`);
          navigate('/');
        }
      }
    },
    [navigate],
  );

  return onNavigate;
}
