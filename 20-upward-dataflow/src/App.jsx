
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#111827" :
      theme === "light" ? "#f8fafc" : "#e0f2fe";

    document.body.style.transition = "background-color 0.4s ease";
  }, [theme]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "light"
          ? "bg-slate-50 text-gray-900"
          : "bg-sky-100 text-slate-800"
      }`}
    >
      <Navbar theme={theme} setTheme={setTheme} />

    </div>
  );
};

export default App;
