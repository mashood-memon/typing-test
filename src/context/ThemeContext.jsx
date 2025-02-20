import { createContext, useContext, useState } from "react";
import { themeOptions } from "../utils/themeOptions";

const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const defaultValue = JSON.parse(localStorage.getItem('theme')) || themeOptions[0].value
    const [theme, setTheme] = useState(defaultValue)
    const values = {
        theme,
        setTheme
    }

    return (<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>)
} 

export const useTheme = () => useContext(ThemeContext)