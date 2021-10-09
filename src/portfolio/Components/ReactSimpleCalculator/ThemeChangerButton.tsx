import React, {useContext, useEffect, useState} from "react";
import { ThemeContext } from "../ContextData/Themes";

export default function ThemeChangerButton() {
    const value = useContext(ThemeContext);
    const {background: bg, color} = value.theme;
    const style = {background: bg, color: color};

    return (
        <div className='text-center'>
            <button className='w-50'
                    style={style}
                    onClick={value.toggleTheme}>change theme
            </button>
        </div>
    );
}

