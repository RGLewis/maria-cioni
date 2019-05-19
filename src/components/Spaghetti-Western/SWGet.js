import React from "react";

const SWGet = () => (
    <div className="get-spaghetti-western">
        <p className="larger-para">Experience Spaghetti Western</p>
        
        <a 
            href="https://www.amazon.ca/Spaghetti-Western-Father-Brought-Italian/dp/B07D9T3D9Z/ref=sr_1_1?keywords=spaghetti+western+maria+cioni&qid=1556996196&s=gateway&sr=8-1-spell" 
            className="sw-get-link" 
            target="_blank"
            rel="noopener noreferrer"
        >
            Amazon
        </a>
        
        <span className="slash">/</span>
        
        <a 
            href="https://www.audible.ca/pd/Spaghetti-Western-Audiobook/B07D9T3L5X" 
            className="sw-get-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            Audible
        </a>

        <span className="slash">/</span>

        <a 
            href="https://itunes.apple.com/ca/audiobook/spaghetti-western-how-my-father-brought-italian-food/id1391039810" 
            className="sw-get-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            iTunes
        </a>
    </div>
)

export default SWGet;