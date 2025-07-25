import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="container mx-auto">
                <h3 className="text-4xl font-bold text-center mb-12 text-blue-600">Experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {/* EkamTek Experience */}
                    <div className="bg-gradient-to-r from-indigo-500 to-blue-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 col-span-1 md:col-span-2">
                        <h4 className="text-2xl font-semibold text-white">Backend Developer | EkamTek</h4>
                        <p className="text-gray-200 italic">Software, Dec 2024 – Current | Noida</p>
                        <ul className="list-disc list-inside mt-4 text-gray-100">
                            <li>Developed a stock recommendation app enabling research analysts to share investment suggestions with investors.</li>
                            <li>Integrated Cashfree payment gateway for secure, seamless transactions.</li>
                            <li>Built a custom CMS using Vue.js to manage content and analyst recommendations.</li>
                            <li>Enabled real-time communication using Socket.io between investors and analysts.</li>
                            <li>Designed role-based access control for analysts and investors.</li>
                            <li>Optimized backend APIs for quick data retrieval and secure access.</li>
                            <li>Ensured responsive UI of CMS for smooth experience across desktop and mobile devices.</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h4 className="text-2xl font-semibold text-white">Software Developer</h4>
                        <p className="text-gray-200 italic">AscentHR, Bangalore — Mar 2024 - Oct 2024</p>
                        <ul className="list-disc list-inside mt-4 text-gray-100">
                            <li>Developed and maintained scalable web applications using the MERN stack.</li>
                            <li>Created RESTful APIs and integrated front-end components with backend logic.</li>
                            <li>Optimized application performance for a smooth user experience.</li>
                            <li>Utilized Git for version control and implemented CI/CD pipelines.</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h4 className="text-2xl font-semibold text-white">Internship , Python</h4>
                        <p className="text-gray-200 italic">IIT BHU, Varanasi — Dec 2022 - July 2023</p>
                        <ul className="list-disc list-inside mt-4 text-gray-100">
                            <li>I collaborated on various projects involving data analysis and web development, utilizing frameworks such as Flask and Django</li>
                            <li> I gained hands-on experience in writing efficient Python scripts for automation and data processing. </li>
                            <li>I participated in code reviews and learned best practices for software development.</li>
                            <li>This internship enhanced my problem-solving skills and deepened my understanding of Python programming.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Experience;
