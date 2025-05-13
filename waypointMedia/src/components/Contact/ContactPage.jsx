import { useContent } from "@/context/ContentContext";
import { NavLink } from "react-router";
import { ContactPageForm } from "./ContactPageForm";

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

export function ContactPage(){

	const content = useContent()
	const quote = {author:'Seth Godin',text:'Marketing is no longer about the stuff you make, buut about the stories you tell.'}
	
	return (
		<>
			<div className="flex h-fit bg-mainGreen ">
				{/* LEFT SIDE */}
				<div className=" flex-1 bg-whiteBg py-10">
					<ContactPageForm/>
				</div>

				{/* RIGHT SIDE */}
				<div className="w-full h-[100%] flex-1 hidden md:block">
					<div className="flex flex-col justify-start items-center m-auto text-black text-2xl font-mono h-full w-10/12 py-20">
						<NavLink to='/' className='mb-10'>
							<img src={content.logoImg} alt="logo" className="w-16 h-16" />
						</NavLink>

						{Quote && <Quote Quote={quote} />} {/* Quote only if it exists */}
					</div>
				</div>
			</div>
		</>
		)
}