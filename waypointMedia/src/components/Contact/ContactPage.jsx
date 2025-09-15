import { useContent } from "@/context/ContentContext";
import { Link } from '@tanstack/react-router'
import { ContactPageForm } from "./ContactPageForm";
import {AiFillStar} from 'react-icons/ai'

import { FaPhone } from "react-icons/fa6" 
import { IoMdMail } from "react-icons/io" 
import { SlCalender } from "react-icons/sl" 

import { Btn } from '../helper/Btn'



export function Quote({Quote}){

    return (
        <>
            <blockquote className="flex flex-col gap-3 font-Playfair">
                &#34;{Quote.text}&#34;
                <footer className='text-lg font-Roboto'>- {Quote.author}</footer>
            </blockquote>
        </>
    )
}

function StarRating({rating}){
    const totalStars = 5;

    return (
        <div className="flex">
            {[...Array(totalStars)].map((_,index)=>(
                <AiFillStar key={index} size={24} className={index < rating ? 'text-yellow-400': 'text-gray-400'}/>
            ))}
        </div>
    )
}


function ReviewCard(){

    return (
        <>
            <div className="hidden lg:flex flex-col gap-8 border-4 border-mainGreen bg-white w-110 h-68 px-3 py-5  -rotate-3 mt-10">
                <StarRating rating={5}/>
                <div className="">"BluePeak Media did a great job on our website. It looks professional and has already helped us reach more cients. Really happy with the outcome!"</div>
                <div className="flex gap-2">
                    <img src="/9.webp" alt="" className="w-13 h-13 rounded-full" />
                    <div className="flex flex-col text-sm justify-center ">
                        <div className="">John Doe</div>
                        <div className="">Co-Founder, Apple</div>
                    </div>
                </div>

            </div>
        </>
    )
}

function ContactCards({name='+268 7845 1276',icon=<FaPhone/>,actionText='Call Now'}){
	return(
		<>
			<div className="bg-white flex flex-row justify-between px-3 py-5 rounded-2xl">
				<div className="flex items-center gap-3">
					<div className="">
						{icon}
					</div>
					<div className="text-sm lg:text-md font-Cal_Sans">{name}</div>
				</div>
				 <Btn text={actionText} bg="bg-mainGreen border-none" textColor="text-black text-sm trasition-all duration-500 hover:rounded-xl hover:scale-103 " font="font-Roboto" width='w-30 h-10 md:h-10 md:w-40'/>
			</div>
		</>
	)
}

export function ContactPage(){

	const content = useContent()
	const quote = {author:'Seth Godin',text:'Marketing is no longer about the stuff you make, buut about the stories you tell.'}
	
	return (
		<>
			<div className="flex flex-col lg:flex-row h-fit px-0 md:px-20 bg-center bg-cover bg-no-repeat py-0" style={{backgroundImage:"url('/bg/shape2.avif')"}}>

				{/* LEFT SIDE */}
				<div className="flex flex-col gap-10 mt-30 w-11/12 lg:w-6/12 mx-auto">
					<div className="">
						<div className="text-3xl font-Cal_Sans uppercase">Get in touch with us</div>
						<div className="">Have a question or an idea? Let’s connect and make it happen.</div>
						<div className="flex flex-col gap-4 mt-3">
							<ContactCards  name="+268 78381430" actionText="Call Now"/>
							<ContactCards name="serviceinfo@bluepeak.com" icon={<IoMdMail/>} actionText="Email"/>
						</div>
					</div>
					<ReviewCard/>
				</div>
				{/* RIGHT SIDE */}
				<div className=" flex-1 bg-whiteBg py-10">
					<ContactPageForm/>
				</div>

			
			</div>
		</>
		)
}