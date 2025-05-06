import { NavLink } from "react-router"

export function Logo({ name='WayPoint Media',textColor='text-white text-3xl',bg='bg-mainBg',border='border-black',width='w-55'}){


    return (
        <>
            <NavLink to='/' className={`flex justify-center items-center gap-2 cursor-pointer font-Cal_Sans ${textColor}`} >
                <div>{name}</div>
                <div>
                    <img src="/logo3.svg" alt="logo" className="w-5 h-5"/>
                </div>
            </NavLink>
        </>
    )
}