import { NavLink } from "react-router";
import { AnimatedWord } from "./helper/AnimatedWord";
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

    // Subtle hover animation for the entire hero section
    const heroHoverVariants = {
        hover: {
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.5 }
        }
    };

    return (
        <>
                <motion.div 
                    className="relative bg-white/30 backdrop-blur-lg p-6 w-11/12 md:w-8/12 lg:w-6/12 mx-auto rounded-4xl my-8 lg:my-20 flex flex-col gap-5"
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
                        className="text-4xl font-Cal_Sans text-center"
                        variants={itemVariants}
                    > 
                        Enter the new age of digital innovation
                    </motion.div>

                    <motion.div 
                        className="font-inter text-center w-10/12 mx-auto"                        
                        variants={itemVariants}
                    >

                      {/* Subtext */}
                        Reimagine your digital presence with {content.name} —
                        where next-gen technologies meet design.
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <NavLink to='/products' className="mx-auto block w-fit px-6 py-2 transition-all bg-white hover:bg-mainGreen border-none hover:rounded-xl duration-1500 ease-in-out">
                            <AnimatedWord word='Get Free Consultation' textColor="text-black" font='font-Inter' textSize="text-md"/>
                        </NavLink>
                    </motion.div>
                </motion.div>
        </>

    );
}