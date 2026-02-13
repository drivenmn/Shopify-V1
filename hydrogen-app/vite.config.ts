import { defineConfig } from 'vite';
import { hydrogen } from '@shopify/hydrogen/vite';
import { oxygen } from '@shopify/mini-oxygen/vite';
import { vitePlugin as remix } from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      // Version-pinned aliases from the original Figma-exported SPA
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      'react-hook-form@7.55.0': 'react-hook-form',
      'react-day-picker@8.10.1': 'react-day-picker',
      'lucide-react@0.487.0': 'lucide-react',
      'input-otp@1.4.2': 'input-otp',
      'embla-carousel-react@8.6.0': 'embla-carousel-react',
      'cmdk@1.1.1': 'cmdk',
      'class-variance-authority@0.7.1': 'class-variance-authority',
      '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
      '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
      '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
      '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
      '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
      '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
      '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
      '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
      '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
      '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
      '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
      '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
      '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
      '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
      '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
      '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
      '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
      '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
      '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
      '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
      '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
      // Figma asset aliases
      'figma:asset/d0ee59616032f1602fbb40ab7050a284d028d7d9.png': path.resolve(
        __dirname,
        './app/assets/d0ee59616032f1602fbb40ab7050a284d028d7d9.png',
      ),
      'figma:asset/9163b60b2689dae011479294cab99fadc2483211.png': path.resolve(
        __dirname,
        './app/assets/9163b60b2689dae011479294cab99fadc2483211.png',
      ),
      'figma:asset/1519557d6f87c8fdad43e0e63353e72148f221bb.png': path.resolve(
        __dirname,
        './app/assets/1519557d6f87c8fdad43e0e63353e72148f221bb.png',
      ),
      'figma:asset/0a3bd25dffed8e38a93b0538ff25f05d8318ec1b.png': path.resolve(
        __dirname,
        './app/assets/0a3bd25dffed8e38a93b0538ff25f05d8318ec1b.png',
      ),
      'figma:asset/cd2a39e37e4bb4e08713faa5dc4d9383174cce54.png': path.resolve(
        __dirname,
        './app/assets/cd2a39e37e4bb4e08713faa5dc4d9383174cce54.png',
      ),
      'figma:asset/989afde7bba952b2894d08c399c2354b7197ddcd.png': path.resolve(
        __dirname,
        './app/assets/989afde7bba952b2894d08c399c2354b7197ddcd.png',
      ),
      'figma:asset/6f2dc65f01fde49b06e4bb9f70dbeecf443dce72.png': path.resolve(
        __dirname,
        './app/assets/6f2dc65f01fde49b06e4bb9f70dbeecf443dce72.png',
      ),
    },
  },
  ssr: {
    optimizeDeps: {
      include: ['typographic-base'],
    },
  },
  optimizeDeps: {
    include: [
      'clsx',
      '@headlessui/react',
      'typographic-base',
      'react-intersection-observer',
      'react-use/esm/useScroll',
      'react-use/esm/useDebounce',
      'react-use/esm/useWindowScroll',
    ],
  },
  build: {
    assetsInlineLimit: 0,
  },
});
