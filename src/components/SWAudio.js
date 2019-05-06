import React from "react";

const SWAudio = (props) => {
    const audioToggleBar = props.audioIsShown ? "hide-show-bar vertical vertical-to-horizontal" : "hide-show-bar vertical";

    return (
        <section className="audio-container">
    
            {/* audio Heading container starts */}
            <div className="heading-container">
                <h4>Audiobook</h4>
    
                {/* Hide/Show button */}
                <button
                    type="button"
                    className="hide-show-button"
                    onClick={props.handleAudioToggled}
                >
                    <span className="hide-show-bar horizontal "></span>
                    <span className={audioToggleBar}></span>
                </button>
            {/* Audio heading container ends */}
            </div>

            {props.audioIsShown &&
                <div className="audiobook">
                    <p>What a luxury, having someone read to you! For me, this is the allure of an audiobook format.  Being read to usually starts during childhood, with a bedtime story.</p>
                    <p>When my daughter was small, she would often ask for a bedtime story about my childhood, growing up in La Villa restaurant.  The seed was planted - Spaghetti Western needed to be an audiobook.  And here it is, read to you by my daughter, herself.</p>
                </div>
            }
    
        </section>
    )
}
    


export default SWAudio;