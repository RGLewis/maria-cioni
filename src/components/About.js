import React from 'react';
import MariaHeadshot from '../assets/maria-headshot.jpg';

const About = () => {
    return (
        // ABOUT MAIN STARTS
        <main className="about-main">
            {/* ABOUT SECTION STARTS */}
            <section className="about">
                
                {/* Section heading */}
                <h2><span className="underline">About Maria</span></h2>
                
                {/* About Flex Container starts */}
                <div className="about-container">
                    {/* Maria Headshot */}
                    <img src={MariaHeadshot} alt="A headshot of Maria, wearing a leather jacket, smiling" align="left" className="maria-headshot"/>

                    {/* About Written Content */}
                    <p>Maria Cioni was born in Calgary, Alberta, the answer to her parents' prayers and a distraction for her older brother, Gary, who wanted a playmate. From ages three to ten, Maria lived above the business, Gene’s LaVilla Super Club, with cats and customers as her friends, the Wurlitzer jukebox as her orchestra, and the dance floor as her stage.</p>

                    <p>Maria obtained a PhD at Cambridge University.  With the guidance of Professor Geoffrey R. Elton, her supervisor, her doctoral thesis broke new ground by using court records as the principle research source for an historical, socio-legal examination of landed and upper class Elizabethan women using the equity court of Chancery to seek redress. Her thesis was published in an Oxford social history series and her thesis-summary chapter is in Tudor Rule and Revolution. Essays for G. R. Elton from his American Friends (Cambridge University Press, 2008).</p>

                    <p>Returning to Canada to find no academic jobs, Maria’s career evolved in government and universities, with ventures into high tech and consulting in international higher education. In 2001, Maria took time off to write. Her stories are published in Mama Mia, Good Italian Girls Talk Back (ECW Press, 2004) and in 2006,, Fifth House published her story of her father in the memoir, Spaghetti Western How My Father Brought Italian Food to the West.</p>

                {/* About Flex Container ends */}
                </div>

            {/* ABOUT SECTION ENDS */}
            </section>
        {/* ABOUT MAIN ENDS */}
        </main>
    )
}

export default About;