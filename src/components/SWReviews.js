import React from "react";

const SWReviews = () => (
    // Quotes container starts
    <div className="quotes-container">
        
        {/* Heading */}
        <h4><span className="underline">Reviews & Praise</span></h4>
        
        <ul className="quotes-list">
            <li className="quotes-list-item">
                <blockquote className="quote">"There is a powerful sense of the sweep of time and an anchoring in the spirit of place. A revelation."</blockquote>
                <p className="quote-attribute">— Margaret Visser, author of <span className="bold">The Rituals of Dinner</span></p>
            </li>

            <li className="quotes-list-item">
                <blockquote className="quote">“(Cioni) brings to life an era when diners had to hide their booze whenever the police came in to eat.”</blockquote>
                <p className="quote-attribute">— Alberta Venture</p>
            </li>
            
            <li className="quotes-list-item">
                <blockquote className="quote">  “A mighty fine read.”</blockquote>
                <p className="quote-attribute">— The Calgary Herald, Nov. 5 2006</p>
            </li>
        </ul>
    {/* Quotes Container ends */}
    </div>
)

export default SWReviews;