import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        // HEADER SECTION STARTS
        <header>
            {/* NAV STARTS */}
            <nav>
                {/* Home nav link */}
                <div className="home-link-container">
                    <NavLink
                        to='/'
                        className="home-link">MC</NavLink>
                </div>

                {/* Hamburger menu */}
                <button type="button" className="hamburger-menu menu-button">
                    <span className="bar1 menu-bar"></span>
                    <span className="bar2 menu-bar"></span>
                    <span className="bar3 menu-bar"></span>
                </button>

                {/* Nav List */}
                <ul className="nav-list">
                    <li className="nav-list item">
                        <NavLink
                            to="about"
                            className="nav-link"> About</NavLink>
                    </li>
                    <li className="nav-list item">
                    
                    </li>
                    <li className="nav-list item">
                    
                    </li>
                
                </ul>

            {/* NAV ENDS */}
            </nav>
        {/* HEADER SECTION ENDS */}
        </header>

    )
}

export default Nav;