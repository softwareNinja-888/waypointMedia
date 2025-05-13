import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";



function Card({img='/bg/11.avif',name="Coast Villa"}){
    return (
        <>
           <div className="relative group ">
                <div className="overflow-hidden aspect-w-1 aspect-h-1 h-90 w-full group-hover:rounded-2xl transition-all duration-500 ease-in-out">
                    <img className="object-cover w-full h-90 transition-all duration-300 hover:scale-125 cursor-pointer" src={img} alt={`${name} image`} loading='lazy' />
                </div>
                <div className="flex lg:opacity-0 items-center justify-between border border-white bg-white py-2 text-xl font-Cal_Sans absolute bottom-5 w-11/12 h-20 rounded-xl px-5 mx-auto right-6 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
                    <div>
                        {name}
                    </div>
                    <div>
                        <IoIosArrowForward className="text-black"/>
                    </div>
                </div>
           </div>
        </>
    )
}

export function Gallery() {
    return (
        <>
            <div className="flex flex-col gap-10 py-40" >
                <div className="flex justify-center gap-2 text-6xl text-black text-center font-Cal_Sans uppercase">
                    Gallery                        
                  </div> 
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-center items-center w-11/12 lg:w-11/12 gap-18 md:gap-3">

                    <Card name="Coast Villa" img="/bg/11.avif"/>
                    <Card name="Peak House" img="/bg/12.avif"/>
                    <Card name="Oasis Residence" img="/bg/13.avif"/>
                    <Card name="Zen Haven" img="/bg/14.avif"/>
                </div>

            </div>
        </>
    );
}