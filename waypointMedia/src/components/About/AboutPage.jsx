import { Btn } from "../helper/Btn";
import { GoDotFill } from "react-icons/go";
import { useContent } from "@/context/ContentContext";

import { FaHandshake } from "react-icons/fa"
import { AiFillCustomerService } from "react-icons/ai"
import { FaTrophy } from "react-icons/fa"

import { useState, useEffect, useRef} from 'react';

function Stat({ targetNumber = 100, name = 'Stat Name', isVisible ,className}) {
	const [count, setCount] = useState(0);

	useEffect(() => {
	  if (!isVisible) return;
  
	  const end = parseInt(targetNumber); // Remove "+" or "%" for counting
	  if (isNaN(end)) return;
  
	  let start = 0;
	  const duration = 1000;
	  const stepTime = Math.max(Math.floor(duration / end), 20);
  
	  const counter = setInterval(() => {
		start += 1;
		setCount(start);
		if (start >= end) {
		  clearInterval(counter);
		  setCount(end);
		}
	  }, stepTime);
  
	  return () => clearInterval(counter);
	}, [isVisible, targetNumber]);
  
	// Determine suffix to append
	const suffix = targetNumber.includes('%') ? '%' : targetNumber.includes('+') ? '+' : '';
  
	return (
	  <div className={`flex flex-col justify-center items-center bg-grayBg w-full h-40 rounded-2xl ${className} bg-white/45 backdrop-blur-lg`}>
		<div className="text-4xl ">
		  {count}{suffix}
		</div>
		<div className="font-">{name}</div>
	  </div>
	);
  }

function Card({name,nameColor='text-blue-950',icon=<FaHandshake size={30}/>,iconColor='',description="We believe in open, honest communication and keep your best interests at the heart of everything",descriptionColor='',}){
	return (
		<div className={`flex flex-col gap-3 px-4 py-10 bg-white text-black rounded-2xl w-85 h-70`}>
			<div className={`${iconColor}`}>
				{icon}
			</div>
			<div className={`text-2xl font-Cal_Sans ${nameColor}`}>{name}</div>
			<div className={`text-lg font-Roboto`}>{description}</div>
		</div>
	)
}

function SectionIntro({Sectitle='About Us',title='Great Team & Values',description='Connecting you with the perfect property for every need'}){
	return (
		<>
			<div className="">
				<div className="flex justify-center items-center gap-2 text-md font-Cal_Sans mb-5 text-black text-center  uppercase">
					<GoDotFill className='text-mainGreen'/>
					{Sectitle}
				</div> 				
				<div className="text-4xl font-Cal_Sans mb-5 text-center">
					{title}
				</div>
				<div className="font-Roboto text-center text-lg">
					{description}
				</div>
			</div>		
			</>
	)
}

function EmployeeCard({name,position,img='/12.webp',about="Passionate about blending modern aesthetics with functionality. Ethan ensures every design embodies innovation and sustainability.",}){
	return (
		<div className="flex flex-col w-[480px] gap-5 bg-white rounded-2xl px-3 py-6 ">
			<div className="">
				<img src={img} alt="" className="w-full h-120" />
			</div>
			<div className="flex flex-col gap-1">
				<div className="text-2xl font-Cal_Sans">{name}</div>
				<div className="text-xl font-Cal_Sans text-gray-500">{position}</div>
			</div>
			<hr />
			<div className="text-lg font-Roboto">{about}</div>
		</div>
	)
}

