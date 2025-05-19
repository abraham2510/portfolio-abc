import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="2xl:container mx-auto">
                <div className="w-[90%] md:w-[80%] mx-auto hidden md:block md:mt-6 lg:mt-10">
                    <nav className="w-full mx-auto flex justify-between items-center rounded-lg mt-4 animate-fadeInDown delay-100 bg-[#1C1C1C]/50 backdrop-blur-sm p-4">
                        <div className="px-4">
                            <img
                                className="h-[50px] lg:h-[60px] rounded-full transition-transform hover:scale-105"
                                src="https://ik.imagekit.io/c2zxrxqp6/portfolio-assets/WhatsApp%20Image%202025-04-08%20at%2009.18.56.png?updatedAt=1744095018671"
                                alt="logo"
                            />
                        </div>
                        <ul className="flex gap-8 lg:gap-14 text-[14px] px-4 font-light navclick">
                            <li>
                                <a href="#skills" className="hover:text-[#FFEB00] transition-colors duration-300">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-[#FFEB00] transition-colors duration-300">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-[#FFEB00] transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-[#FFEB00] transition-colors duration-300">
                                    About
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* mobile nav wrapper */}
                <div className="w-[90%] mx-auto md:hidden mb-6">
                    {/* nav bar */}
                    <nav className="w-full flex justify-between items-center rounded-lg mt-4 animate-fadeInDown delay-100 bg-[#1C1C1C]/50 backdrop-blur-sm p-4">
                        {/* logo */}
                        <div className="px-2">
                            <img
                                className="h-[40px] rounded-full transition-transform hover:scale-105"
                                src="https://ik.imagekit.io/c2zxrxqp6/portfolio-assets/WhatsApp%20Image%202025-04-08%20at%2009.18.56.png?updatedAt=1744095018671"
                                alt="logo"
                            />
                        </div>
                        {/* menu icon */}
                        <div className="px-2">
                            <button onClick={toggleMenu} className="text-white hover:text-[#FFEB00] transition-colors duration-300">
                                {isMenuOpen ? (
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
                                        className="lucide lucide-circle-x-icon"
                                    >
                                        <circle cx={12} cy={12} r={10} />
                                        <path d="m15 9-6 6" />
                                        <path d="m9 9 6 6" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={28}
                                        height={28}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-menu-icon"
                                    >
                                        <line x1={4} x2={20} y1={12} y2={12} />
                                        <line x1={4} x2={20} y1={6} y2={6} />
                                        <line x1={4} x2={20} y1={18} y2={18} />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </nav>
                    {/* nav links (hidden by default on mobile) */}
                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } bg-[#1C1C1C]/90 backdrop-blur-sm rounded-lg shadow-lg px-4 py-4 mt-2 transition-all duration-300`}
                    >
                        <ul className="text-[14px] font-light flex justify-center items-center flex-col gap-y-6">
                            <li>
                                <a href="#skills" className="hover:text-[#FFEB00] transition-colors duration-300" onClick={toggleMenu}>
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-[#FFEB00] transition-colors duration-300" onClick={toggleMenu}>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-[#FFEB00] transition-colors duration-300" onClick={toggleMenu}>
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-[#FFEB00] transition-colors duration-300" onClick={toggleMenu}>
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar