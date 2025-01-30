import { useState } from "react";

const App = () => {
  const [light, setLight] = useState(true);

  const toggleDarkMode = () => {
    setLight(!light);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen ${
        light ? "bg-gray-300" : "bg-gray-900"
      }`}
    >
      <button
        onClick={toggleDarkMode}
        className={`border-2 p-4 ${
          light
            ? "bg-white border-black rounded-xl hover:bg-black hover:text-white hover:border-white"
            : "bg-black border-white text-white rounded-xl hover:bg-white hover:text-black hover:border-black"
        }`}
      >
        {light ? "Dark Mode" : "Light Mode"}
      </button>
      <h1
        className={`${
          light ? "text-purple-600" : "xl:text-black"
        } m-8 text-3xl font-bold underline sm:text-red-600 md:text-blue-600 lg:text-green-400 `}
      >
        Hello
      </h1>
      <div
        className={`${
          light
            ? "bg-white text-black text-5xl border-black"
            : "bg-black text-white border-white"
        } border-4 p-32`}
      >
        div
      </div>
    </div>
  );
};

export default App;
