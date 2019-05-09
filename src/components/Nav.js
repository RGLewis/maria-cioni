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
                                to="/"
                                className="nav-link" activeClassName="active-link"
                                exact> Home
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
                                to="/experience"
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