export function AboutPage(){

	const content = useContent()
	const [statsVisible, setStatsVisible] = useState(false);
	const statsRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
		entries => {
			if (entries[0].isIntersecting) {

			setStatsVisible(true);
			observer.disconnect(); // Trigger once
			}
		},
		{ threshold: 0.4 }
		);
		console.log(statsRef)

		if (statsRef.current) {
		observer.observe(statsRef.current);
		}

		return () => observer.disconnect();
	}, []);
	

	return (
		<>
			<div className="flex flex-col gap-20 bg-center bg-cover bg-no-repeat rounded-3xl" style={{backgroundImage:"url('/bg/shape2.avif')"}}>
				<div className="flex gap-10 w-10/12 mx-auto  px-0 py-12 rounded-3xl">
					<div className="flex-1/2">
						<div className="text-5xl font-Cal_Sans mb-5">Our Story</div>
						<div className="flex flex-col gap-4 mb-5">
							<p className="font-Roboto text-md">
								Founded in 2025 by Bayanda Dlamin, {content.name} began as a small agency practice with a vision to create architecture that harmoniously blends form, function, and sustainability. From our humble beginnings in a small office with just three team members, we have grown into a globally recognized firm with a diverse portfolio of award-winning projects.
							</p>
							<p className="font-Roboto text-md">
								Throughout our journey, we have remained committed to our founding principles: pushing the boundaries of design, prioritizing sustainability, and creating spaces that positively impact the lives of those who use them.
							</p>
						</div>
						<Btn text="Get in Touch" bg="bg-mainGreen hover:bg-mainGreen/90" textColor="text-black hover:scale-103" border="border-none"/>
					</div>
					<div className="flex-1/2">
						<img src="/32.webp" alt="office image" className="h-full w-full rounded-3xl " />
					</div>
				</div>
				<div className="w-10/12 mx-auto ">
					<SectionIntro/>
					{/* GRID IMAGES */}
					<div className="grid grid-cols-3 grid-rows-2 gap-4 mt-10">
						<div className="row-span-2 row-start-1">
							<img src="/about/a1.avif" alt="office image" className="h-full rounded-2xl" />
						</div>
						<div className="">
							<img src="/about/a.avif" alt="office image" className="h-70 w-full rounded-2xl" />
						</div>
						<div className="row-span-2">
							<img src="/about/a3.avif" alt="office image" className="h-full rounded-2xl" />
						</div>
						<div className="">
							<img src="/about/a2.avif" alt="office image" className="h-full rounded-2xl" />
						</div>
						
					</div>
					{/* ICON DESCRIPTIONS */}
					<div className="flex flex-row justify-center gap-20 mt-10">
						<Card name='Integrity' icon={<FaHandshake size={30}/>}/>
						<Card name='Customer-Centered' icon={<AiFillCustomerService size={30}/>}/>
						<Card name='Excellence' icon={<FaTrophy size={30}/>}/>
					</div>
				</div>
				<div className="w-10/12 mx-auto">
					<SectionIntro description="Meet our amazing team behind our excellence"/>
					<div className="grid grid-cols-2 mt-10 gap-y-16">
						<EmployeeCard name='Ethan Carter' position="Social Media Marketer" img="/13.webp"/>
						<EmployeeCard name='Bayanda Dlamini' position="Web Developer" img="/12.webp"/>
						<EmployeeCard name='Bayanda Dlamini' position="Web Developer" img="/about/a5.avif"/>
						<EmployeeCard name='Bayanda Dlamini' position="Web Developer" img="/about/a4.avif"/>
					</div>
					<div className="grid grid-cols-2 gap-3 flex-1/2 font-Poppins mt-10" ref={statsRef}>

						{/* IMCREMENTING STATS */}
						<Stat targetNumber="24+" name="Years of Experinece" isVisible={statsVisible} />
						<Stat targetNumber="200+" name="Competed Projects" isVisible={statsVisible} />
						<Stat targetNumber="100%" name="Customer Satisfaction" isVisible={statsVisible} className='col-span-2'/>
					</div>
				</div>
				<div className="w-10/12 mx-auto">
					<SectionIntro Sectitle="Why We stand out" title="Why Choose Us" description="We believe in perfection with structure"/>
					<div className="grid grid-cols-3 mt-10 gap-y-16">
						<Card name='Niche expertise in hospitality'/>
						<Card name='Content tailored for tourism' icon={<AiFillCustomerService size={30}/>}/>
						<Card name='Proven Growth Strategies' icon={<FaTrophy size={30}/>}/>
						<Card name='100% Satisfaction Guarantee' />
						<Card name='Viral Content Creation' icon={<AiFillCustomerService size={30}/>}/>
						<Card name='Niche expertise in hospitality' icon={<FaTrophy size={30}/>}/>
					</div>
				</div>
			</div>
		</>
		)
}