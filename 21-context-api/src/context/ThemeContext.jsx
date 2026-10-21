import React, { createContext } from "react";
import { useState } from "react";

export const ThemeDataContext = createContext();
const ThemeContext = (props) => {
  const [Theme, setTheme] = useState("Light");
  return (
    <ThemeDataContext.Provider value={[Theme, setTheme]}>
      {props.children}
    </ThemeDataContext.Provider>
  );
};

export default ThemeContext;
