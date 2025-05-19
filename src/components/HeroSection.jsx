import React from 'react'

const HeroSection = () => {
    return (
        <>
            <header id="home" className="py-12 md:py-20">
                <div className="w-[90%] md:w-[80%] mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="flex flex-col justify-center text-hero animate-fadeInLeft delay-100 space-y-4 md:space-y-6">
                        <h1 className="font-[800] text-4xl sm:text-[45px] md:text-[62px] leading-tight md:leading-[72px]">
                            Abraham Bill Clinton
                        </h1>
                        <p className="text-slate-400 text-sm md:text-base max-w-xl">
                            JFSD Developer who specializes in building exceptional digital
                            experience.
                        </p>
                        <div className="pt-2">
                            <a
                                className="group relative inline-block overflow-hidden border border-[#FFEB00] px-6 md:px-8 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-[#FFEB00] focus:ring-offset-2 focus:ring-offset-black transition-all duration-300"
                                href="mailto:abrahambillclinton@gmail.com"
                            >
                                <span className="absolute inset-y-0 left-0 w-[2px] bg-[#FFEB00] transition-all group-hover:w-full" />
                                <span className="relative text-sm md:text-base font-medium text-[#FFEB00] transition-colors group-hover:text-black">
                                    HIRE ME
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0 flex items-center justify-center">
                        <img
                            className="animate-fadeIn w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
                            src="https://ik.imagekit.io/c2zxrxqp6/portfolio-assets/openart-0c8dd545-f2df-4d3f-97cb-c84dd513ff32.png?updatedAt=1744095018501"
                            alt="computer-img"
                        />
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeroSection