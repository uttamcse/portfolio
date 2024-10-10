import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold text-white">Uttam Yadav</h1>
                <div className="hidden md:flex space-x-6">
                    <a 
                        href="#about" 
                        className="text-white hover:text-yellow-300 transition-colors duration-300"
                    >
                        About
                    </a>
                    <a 
                        href="#skills" 
                        className="text-white hover:text-yellow-300 transition-colors duration-300"
                    >
                        Skills
                    </a>
                    <a 
                        href="#experience" 
                        className="text-white hover:text-yellow-300 transition-colors duration-300"
                    >
                        Experience
                    </a>
                    <a 
                        href="#projects" 
                        className="text-white hover:text-yellow-300 transition-colors duration-300"
                    >
                        Projects
                    </a>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="focus:outline-none text-white hover:text-yellow-300">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
