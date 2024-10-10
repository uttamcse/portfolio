import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-gradient-to-r from-blue-300 to-blue-500 py-20">
            <div className="container mx-auto flex flex-col items-center px-4">
                <h3 className="text-4xl font-bold text-white mb-4">About Me</h3>
                <p className="text-lg text-gray-100 leading-relaxed max-w-2xl text-center">
                    I am a passionate Full Stack Developer with a Bachelor of Technology in Computer Science. 
                    My expertise lies in building scalable web applications using the MERN stack and Java. 
                    I am constantly learning and adapting to new technologies to create seamless user experiences. 
                    I enjoy problem-solving and am committed to delivering high-quality code.
                </p>
                <div className="mt-8 bg-blue rounded-lg shadow-lg p-6 max-w-md w-full">
                    <h4 className="text-2xl font-semibold text-gray-800 mb-2">Interests</h4>
                    <p className="text-gray-700">
                        In my free time, I love exploring new technologies, contributing to open-source projects, and enhancing my skills through online courses. 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
