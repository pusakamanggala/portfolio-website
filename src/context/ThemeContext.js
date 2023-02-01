import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = React.useState(false);

  const ThemeToggle = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, ThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
