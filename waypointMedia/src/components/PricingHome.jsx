// DATA
import { information } from "@/assets/data/data"

// UTILITY
import { motion } from 'framer-motion'
import { Waves } from './helper/Waves';
import { ClientDisplay } from './helper/ClientDisplay'
import { Btn } from './helper/Btn'
import { TiTick } from "react-icons/ti";
import { useState } from "react"


// NAVIGATION
import { NavLink } from "react-router"

// FOR ID
import { v4 as uuidv4 } from 'uuid';


function formatCurrency(currency,number) {

	const fixedNumber = Number(number).toFixed(2)
  // Convert to string and handle decimal part if present
  const parts = fixedNumber.toString().split('.');
  const wholePart = parts[0];
  const decimalPart = parts.length > 1 ? '.' + parts[1] : '';
  
  // Add spaces between thousands
  const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  
  // Return formatted number with R prefix
  return `${currency}` + ' ' + formattedWholePart ;
}

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


function PricingCard({priceInfo,timeFrame}){

	const discount = 30;
	const yearlyPrice = priceInfo.price * 12;
	const discountedPrice = yearlyPrice - (yearlyPrice * (discount/100));

	return (
		<>
			<motion.div
			 initial={{ opacity: 0, y: 30 }}
			 whileInView={{ opacity: 1, y: 0 }}
			 viewport={{ once: true, amount: 0.2 }}
			 transition={{ duration: 0.6, ease: "easeOut" }}
			 className="relative">
				{timeFrame === "annually" && (
					<div className="absolute top-0 right-0 bg-mainGreen text-black text-sm px-3 py-1 rounded-bl-lg z-10 font-Roboto">
						Save {discount}%
					</div>
				)}
				<div className="border border-white bg-white px-5 py-5 rounded-xl font-Roboto">
					<div className="flex flex-col gap-4 py-2">
						<div className="flex gap-1 text-2xl">{priceInfo.type}</div>
						<div className="">Gain insights from AI specialists on your most pressing challenges in biology and technology.</div>
					</div>
					<hr/>
					<div className="flex flex-col py-4 gap-4">
						<div className="text-2xl font-Cal_Sans">{timeFrame === 'monthly' ? (
							<>
								{priceInfo.price === 'Custom' ? 'Custom' : formatCurrency('R',priceInfo.price)}
							</>
						) : (
							<>
								{priceInfo.price === 'Custom' ? 'Custom' : formatCurrency('R',discountedPrice)}
							</>
						)}</div>
						<NavLink to='/contact' className="mx-auto block w-12/12 ">
							<Btn text="Schedule Call" bg="bg-mainGreen border-none" textColor="text-black text-sm trasition-all duration-500 hover:rounded-xl hover:scale-103 " font="font-Roboto" width='h-11 w-full'/>
						</NavLink>
						<div className="flex flex-col gap-4 h-90 py-6">
							{priceInfo.children.map(child=>{
								return (
									<div key={uuidv4()} className="flex gap-2">
										<div className='flex justify-start items-center bg-grayBg px-1 rounded-full w-5 h-5'>
											<TiTick size={16}/>
										</div>
										<div>{child}</div>
									</div>
								)
							})}
						</div>
						<hr/>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export function PricingHome() {

	const pricingInfo = information[2].pricing
	const [timeFrame,setTimeFrame] = useState('monthly')

	function toggleTime(){
		setTimeFrame(prev => prev === "monthly" ? "annually" : "monthly")
	}

	return (
		<>
			<div className="flex flex-col py-20 gap-10 bg-gradient-to-t from-mainGreen to-[#f8f7f5]">
				<motion.div 
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="text-6xl text-center mx-auto font-Cal_Sans">
					Choose Plan
				</motion.div>
				<PricingToggle timeFrame={timeFrame} toggleTime={toggleTime}/>
				<div className="flex gap-10 px-10">
					{pricingInfo.map((el)=>{
					return <PricingCard key={el.id} priceInfo={el} timeFrame={timeFrame}/>
					})}
				</div>
			</div>
			<Waves inverse={true}/>
		</>
	)
}