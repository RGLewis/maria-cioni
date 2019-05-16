import React from "react";
import SWAudioCover from "../assets/swAudiobook.jpg";
import SWAudioSample from "../assets/sw-audiobook-sample.mp3";

const SWAudio = (props) => {
    const audioToggleBar = props.audioIsShown ? "hide-show-bar vertical vertical-to-horizontal" : "hide-show-bar vertical";

    return (
        <section className="audio-container">

            {/* Heading Container starts */}
            <div className="heading-container">
                <h3 className="hide-show-heading">Audiobook</h3>
    
                {/* Hide/Show button */}
                <div className="hide-show-button-container">
                    <button
                        type="button"
                        className="hide-show-button"
                        onClick={props.handleAudioToggled}
                    >
                        <span className="hide-show-bar horizontal "></span>
                        <span className={audioToggleBar}></span>
                    </button>
                </div>
            {/* Heading container ends */}
            </div>

            {props.audioIsShown &&
                <div className="audiobook-show-container">
                    {/* Audiobook flex container starts */}
                    <div className="audio-cover-container">
                        <img src={SWAudioCover} alt="The Audiobook cover of 'Spaghetti Western' -- a young Maria, with her father, Gene." className="audiobook-cover"/>
                    </div>

                    <div className="audio-written-container">
                        <p>What a luxury, having someone read to you! For me, this is the allure of an audiobook format.  Being read to usually starts during childhood, with a bedtime story.</p>

                        <p>When my daughter was small, she would often ask for a bedtime story about my childhood, growing up in La Villa restaurant.  The seed was planted - Spaghetti Western needed to be an audiobook.  And here it is, read to you by my daughter, herself.</p>
                    </div>
                
                    <div className="audio-sample-container">
                        <p className="larger-para">Listen to a sample</p>

                        <audio className="audiobook-sample" src={SWAudioSample} controls>
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>   
            }
        </section>
    )
}

export default SWAudio;