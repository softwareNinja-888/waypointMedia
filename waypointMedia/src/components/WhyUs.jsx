import { GoDotFill } from "react-icons/go";
import { FaChartLine } from "react-icons/fa6";

import { FaHandshake } from "react-icons/fa"
import { AiFillCustomerService } from "react-icons/ai"
import { FaTrophy } from "react-icons/fa"

import { MdVisibility } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";
import { FaBook } from "react-icons/fa";

function WhyCards({name,nameColor='text-blue-950',icon=<FaHandshake size={30}/>,iconColor='',description="We believe in open, honest communication and keep your best interests at the heart of everything",descriptionColor='',}){
	return (
		<div className={`flex flex-col gap-3 px-4 py-10 bg-white text-black rounded-2xl w-85 h-70`} >
			<div className={`${iconColor}`}>
				{icon}
			</div>
			<div className={`text-2xl font-Cal_Sans ${nameColor}`}>{name}</div>
			<div className={`text-lg font-Roboto`}>{description}</div>
		</div>
	)
}

// function WhyCards({title,description="We take the time to deeply analyze your vision, industry, and target audience. Our goal is to craft a strategic foundation that aligns perfectly with your objectives, ensuring a strong start to the design process",icon=<FaChartLine size={13}/>}){
// 	return (
// 		<>
// 			<div className="flex flex-row gap-3 px-3 py-6 bg-blue-600/10 bg-center bg-cover bg-no-repeat cursor-pointer h-70 transition-all hover:scale-103 durstion-1000 ease-in" style={{backgroundImage:"url('/bg/shape1.avif')"}}>
// 				<div className="bg-mainGreen p-2 rounded-full h-7 w-7">
//                     {icon}
//                 </div>
// 				<div className="flex flex-col gap-3">
// 					<div className="text-2xl font-Cal_Sans h-18">
// 						{title}
// 					</div>
// 					<div className="font-Poppins text-sm">{description}</div>
// 				</div>
// 			</div>
// 		</>
// 		)
// }
export function WhyUs({content}){
	return (
			<>
				<div className=" bg-center bg-cover bg-no-repeat py-40" style={{backgroundImage:"url('/bg/shape2.avif')"}}>
					<div className="flex flex-col md:flex-row w-11/12 mx-auto items-center gap-20 py-20 ">
						<div className=" text-5xl font-Cal_Sans flex-1/3 ">
							Why Choose <span className="bg-mainGreen">{content.name},</span> for your Marketing Efforts?
						</div>
						<div className="flex-2/3">
							<img src="/bg/16.avif" alt="" className="h-[500px] w-full"/>
						</div>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 w-10/12 md:w-11/12 mx-auto gap-10">
						<WhyCards name='Niche expertise in hospitality'/>
						<WhyCards name='Content tailored for tourism' icon={<AiFillCustomerService size={30}/>}/>
						<WhyCards name='Proven Growth Strategies' icon={<FaTrophy size={30}/>}/>
					</div>
				</div>
			</>
		)
}