import { GoDotFill } from "react-icons/go";

function ProcessCard({num='001',name="Discovery",title='In-Depth discovery to understand your business needs and goals',description='We take the time to deeply analyze your vision, industry, and target audience. Our goal is to craft a strategic foundation that aligns perfectly with your objectives, ensuring a strong start to the design process'}){
    return (
        <>
            <div className="grid grid-cols-5 gap-20 text-2xl font-Playfair">
                <div className="text-2xl font-Roboto">/{num}</div>
                <div className="text-2xl font-Cal_Sans min-w-40 col-span-4">{name}</div>
                <div className="flex flex-col gap-10 col-span-full">
                    <div className="font-Cal_Sans">{title}</div>
                    <div className="">{description}</div>
                </div>
            </div>
        </>
    )
}

export function How() {
    return (
        <>
            <div className="flex flex-col gap-5 py-20 px-5 md:px-0 bg-center bg-cover bg-no-repeat" style={{backgroundImage:"url('/bg/shape2.avif')"}}>
                <div className="flex justify-center items-center gap-2 text-2xl text-black text-center font-Cal_Sans uppercase">
                    <GoDotFill className='text-mainGreen'/>
                    How it works
                </div> 
                <div className="text-4xl text-black text-center font-Cal_Sans lg:w-[35%] mx-auto">Easy and Seamless process from request to delivery</div>
                <div className="flex flex-col mx-auto w-12/12 md:w-9/12 gap-25 py-20">
                    <ProcessCard name='Free Consultation'/>
                    <ProcessCard num='002' name="Design" title='Strategic Roadmap creation for a purposeful and impactful design'/>
                    <ProcessCard num='003'/>
                    <ProcessCard num='004'/>

                </div>
            </div>
        </>
    ); 
}