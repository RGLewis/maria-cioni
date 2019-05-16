import React from "react";

const Foodways = (props) => {
    const foodwaysToggleBar = props.foodwaysIsShown ? "hide-show-bar vertical vertical-to-horizontal" : "hide-show-bar vertical";

    return (
        <section className="foodways-container">

            {/* Heading container starts */}
            <div className="heading-container">
                <h3 className="hide-show-heading">Foodways Research</h3>

                {/* Hide/Show button */}
                <div className="hide-show-button-container">
                    <button
                        type="button"
                        className="hide-show-button"
                        onClick={props.handleFoodwaysToggled}
                    >
                        <span className="hide-show-bar horizontal "></span>
                        <span className={foodwaysToggleBar}></span>
                    </button>
                </div>

            {/* Heading container ends */}
            </div>

            {props.foodwaysIsShown &&
                <div className="foodways-show-container">
                <p>Stemming from the research that I did for my book, <span className="italic">Spaghetti Western</span>, I am continuing research related to food and culture. I presented a paper, <span className="italic">Introducing Calgary to Italian Food: The Impact of the First Italian Restaurant</span>, at <span className="bold">ITALIAN FOODWAYS WORLDWIDE: A Conference on the Dispersal of Italian Cuisine(s)</span>, held at York University, October 19 - 21, 2017. The conference proceedings will be published soon.</p>
                </div>
            }

        </section>
    )
}

export default Foodways;