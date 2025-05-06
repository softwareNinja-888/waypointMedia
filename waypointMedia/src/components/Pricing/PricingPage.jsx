// DATA
import { information } from "@/assets/data/data"

// UTILITY
import { Waves } from '../helper/Waves';
import { Btn } from '../helper/Btn'
import { TiTick } from "react-icons/ti";


// NAVIGATION
import { NavLink } from "react-router"

// FOR ID
import { v4 as uuidv4 } from 'uuid';



function PricingCard({priceInfo}){
	return (
		<>
			<div className="border border-white bg-white px-5 py-5 rounded-xl font-Roboto">
				<div className="flex flex-col gap-4 py-2">
					<div className="text-2xl">{priceInfo.type}</div>
					<div className="">Gain insights from AI specialists on your most pressing challenges in biology and technology.</div>
				</div>
				<hr/>
				<div className="flex flex-col py-4 gap-4">
					<div className="text-2xl font-Cal_Sans">{priceInfo.price === 'Custom' ? '' : 'R'} {priceInfo.price}</div>
					<NavLink to='/contact' className="mx-auto block w-12/12 ">
						<Btn text="Schedule Call" bg="bg-mainGreen border-none" textColor="text-black text-sm trasition-all duration-500 hover:rounded-xl hover:scale-103 " font="font-Roboto" width='h-11 w-full'/>
	                </NavLink>
	                <div className="flex flex-col gap-4">
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
				</div>
			</div>
		</>
	)
}

export function PricingPage() {

	const pricingInfo = information[2].pricing

	return (
		<>
			<div className="flex flex-col py-20 gap-10 bg-gradient-to-t from-mainGreen to-[#f8f7f5]">
				<div className="text-6xl text-center mx-auto font-Cal_Sans">
					Choose Plan
				</div>
				<div className="flex gap-10 px-10">
					{pricingInfo.map((el)=>{
					return <PricingCard key={el.id} priceInfo={el}/>
					})}
				</div>
			</div>
		</>
	)
}