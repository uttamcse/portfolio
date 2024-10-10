import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-gray-50 py-20 shadow-lg">
            <div className="container mx-auto flex flex-col items-center px-4">
                <h3 className="text-4xl font-bold text-blue-600 mb-4">About Me</h3>
                <p className="text-lg text-gray-100  bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg leading-relaxed max-w-2xl text-center transition-transform transform hover:scale-105">
                    I am a passionate Full Stack Developer with a Bachelor of Technology in Computer Science. 
                    My expertise lies in building scalable web applications using the MERN stack and Java. 
                    I am constantly learning and adapting to new technologies to create seamless user experiences. 
                    I enjoy problem-solving and am committed to delivering high-quality code.
                </p>
                <div className=" bg-gradient-to-r from-green-400 to-blue-500  p-6 rounded-lg shadow-lg max-w-md w-full mt-8 transition-transform transform hover:scale-105">
                    <h4 className="text-2xl font-semibold text-white mb-2">Interests</h4>
                    <p className="text-gray-100">
                        In my free time, I love exploring new technologies, contributing to open-source projects, and enhancing my skills through online courses. 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
