import React from 'react'
import projectsData from "../api/projectsData"

const SomeOtherProjects = () => {
    return (
        <section className="py-12 md:py-20 lg:w-[80%] mx-auto">
            <div className='grid grid-cols-1 gap-8 px-4 md:px-20'>
                <div className="flex flex-col justify-start">
                    <p className="text-[#FFEB00]">OTHER PROJECTS</p>
                    <h1 className="font-[800] leading-[72px] text-[36px]">
                        More Projects
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base mt-2 md:mt-4 max-w-2xl">
                        Here are some other projects I've worked on.
                    </p>
                </div>
                <div className="flex overflow-x-auto pb-6 gap-6 scrollbar-hide">
                    {projectsData.map((project) => (
                        <div key={project.id} className="flex-none w-[350px] bg-[#1C1C1C] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.projectImage}
                                    alt={project.projectName}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-3">
                                    {project.projectName}
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {project.projectDesc}
                                </p>
                            </div>
                            <div className="px-6 pb-6">
                                <a
                                    href={project.projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:text-[#FFEB00] transition-colors duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-github"
                                    >
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SomeOtherProjects