import { GoDotFill } from "react-icons/go";
import { FaChartLine } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";
import { FaBook } from "react-icons/fa";

function WhyCards({title,description="We take the time to deeply analyze your vision, industry, and target audience. Our goal is to craft a strategic foundation that aligns perfectly with your objectives, ensuring a strong start to the design process",icon=<FaChartLine size={13}/>}){
	return (
		<>
			<div className="flex flex-row gap-3 px-3 py-6 bg-blue-600/10 bg-center bg-cover bg-no-repeat cursor-pointer h-70 transition-all hover:scale-103 durstion-1000 ease-in" style={{backgroundImage:"url('/bg/shape1.avif')"}}>
				<div className="bg-mainGreen p-2 rounded-full h-7 w-7">
                    {icon}
                </div>
				<div className="flex flex-col gap-3">
					<div className="text-2xl font-Cal_Sans h-18">
						{title}
					</div>
					<div className="font-Poppins text-sm">{description}</div>
				</div>
			</div>
		</>
		)
}
export function WhyUs({content}){
	return (
			<>
				<div className=" bg-center bg-cover bg-no-repeat py-40" style={{backgroundImage:"url('/bg/shape2.avif')"}}>
					<div className="flex w-11/12 mx-auto items-center gap-20 py-20 ">
						<div className=" text-5xl font-Cal_Sans flex-1/3">
							Why Choose <span className="bg-mainGreen">{content.name},</span> for your Marketing Efforts?
						</div>
						<div className="flex-2/3">
							<img src="/bg/16.avif" alt="" className="h-[500px] w-full"/>
						</div>
					</div>
					<div className="flex flex-row w-10/12 mx-auto gap-10">
						<WhyCards title="100% Satisfaction Guarantee" />
						<WhyCards title="Niche Tourism Expertise" />
						<WhyCards title="Viral Content Creation" />
					</div>
				</div>
			</>
		)
}