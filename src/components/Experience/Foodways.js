import React, { Component } from 'react';

class Foodways extends Component {
    constructor() {
        super()

        this.state = {
            foodwaysIsShown: false
        }
    }

    // Handle toggle
    handleFoodwaysToggled = () => {
        this.setState(() => ({
            foodwaysIsShown: !this.state.foodwaysIsShown
        }))
    };

    render () {
        const foodwaysToggleBar = this.state.foodwaysIsShown ? "hide-show-bar vertical vertical-to-horizontal" : "hide-show-bar vertical";

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
                            onClick={this.handleFoodwaysToggled}
                        >
                            <span className="hide-show-bar horizontal "></span>
                            <span className={foodwaysToggleBar}></span>
                        </button>
                    </div>

                {/* Heading container ends */}
                </div>

                {/* Conditionally render section content */}
                {this.state.foodwaysIsShown &&
                    <div className="foodways-show-container">
                        <p>I am continuing research related to food and culture, which I began when writing my book, <span className="italic">Spaghetti Western</span>. I presented a paper, <span className="italic">Introducing Calgary to Italian Food: The Impact of the First Italian Restaurant</span>, at <span className="bold">ITALIAN FOODWAYS WORLDWIDE: A Conference on the Dispersal of Italian Cuisine(s)</span>, held at York University, October 19 - 21, 2017.  The conference proceedings will be published soon.</p>
                    </div>
                }

            </section>
        )
    }
}

export default Foodways;