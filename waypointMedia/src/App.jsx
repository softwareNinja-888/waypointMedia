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

const Information = (function (){
  function createBasicInfo(name="Company Name",links=[],logoImg=''){
      return {
          name,
          links,
          logoImg,
      }
  }

  return {createBasicInfo}
})()

function App() {

    const companyName = 'Waypoint Media'
  // YOU CAN EDIT THIS INFORMATION TO MANIPULATE DATA IN COMPONENTS BELOW
    const content = Information.createBasicInfo(
    companyName,
    ["Our Story","Portfolio","Pricing","Contact","FAQ"],
    '/logo3.svg'
  ) 

  return (
    <>
      <div className="">
        <StickyBar/>
        <div className="bg-center bg-cover bg-no-repeat py-3 " style={{backgroundImage: "url('/28.webp')"}}>
          <Header content={content}/>
          <Hero content={content} />
        </div>
      </div>
      <div className="flex items-end justify-center ">
        <SocialProof/>
        <ClientDisplay/>
      </div>
      <GrowthChart/>
      <div className="bg-start bg-cover bg-no-repeat py-30  " style={{backgroundImage: "url('/33.webp')"}}>
        <Footer content={content}/>
      </div>

    </>
  )
}

export default App
