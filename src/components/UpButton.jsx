import React, { useEffect } from 'react';
import './upbutton.css';

const UpButton = () => {
    useEffect(() => {
        const handleScroll = () => {
            const button = document.getElementById("upbutton");
            if (window.scrollY > 500) {
                button.classList.add("showbutton");
            } else {
                button.classList.remove("showbutton");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <button id="upbutton" onClick={handleClick}>
                ↑
            </button>
        </div>
    );
};

export default UpButton;
