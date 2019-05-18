import React, { Component } from 'react';

class ICAP extends Component {
    constructor() {
        super()

        this.state = {
            icapIsShown: false
        }
    }

    //Handle toggle
    handleIcapToggled = () => {
        this.setState(() => ({
            icapIsShown: !this.state.icapIsShown
        }))
    };

    render() {
        const icapToggleBar = this.state.icapIsShown ? "hide-show-bar vertical vertical-to-horizontal" : "hide-show-bar vertical";

        return (
            <section className="ICAP-container">

                {/* Heading container starts */}
                <div className="heading-container">
                    <h3 className="hide-show-heading">ICAP</h3>

                    {/* Hide/Show button */}
                    <div className="hide-show-button-container">
                        <button
                            type="button"
                            className="hide-show-button"
                            onClick={this.handleIcapToggled}
                        >
                            <span className="hide-show-bar horizontal "></span>
                            <span className={icapToggleBar}></span>
                        </button>
                    </div>

                {/* Heading container ends */}
                </div>

                {/* Conditionally render section content */}
                {this.state.icapIsShown &&
                    <div className="icap-show-container">
                        <p>I am a founding member and current Secretary of the <span className="bold">Italian-Canadian Archives Program</span>, a national network and national registered charity, to secure the Italian-Canadian contribution to Canada’s narrative, past and present.</p>

                        <p>Please visit <a href="https://icap.ca/" className="link" target="_blank" rel="noopener noreferrer">icap.ca</a> and leave a message if you are interested in participating or have questions.</p>
                    </div>
                }

            </section>
        )
    }
}

export default ICAP;