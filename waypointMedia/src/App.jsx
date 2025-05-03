import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header } from "./components/Header"
import { ClientDisplay } from './components/helper/ClientDisplay'
import { StickyBar } from './components/helper/StickyBar'


function App() {

  return (
    <>
      <div className="">
        <StickyBar/>
        <Header/>
      </div>
      {/*<ClientDisplay/>*/}
    </>
  )
}

export default App
