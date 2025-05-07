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
import { AboutHome } from './components/AboutHome'

import { content } from "@/assets/data/data"
import { PricingHome } from './components/PricingHome'

function App() {

  return (
    <>
      <div className="flex items-end justify-center ">
        <SocialProof/>
        <ClientDisplay/>
      </div>
      <GrowthChart/>
      <AboutHome content={content}/>
      <PricingHome/>
    </>
  )
}

export default App
