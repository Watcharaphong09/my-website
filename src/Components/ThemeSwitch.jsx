import React, { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeSwitch = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if(window.matchMedia("prefer-color-scheme: dark").matches){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <button onClick={handleThemeSwitch}
        className='text-black bg-slate-300 rounded-lg p-2'>
            {theme === "dark" ? <BsFillSunFill/> : <BsFillMoonFill/>}
        </button>
    );
};

export default ThemeSwitch;