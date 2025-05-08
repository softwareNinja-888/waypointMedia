import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { SocialProof } from "./components/SocialProof"
import { GrowthChart } from "./components/GrowthChart"
import { Footer } from "./components/Footer"


import { ClientDisplay } from './components/helper/ClientDisplay'
import { StickyBar } from './components/helper/StickyBar'
import { Services } from './components/Services'

import { content } from "@/assets/data/data"
import { PricingHome } from './components/PricingHome'
import { How } from './components/How'

function App() {

  return (
    <>
      <div className="flex items-end justify-center ">
        <SocialProof/>
        <ClientDisplay/>
      </div>
      <GrowthChart/>
      <Services content={content}/>
      <PricingHome/>
      <How/>
    </>
  )
}

export default App
