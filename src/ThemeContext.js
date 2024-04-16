import React, { createContext, useState, useContext } from 'react';

// Create a context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);


    const toggleMode = () => {
        console.log(darkMode);
        
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to consume the theme context
export const useTheme = () => {
    return useContext(ThemeContext);
};
