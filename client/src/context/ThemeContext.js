


import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext( {
    isDarkTheme : false,
    toggleTheme : () => {}
})

const ThemeContextProvider = ({children}) => {
    const [isDarkTheme , setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        isDarkTheme === "dark" ? setIsDarkTheme("light") : setIsDarkTheme("dark");
    }
    return (
        <ThemeContext.Provider value={{isDarkTheme , toggleTheme}}>
            {children}
            </ThemeContext.Provider>
    )
}


export default ThemeContextProvider