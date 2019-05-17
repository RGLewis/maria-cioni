import React from 'react';
import Nav from "../Nav";
import PublishedWorks from "./PublishedWorks";
import ICAP from "./ICAP";
import Foodways from "./Foodways";
import Engineering from "./Engineering";

const Experience = () => {
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
                    <p>My professional strengths are innovation, facilitation and collaboration. Some examples include: Establishing new international education and research programs within the Ontario government (negotiating and implementing the Ontario-Baden-Württemberg Higher Education Student Exchange operating since 1991); and directing newly created international education offices at two Toronto universities, initiating several of the universities’ key institutional partnerships for research and exchange.</p>

                    <p>As a consultant in international education, I was a founding member of and trainer in the International Education Training Program (IETP), Queen’s University and I continue to teach <span className="bold">Managing International Education Programs</span>, an online course in the Queen’s University International Education Certificate Program in Continuing Education.</p>
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

                    {/* Component container Maria's work */}
                    <PublishedWorks />
                    <ICAP />
                    <Foodways />
                    <Engineering />
                </div>

            {/* Experience Main Section Container ends */}
            </div>

        {/* EXPERIENCE MAIN ENDS */}
        </main>
    )
}

export default Experience;