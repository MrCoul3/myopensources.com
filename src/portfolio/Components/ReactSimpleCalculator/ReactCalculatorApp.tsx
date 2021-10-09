import React, {useContext, useState} from "react";
import {ThemeContext, themes, TypesThemes, TypesTheme } from "../ContextData/Themes";
import Calculator from "./Calculator";


export default function ReactCalculatorApp() {
    const themeValue = useContext<TypesThemes>(ThemeContext); // theme: {}
    const [themeProps, setThemeProps] = useState<TypesTheme>(themeValue.theme); // {}

    function toggleOfTheme() {
        setThemeProps(themeProps === themes.light
            ? themes.dark
            : themes.light
        )
    }

    return (
        <section id='ReactCalculatorApp'>
            <ThemeContext.Provider value={{theme: themeProps, toggleTheme: toggleOfTheme}}>
                <Calculator />
            </ThemeContext.Provider>
        </section>
    );
}