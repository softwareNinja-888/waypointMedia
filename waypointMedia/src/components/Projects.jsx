import { IoIosArrowForward } from "react-icons/io";
import { MdLinearScale } from 'react-icons/md'

import { Link } from '@tanstack/react-router'
import { Btn } from './helper/Btn'

import { information,createProject } from "../assets/data/data";
import { motion,useInView } from "framer-motion";
import { useRef } from "react";

function LearnMore({title='Learn More',href='services'}){
    return (
        <>
            <Link to={href} id="learn_more" className="flex gap-2 border border-white bg-white w-10/12 justify-center items-center py-3 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-100 transition-all duration-500 ease-in-out hover:bg-gray-200" >
                <span className="text-lg font-inter700 text-black">{title}</span>
                <IoIosArrowForward className=" transform -rotate-40 text-black"  size={24}/>
            </Link>
        </>
    )
}

function ProjectCard({id=0,name='Project Title',img='/0.webp',type="Landing page",gridRows='row-span-5',gridColomns=''}){
        const project  = createProject.getProjectById(id)

        return (
            <>
                <Link to={project.link} target='_blank' className={`flex flex-col gap-5 ${gridRows} ${gridColomns} `}>
                        <div className="">
                            <img src={project.img} alt={`${project.project_name} mockup`} className="cursor-pointer h-70 md:h-70 lg:h-100" />
                        </div>
                        <div className="flex flex-col gap-2 px-2 text-black">
                            <div className="font-Cal_Sans text-2xl text-black">{project.project_name}</div>
                            <div className="flex items-center gap-2 font-Roboto">{project.description}</div>
                        </div>
                </Link>
            </>
        )
}

export function Projects() {
    const topProjects = information[1].projects.slice(0, 4);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid md:grid-cols-2 grid-rows-[repeat(auto)] md:grid-rows-[100px_repeat(5,80px)] px-6 gap-y-18 md:gap-y-10 md:gap-x-10 lg:gap-x-28  py-50 bg-center bg-cover bg-no-repeat" style={{backgroundImage:"url('/bg/shape2.avif')"}}
        >
            {/* Animated heading section */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-6 text-black row-span-3 px-5"
            >
                <div className="text-3xl font-Cal_Sans">Our Work in Action</div>
                <div className="font-Roboto">
                    Browse through our latest projects for a glimpse of what’s possible. Your business’s digital presence could be next in line for a bold transformation
                </div>
                <motion.div>
                  <Link to='/portfolio' className=" ">
                    <Btn text="See Projects" bg="bg-mainGreen border-none" textColor="hidden md:flex text-black text-sm trasition-all duration-500 hover:rounded-xl hover:scale-103 " font="font-Roboto" width='h-11 w-36'/>
                </Link>
                </motion.div>
            </motion.div>

            {/* Animated Project Cards */}
            {topProjects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{scale:1.02}}
                    transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                    className="row-span-5"
                >
                    <ProjectCard id={project.id} />
                </motion.div>
            ))}
        </motion.div>
    );
}
