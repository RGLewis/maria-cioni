import React from 'react';

const Footer = () => (
    // FOOTER STARTS
    <footer>
        <div className="footer-credits">
            <p className="copyright footer-para">© Maria Cioni 2019  
                <span className="divider">|</span>
            </p>

            <div className="credits-container">
                <p className="coded-by footer-para"> Website by
                    <a
                        href="http://rafaelalewis.com"
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                    > Rafaela Lewis  
                    </a>
                    <span className="divider">|</span>
                </p>

                <p className="headshot-credit footer-para">Headshot by Rafy Winterseld</p>
            
            </div>
        </div>

        <div className="footer-contact">
            {/* UPDATE WITH GMAIL */}
            <a 
                className="connect-with-maria" 
                href="mailto:spaghettiWestern20@gmail?Subject=Inquiry%20|%20mariacioni.com" 
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