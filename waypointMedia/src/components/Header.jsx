import { Logo } from './helper/Logo'
import { Btn } from './helper/Btn'
import { MobileMenu } from './helper/MobileMenu'
import { AnimatedWord } from './helper/AnimatedWord'
import { Link } from '@tanstack/react-router'
import { IoMenuSharp } from "react-icons/io5"
import { useState } from 'react'


export function Header({content}){
    const [menuOpen, setMenuOpen ] = useState(false)

    return (

        <div className="flex justify-between items-center bg-white/90 backdrop-blur-lg px-3 md:px-10 w-11/12 rounded-2xl mx-auto py-2 gap-0">

            {/* LOGO */}
            <Logo name={content.name} textColor="text-black text-2xl" img={content.logoImg}/>

            {/* MENU */}
            <div className="lg:hidden">
                <IoMenuSharp className='cursor-pointer md:hidden' onClick={()=>setMenuOpen(!menuOpen)}/>
                {menuOpen && <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            </div>

            {/* NAV LINKS */}
            <nav className="hidden md:flex md:space-x-10 lg:space-x-18 text-sm ">        
                {content.links.map((link,index)=>{
                    console.log('Header:',link)
                    return (
                        <Link to={link.href.toLowerCase()} key={index} className={` flex gap-1.5 no-underline relative cursor-pointer text-black `}>
                            <AnimatedWord word={link.name} textColor='text-black' font='font-Roboto' textSize="text-md"/>
                        </Link>
                    )
                })}
            </nav> 

            {/* CTA */}
            <Btn text="Schedule Call" bg="bg-mainGreen border-none" textColor="hidden md:flex text-black text-sm trasition-all duration-500 hover:rounded-xl hover:scale-103 " font="font-Roboto" width='h-11 w-36'/>

        </div>
    )
}