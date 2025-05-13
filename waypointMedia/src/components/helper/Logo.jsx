import { NavLink } from "react-router"

export function Logo({ name='WayPoint Media',textColor='text-white text-3xl',bg='bg-mainBg',border='border-black',width='w-55',img="/logo3.svg"}){


    return (
        <>
            <NavLink to='/' className={`flex justify-center items-center gap-2 cursor-pointer font-Cal_Sans ${textColor} `} >
                <div className="md:block text-sm lg:text-xl">{name}</div>
                <div>
                    <img src={img} alt="logo" className="w-8 h-8"/>
                </div>
            </NavLink>
        </>
    )
}