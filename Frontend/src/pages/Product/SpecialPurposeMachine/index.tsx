import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

import metadata from "../../../resources/content/meta.json";

export default function SpecialPurposeMachine() {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  useEffect(() => {
    for (let i = 0; i < metadata.length; i++) {
      if (metadata[i].url === window.location.pathname) {
        setMetaTitle(metadata[i].title);
        setMetaDescription(metadata[i].description);
        setMetaKeywords(metadata[i].keywords);

        break;
      }
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
