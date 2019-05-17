import React, { Component } from 'react';

class Engineering extends Component {
    constructor() {
        super()

        this.state = {
            engineeringIsShown: false
        }
    }

    //Toggle function
    handleEngineeringToggled = () => {
        this.setState(() => ({
            engineeringIsShown: !this.state.engineeringIsShown
        }))
    };

    render () {
        const engineeringToggleBar = this.state.engineeringIsShown ? "hide-show-bar vertical vertical-to-horizontal" : "hide-show-bar vertical";

        return (
            <section className="engineering-container">

                {/* Heading container starts */}
                <div className="heading-container">
                    <h3 className="hide-show-heading long-heading">University of Toronto, ECP</h3>

                    {/* Hide/Show button */}
                    <div className="hide-show-button-container">
                        <button
                            type="button"
                            className="hide-show-button"
                            onClick={this.handleEngineeringToggled}
                        >
                            <span className="hide-show-bar horizontal "></span>
                            <span className={engineeringToggleBar}></span>
                        </button>
                    </div>

                {/* Heading container ends */}
                </div>

                {/* Conditionally render section content */}
                {this.state.engineeringIsShown &&
                    <div className="engineering-show-container">
                        <p>Lecturing and advising students in all levels in the Engineering Communications Program (since 2009) enables me to apply my previous experience, communication skills, and a passion for international education and working with students.</p>
                    </div>
                }

            </section>
        )
    }
}

export default Engineering;