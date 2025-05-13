export function GrowthChart(){

    return (

        <div className="flex px-5 lg:px-10 gap-5 py-20"> 
            <div className="hidden md:flex flex-1/3 h-90 ">
                <img src="/17.webp" alt="Person looking at growth chart" className="h-100 rounded-xl"/>
            </div>
            <div className="flex flex-2/3 h-100 rounded-xl bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('/5.webp')"}}>
                <img src="/growth.svg" alt="Growth Chart" className="h-75 w-95 mx-auto my-auto"/>
            </div>
        </div>
    )
}