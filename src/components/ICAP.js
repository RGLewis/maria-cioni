import React from "react";

const ICAP = (props) => {
    const icapToggleBar = props.icapIsShown ? "hide-show-bar vertical vertical-to-horizontal" : "hide-show-bar vertical";

    return (
        <section className="ICAP-container">

            {/* Heading container starts */}
            <div className="heading-container">
                <h3>Italian-Canadian Archives Program (ICAP)</h3>

                {/* Hide/Show button */}
                <button
                    type="button"
                    className="hide-show-button"
                    onClick={props.handleIcapToggled}
                >
                    <span className="hide-show-bar horizontal "></span>
                    <span className={icapToggleBar}></span>
                </button>
            {/* Heading container ends */}
            </div>

            {props.icapIsShown &&
                <div className="icap-show-container">
                    <p>Maria is a founding member and Secretary of the Italian-Canadian Archives Program, a national network and national registered charity, securing the Italian-Canadian contribution to Canada’s narrative, past and present.</p>

                    <p>Please visit <a href="https://icap.ca/" className="link">icap.ca</a> and leave a message if you are interested in participating or have questions.</p>
                </div>
            }
            
        </section>
    )
}

export default ICAP;