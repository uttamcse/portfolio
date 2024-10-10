import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 h-screen flex flex-col items-center justify-center">
            <div className="text-center text-white space-y-6">
                <h1 className="text-6xl font-extrabold tracking-wide animate-bounce">
                    Hello, I'm <span className="text-yellow-400">Uttam Yadav</span>
                </h1>
                <p className="text-2xl font-light max-w-lg mx-auto">
                    Full Stack Developer | Passionate about building beautiful web experiences
                </p>
               
            </div>
            {/* Footer text for the Hero section */}
            
        </section>
    );
};

export default Hero;
