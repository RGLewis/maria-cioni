import React from 'react';

const Footer = () => (
    // FOOTER STARTS
    <footer>
        <div className="footer-credits">
            <p className="footer-para">
            <span className="copyright">© Maria Cioni 2019</span>
            <span className="divider">  |  </span>
            <span className="coded-by">Designed and coded by <a href="http://rafaelalewis.com" className="link">Rafaela Lewis</a></span>
            <span className="divider">  |  </span>
                <span className="headshot">Headshot by Rafy Winterseld</span>
            </p>
        </div>

        <div className="footer-contact">
            {/* UPDATE WITH GMAIL */}
            <a 
                className="connect-with-maria" 
                href="www.mariacioni.ca" 
                target="_blank"
                rel="noopener noreferrer"
            >
                Connect with Maria
            </a>
        </div>
        
    {/* FOOTER ENDS */}
    </footer>
)

export default Footer;