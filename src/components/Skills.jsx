

import React from 'react';
import { FaJava, FaPython, FaReact, FaNodeJs, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiSpringboot, SiHibernate, SiMysql, SiMongodb, SiExpress, SiPostman } from 'react-icons/si';

const Skills = () => {
    return (
        <section id="skills" className="bg-white py-20">
            <div className="container mx-auto">
                <h3 className="text-4xl font-bold text-center mb-6 text-blue-500">Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-800">
                    {/* Each skill card */}
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <FaJava className="text-5xl text-blue-600 mb-2" />
                        <p>Java</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <FaPython className="text-5xl text-yellow-500 mb-2" />
                        <p>Python</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <SiHtml5 className="text-5xl text-orange-600 mb-2" />
                        <p>HTML</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <SiCss3 className="text-5xl text-blue-500 mb-2" />
                        <p>CSS</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <SiTailwindcss className="text-5xl text-teal-500 mb-2" />
                        <p>Tailwind</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <SiJavascript className="text-5xl text-yellow-400 mb-2" />
                        <p>JavaScript</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <SiSpringboot className="text-5xl text-green-600 mb-2" />
                        <p>Spring Boot</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <SiHibernate className="text-5xl text-blue-700 mb-2" />
                        <p>Hibernate</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <SiMysql className="text-5xl text-blue-500 mb-2" />
                        <p>MySQL</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <SiMongodb className="text-5xl text-green-500 mb-2" />
                        <p>MongoDB</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <FaReact className="text-5xl text-blue-500 mb-2" />
                        <p>React</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <FaNodeJs className="text-5xl text-green-500 mb-2" />
                        <p>Node</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <SiExpress className="text-5xl text-gray-700 mb-2" />
                        <p>Express</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <SiPostman className="text-5xl text-orange-500 mb-2" />
                        <p>Postman</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <FaAws className="text-5xl text-orange-400 mb-2" />
                        <p>AWS</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <FaGitAlt className="text-5xl text-red-600 mb-2" />
                        <p>GIT</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

