import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto p-6 bg-blue-50 shadow-md rounded-lg mt-6"
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-600">
        Contact Me
      </h2>

      <div className="space-y-2 text-lg text-blue-700">
        <p>
          Email:{" "}
          <a
            href="mailto:yourmail@example.com"
            className="underline hover:text-blue-900 transition-colors duration-300"
          >
            yourmail@example.com
          </a>
        </p>

        <p>
          Phone:{" "}
          <a
            href="tel:+910000000000"
            className="underline hover:text-blue-900 transition-colors duration-300"
          >
            +91 0000000000
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;