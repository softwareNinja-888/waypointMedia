import { FaHandshake } from "react-icons/fa"
import { AiFillCustomerService } from "react-icons/ai"
import { FaTrophy } from "react-icons/fa"


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

export function WhyUs({content}){
	return (
			<>
				<div className=" bg-center bg-cover bg-no-repeat py-40" style={{backgroundImage:"url('/bg/shape2.avif')"}}>
					<div className="flex flex-col md:flex-row w-11/12 mx-auto items-center gap-20 py-20 ">
						<div className=" text-5xl font-Cal_Sans flex-1/3 md:flex-1 lg:flex-[40%]">
							Why Choose <span className="bg-mainGreen">{content.name},</span> for your Marketing Efforts?
						</div>
						<div className="flex-2/3 md:flex-1 lg:flex-[60%]">
							<img src="/bg/16.avif" alt="" className="h-[500px] w-full"/>
						</div>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-11/12 mx-auto gap-10">
						<WhyCards name='Niche expertise in hospitality'/>
						<WhyCards name='Content tailored for tourism' icon={<AiFillCustomerService size={30}/>}/>
						<WhyCards name='Proven Growth Strategies' icon={<FaTrophy size={30}/>}/>
					</div>
				</div>
			</>
		)
}