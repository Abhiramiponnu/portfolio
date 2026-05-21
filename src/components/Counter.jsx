import React, { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("component mounted");
  }, [number]);

  function increment() {
    setNumber(number * number); // square the number
  }

  function decrement() {
    if (number > 0) {
      setNumber(Math.sqrt(number)); // square root
    }
  }

  function reset() {
    setNumber(0); // reset back to 0
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
      <h1 className="text-8xl font-extrabold text-white mb-10 drop-shadow-lg">
        {number}
      </h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
        className="px-4 py-2 rounded-lg mb-6 text-black"
      />

      <div className="flex gap-5 flex-wrap justify-center">
        <button
          onClick={increment}
          className="px-7 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105 active:scale-95"
        >
          ➕ Increment (Square)
        </button>

        <button
          onClick={decrement}
          className="px-7 py-3 bg-green-400 text-black font-bold rounded-full shadow-lg hover:bg-green-300 transition transform hover:scale-105 active:scale-95"
        >
          ➖ Decrement (Square Root)
        </button>
4
        <button
          onClick={reset}
          className="px-7 py-3 bg-red-500 text-white font-bold rounded-full shadow-lg hover:bg-red-400 transition transform hover:scale-105 active:scale-95"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
