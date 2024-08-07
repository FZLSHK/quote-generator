import React, { useEffect, useState } from 'react';
import QuoteBox from './component/QuoteBox';
import ThemeSwitcher from './component/ThemeSwitcher';
import './index.css';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.classList.add(`${savedTheme}-theme`);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
    };

    return (
        <div className="container">
            <QuoteBox />
            <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
        </div>
    );
}

export default App;
