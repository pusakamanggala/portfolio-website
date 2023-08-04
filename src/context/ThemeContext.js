import React, { useEffect } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = React.useState(() => {
    // Check if a theme preference is stored in local storage
    const storedDarkMode = localStorage.getItem("darkMode");

    // Return the stored preference if it exists, or default to false
    return storedDarkMode === "true";
  });

  const setDarkModePreference = (value) => {
    // Set the theme preference in local storage
    localStorage.setItem("darkMode", value.toString());
    // Update the state
    setDark(value);
  };

  useEffect(() => {
    // Check if a theme preference is stored in local storage
    const storedDarkMode = localStorage.getItem("darkMode");

    // Set the theme based on the stored preference or user's browser theme
    if (storedDarkMode === null) {
      const prefersDarkTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkModePreference(prefersDarkTheme);
    }
  }, []);

  const ThemeToggle = () => {
    setDarkModePreference(!dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, ThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
