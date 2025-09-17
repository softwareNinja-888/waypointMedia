import { Link } from '@tanstack/react-router'
import { Btn } from "./helper/Btn";
import { motion } from "framer-motion";

export function Hero({content}) {
    // Container animation for the main hero content box
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.25
            }
        }
    };

    // Animation for individual elements inside the container
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Special animation for the logo section
    const logoVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };



    return (
        <>
            <motion.div 
                className="relative bg-white/30 backdrop-blur-lg p-6 w-11/12 md:w-8/12 lg:w-6/12 mx-auto rounded-4xl my-8 lg:my-20 flex flex-col gap-5 "
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="flex gap-3 justify-center items-center"
                    variants={logoVariants}
                >
                    <motion.img 
                        src={content.logoImg} 
                        alt="" 
                        className="w-10 h-10"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="font-Cal_Sans text-lg">Digital Excellence</div>
                </motion.div>


                <motion.div 
                    className="text-xl md:text-4xl font-Cal_Sans text-center mt-4"
                    variants={itemVariants}
                > 
                    Enter the new age of digital innovation
                </motion.div>

                <motion.div 
                    className="font-Roboto text-center w-12/12 md:w-11/12 mx-auto text-md md:text-md md:my-1"                        
                    variants={itemVariants}
                >

                    {/* Subtext */}
                    
                   Reimagine your digital presence with {content.name}, a forward thinking web agency blending technology, strategy, and storytelling to elevate your brand and drive results.
                </motion.div>

                <div className="flex flex-row justify-center gap-3">
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link to='/portfolio' className="mx-auto block w-fit ">
                            <Btn text="See Projects" bg="bg-mainGreen border-none" textColor="text-black text-sm trasition-all duration-500 hover:rounded-xl hover:scale-103 " font="font-Roboto" width='w-30 h-10 md:h-10 md:w-40'/>
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                       <a href="#services" className="mx-auto block w-fit">
                          <Btn 
                            text="Our Services" 
                            bg="bg-mainGreen border-none" 
                            textColor="text-black text-sm transition-all duration-500 hover:rounded-xl hover:scale-103" 
                            font="font-Roboto" 
                            width="w-30 h-10 md:h-10 md:w-40"
                          />
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </>

    );
}