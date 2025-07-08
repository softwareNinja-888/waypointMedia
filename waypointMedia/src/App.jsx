import { useState } from 'react'
import './App.css'
import { Home } from "./components/Home"
// COMPONENTS
import { PortfolioPage } from './components/Portfolio/PortfolioPage'
import { ContactPage } from './components/Contact/ContactPage'
import { AboutPage } from './components/About/AboutPage'
import { Layout } from './components/Layout.jsx'
import { useContent, ContentProvider } from "@/context/ContentContext";
// import { Socials } from './components/helper/Socials'
import { PageScrollToTop } from './components/helper/PageScrollToTop.jsx'
// LAYOUT 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RouterProvider,
  createRoute,
  createRootRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router';

const queryClient = new QueryClient();

// Create a wrapper component for the root route
const RootComponent = () => {
  const content = useContent();
  return (
    <>
      <PageScrollToTop/>
      <Layout content={content} />
    </>
  );
};

const rootRoute = createRootRoute({
  component: RootComponent,
});

const portfolioRoute = createRoute({
  path: '/portfolio',
  getParentRoute: () => rootRoute,
  component: PortfolioPage,
});

const contactRoute = createRoute({
  path: '/contact',
  getParentRoute: () => rootRoute,
  component: ContactPage,
});

const aboutUsRoute = createRoute({
  path: '/about',
  getParentRoute: () => rootRoute,
  component: AboutPage,
});

const homeRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  component: Home,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  portfolioRoute,
  contactRoute,
  aboutUsRoute,
]);

const router = createRouter({ routeTree });

function App() {
  return (
    <ContentProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ContentProvider>
  )
}

export default App