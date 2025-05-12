import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'
import { ContentProvider } from "@/context/ContentContext";

// COMPONENTS
import { PricingPage } from './components/Pricing/PricingPage'
import { PortfolioPage } from './components/Portfolio/PortfolioPage'
import { ContactPage } from './components/Contact/ContactPage'
import { AboutPage } from './components/About/AboutPage'

import { Layout } from './components/Layout.jsx'
import { Socials } from './components/helper/Socials'
import { PageScrollToTop } from './components/helper/PageScrollToTop.jsx'


// DATA
import { content } from "@/assets/data/data"


import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContentProvider>
        <PageScrollToTop/>
        <Routes>
          <Route path='/' element={<Layout content={content}/>}>
            <Route index element={<App/>}/>
            <Route path='pricing'>
              <Route index element={<PricingPage/>}/>
            </Route>
            <Route path='portfolio'>
              <Route index element={<PortfolioPage/>}/>
            </Route>
            <Route path='contact'>
              <Route index element={<ContactPage/>}/>
            </Route>
            <Route path='our story'>
              <Route index element={<AboutPage/>}/>
            </Route>
          </Route>
        </Routes>
        {/*<Socials/>*/}
      </ContentProvider>
    </BrowserRouter>
  </StrictMode>,
)
