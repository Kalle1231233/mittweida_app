import { useState, useEffect } from 'react';
import '../style/Settings.css';

export default function Settings() {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (
        <div className="settings-page">
            <h2 className="settings-title">Settings</h2>

            <div className="setting-item">
                <label htmlFor="darkModeToggle" className="toggle-label">
                    {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                </label>
                <input
                    type="checkbox"
                    id="darkModeToggle"
                    className="toggle-input"
                    checked={isDarkMode}
                    onChange={() => setIsDarkMode(!isDarkMode)}
                />
            </div>
        </div>
    );
}
