import React, { useEffect } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = React.useState(false);

  useEffect(() => {
    // Check if user's browser theme preference is dark
    const prefersDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Check if a theme preference is stored in local storage
    const storedDarkMode = localStorage.getItem("darkMode");

    // Set the theme based on the stored preference or user's browser theme
    setDark(
      storedDarkMode === "true" || (storedDarkMode === null && prefersDarkTheme)
    );

    // Clear the theme preference from local storage when the browser is closed
    window.onbeforeunload = () => {
      localStorage.removeItem("darkMode");
    };
  }, []);

  const ThemeToggle = () => {
    setDark(!dark);
  };

  useEffect(() => {
    // Store the theme preference in local storage
    localStorage.setItem("darkMode", dark.toString());
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, ThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
