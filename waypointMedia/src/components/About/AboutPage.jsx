import { Btn } from "../helper/Btn";
import { GoDotFill } from "react-icons/go";
import { useContent } from "@/context/ContentContext";

import { AiFillCustomerService } from "react-icons/ai"
import { FaTrophy,FaSearch, FaSearchDollar, FaPalette, FaCode, FaHandsHelping, FaHandshake } from "react-icons/fa";

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
			<div className={`text-md font-Roboto`}>{description}</div>
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
		<div className="flex flex-col w-full gap-5 bg-white rounded-2xl px-3 py-6 ">
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
				<div className="flex flex-col md:flex-row gap-10 w-11/12 lg:w-10/12 mx-auto  px-0 py-12 rounded-3xl">
					<div className="flex-1/2">
						<div className="text-5xl font-Cal_Sans mb-5">Our Story</div>
						<div className="flex flex-col gap-4 mb-5">



							<p className="font-Roboto text-md">
								Founded in 2025, BluePeak Media was established with a clear mission: to craft premium, highly customizable websites that empower businesses to thrive in this digital age. As a new company, we are driven by the vision to combine cutting edge technology and strategic design into solutions that go beyond aesthetics and deliver measurable results.
							</p>
							<p className="font-Roboto text-md">
								From day one, our commitment has been to create websites that don’t just exist, but high performing websites that reflect the unique identity of each client and ultimately fuel growth. We believe every business deserves a digital presence that inspires trust, communicates value, and positions them for long term success.
							</p>
						</div>
						<Btn text="Get in Touch" bg="bg-mainGreen hover:bg-mainGreen/90" textColor="text-black hover:scale-103" border="border-none"/>
					</div>
					<div className="flex-1/2">
						<img src="/32.webp" alt="office image" className="h-full w-full rounded-3xl " />
					</div>
				</div>
				<div className="w-11/12 md:w-10/12 mx-auto ">
					<SectionIntro/>
					{/* GRID IMAGES */}
					<div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 mt-10">
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
					<div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 lg:gap-20 mt-10">
						<Card 
						  name='Integrity' 
						  icon={<FaHandshake size={30}/>} 
						  description="We uphold honesty and transparency in every project, building trust and long-lasting partnerships with our clients." 
						/>

						<Card 
						  name='Customer Centered' 
						  icon={<AiFillCustomerService size={30}/>} 
						  description="Your goals are at the heart of everything we do, ensuring every solution is tailored to your unique business needs." 
						/>

						<Card 
						  name='Excellence' 
						  icon={<FaTrophy size={30}/>} 
						  description="We are committed to delivering premium websites with the highest standards of quality, performance, and design." 
						/>
					</div>
				</div>
				<div className="w-10/12 mx-auto">
					<div className="grid grid-cols-2 gap-3 flex-1/2 font-Poppins mt-10" ref={statsRef}>
						{/* IMCREMENTING STATS */}
						<Stat targetNumber="100%" name="Responsive Design" isVisible={statsVisible} />
	                    <Stat targetNumber="100%" name="Custom Websites" isVisible={statsVisible} />
	                    <Stat targetNumber="100%" name="Customer Satisfaction" isVisible={statsVisible} className='col-span-2' />
					</div>
				</div>
				<div className="w-10/12 mx-auto">
					<SectionIntro Sectitle="Why We stand out" title="Why Choose Us" description="We believe in perfection with structure"/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-y-8 md:gap-y-16 gap-x-10">	
						<Card 
						  name='Strategic Discovery First' 
						  icon={<FaSearch size={30}/>} 
						  description="We begin every project with an in-depth strategy session to understand your business goals, target audience, and industry, ensuring your website is built on a strong foundation for success." 
						/>

						<Card 
						  name='SEO-Driven Content' 
						  icon={<FaSearchDollar size={30}/>} 
						  description="We craft compelling copy infused with SEO best practices so your website doesn’t just look great, but also ranks well and attracts the right customers to your business." 
						/>

						<Card 
						  name='Custom Premium Design' 
						  icon={<FaPalette size={30}/>} 
						  description="Every website is fully customized to reflect your unique brand identity, delivering a premium look and seamless user experience that sets you apart from competitors." 
						/>

						<Card 
						  name='Cutting Edge Development' 
						  icon={<FaCode size={30}/>} 
						  description="We use modern technologies and best practices to deliver fast, secure, and responsive websites that perform flawlessly across all devices and platforms." 
						/>

						<Card 
						  name='Ongoing Support & Growth' 
						  icon={<FaHandsHelping size={30}/>} 
						  description="We don’t stop at launch. Our team provides continuous support, maintenance, and performance improvements to keep your website growing with your business." 
						/>

						<Card 
						  name='Trusted Premium Partner' 
						  icon={<FaHandshake size={30}/>} 
						  description="We value transparency, collaboration, and long-term relationships, working as your trusted partner in creating digital solutions that drive measurable business growth." 
						/>
					</div>
				</div>
			</div>
		</>
		)
}