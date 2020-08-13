import React from 'react';

export const Header = () => {
    return (
    <div>
        <section id="banner" class="major">
            <div class="inner">
                <header class="major">
                    <h1>Soccer Central</h1>
                </header>
                <div class="content">
                    <p>‎‎‎ THE BEST SOURCE FOR EVERYTHING A-LEAGUE RELATED.</p>
                    <ul class="actions">
                        <li><a href="#one" class="button next scrolly">VIEW TEAMS</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <div>
            <header id="header" className="alt">
                <a href="index.html" className="logo"><strong>SOCCER</strong> <span>CENTRAL</span></a>
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
    </div>
)};

