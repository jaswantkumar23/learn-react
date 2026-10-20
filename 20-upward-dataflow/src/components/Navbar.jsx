
import React from "react";

const Navbar = ({ theme, setTheme }) => {
  const themes = [
    { name: "light", label: "Light", icon: "" },
    { name: "dark", label: "Dark", icon: "" },
    { name: "default", label: "Default", icon: "" },
  ];

  return (
    <nav className="flex flex-col items-center justify-between gap-4 border-b border-current/10 px-6 py-5 sm:flex-row md:px-12">
      <h2 className="text-2xl font-extrabold tracking-tight">
        <span className="text-cyan-500">Jaswant</span> Kumar
      </h2>

      <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-current/10 bg-white/10 p-2">
        {themes.map((item) => (
          <button
            key={item.name}
            onClick={() => setTheme(item.name)}
            className={`rounded-xl px-4 py-2 font-semibold transition-all duration-300 hover:scale-105 ${
              theme === item.name
                ? "bg-cyan-600 text-white shadow-md"
                : "hover:bg-current/10"
            }`}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
