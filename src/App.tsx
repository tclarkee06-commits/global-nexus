import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AiroErrorBoundary from '../dev-tools/src/AiroErrorBoundary';
import RootLayout, { RootLayoutConfig } from './layouts/RootLayout';
import { routes } from './routes';
import Spinner from './components/Spinner';
import { CookieConsent } from './components/CookieConsent';

const SpinnerFallback = () => (
  <div className="flex justify-center py-8 h-screen items-center">
    <Spinner />
  </div>
);

/**
 * Centralized header configuration for the entire site
 *
 * This configuration is shared across all pages to maintain consistent navigation.
 * Update these values to change the header across the entire application.
 */
const headerConfig: RootLayoutConfig['header'] = {
  logo: {
    text: 'IGP Ventures',
    href: '/'
  },
  navItems: [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/countries', label: 'Countries' },
    { href: '/case-studies', label: 'Case Studies' },
  
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' }
  ],
  sticky: true
};

/**
 * Centralized footer configuration for the entire site
 *
 * This configuration is shared across all pages to maintain consistent footer.
 * Update these values to change the footer across the entire application.
 */
const footerConfig: RootLayoutConfig['footer'] = {
  variant: 'simple',
  copyright: {
    text: 'IGP Ventures',
    showYear: true,
    position: 'center'
  },
  bottomLinks: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' }
  ]
};

// Create router with layout wrapper
const router = createBrowserRouter([
  {
    path: '/',
    element: import.meta.env.DEV ? (
      <AiroErrorBoundary>
        <Suspense fallback={<SpinnerFallback />}>
          <RootLayout config={{ header: headerConfig, footer: footerConfig }}>
            <Outlet />
          </RootLayout>
        </Suspense>
      </AiroErrorBoundary>
    ) : (
      <Suspense fallback={<SpinnerFallback />}>
        <RootLayout config={{ header: headerConfig, footer: footerConfig }}>
          <Outlet />
        </RootLayout>
      </Suspense>
    ),
    children: routes,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieConsent />
    </>
  );
}
