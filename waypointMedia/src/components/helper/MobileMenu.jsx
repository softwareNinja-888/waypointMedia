import React from "react";
import { motion } from "framer-motion";
import { Link,useNavigate } from '@tanstack/react-router'


function Links({linkName,href="#"}){

  return (
      <>
          <Link to={`/${href}`} className={ ({isActive })=> {
              return `flex gap-1.5 no-underline relative cursor-pointer  after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-700 after:ease-in-out hover:after:opacity-100 hover:after:bg-greenPrimary text-base max-[500px]:text-xs font-inter500 ${isActive ? 'text-greenPrimary scale-110 transition-all duration-500' :'text-white'}`;}}>{linkName}</Link>
      </>
  )
}

export function MobileMenu({ menuOpen, setMenuOpen }){

  const links =   [{title:'Our Services',href:'services'},{title:'About Us',href:'about'},{title:'Our Work',href:'portfolio'},{title:'Pricing',href:'pricing'},{title:'Contact Us',href:'contact'},]


  // Animation variants for menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const navigate = useNavigate()

  
  function handleNavigation(path){
    navigate(path)
    console.log(menuOpen)
    setMenuOpen(false)

    console.log(menuOpen)
  }
   

  return (
    <>
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0 bg-black  bg-opacity-100 z-140 "
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={setMenuOpen} // Close menu when clicking outside
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      />

      {/* Animated Menu */}
      <motion.div
        className="fixed inset-0 z-150 flex flex-col items-center justify-center bg-white h-screen"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >

        {/* CLOSE BTN */}
        <button className="absolute top-10 right-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-black/50 duration-200 hover:text-black cursor-pointer" onClick={() => setMenuOpen(false)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2390_1135)">
              <path
                d="M1.14288 1.14285L8.00003 8M8.00003 8L14.8572 14.8571M8.00003 8L14.8572 1.14285M8.00003 8L1.14288 14.8571"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2390_1135">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>

        {/* Links */}
        <nav className="flex flex-col space-y-4 text-lg font-poppins items-center">
            
            {links.map((link,index)=>{
                return (
                  
                    <Links key={index} linkName={link.title} href={link.href} onClick={()=> {handleNavigation(link.href)}}/>

                )
            })}
        </nav>
   
        </motion.div>
    </>
  );
};
