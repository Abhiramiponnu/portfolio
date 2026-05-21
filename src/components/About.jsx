import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-xl transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          About Me
        </h2>

        <p className="text-lg text-blue-800 leading-relaxed mb-6">
          I am a passionate web developer who builds modern, responsive, and
          user-friendly web applications using React. I love creating projects
          that make a real impact and are fun to use. I’m always learning and
          exploring new technologies to improve my craft.
        </p>

        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Connect with me:
        </h3>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition-colors duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition-colors duration-300"
          >
            LinkedIn
          </a>

          <a
            href="mailto:youremail@example.com"
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition-colors duration-300"
          >
            Email Me
          </a>

          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition-colors duration-300"
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;