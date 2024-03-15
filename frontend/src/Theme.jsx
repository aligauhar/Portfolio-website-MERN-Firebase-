// Theme.jsx
import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "dark-theme");
    localStorage.setItem(
      "gradiant",
      "linear-gradient(41deg, rgba(118,219,201,1) 0%, rgba(26,53,79,1) 47%, rgba(98,21,134,1) 100%)"
    );
    return "dark-theme";
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);
  const [gradiant, setGradient] = useState(
    localStorage.getItem("gradiant") || getTheme()
  );

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark-theme" ? "light-theme" : "dark-theme"));
  }

  function toggleGradiant() {
    setGradient((prevGradient) =>
      prevGradient ===
      "linear-gradient(41deg, rgba(118,219,201,1) 0%, rgba(26,53,79,1) 47%, rgba(98,21,134,1) 100%)"
        ? "linear-gradient(41deg, rgba(0,44,255,1) 0%, rgba(8,9,25,1) 47%, rgba(153,12,31,1) 100%)"
        : "linear-gradient(41deg, rgba(118,219,201,1) 0%, rgba(26,53,79,1) 47%, rgba(98,21,134,1) 100%)"
    );
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("gradiant", gradiant);
  }, [theme, gradiant]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        gradiant,
        toggleGradiant,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
