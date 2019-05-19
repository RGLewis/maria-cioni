import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            menuIsClosed: true
        }
    }

    //Toggling function
    handleMenuToggled = () => {
        this.setState(() => ({
            menuIsClosed: !this.state.menuIsClosed
        }))
    };

    render() {
        // Toggle for Bar 1
        const barToggled1 = this.state.menuIsClosed ? "menu-bar" : "menu-bar transform-bar1";

        // Toggle for Bar 2
        const barToggled2 = this.state.menuIsClosed ? "menu-bar" : "menu-bar transform-bar2";

        // Toggle for Bar 3
        const barToggled3 = this.state.menuIsClosed ? "menu-bar" : "menu-bar transform-bar3";

        // Toggle for Nav
        const navToggled = this.state.menuIsClosed ? "nav-list" : "nav-list show-nav-list";

        return (
            // HEADER SECTION STARTS
            <header>
                {/* NAV STARTS */}
                <nav>
                    {/* Hamburger menu */}
                    <button 
                        type="button" 
                        className="hamburger-menu menu-button"
                        onClick={this.handleMenuToggled}
                    >
                        
                        <span className={barToggled1}></span>

                        <span className={barToggled2}></span>

                        <span className={barToggled3}></span>

                    </button>
    
                    {/* Nav List */}
                    <ul className={navToggled}>
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