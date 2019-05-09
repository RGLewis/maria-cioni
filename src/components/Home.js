import React from 'react';
import Nav from "./Nav";
import Typed from 'react-typed';


const Home = () => {
    return (
        // HOME MAIN STARTS
        <main className="home-main">
            {/* HOME SECTION STARTS*/}
            <section className="home">
                
                {/* H1 Logo */}
                <h1>Maria Cioni</h1>

                {/* Nav */}
                <Nav />

                {/* Home Flex Container starts */}
                <div className="home-flex-container">
                    {/* Typed */}
                    <h2>
                        <Typed className="bold"
                            strings={[
                                'Writer',
                                'Educator',
                                'Consultant',
                                'Researcher',
                                'Community Advocate']}
                            typeSpeed={80}
                            backSpeed={80}
                            // fadeOut={true}
                            // startDelay={3000}
                            backDelay={2000}
                            showCursor={false}
                            loop >
                        </Typed>
                    </h2>
                {/* Home Flex Container ends */}
                </div>
            
            {/* HOME SECTION ENDS */}
            </section>
        
        {/* HOME MAIN ENDS */}
        </main>

    )
}

export default Home;