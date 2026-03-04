import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              setColor("gray");
            }}
          >
            Gray
          </button>
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              setColor("orange");
            }}
          >
            Orange
          </button>
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              setColor("teal");
            }}
          >
            Teal
          </button>
          <button
            className="bg-cyan-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              setColor("cyan");
            }}
          >
            Cyan
          </button>
          <button
            className="bg-lime-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              setColor("lime");
            }}
          >
            Lime
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
