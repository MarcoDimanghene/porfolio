import { useState } from "react";
import { darkTheme, lightTheme } from "./theme";


export const useThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const theme = isDarkMode ? darkTheme : lightTheme;

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return { theme, toggleTheme, isDarkMode };
};