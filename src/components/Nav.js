import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            showHamburger: false
        }
    }

    render() {
        return (
            // HEADER SECTION STARTS
            <header>
                {/* NAV STARTS */}
                <nav>
                    {/* Home nav link */}
                    <div className="home-link-container">
                        <NavLink
                            to='/'
                            className="home-link"
                            activeClassName="active-link">MC</NavLink>
                    </div>
    
                    {/* Hamburger menu */}
                    <button type="button" className="hamburger-menu menu-button">
                        <span className="bar1 menu-bar"></span>
                        <span className="bar2 menu-bar"></span>
                        <span className="bar3 menu-bar"></span>
                    </button>
    
                    {/* Nav List */}
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <NavLink
                                to="/about"
                                className="nav-link" activeClassName="active-link"> About
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink
                                to="/spaghetti-western"
                                className="nav-link" activeClassName="active-link"> Spaghetti Western
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink
                                to="/professional-highlights"
                                className="nav-link" activeClassName="active-link"> Experience
                            </NavLink>
                        </li>
                    
                    </ul>
    
                {/* NAV ENDS */}
                </nav>
            {/* HEADER SECTION ENDS */}
            </header>
        )
    } 
}

export default Nav;