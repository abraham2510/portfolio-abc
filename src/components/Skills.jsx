import React, { useEffect } from 'react'

const Skills = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe all elements with fade-up and fade-in classes
        document.querySelectorAll('.fade-up, .fade-in').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="py-12 md:py-20 lg:w-[80%] mx-auto">
            <div className='grid grid-cols-1 gap-8 px-4 md:px-20'>
                <div className="flex flex-col justify-start fade-up">
                    <p className="text-[#FFEB00]">MY SKILLS</p>
                    <h1 className="font-[800] leading-[72px] text-[36px] ">
                        Technologies I Work With
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base mt-2 md:mt-4 max-w-2xl">
                        I'm passionate about deciphering challenging problems and creating
                        exceptional digital experience.
                    </p>
                </div>
                <div>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 py-10">
                        <li className="fade-in">HTML &amp; CSS</li>
                        <li className="fade-in">Tailwind CSS</li>
                        <li className="fade-in">Javascript</li>
                        <li className="fade-in">React</li>
                        <li className="fade-in">Git</li>
                        <li className="fade-in">Java</li>
                        <li className="fade-in">SpringBoot</li>
                        <li className="fade-in">PostMan</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills