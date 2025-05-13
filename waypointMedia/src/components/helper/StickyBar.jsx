import React, { useState } from "react";
import {FaArrowRight} from 'react-icons/fa6'
import { NavLink } from 'react-router'
export function StickyBar({promo='Start Growing with WayPoint Today!'}) {
  
  const [open,setOpen] = useState(true)


  return (
    <section className={`bg-mainGreen px-6 py-1 ${open ? 'block' : 'hidden'}`}>
      <div className="relative pr-6">
        <div className="flex flex-wrap items-center justify-center gap-5 text-center">
          <div className="inline-flex text-xs md:text-sm font-playfairBold  text-black  uppercase font-Roboto">
            {promo} <NavLink to="/contact" className='ml-1 underline'>Get started</NavLink>
          </div>
        </div>
        <button className="absolute right-0 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-black/50 duration-200 hover:text-black cursor-pointer" onClick={()=>{
          setOpen(false)
        }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2390_1135)">
              <path
                d="M1.14288 1.14285L8.00003 8M8.00003 8L14.8572 14.8571M8.00003 8L14.8572 1.14285M8.00003 8L1.14288 14.8571"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2390_1135">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
}

