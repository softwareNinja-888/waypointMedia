function LineHori({size='w-10',border='border-1 border-darkGreen',direction="rotate-90"}){
    return (
        <>
            <hr className={`${size} ${border} ${direction}`}/>
        </>
    )
}
export function SocialProof(){

    return (

        <div className="flex justify-between items-center md:px-10 w-6/12 md:w-4/12 lg:w-3/12 rounded-2xl md:mx-auto py-2">
            <LineHori/>
            <div className="font-Cal_Sans">Trusted by Popular Brands</div>
        </div>
    )
}