import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PublishedWorks extends Component {
    constructor() {
        super()

        this.state = {
            publishedWorksIsShown: false
        }
    }

    //Handle Toggle
    handlePublishedWorksToggled = () => {
        this.setState(() => ({
            publishedWorksIsShown: !this.state.publishedWorksIsShown
        }))
    };

    render() {
        const publishedWorksToggleBar = this.state.publishedWorksIsShown ? "hide-show-bar vertical vertical-to-horizontal" : "hide-show-bar vertical";

        return (
            <section className="published-works-container">
                
                {/* Heading container starts */}
                <div className="heading-container">
                    <h3 className="hide-show-heading">Published Works</h3>

                    {/* Hide/Show button */}
                    <div className="hide-show-button-container">
                        <button
                            type="button"
                            className="hide-show-button"
                            onClick={this.handlePublishedWorksToggled}
                        >
                            <span className="hide-show-bar horizontal "></span>
                            <span className={publishedWorksToggleBar}></span>
                        </button>
                    </div>

                {/* Heading container ends */}
                </div>

                {/* Conditionally render section content */}
                {this.state.publishedWorksIsShown &&
                    <div className="published-works-shows-container">
                        <p>I am a published author having written academic articles on women and the law in sixteenth century England and biographical books.  In 2004, I contributed two chapters to <span className="italic">Mamma Mia! Good Italian Girls Talk Back</span> and in 2006 I wrote <Link to="/spaghetti-western" className="link"> Spaghetti Western</Link>.</p>
                    </div>
                }

            </section>
        )
    }
}

export default PublishedWorks;