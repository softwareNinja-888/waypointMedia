import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GoDotFill } from "react-icons/go";

function ProcessCard({ num = '001', name = "Discovery", title = 'In-Depth discovery to understand your business needs and goals', description = 'We take the time to deeply analyze your vision, industry, and target audience. Our goal is to craft a strategic foundation that aligns perfectly with your objectives, ensuring a strong start to the design process', index = 0 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-20 text-lg md:text-2xl font-Playfair"
        >
            <motion.div 
                className="text-lg md:text-2xl font-Roboto text-center md:text-left"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
            >
                /{num}
            </motion.div>
            
            <motion.div 
                className="text-lg md:text-2xl font-Cal_Sans min-w-40 md:col-span-4 text-center md:text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            >
                {name}
            </motion.div>
            
            <motion.div 
                className="flex flex-col gap-6 md:gap-10 col-span-full"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: index * 0.2 + 0.4 }}
            >
                <div className="font-Cal_Sans text-center md:text-left">{title}</div>
                <div className="text-center md:text-left leading-relaxed">{description}</div>
            </motion.div>
        </motion.div>
    );
}

export function How() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const headerRef = useRef(null);
    
    const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
    const subtitleInView = useInView(subtitleRef, { once: true, margin: "-50px" });
    const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

    const processSteps = [
        {
            num: '001',
            name: 'Free Consultation',
            title: 'In-Depth discovery to understand your business needs and goals',
            description: 'We take the time to deeply analyze your vision, industry, and target audience. Our goal is to craft a strategic foundation that aligns perfectly with your objectives, ensuring a strong start to the design process'
        },
        {
            num: '002',
            name: 'Design',
            title: 'Strategic Roadmap creation for a purposeful and impactful design',
            description: 'We create comprehensive design strategies that align with your brand vision and business objectives, ensuring every element serves a purpose in your overall success.'
        },
        {
            num: '003',
            name: 'Development',
            title: 'High-quality development bringing your vision to life',
            description: 'Our expert developers transform designs into functional, responsive, and optimized solutions using cutting-edge technologies and best practices.'
        },
        {
            num: '004',
            name: 'Launch & Support',
            title: 'Seamless launch with ongoing support and optimization',
            description: 'We ensure a smooth launch process and provide continuous support to maintain peak performance and adapt to your evolving needs.'
        }
    ];

    return (
        <div className="flex flex-col gap-5 py-12 md:py-20 px-4 md:px-5 bg-center bg-cover bg-no-repeat" style={{backgroundImage:"url('/bg/shape2.avif')"}}>
            <motion.div 
                ref={headerRef}
                className="flex justify-center items-center gap-2 text-xl md:text-2xl text-black text-center font-Cal_Sans uppercase"
                initial={{ opacity: 0, y: -30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={headerInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <GoDotFill className='text-mainGreen'/>
                </motion.div>
                How it works
            </motion.div>
            
            <motion.div 
                ref={titleRef}
                className="text-2xl md:text-4xl text-black text-center font-Cal_Sans lg:w-[35%] mx-auto leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
                Easy and Seamless process from request to delivery
            </motion.div>
            
            <motion.div 
                className="flex flex-col mx-auto w-full md:w-10/12 lg:w-9/12 gap-16 md:gap-25 py-12 md:py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {processSteps.map((step, index) => (
                    <ProcessCard 
                        key={step.num}
                        num={step.num}
                        name={step.name}
                        title={step.title}
                        description={step.description}
                        index={index}
                    />
                ))}
            </motion.div>
        </div>
    );
}