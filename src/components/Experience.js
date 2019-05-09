import React, { Component } from 'react';
import Nav from "./Nav";
import ICAP from "./ICAP";
import Foodways from "./Foodways";
import Engineering from "./Engineering";

class Experience extends Component {
    constructor() {
        super()
        this.state = {
            icapIsShown: false,
            foodwaysIsShown: false,
            engineeringIsShown: false
        }
    }

    // Toggling Functions
    handleIcapToggled = () => {
        this.setState (() => ({
            icapIsShown: !this.state.icapIsShown
        }))
    };

    handleFoodwaysToggled = () => {
        this.setState(() => ({
            foodwaysIsShown: !this.state.foodwaysIsShown
        }))
    };

    handleEngineeringToggled = () => {
        this.setState(() => ({
            engineeringIsShown: !this.state.engineeringIsShown
        }))
    };

    render() {
        return (
            // EXPERIENCE MAIN STARTS
            <main className="experience-main">

                {/* Section heading */}
                <h1>Experience</h1>

                {/* Nav */}
                <Nav />

                {/* Experience Main Section Container starts */}
                <div className="experience-main-section-container">
                    
                    <div className="experience-overview-container">
                        <p>Professionally, I have been an innovator in International higher education: establishing new international education and research programs within the Ontario government, and creating and directing new international education offices at two universities in Toronto. I was the Ontario government official who negotiated and collaborated with Ontario universities to create the Ontario-Baden-Württemberg Higher Education Student Exchange since 1991.  As a senior manager in international education, I was a founding member of the International Education Training Program (IETP) and continues to teach an online course for Queen’s University, Managing International Education Programs, in the Queen’s International Education Certificate Program in Continuing Education.</p>
                    </div>

                    <div className="awards-container">
                        {/* Section heading */}
                        <h2>Awards:</h2>

                        {/* Awards list */}
                        <ul className="awards-list list-with-bullets">
                            <li className="awards-list-item">
                                Canadian Bureau for International Education Award for Internationalization Service (2002)
                            </li>
                            <li className="awards-list-item">
                                Hohenstaufen Medal, Government of Baden-Württemberg, Germany (2001)
                            </li>
                        </ul>
                    </div>

                    <div className="current-work-container">
                        {/* Section heading */}
                        <h2>What I'm Working On:</h2>

                        <ICAP 
                            handleIcapToggled={this.handleIcapToggled}
                            icapIsShown={this.state.icapIsShown}
                        />

                        <Foodways 
                            handleFoodwaysToggled={this.handleFoodwaysToggled}
                            foodwaysIsShown={this.state.foodwaysIsShown}
                        />

                        <Engineering
                            handleEngineeringToggled={this.handleEngineeringToggled}
                            engineeringIsShown={this.state.engineeringIsShown}
                        />
                    </div>

                {/* Experience Main Section Container ends */}
                </div>

            {/* EXPERIENCE MAIN ENDS */}
            </main>
        )
    }
}

export default Experience;