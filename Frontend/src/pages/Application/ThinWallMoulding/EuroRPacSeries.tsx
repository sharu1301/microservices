import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

import metadata from "../../../resources/content/meta.json";

export default function EuroRPacSeries() {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  useEffect(() => {
    const matchingMetadata = metadata.filter(item => item.url === window.location.pathname);
    if (matchingMetadata.length > 0) {
      const matchedItem = matchingMetadata[0];
      setMetaTitle(matchedItem.title);
      setMetaDescription(matchedItem.description);
      setMetaKeywords(matchedItem.keywords);
    }
  }, []);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeywords} />
        </Helmet>

        <Header />

        {/* content container start */}
        <section id="contentCntr">
          {/* about container start */}
          <div className="aboutContenteBox">
            <div className="container">
              <div className="innerpage">
                <img
                  src="images/pages/coming_soon.jpg"
                  alt="coming soon"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          {/* about container end */}
        </section>
        {/* content container end */}

        <Footer />
      </>
    </HelmetProvider>
  );
}
