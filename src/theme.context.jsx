import { createContext, useContext, useEffect, useState } from "react";

export const themeContext = createContext();

export const useTheme = () => {
  return useContext(themeContext);
};
export const ThemeProvider = ({ children }) => {
  const [isdarkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!isdarkMode);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Theme);
  }, [isdarkMode]);
  const Theme = isdarkMode ? "dark" : "light";
  return (
    <themeContext.Provider value={{ Theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
