import React, { useState } from 'react';
import { PriceLg } from './PriceLg';
import { PriceSm } from './PriceSm';
import { information } from "@/assets/data/data"
import { Waves } from '../helper/Waves';
import { ClientDisplay } from '../helper/ClientDisplay';
import { motion } from 'framer-motion'

function PricingToggle({ timeFrame, toggleTime }) {
	return (
		<div className="relative flex border border-white bg-white gap-1 py-2 w-57 justify-center items-center rounded-4xl mx-auto font-Cal_Sans">
			{/* Animated background */}
			<motion.div
				layout
				transition={{ type: 'spring', stiffness: 500, damping: 30 }}
				className={`absolute  ${timeFrame === 'monthly' ? 'top-0 left-0' : 'top-0 right-0'} w-1/2 h-full bg-mainGreen rounded-4xl z-0 `}
				style={{
					transform: timeFrame === 'monthly' || timeFrame === 'annually' ? 'translateX(0%)' : 'translateX(100%)',
				}}
			/>

			{/* Options */}
			<div
				className="w-1/2 text-center z-10 cursor-pointer py-3 px-5"
				onClick={() => timeFrame !== 'monthly' && toggleTime()}
			>
				<span className={timeFrame === 'monthly' ? 'text-black font-semibold' : 'text-gray-600'}>
					Monthly
				</span>
			</div>

			<div
				className="w-1/2 text-center z-10 cursor-pointer py-3 px-5"
				onClick={() => timeFrame !== 'annually' && toggleTime()}
			>
				<span className={timeFrame === 'annually' ? 'text-black font-semibold' : 'text-gray-600'}>
					Annually
				</span>
			</div>
		</div>
	);
}

export function PricingPage(){
        
    const [timeFrame,setTimeFrame] = useState('monthly')
    
    function toggleTime(){
        setTimeFrame(prev => prev === "monthly" ? "annually" : "monthly")
    }

    return (
            <>
                <section className="py-10 sm:py-16 lg:py-24 w-12/12 mx-auto  bg-gradient-to-t from-mainGreen to-[#f8f7f5]">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl mb-10">Pricing &amp; Plans</h2>
                        </div>
                        <PricingToggle timeFrame={timeFrame} toggleTime={toggleTime}/>
                        <PriceLg information={information} timeFrame={timeFrame} />
                    </div>
                    <ClientDisplay/>
                    <PriceSm/>
                </section>
                <Waves waveColor='bg-mainGreen'  bgColor='#F8F7F5' inverse={true}/>
            </>
        )
    }