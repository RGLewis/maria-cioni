import React from "react";

const SWReviews = (props) => {
    const reviewsToggleBar = props.reviewsIsShown ? "hide-show-bar vertical vertical-to-horizontal" : "hide-show-bar vertical";

    return (
        // Reviews Section starts
        <section className="reviews-container">

            {/* Reviews Heading container starts */}
            <div className="heading-container sw-heading-container">
                <h3 className="hide-show-heading">Reviews</h3>

                {/* Hide/Show button */}
                <div className="hide-show-button-container">
                    <button
                        type="button"
                        className="hide-show-button"
                        onClick={props.handleReviewsToggled}
                    >
                        <span className="hide-show-bar horizontal "></span>
                        <span className={reviewsToggleBar}></span>
                    </button>
                </div>
            
            {/* Reviews heading container ends */}
            </div>

            {props.reviewsIsShown &&
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
            }
            
        {/* Reviews section ends */}
        </section>
    )
}

export default SWReviews;