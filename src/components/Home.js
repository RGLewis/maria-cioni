import React from 'react'
import Typed from 'react-typed';


const Home = () => {
    return (
        // HOME MAIN STARTS
        <main className="home-main">
            {/* HOME SECTION STARTS*/}
            <section className="home">
                
                {/* Home Flex Container starts */}
                <div className="home-flex-container">
                    {/* H1 Logo */}
                    <h1>Maria Cioni</h1>

                    {/* Typed */}
                    <h3> <span className="tyed"> Toronto-based </span>
                        <Typed className="bold"
                            strings={[
                                'Writer.',
                                'Educator.',
                                'Consultant.',
                                'Researcher.',
                                'Community Advocate.']}
                            typeSpeed={80}
                            backSpeed={80}
                            // fadeOut={true}
                            // startDelay={3000}
                            backDelay={2000}
                            showCursor={false}
                            loop >
                        </Typed>
                    </h3>
                {/* Home Flex Container ends */}
                </div>
            
            {/* HOME SECTION ENDS */}
            </section>
        
        {/* HOME MAIN ENDS */}
        </main>

    )
}

export default Home;