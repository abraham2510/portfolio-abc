import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin, CiMail, CiSaveDown2 } from "react-icons/ci";
import ThemeToggle from './ThemeToggle';

const HeroSection = () => {
    return (
        <>
            <header id="home" className="py-12 md:py-20 w-[80%] mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 items-center'>
                    <div className='order-2 md:order-1 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
                        <div className='align-middle space-y-4'>
                            <p className='text-[#FFEB00]'>Front-End Developer</p>
                            <h1 className='text-3xl md:text-4xl font-semibold'>Hi, I'm ABRAHAM BILL CLINTON</h1>
                            <p className='text-slate-400 leading-relaxed max-w-lg'>Front-End Developer skilled in React.js, HTML, CSS, and Tailwind CSS, with backend experience in Java and Spring Boot. I build responsive UIs and integrate REST APIs for full-stack web apps.</p>
                            <div className="mt-4 flex flex-wrap justify-center md:justify-start items-center gap-4 text-slate-400">
                                <a href="https://github.com/abraham2510" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#FFEB00] transition-colors duration-300">
                                    <FaGithub size={25} />
                                    <span className="text-sm font-medium">GitHub</span>
                                </a>
                                <span className="hidden md:inline text-slate-400">•</span>
                                <a href="https://www.linkedin.com/in/abraham-bill-clinton/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#FFEB00] transition-colors duration-300">
                                    <CiLinkedin size={25} />
                                    <span className="text-sm font-medium">LinkedIn</span>
                                </a>
                                <span className="hidden md:inline text-slate-400">•</span>
                                <a href="mailto:abrahambillclinton@gmail.com" className="inline-flex items-center gap-2 hover:text-[#FFEB00] transition-colors duration-300">
                                    <CiMail size={25} />
                                    <span className="text-sm font-medium">Email</span>
                                </a>
                                <span className="hidden md:inline text-slate-400">•</span>
                                <a href="/Abraham_Bill_Clinton_Resume.pdf" download className="inline-flex items-center gap-2 hover:text-[#FFEB00] transition-colors duration-300">
                                    <CiSaveDown2 size={25} />
                                    <span className="text-sm font-medium">Resume</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='order-1 md:order-2 flex justify-center items-center w-full'>
                        <img
                            src="https://ik.imagekit.io/c2zxrxqp6/portfolio-assets/AbcImage.png?updatedAt=1750059910074"
                            alt="Profile"
                        />
                    </div>
                    <ThemeToggle />
                </div>
            </header>
        </>
    )
}

export default HeroSection