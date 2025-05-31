import React, { useState } from "react";
import { information } from "../../assets/data/data";
import { createProject } from "../../assets/data/data";
import { MdLinearScale } from "react-icons/md";
import { NavLink } from "react-router";
import { Waves } from '../helper/Waves';
import { GoDotFill } from "react-icons/go";

function  PortfolioCard({
  id,
}) {

  const project  = createProject.getProjectById(id)

  return (
    <>
      <NavLink to={project.link} className="flex flex-col gap-3 bg-white px-4 py-10 rounded-2xl">
        <div className="font-Cal_Sans text-2xl">{project.project_name}</div>
        <div className="font-Roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat voluptatum cupiditate pariatur minima optio expedita laudantium dolor voluptatem.</div>
        <div className="">
            <img src={project.img} alt={`${project.project_name} mockup`} className="cursor-pointer h-70 w-full" />
        </div>
      </NavLink>
    </>
  )
}

export function PortfolioPage(){

    const Projects = information[1].projects  

      return (
        <>
          <section className="pt-20 pb-12 lg:pt-[20px] lg:pb-[90px] overflow-hidden bg-center bg-cover bg-no-repeat py-40" style={{backgroundImage:"url('/bg/shape2.avif')"}}>
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <div className="flex justify-center items-center gap-2 text-md font-Cal_Sans mb-5 text-black text-center  uppercase">
                  <GoDotFill className='text-mainGreen'/>
                  Our Portfolio
                </div> 				
                
                <h2 className="text-black  mb-3 text-3xl leading-[1.208] font-Cal_Sans sm:text-4xl md:text-[40px]">
                  Our Most Popular Projects
                </h2>
                <p className="text-black text-base font-Roboto">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
              <div className="grid grid-cols-2 w-11/12 mx-auto gap-x-10 gap-y-10">
                  {Projects.map((project,index)=>{
                    return(
                      <PortfolioCard
                      id={project.id}
                      key={index} 
                      />
                    )
                  })}
              </div>
          </section>
        </>
      );
    };
    
