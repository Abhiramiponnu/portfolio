import React from "react";

function Home() {
  return (
    <header
      id="home"
      className="bg-white flex flex-col justify-center items-center text-center p-12 rounded-lg shadow-md max-w-3xl mx-auto mt-6"
    >
      <p className="text-lg sm:text-xl text-blue-700 mb-2">
        Welcome To My Portfolio
      </p>

      <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
        ABHIRAMI
      </h1>

      <p className="text-md sm:text-lg text-blue-700">
        Frontend Developer | React Developer
      </p>
    </header>
  );
}

export default Home;