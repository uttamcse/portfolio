import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl font-bold text-white">
              Online Book Store
            </h4>
            <p className="text-gray-100 mt-2">
              A user-friendly online bookstore where users can log in, view
              books, select, and purchase. Admin can manage the book catalog and
              view sales history.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl font-bold text-white">Travel Chat Bot</h4>
            <p className="text-gray-100 mt-2">
              A Discord bot built using Node.js and MongoDB for managing
              travel-related queries. Integrated with external APIs to fetch
              travel data.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl font-bold text-white">
              E-Commerce Website
            </h4>
            <p className="text-gray-100 mt-2">
              An e-commerce platform developed using the MERN stack with
              Firebase authentication and image upload capabilities.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl font-bold text-white">
              Image Filtering App
            </h4>
            <p className="text-gray-100 mt-2">
              An image filtering app built with React, Node.js, Express, and MongoDB that allows users to upload images and apply filters like brightness,
              contrast, and rotation. Tailwind CSS is used for styling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
