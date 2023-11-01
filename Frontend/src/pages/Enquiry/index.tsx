//import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import metadata from "../../resources/content/meta.json";

import "react-tabs/style/react-tabs.css";

export default function Enquiry() {

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

        {/* banner box start */}
        <div
        className="innerBannerBox"
          style={{
          background: 'url(images/pages/gallary/gallary_banner.jpg) no-repeat',
          
            }}
          >
            <div className="container">
              <h1 className="main_title">Enquiry</h1>
            </div>
        </div>
        {/* banner box end */}

        {/* enquiry box start */}
        <div className="enquiryBox">
            <div className="container">
              <h2 className="sub_title">Enquiry Now</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        {/* enquiry box end */}

        {/* enquiryform box start */}
        <div className="enquiryformBox">
        <div data-paperform-id="akhjjwnj"></div>
        </div>
        {/* enquiryform box end */}
        
        <Footer />
      </>
    </HelmetProvider>
  );
}
