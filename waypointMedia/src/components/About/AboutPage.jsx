import { Btn } from "../helper/Btn";
import { useContent } from "@/context/ContentContext";


export function AboutPage(){

	const content = useContent()

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
						<img src="/about/a.avif" alt="office image" className="h-full w-full rounded-3xl " />
					</div>
				</div>
				<div className="w-10/12 mx-auto bg-red-700">
					<div className="">
						<div className="">About Us</div>
						<div className="">
							Great Team & Values
						</div>
						<div className="">
							Connecting you with the perfect property for every need
						</div>
					</div>
					{/* GRID IMAGES */}
					<div className="">
						<img src="" alt="office image" className="" />
					</div>
					{/* ICON DESCRIPTIONS */}
					<div className=""></div>
				</div>
			</div>
		</>
		)
}