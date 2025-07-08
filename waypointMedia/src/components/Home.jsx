import { useState } from 'react'

import { Header } from "./Header"
import { Hero } from "./Hero"
import { SocialProof } from "./SocialProof"
import { GrowthChart } from "./GrowthChart"
import { Footer } from "./Footer"


import { ClientDisplay } from './helper/ClientDisplay'
import { StickyBar } from './helper/StickyBar'
import { Services } from './Services'

// import { content } from "@/assets/data/data"
import { useContent } from "@/context/ContentContext";
// import { PricingHome } from './PricingHome'
import { How } from './How'
import { About } from './About'
import { WhyUs } from './WhyUs'
import { Projects } from './Projects'

export function Home() {
  
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
