import { IoIosArrowForward } from "react-icons/io";
import { MdLinearScale } from 'react-icons/md'

import { NavLink } from "react-router";
import { information,createProject } from "../assets/data/data";
import { motion } from "framer-motion";

function LearnMore({title='Learn More',href='services'}){
    return (
        <>
            <NavLink to={href} id="learn_more" className="flex gap-2 border border-white bg-white w-10/12 justify-center items-center py-3 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-100 transition-all duration-500 ease-in-out hover:bg-gray-200" >
                <span className="text-lg font-inter700 text-black">{title}</span>
                <IoIosArrowForward className=" transform -rotate-40 text-black"  size={24}/>
            </NavLink>
        </>
    )
}
function ProjectCard({id=0,name='Project Title',img='/0.webp',type="Landing page",gridRows='row-span-5',gridColomns=''}){
        const project  = createProject.getProjectById(id)

        return (
            <>
                <NavLink to={project.link} target='_blank' className={`flex flex-col gap-5 ${gridRows} ${gridColomns} `}>
                        <div className="">
                            <img src={project.img} alt={`${project.project_name} mockup`} className="cursor-pointer" />
                        </div>
                        <div className="px-5 text-blue-600">
                            <div className="flex items-center gap-2"><MdLinearScale className=''/>{project.type}</div>
                            <div className="font-Cal_Sans text-2xl text-black">{project.project_name}</div>
                        </div>
                </NavLink>
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
            className="grid md:grid-cols-2 grid-rows-[repeat(auto)] md:grid-rows-[100px_repeat(10,80px)] px-6 gap-y-6 gap-x-8 py-50 bg-center bg-cover bg-no-repeat" style={{backgroundImage:"url('/bg/shape2.avif')"}}
        >
            {/* Animated heading section */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-6 text-black row-span-3 px-5"
            >
                <div className="text-xl font-Cal_Sans text-blue-600">Portfolio</div>
                <div className="text-3xl font-Cal_Sans">Check out our popular projects</div>
                <div className="font-Poppins">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati suscipit porro asperiores numquam magnam enim voluptatibus, a explicabo. Aliquid mollitia obcaecati deleniti nisi natus temporibus ducimus odit officia pariatur quasi.
                </div>
                <motion.div>
                    <NavLink 
                        to='/portfolio' 
                        id="learn_more" 
                        className="flex gap-2 bg-mainGreen w-6/12 justify-center items-center py-3 transition-all duration-500 ease-in-out  text-black hover:scale-101 hover:rounded-sm"
                    >
                        <span className="text-lg font-Roboto">See Projects</span>
                        <IoIosArrowForward  size={16} />
                    </NavLink>
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
