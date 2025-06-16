import React from 'react'

const Project = () => {
    return (
        <section id="projects" className="py-12 md:py-20 lg:w-[80%] mx-auto">
            <div className='grid grid-cols-1 gap-8 px-4 md:px-20'>
                <div className="flex flex-col justify-start">
                    <p className="text-[#FFEB00]">PROJECTS</p>
                    <h1 className="font-[800] leading-[72px] text-[36px]">
                        Featured Projects
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base mt-2 md:mt-4 max-w-2xl">
                        Here are some of my notable projects that showcase my skills and experience.
                    </p>
                </div>

                {/* project - 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-32 items-center">
                    <div className="relative group">
                        <a
                            href="https://cyberpunk-abc.netlify.app"
                            target="_blank"
                            className="block overflow-hidden rounded-lg"
                        >
                            <img
                                className="h-[350px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src="https://ik.imagekit.io/c2zxrxqp6/portfolio-assets/135042-3840x2160-desktop-4k-cyberpunk-2077-background-image.jpg?updatedAt=1747647294028"
                                alt="food store"
                            />
                        </a>
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-[40px] text-slate-400">01</h1>
                        <h1 className="font-[800] text-[40px] leading-tight">
                            Cyberpunk Recreation Website
                        </h1>
                        <p className="text-slate-300 leading-7">
                            This is a frontend recreation of a cyberpunk-themed website.
                            Built with React and Tailwind CSS, it focuses on replicating a futuristic UI.
                            The project was created for learning and practicing modern web development.
                            It features responsive design, smooth animations, and custom visuals.
                            This is not a portfolio site, but a design and code recreation.
                        </p>
                        <div className="pt-4">
                            <a
                                href="https://github.com/abraham2510/cyberpunk"
                                target="_blank"
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
                </div>

                {/* project - 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-32 items-center">
                    <div className="lg:order-2 relative group">
                        <a
                            href="https://find-movies-abc.netlify.app"
                            target="_blank"
                            className="block overflow-hidden rounded-lg"
                        >
                            <img
                                className="h-[350px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src="https://ik.imagekit.io/c2zxrxqp6/portfolio-assets/Movie-App.png?updatedAt=1750067414562"
                                alt="course"
                            />
                        </a>
                    </div>
                    <div className="lg:order-1 space-y-6">
                        <h1 className="text-[40px] text-slate-400">02</h1>
                        <h1 className="font-[800] text-[40px] leading-tight">
                            Find Movies App
                        </h1>
                        <p className="text-slate-300 leading-7">
                            The Find Movies App is a React-based web application that allows users to search for movies in real-time. It fetches movie data from an external API and displays it in an organized, card-style layout. Users can browse through trending titles, view poster images, and get essential details at a glance. Built with Tailwind CSS for responsive design and deployed on Netlify, the app ensures fast and seamless performance across devices.
                        </p>
                        <div className="pt-4">
                            <a
                                href="https://github.com/abraham2510/Course-and-Banking-Management-System"
                                target="_blank"
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
                </div>

                {/* project - 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-center">
                    <div className="relative group">
                        <a
                            href="https://github.com/abraham2510/Railway-Reservation-System"
                            target="_blank"
                            className="block overflow-hidden rounded-lg"
                        >
                            <img
                                className="h-[350px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src="https://ik.imagekit.io/c2zxrxqp6/portfolio-assets/railway.jpg?updatedAt=1744095018702"
                                alt="railway"
                            />
                        </a>
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-[40px] text-slate-400">03</h1>
                        <h1 className="font-[800] text-[40px] leading-tight">
                            Railway Reservation System
                        </h1>
                        <p className="text-slate-300 leading-7">
                            The Railway Reservation System is a backend RESTful API application
                            built using Java and Spring Boot, designed to manage train
                            schedules, passenger information, and ticket reservations. It
                            provides endpoints for creating and managing trains, passengers, and
                            bookings, including features like route-based train search, seat
                            availability checks, and reservation status updates.
                        </p>
                        <div className="pt-4">
                            <a
                                href="https://github.com/abraham2510/Railway-Reservation-System"
                                target="_blank"
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
                </div>
            </div>
        </section>
    )
}

export default Project