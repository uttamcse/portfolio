import React from 'react';
import { FaJava, FaPython, FaReact, FaNodeJs, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiSpringboot, SiHibernate, SiMysql, SiMongodb, SiExpress, SiPostman } from 'react-icons/si';

const Skills = () => {
    return (
        <section id="skills" className="bg-white py-20">
            <div className="container mx-auto">
                <h3 className="text-4xl font-bold text-center mb-6 text-blue-500">Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-800">
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <FaJava className="text-5xl text-blue-600 mb-2" />
                        <p>Java</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <FaPython className="text-5xl text-yellow-500 mb-2" />
                        <p>Python</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <SiHtml5 className="text-5xl text-orange-600 mb-2" />
                        <p>HTML</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <SiCss3 className="text-5xl text-blue-500 mb-2" />
                        <p>CSS</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <SiTailwindcss className="text-5xl text-teal-500 mb-2" />
                        <p>Tailwind</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <SiJavascript className="text-5xl text-yellow-400 mb-2" />
                        <p>JavaScript</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <SiSpringboot className="text-5xl text-green-600 mb-2" />
                        <p>Spring Boot</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <SiHibernate className="text-5xl text-blue-700 mb-2" />
                        <p>Hibernate</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <SiMysql className="text-5xl text-blue-500 mb-2" />
                        <p>MySQL</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <SiMongodb className="text-5xl text-green-500 mb-2" />
                        <p>MongoDB</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <FaReact className="text-5xl text-blue-500 mb-2" />
                        <p>React</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <FaNodeJs className="text-5xl text-green-500 mb-2" />
                        <p>Node</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <SiExpress className="text-5xl text-gray-700 mb-2" />
                        <p>Express</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <SiPostman className="text-5xl text-orange-500 mb-2" />
                        <p>Postman</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <FaAws className="text-5xl text-orange-400 mb-2" />
                        <p>AWS</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                        <FaGitAlt className="text-5xl text-red-600 mb-2" />
                        <p>GIT</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
