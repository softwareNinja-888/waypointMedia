import React, { useState } from "react";
import { information } from "../../assets/data/data";
import { createProject } from "../../assets/data/data";
import { MdLinearScale } from "react-icons/md";
import { NavLink } from "react-router";
import { Waves } from '../helper/Waves';


export function  PortfolioCard({
    id,
    showCard,
    underConstruction=false
  }) {

    const project  = createProject.getProjectById(id)
    
    
    return (
      <>
        <div
          className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
            showCard === "all" || showCard === project.type.toLowerCase()
              ? "block"
              : "hidden"
          }`}
        >
           <NavLink to={project.link} target='_blank' className={`flex flex-col gap-5`}>
                    <div className="">
                        <img src={project.img} alt={`${project.project_name} mockup`} className="cursor-pointer h-96 w-90" />
                    </div>
                    <div className="px-5 text-blue-600">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2 font-Inter"><MdLinearScale className=''/>{project.type}</div>
                          <div className="text-black font-inter900">{underConstruction ? 'Site under development': ''}</div>
                        </div>
                        <div className="font-Roboto text-xl text-black">{project.project_name}</div>
                    </div>
            </NavLink>
        </div>
      </>
    );
  };


export function PortfolioPage(){
      const [showCard, setShowCard] = useState("all");
    
      const handleProject = (type) => {
        setShowCard(type);
      };


    const Projects = information[1].projects
    const types = ['All',...new  Set(Projects.map(item => item.type))];
    const numberOfProjectsCompleted = 3;
    console.log(types.map(type=>type.toLowerCase()))
    
      return (
        <>
          <section className="pt-20 pb-12 lg:pt-[20px] lg:pb-[90px] bg-gradient-to-t from-mainGreen to-[#f8f7f5] overflow-hidden">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                    <span className="text-primary mb-2 block text-lg font-semibold">
                      Our Portfolio
                    </span>
                    <h2 className="text-black font-Cal_Sans mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                      Our Recent Projects
                    </h2>
                    <p className="text-black text-base dark:text-dark-6">
                      There are many variations of passages of Lorem Ipsum available
                      but the majority have suffered alteration in some form.
                    </p>
                  </div>
                </div>
              </div>
    
              <div className="w-full flex flex-wrap justify-center -mx-4">
                <div className="w-full px-4">
                  <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                    {types.map((type,index)=>{
                      return (
                        <li className="mb-1" key={index}>
                          <button
                            onClick={() => handleProject(`${type.toLowerCase()}`)}
                            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-inter600 transition duration-500 ease-in md:py-3 lg:px-8 cursor-pointer ${
                              showCard === type.toLowerCase()
                                ? "activeClasses bg-mainGreen text-black"
                                : "inactiveClasses text-black  hover:bg-mainGreen"
                            }`}
                          >
                            {type}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap  items-center mx-10 gap-y-20">
                
                  {Projects.map((project,index)=>{
                    return(
                      <PortfolioCard
                      id={project.id}
                      showCard={showCard} 
                      key={index} 
                      underConstruction={index >= numberOfProjectsCompleted}
                      />
                    )

                  })}
              </div>
            </div>
          </section>
          <Waves waveColor='bg-mainGreen'  bgColor='#F8F7F5' inverse={true}/>
        </>
      );
    };
    
