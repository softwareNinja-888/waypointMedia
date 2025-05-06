import { Outlet } from "react-router"
import { Header } from "./Header"
import { Hero } from "./Hero"
import { StickyBar } from './helper/StickyBar'
import { Footer } from "./Footer"
import { useLocation } from "react-router-dom";

export function Layout({content}){
	const location = useLocation();

	return (
		<>
			<div>
				<div className="">
					{location.pathname === '/' ? (
						<>
							<StickyBar/>
							<div className="bg-center bg-cover bg-no-repeat py-3 " style={{backgroundImage: "url('/28.webp')"}}>
							  <Header content={content}/>
							  <Hero content={content} />
							</div>
						</>
						) :  (
							<>
								<StickyBar/>
								<div className="py-3">
									<Header content={content}/>
								</div>
							</>
						)}
				</div>
				<Outlet/>
				<div className="bg-start bg-cover bg-no-repeat py-30  " style={{backgroundImage: "url('/33.webp')"}}>
			        <Footer content={content}/>
				</div>			
			</div>
		</>
	)
}