import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Git & GitHub",
    "C Programming",
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-blue-100 to-blue-200 py-10 px-4"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">

        {/* Title */}
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold text-blue-700 tracking-wide">
            Skills
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mt-2"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-2xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="text-lg font-semibold text-blue-700">
                {skill}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;