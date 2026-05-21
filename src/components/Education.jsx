import React from "react";

const Education = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-white border border-blue-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
        
        {/* Heading */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-10 bg-blue-600 rounded-full"></div>
          <h2 className="text-4xl font-extrabold text-blue-700 tracking-wide">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 hover:bg-blue-100 transition duration-300">
          
          <h3 className="text-2xl font-semibold text-gray-800">
            Diploma in Computer Engineering
          </h3>

          <p className="mt-2 text-lg text-blue-700 italic">
            Government Women’s Polytechnic College (GWPTC), Kaimanam
          </p>

          {/* Optional details */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
              Computer Engineering
            </span>

            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
              Polytechnic
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;