import { useState } from 'react';
import { Btn } from './helper/Btn'
import { motion, AnimatePresence } from 'framer-motion';
import { Waves } from './helper/Waves';


// ICONS
import { FaCode,FaPhotoVideo } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaChartLine } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { PiStrategyBold } from "react-icons/pi";

function ElText({title='Enter Title', description="Enter Description", activeNum, activeTab, setActiveTab,icon}) {
    return (
        <>
            <motion.div
                className="flex flex-col gap-0 px-6 py-3 cursor-pointer border border-white bg-white rounded-xl text-black" 
                onClick={() => setActiveTab(activeNum)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
            >
                <div className="flex items-center gap-0 text-2xl">
                    <div
                        className="bg-mainGreen p-2 rounded-xl"
                        initial={{ scale: 1 }}
                        animate={activeTab === activeNum ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        {icon}
                    </div>
                    <div className="font-Cal_Sans px-5 text-sm md:text-lg lg:text-xl">{title}</div> 
                </div>
                <AnimatePresence>
                    {activeTab === activeNum && (
                        <motion.div 
                            className="px-15 font-Roboto text-sm lg:text-md"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {description}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    )
}
export function Services({content}) {
    const [activeTab, setActiveTab] = useState(0);

    const ServiceSections = [
         {id: 0, icon: <FaCode/>, title: 'Website Development', description: 'We build fast, responsive websites that turn visitors into customers and reflect your brand at every click.'},
        {id: 1, icon: <MdVisibility/>, title: 'SEO Optimization', description: 'Be found first. We help your business climb search rankings so your ideal customers find you without the guesswork.'},
        {id: 2, icon: <BsCurrencyDollar/>, title: 'Online Payments', description: 'Get paid faster and easier. We set up secure, seamless payment solutions that keep your business moving.'},
        {id: 3, icon: <FaPhotoVideo/>, title: 'Content Creation', description: 'Tell your story with visuals that stick. We shoot sharp, scroll-stopping content your audience won’t forget.'},



    ];

    return (
        <>
            <div id="services" style={{backgroundImage:"url('/bg/shape2.avif')"}}>
                <div className="flex justify-center gap-2 text-5xl text-black text-center font-Cal_Sans uppercase">
                    Our Services
                  </div>             
                <div className="flex text-white h-fit px-6 gap-10 py-40 ">                  

                {/* Left Section - Image with Animation */}
                <div className="flex-1 hidden md:flex">
                    <AnimatePresence mode="wait">
                      {activeTab === 0 && (
                        <motion.img
                          key="image0"
                          alt="picture"
                          src="/illus/mobileDev.svg"
                          className="rounded-4xl object-contain w-full h-[660px]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      )}
                      {activeTab === 1 && (
                        <motion.img
                          key="image1"
                          alt="picture"
                          src="/illus/search.svg"
                          className="rounded-4xl object-contain object-center w-full h-[660px]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      )}
                      {activeTab === 2 && (
                        <motion.img
                          key="image2"
                          alt="picture"
                          src="/illus/mobile.svg"
                          className="rounded-4xl object-contain w-full h-[660px]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      )}
                      {activeTab === 3 && (
                        <motion.img
                          key="image2"
                          alt="picture"
                          src="/illus/photo2.svg"
                          className="rounded-4xl object-contain w-full h-[660px]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      )}
                    </AnimatePresence>
                </div>

                {/* Right Section - Image with Animation */}
                <div className='flex flex-col  gap-6 flex-1'>
                      <div className="text-5xl font-Cal_Sans uppercase text-black">No Hype. Just High Performing Websites.</div>

                       <div className="flex flex-col gap-6 mt-5">
                        {ServiceSections.map((el) => (
                            <ElText
                              key={el.id}
                              title={el.title}
                              description={el.description}
                              activeTab={activeTab}
                              setActiveTab={setActiveTab}
                              activeNum={el.id}
                              icon={el.icon}
                            />
                          ))}
                       </div>
                      
                </div>
              </div>
            </div>
        </>
    );
}