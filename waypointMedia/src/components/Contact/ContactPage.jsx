import { useContent } from "@/context/ContentContext";
import { Link } from '@tanstack/react-router'
import { ContactPageForm } from "./ContactPageForm";
import {AiFillStar} from 'react-icons/ai'

import { FaPhone } from "react-icons/fa6" 
import { IoMdMail } from "react-icons/io" 
import { SlCalender } from "react-icons/sl" 



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
            <div className="flex flex-col gap-8 border-2 border-secondaryGreen bg-white w-110 h-58 px-3 py-5 rounded-2xl -rotate-3">
                <StarRating rating={5}/>
                <div className="">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vel quo aperiam in fugiat at et rem ."</div>
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
					<div className="text-md font-Cal_Sans">{name}</div>
				</div>
				<div className="">
					{actionText}
				</div>
			</div>
		</>
	)
}

export function ContactPage(){

	const content = useContent()
	const quote = {author:'Seth Godin',text:'Marketing is no longer about the stuff you make, buut about the stories you tell.'}
	
	return (
		<>
			<div className="flex h-fit px-20 bg-center bg-cover bg-no-repeat py-0" style={{backgroundImage:"url('/bg/shape2.avif')"}}>

				{/* LEFT SIDE */}
				<div className="flex flex-col gap-10 mt-30">
					<div className="">
						<div className="text-3xl font-Cal_Sans uppercase">Get in touch with us</div>
						<div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officia.</div>
						<div className="flex flex-col gap-4 mt-3">
							<ContactCards />
							<ContactCards name="infoemail@gmail.com" icon={<IoMdMail/>} actionText="Send A Message"/>
							<ContactCards name="infoemail@gmail.com" icon={<SlCalender/>} actionText="Book Consultation"/>
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