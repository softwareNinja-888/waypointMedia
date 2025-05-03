import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'

// COMPONENTS

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<App/>}/>
          <Route path='services'>
{/*            <Route index element={<ServiceHome/>}/>
            <Route path=':service' element={<ServiceInfo/>}/>*/}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
