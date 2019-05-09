import React from "react";
import SWGet from "./SWGet";

const SWSynopsis = () => (
    <section className="synopsis-container">
        <p>A challenge: <span className="italic-not-bolded">Imagine that Italian food did not exist — that spaghetti, ravioli and chicken cacciatore could not be found on any menu.</span> This was the situation in Calgary, Alberta until 1949, when an Italian immigrant, Genesio (Gene) Cioni, opened the first Italian restaurant.</p>
        
        <p>This story encompasses Gene’s family, his partner-wife, a love of cooking his memory-infused Italian food, his training and an entrepreneurial vision to know that his first and subsequent Italian restaurants could be part of the historical change in Calgary during the fabulous fifties.</p>

        <p>Drawing from interviews with family, members of the Italian community and former La Villa patrons, as well as archival sources, Spaghetti Western is a story of cooking, culture and Calgary from the mid-1920s to 1960.</p>

        {/* Get Spaghetti Western */}
        <SWGet />
    </section>
)

export default SWSynopsis;