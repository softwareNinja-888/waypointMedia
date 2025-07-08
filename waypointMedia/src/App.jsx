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

// import { content } from "@/assets/data/data"
import { useContent } from "@/context/ContentContext";
// import { PricingHome } from './components/PricingHome'
import { How } from './components/How'
import { About } from './components/About'
import { WhyUs } from './components/WhyUs'
import { Projects } from './components/Projects'

function App() {
  
  const content = useContent()

  return (
    <>
      <div className="bg-center bg-cover bg-no-repeat py-30" style={{backgroundImage:"url('/bg/shape2.avif')"}}>
        <Services content={content}/>
        <How/>
        <Projects/>
        <About content={content}/>
        <WhyUs content={content}/>
        <GrowthChart/>
      </div>
    </>
  )
}

export default App
