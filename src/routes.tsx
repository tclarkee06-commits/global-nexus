import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('./pages/index'));
const Services = lazy(() => import('./pages/services'));
const Industries = lazy(() => import('./pages/industries'));
const About = lazy(() => import('./pages/about'));
const Experience = lazy(() => import('./pages/experience'));
const CaseStudies = lazy(() => import('./pages/case-studies'));


const Resources = lazy(() => import('./pages/resources'));

const Blog = lazy(() => import('./pages/blog'));
const Contact = lazy(() => import('./pages/contact'));
const Countries = lazy(() => import('./pages/countries'));
const Privacy = lazy(() => import('./pages/privacy'));
const Terms = lazy(() => import('./pages/terms'));
const NotFound = lazy(() => import('./pages/_404'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/industries',
    element: <Industries />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/case-studies',
    element: <CaseStudies />,
  },


  {
    path: '/resources',
    element: <Resources />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/countries',
    element: <Countries />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
  {
    path: '/terms',
    element: <Terms />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/services' | '/industries' | '/about' | '/experience' | '/case-studies' | '/resources' | '/blog' | '/contact' | '/countries' | '/privacy' | '/terms';

export type Params = Record<string, string | undefined>;
