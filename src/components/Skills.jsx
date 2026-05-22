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
    <section style={{ backgroundColor: "#0000FF" }} className="py-10 px-4">

      {/* Main white container */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border">

        {/* Title */}
        <div className="mb-8 text-center">
          <h2 style={{ color: "#0000FF" }} className="text-4xl font-extrabold">
            Skills
          </h2>

          <div
            style={{ backgroundColor: "#0000FF" }}
            className="w-24 h-1 rounded-full mx-auto mt-2"
          ></div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 justify-center">

          {skills.map((skill, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#0000FF" }}
              className="text-white px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="font-semibold text-sm">{skill}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;