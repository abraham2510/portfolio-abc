import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className='mt-16'>
            <div className="w-[90%] md:w-[80%] mx-auto mt-30 fade-up">
                <p className="text-[#FFEB00]">
                    THANK YOU FOR TAKING THE TIME TO VISIT MY WEBSITE.
                </p>
                <h1 className="font-[800] leading-[72px] text-[62px]">
                    Let's Work Together
                </h1>
                <p className="text-slate-400">
                    Feel free to reach out if you're looking to hire, just want to connect or
                    see if we can build something amazing together.
                </p>
                <div className="mt-20 text-blur-out hover:text-[#FFEB00]">
                    <a className="getintouch" href="mailto:abrahambillclinton@gmail.com">
                        GET IN TOUCH →
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Contact