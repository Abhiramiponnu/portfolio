import React from "react";

function Showdata({ users }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      
      <h1 className="text-5xl font-extrabold text-center text-white mb-12">
        Photos
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-xl hover:scale-105 transition duration-300"
          >
            <h2 className="text-lg font-bold text-white mb-4 line-clamp-2">
              {user.title}
            </h2>

            <img
            src={`https://picsum.photos/seed/${user.id}/400/300`}
            alt={user.title}
            loading="lazy"
            className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showdata;