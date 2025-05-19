import React from 'react'

const About = () => {
    return (
        <>
            <section id="about" className="py-12 md:py-20">
                <div className="w-full bg-[#1C1C1C] h-max">
                    <div className="2xl:container mx-auto">
                        <div className="w-[90%] md:w-[80%] mx-auto py-12 md:py-20">
                            <div className="w-full md:w-[80%] lg:w-[70%] mx-auto space-y-6 md:space-y-8">
                                <div className="space-y-4">
                                    <p className="text-[#FFEB00] text-sm md:text-base">WHO IS ABRAHAM BILL CLINTON</p>
                                    <h1 className="font-[800] text-4xl sm:text-[45px] md:text-[62px] leading-tight md:leading-[72px]">
                                        A Bit About Me
                                    </h1>
                                </div>
                                <div className="space-y-6 md:space-y-8">
                                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                                        I'm a beginner web developer with hands-on experience in building
                                        real-world projects, currently focused on Java Full Stack
                                        Development (JFSD). I enjoy solving problems and creating clean,
                                        user-friendly digital experiences.
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                                        As part of my JFSD journey, I've been learning and working with
                                        technologies like Core Java, Spring Boot, HTML, CSS, JavaScript, and
                                        database management. I've applied these skills in projects that
                                        reflect my ability to connect frontend and backend systems into
                                        seamless applications.
                                    </p>
                                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                                        I'm passionate about learning, building, and constantly improving.
                                        Whether it's writing maintainable code or exploring new tools, I'm
                                        always excited to take on new challenges and grow as a developer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About