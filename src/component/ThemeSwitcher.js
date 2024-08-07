import React from 'react';

function ThemeSwitcher({ toggleTheme, theme }) {
    return (
        <label className="switch-container">
            <input 
                type="checkbox" 
                className="switch" 
                onChange={toggleTheme} 
                checked={theme === 'dark'} 
            />
            <span className="slider round"></span>
        </label>
    );
}

export default ThemeSwitcher;
