import React, {Component} from 'react';
import SWAudio from "./SWAudio";
import SWSynopsis from './SWSynopsis';
import SWReviews from './SWReviews';

class SpaghettiWestern extends Component {
    constructor() {
        super()
        this.state = {
            audioIsShown: false
        }
    }

    handleAudioToggled = () => {
        this.setState (() => ({
            audioIsShown: !this.state.audioIsShown
        }))
        console.log("clicked!");
    }

    render() {
        return (
            // SPAGHETTI WESTERN MAIN STARTS
            <main className="spaghetti-western-main">
                
                {/* Section heading */}
                <h2><span className="underline">Spaghetti Western</span></h2>

                {/* Spaghetti Western Flex Container starts */}
                <div className="spaghetti-western-flex-container">
                
                {/* Aside starts */}
                    <aside className="spaghetti-western-aside">
                    {/* Reviews */}
                    <SWReviews />
                    
                {/* Aside ends */}
                </aside>
                    
                {/* Synopsis Container */}
                <SWSynopsis />

                

                {/* Spaghetti Western Flex Container ends */}
                </div>
                
                

                {/* audio */}
                <SWAudio 
                    handleAudioToggled={this.handleAudioToggled}
                    audioIsShown = {this.state.audioIsShown}
                />

                
                
            {/* SPAGHETTI WESTERN MAIN ENDS */}
            </main>
        )
    }
}

export default SpaghettiWestern;