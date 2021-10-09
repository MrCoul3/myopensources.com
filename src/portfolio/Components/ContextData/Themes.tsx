import React from "react";

export const themes = {
    light: {
        background: '#f9fafb',
        color: 'black'
    },
    dark: {
        background: '#393838',
        color: 'white'
    },
};

export type TypesTheme = {
    background: string;
    color: string;
    toggleTheme?: () => void;
};

export type TypesThemes = {
    theme: {
        background: string
        color: string
    }
    toggleTheme: () => void;
}

export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {}
});
