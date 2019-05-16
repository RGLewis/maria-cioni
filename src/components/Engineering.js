import React from "react";

const Engineering = (props) => {
    const engineeringToggleBar = props.engineeringIsShown ? "hide-show-bar vertical vertical-to-horizontal" : "hide-show-bar vertical";

    return (
        <section className="engineering-container">

            {/* Heading container starts */}
            <div className="heading-container">
                <h3 className="hide-show-heading long-heading">Engineering Communications Program, UofT</h3>

                {/* Hide/Show button */}
                <div className="hide-show-button-container">
                    <button
                        type="button"
                        className="hide-show-button"
                        onClick={props.handleEngineeringToggled}
                    >
                        <span className="hide-show-bar horizontal "></span>
                        <span className={engineeringToggleBar}></span>
                    </button>
                </div>

            {/* Heading container ends */}
            </div>

            {props.engineeringIsShown &&
                <div className="engineering-show-container">
                    <p>I bring my previous experience, communication skills, and a passion for international education and working with students, to my work at the University of Toronto’s Engineering Communications Program, where I have taught since 2009.</p>
                </div>
            }

        </section>
    )
}

export default Engineering;