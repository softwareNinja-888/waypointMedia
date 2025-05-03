import { Logo } from './helper/Logo'
import { Btn } from './helper/Btn'
import { AnimatedWord } from './helper/AnimatedWord'
import { NavLink } from "react-router"


function LineHori({size='w-10',border='border-1 border-darkGreen',direction="rotate-90"}){
    return (
        <>
            <hr className={`${size} ${border} ${direction}`}/>
        </>
    )
}
export function SocialProof(){

    return (

        <div className="flex justify-between items-center bg-white/90 backdrop-blur-lg px-10 w-3/12 rounded-2xl mx-auto py-2">
            <LineHori/>
            <div className="font-Cal_Sans">Trusted by Popular Brands</div>
        </div>
    )
}