import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { ClientDisplay } from './components/helper/ClientDisplay'
import { StickyBar } from './components/helper/StickyBar'


function App() {

  return (
    <>
      <div className="">
        <StickyBar/>
        <div className="bg-center bg-cover bg-no-repeat py-3 " style={{backgroundImage: "url('/28.webp')"}}>
          <Header links={["Our Story","Portfolio","Pricing","Contact","FAQ"]}/>
          <Hero/>
        </div>
      </div>
      {/*<ClientDisplay/>*/}
    </>
  )
}

export default App
