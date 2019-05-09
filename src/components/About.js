import React from 'react';
import {Link} from "react-router-dom";
import Nav from "./Nav";
import MariaHeadshot from '../assets/maria-headshot.jpg';

const About = () => {
    return (
        // ABOUT MAIN STARTS
        <main className="about-main">
            {/* ABOUT SECTION STARTS */}
            <section className="about">
                
                {/* Section heading */}
                <h1>Maria Cioni</h1>

                {/* Nav */}
                <Nav />
                
                {/* About Flex Container starts */}
                <div className="about-container">
                    {/* Maria Headshot */}
                    <img src={MariaHeadshot} alt="A headshot of Maria, wearing a leather jacket, smiling" align="left" className="maria-headshot"/>

                    {/* About Written Content */}
                    <p>I was born in Calgary, Alberta and from ages three to ten, we lived above the family business, Gene’s LaVilla Super Club. I treated my cats and the customers as friends, the Wurlitzer jukebox as my orchestra, and the dance floor as my stage. Indeed, I tried selling my finger paintings, advised patrons on how to eat spaghetti properly, and performed dances and skits until my mother quickly put a stop to it all. Little did I appreciate that these antics were the wellspring of my curiosity and interests in writing, teaching and international education.</p>

                    <p>I am honoured that Professor Geoffrey R. Elton supervised my doctoral thesis at Cambridge University and was humbled by his patience when I zeroed in on court records as the principle research source for my historical, socio-legal examination of landed and upper class Elizabethan women using the equity court of Chancery to seek redress. My thesis was published in an Oxford social history series and is the basis for a chapter in <span className="italic">Tudor Rule and Revolution. Essays for G. R. Elton from his American Friends</span> (Cambridge University Press, 2008).</p>

                    <p> When I returned home to Canada, there were no academic jobs available in my field, and so my career evolved in government and university innovations, with ventures into high tech and consulting in international higher education. In 2001, I took time off to write. My stories are published in <span className="italic">Mama Mia, Good Italian Girls Talk Back</span> (ECW Press, 2004) and in 2006, Fifth House published my story of my father and our family in the memoir,
                    <Link to="/spaghetti-western" className="link"> Spaghetti Western How My Father Brought Italian Food to the West</Link>.</p>

                {/* About Flex Container ends */}
                </div>

            {/* ABOUT SECTION ENDS */}
            </section>
        {/* ABOUT MAIN ENDS */}
        </main>
    )
}

export default About;