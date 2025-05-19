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
        <section id="skills">
            <div className="w-full h-max">
                <div className="w-[90%] md:w-[80%] mx-auto flex flex-col justify-start py-10 fade-up">
                    <p className="text-[#FFEB00]">MY SKILLS</p>
                    <h1 className="font-[800] leading-[72px] sm:text-[55px] md:text-[62px]">
                        Technologies I Work With
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base mt-2 md:mt-4 max-w-2xl">
                        I'm passionate about deciphering challenging problems and creating
                        exceptional digital experience.
                    </p>
                </div>
            </div>
            <div className="w-[90%] md:w-[80%] mx-auto">
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
        </section>
    )
}

export default Skills