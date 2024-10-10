import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p className="mb-4">
                &copy; 2024 Uttam Yadav
            </p>
            <div className="flex justify-center space-x-4">
                <a href="mailto:uttamcseau@gmail.com" className="flex items-center hover:text-yellow-400">
                    <FaEnvelope className="mr-1" /> Email: uttamcseau@gmail.com
                </a>
                <a href="https://github.com/uttamcse" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-yellow-400">
                    <FaGithub className="mr-1" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/uttam-yadav/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-yellow-400">
                    <FaLinkedin className="mr-1" /> LinkedIn
                </a>
            </div>
        </footer>
    );
};

export default Footer;
