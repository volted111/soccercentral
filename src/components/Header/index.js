import React from 'react';

export const Header = () => {
    return (
        <div>
            <header id="header" className="alt">
                <a href="index.html" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <nav id="menu">
                <ul className="links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="landing.html">Landing</a></li>
                    <li><a href="generic.html">Generic</a></li>
                    <li><a href="elements.html">Elements</a></li>
                </ul>
            </nav>
        </div>
    );
};

