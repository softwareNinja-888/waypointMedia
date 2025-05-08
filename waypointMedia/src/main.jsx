import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'

// COMPONENTS
import { PricingPage } from './components/Pricing/PricingPage'
import { PortfolioHome } from './components/Portfolio/PortfolioHome'
import { Layout } from './components/Layout.jsx'
import { Socials } from './components/helper/Socials'

// DATA
import { content } from "@/assets/data/data"


import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout content={content}/>}>
          <Route index element={<App/>}/>
          <Route path='pricing'>
            <Route index element={<PricingPage/>}/>
          </Route>
          
          <Route path='portfolio'>
            <Route index element={<PortfolioHome/>}/>
          </Route>
        </Route>
      </Routes>
      {/*<Socials/>*/}

    </BrowserRouter>
  </StrictMode>,
)
