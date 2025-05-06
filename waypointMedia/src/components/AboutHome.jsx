import { useState } from 'react';
import { Btn } from './helper/Btn'
import { motion, AnimatePresence } from 'framer-motion';

// ICONS
import { FaChartLine } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";
import { FaBook } from "react-icons/fa";




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
                    {/*<motion.img 
                        src={icon}
                        alt="tick" 
                        className="w-6 h-6"
                        initial={{ scale: 1 }}
                        animate={activeTab === activeNum ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.4 }}
                    />*/}
                    <div
                        className="bg-mainGreen p-2 rounded-xl"
                        initial={{ scale: 1 }}
                        animate={activeTab === activeNum ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        {icon}
                    </div>
                    <div className="font-Cal_Sans px-5">{title}</div> 
                </div>
                <AnimatePresence>
                    {activeTab === activeNum && (
                        <motion.div 
                            className="px-15 font-Inter"
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
export function AboutHome({content}) {
    const [activeTab, setActiveTab] = useState(0);

    const AboutSections = [
        {id:0, icon:<FaBook/>, title:'Booking-Focused Campaigns', description:'We don’t just boost engagement—we design campaigns that fill rooms and increase direct reservations.'},
        {id:1, icon:<MdVisibility/>, title:'Brand Visibility', description:'Stay top of mind. We position your brand where it matters—on the feeds and screens of your ideal guests.'},
        {id:2, icon:<MdHotel/>, title:'Guest Engagement', description:'Turn likes into loyalty. We create meaningful content that builds real connections with your audience.'},
        {id:3, icon:<PiStrategyBold/>, title:'Custom Strategy', description:'No templates. Just tailored social media plans built around your property’s goals and target market.'},
        {id:4, icon:<FaChartLine/>, title:'Performance Tracking', description:'See what’s working—instantly. Get custom analytics and reports that show exactly where your growth is coming from.'}
    ];

    return (
        <>
            <div className="flex bg-darkGray text-white h-fit px-6 gap-10 py-40 ">

                 {/* Right Section - Image with Animation */}
                <div className="flex-1">
                    <AnimatePresence mode="wait">
                      {activeTab === 0 && (
                        <motion.img
                          key="image0"
                          alt="picture"
                          src="/0.webp"
                          className="rounded-4xl object-cover w-full h-full"
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
                          src="/1.webp"
                          className="rounded-4xl object-cover object-top w-full h-full"
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
                          src="/3.webp"
                          className="rounded-4xl object-cover w-full h-full"
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
                          src="/4.webp"
                          className="rounded-4xl object-cover w-full h-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      )}{activeTab === 4 && (
                        <motion.img
                          key="image2"
                          alt="picture"
                          src="/6.webp"
                          className="rounded-4xl object-cover w-full h-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      )}
                    </AnimatePresence>
                </div>
                {/* <div className="flex-1 border-3 border-green-200">
                    <img src="0.webp" alt="" className="w-full h-full rounded-2xl"/>
                </div> */}
                  <div className='flex flex-col gap-6 flex-1'>
                      <div className="text-5xl font-Cal_Sans uppercase ">Marketing promises are everywhere. We deliver bookings.</div>
                        {AboutSections.map((el) => (
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
               {/* <div className="flex flex-col flex-1 border-3 border-red-200 gap-5">
                    
                </div>*/}
               

                 {/*<div className="col-start-1 col-span-2 row-start-4 bing ">
                    <img src="1.webp" alt="" className="w-90 h-100 rounded-2xl"/>
                </div>*/}
            </div>
        </>
    );
}