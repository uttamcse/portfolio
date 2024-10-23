import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          {/* Movie Review App */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl font-bold text-white">Movie Review App</h4>
            <p className="text-gray-100 mt-2">
              A MERN stack movie review app allows users to browse and review
              movies, with features like user authentication, rating, and
              commenting. It uses MongoDB for storing reviews, Express.js and
              Node.js for the backend API, and React.js for the interactive
              frontend.
            </p>
            <p className="text-gray-100 mt-2">
              <a
                href="https://github.com/uttamcse/movie-review.git"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-200 hover:text-blue-400"
              >
                GitHub Repository
              </a>{" "}
              |{" "}
              <a
                href="https://bertflix.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-200 hover:text-blue-400"
              >
                Live Project
              </a>
            </p>
          </div>

          {/* My Portfolio */}
          <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl font-bold text-white">My Portfolio</h4>
            <p className="text-gray-100 mt-2">
              I have built a personal portfolio website using React, showcasing
              my skills, projects, and experience in web development. The
              portfolio features a responsive design, smooth navigation, and
              interactive elements to highlight my work. It also includes
              sections for contact details and links to my GitHub and LinkedIn
              profiles.
            </p>
            <p className="text-gray-100 mt-2">
              <a
                href="https://github.com/uttamcse/portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-200 hover:text-blue-400"
              >
                GitHub Repository
              </a>{" "}
              |{" "}
              <a
                href="https://portfolio-uttam-yadavs-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-200 hover:text-blue-400"
              >
                Live Project
              </a>
            </p>
          </div>

          {/* E-Commerce Website */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl font-bold text-white">E-Commerce Website</h4>
            <p className="text-gray-100 mt-2">
              An E-Commerce website built using the MERN stack, featuring user
              authentication, product listings, and a shopping cart. The
              application utilizes MongoDB for database management, Express.js
              and Node.js for the backend, and React.js for a dynamic frontend
              experience. It includes functionalities like user registration,
              product search, and order processing, providing a seamless
              shopping experience.
            </p>
            <p className="text-gray-100 mt-2">
              <a
                href="https://github.com/uttamcse/e-commerce-using-mern-.git"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-200 hover:text-blue-400"
              >
                GitHub Repository
              </a>{" "}
              |{" "}
              <a
                href="https://mern-ecommerce-frontend-gamma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-200 hover:text-blue-400"
              >
                Live Project
              </a>
            </p>
          </div>

          {/* Image Filtering App */}
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-xl font-bold text-white">
              Image Filtering App
            </h4>
            <p className="text-gray-100 mt-2">
              An Image Filtering App developed using the MERN stack that allows
              users to upload images and apply various filters like brightness,
              contrast, and rotation. The application leverages MongoDB for
              storing images, while Express.js and Node.js handle the backend
              processing, and React.js provides an interactive user interface.
              With a responsive design and Tailwind CSS for styling, users can
              easily enhance their images with real-time previews.
            </p>
            <p className="text-gray-100 mt-2">
              <a
                href="https://github.com/uttamcse/ImagePro.git"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-200 hover:text-blue-400"
              >
                GitHub Repository
              </a>{" "}
              |{" "}
              <a
                href="https://image-pro-sigma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-200 hover:text-blue-400"
              >
                Live Project
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
