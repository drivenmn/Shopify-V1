import {
  defer,
  type LinksFunction,
  type LoaderFunctionArgs,
  type AppLoadContext,
  type MetaArgs,
} from '@shopify/remix-oxygen';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
  useRouteError,
  useLocation,
  type ShouldRevalidateFunction,
} from '@remix-run/react';
import {
  useNonce,
  Analytics,
  getShopAnalytics,
  getSeoMeta,
  type SeoConfig,
} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';

import { GenericError } from '~/components/GenericError';
import { NotFound } from '~/components/NotFound';
import favicon from '~/assets/favicon.svg';
import { seoPayload } from '~/lib/seo.server';
import styles from '~/styles/app.css?url';

import { DEFAULT_LOCALE, parseMenu } from './lib/utils';

// DrivenMN custom components
import { Navigation } from '~/legacy/components/Navigation';
import { Footer } from '~/legacy/components/Footer';
import { FloatingActions } from '~/legacy/components/FloatingActions';
import { ThemeProvider } from '~/legacy/utils/themeContext';
import { CartProvider } from '~/legacy/utils/cartContext';
import { useOnNavigate } from '~/lib/useNavigateCompat';

export type RootLoader = typeof loader;

export const shouldRevalidate: ShouldRevalidateFunction = ({
  formMethod,
  currentUrl,
  nextUrl,
}) => {
  if (formMethod && formMethod !== 'GET') return true;
  if (currentUrl.toString() === nextUrl.toString()) return true;
  return false;
};

export const links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://cdn.shopify.com' },
    { rel: 'preconnect', href: 'https://shop.app' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous' as const,
    },
    { rel: 'icon', type: 'image/svg+xml', href: favicon },
  ];
};

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return defer({ ...deferredData, ...criticalData });
}

async function loadCriticalData({ request, context }: LoaderFunctionArgs) {
  const [layout] = await Promise.all([getLayoutData(context)]);
  const seo = seoPayload.root({ shop: layout.shop, url: request.url });
  const { storefront, env } = context;

  return {
    layout,
    seo,
    shop: getShopAnalytics({
      storefront,
      publicStorefrontId: env.PUBLIC_STOREFRONT_ID,
    }),
    consent: {
      checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN,
      storefrontAccessToken: env.PUBLIC_STOREFRONT_API_TOKEN,
      withPrivacyBanner: true,
    },
    selectedLocale: storefront.i18n,
  };
}

function loadDeferredData({ context }: LoaderFunctionArgs) {
  const { cart, customerAccount } = context;
  return {
    isLoggedIn: customerAccount.isLoggedIn(),
    cart: cart.get(),
  };
}

export const meta = ({ data }: MetaArgs<typeof loader>) => {
  return getSeoMeta(data!.seo as SeoConfig);
};

/**
 * DrivenMN App Shell using our custom Navigation + Footer.
 * Wraps with ThemeProvider, CartProvider, and Hydrogen Analytics.
 */
function DrivenMNLayout({ children }: { children?: React.ReactNode }) {
  const onNavigate = useOnNavigate();
  const location = useLocation();

  // Derive the "page key" from the current route for the nav active state
  const currentPage = derivePageKey(location.pathname);

  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Navigation currentPage={currentPage} onNavigate={onNavigate} />
          <main className="flex-1" data-section="MainContent">
            {children}
          </main>
          <Footer onNavigate={onNavigate} />
          <FloatingActions onNavigate={onNavigate} />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

function Layout({ children }: { children?: React.ReactNode }) {
  const nonce = useNonce();
  const data = useRouteLoaderData<typeof loader>('root');
  const locale = data?.selectedLocale ?? DEFAULT_LOCALE;

  return (
    <html lang={locale.language} className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link rel="stylesheet" href={styles} />
      </head>
      <body>
        {data ? (
          <Analytics.Provider
            cart={data.cart}
            shop={data.shop}
            consent={data.consent}
          >
            <DrivenMNLayout>{children}</DrivenMNLayout>
          </Analytics.Provider>
        ) : (
          children
        )}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  const routeError = useRouteError();
  const isRouteError = isRouteErrorResponse(routeError);

  let title = 'Error';
  let pageType = 'page';

  if (isRouteError) {
    title = 'Not found';
    if (routeError.status === 404) pageType = routeError.data || pageType;
  }

  return (
    <Layout>
      {isRouteError ? (
        <>
          {routeError.status === 404 ? (
            <NotFound type={pageType} />
          ) : (
            <GenericError
              error={{ message: `${routeError.status} ${routeError.data}` }}
            />
          )}
        </>
      ) : (
        <GenericError error={error instanceof Error ? error : undefined} />
      )}
    </Layout>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────

/**
 * Derive the old SPA "page key" from a Remix pathname so the Navigation
 * component's active-state highlighting continues to work.
 */
function derivePageKey(pathname: string): string {
  if (pathname === '/') return 'home';

  // Strip leading slash and any locale prefix
  const segments = pathname.replace(/^\//, '').split('/');

  // "/services/xpel-protection-film" → "xpel-protection-film"
  if (segments[0] === 'services' && segments[1]) return segments[1];

  // "/tesla/ppf" → "tesla-ppf"
  if (segments[0] === 'tesla' && segments[1]) return `tesla-${segments[1]}`;

  // "/blogs/news/slug" → "blog/slug"
  if (segments[0] === 'blogs' && segments[1] === 'news') {
    if (segments[2]) return `blog/${segments[2]}`;
    return 'blog';
  }

  return segments.join('-') || 'home';
}

// ── GraphQL ──────────────────────────────────────────────────────────

const LAYOUT_QUERY = `#graphql
  query layout(
    $language: LanguageCode
    $headerMenuHandle: String!
    $footerMenuHandle: String!
  ) @inContext(language: $language) {
    shop {
      ...Shop
    }
    headerMenu: menu(handle: $headerMenuHandle) {
      ...Menu
    }
    footerMenu: menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
` as const;

async function getLayoutData({ storefront, env }: AppLoadContext) {
  const data = await storefront.query(LAYOUT_QUERY, {
    variables: {
      headerMenuHandle: 'main-menu',
      footerMenuHandle: 'footer',
      language: storefront.i18n.language,
    },
  });

  invariant(data, 'No data returned from Shopify API');

  const customPrefixes = { BLOG: '', CATALOG: 'products' };

  const headerMenu = data?.headerMenu
    ? parseMenu(
      data.headerMenu,
      data.shop.primaryDomain.url,
      env,
      customPrefixes,
    )
    : undefined;

  const footerMenu = data?.footerMenu
    ? parseMenu(
      data.footerMenu,
      data.shop.primaryDomain.url,
      env,
      customPrefixes,
    )
    : undefined;

  return { shop: data.shop, headerMenu, footerMenu };
}
