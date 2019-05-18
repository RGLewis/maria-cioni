import React from 'react';
import Nav from "../Nav";
import SWAudio from "./SWAudio";
import SWSynopsis from './SWSynopsis';
import SWReviews from './SWReviews';
import SWPrintCover from "../../assets/sw-print-cover.jpeg";

const SpaghettiWestern = () => {
    return (
        // SPAGHETTI WESTERN MAIN STARTS
        <main className="spaghetti-western-main">
            
            {/* Section heading */}
            <h1>Spaghetti Western</h1>

            {/* Nav */}
            <Nav />
            
            {/* SW Main Section Container starts */}
            <div className="sw-main-section-container">

                <div className="print-cover-container">
                    <img src={SWPrintCover} alt="The print cover of 'Spaghetti Western' -- a pair of brown leather cowboy boots with spaghetti inside." className="print-cover" />
                </div>

                {/* Synopsis Container */}
                <div className="sw-info-container">
                    <SWSynopsis />

                    {/* Audio */}
                    <SWAudio />

                    {/* Reviews */}
                    <SWReviews />
                </div>

            {/* SW Main Section Container ends */}
            </div>   

        {/* SPAGHETTI WESTERN MAIN ENDS */}
        </main>
    )
}

export default SpaghettiWestern;