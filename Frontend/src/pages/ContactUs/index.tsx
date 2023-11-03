
// import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import metadata from "../../resources/content/meta.json";
// import useAnalyticsEventTracker from "../resources/functions/useAnalyticsEventTracker";

import "react-tabs/style/react-tabs.css";

export default function ContactUs() {
  // const gaEventTracker = useAnalyticsEventTracker("Contact us");

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  // const [email, setEmail] = useState("");
  // const [emailValidationStatus, setEmailValidationStatus] = useState();

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
              <h1 className="main_title">Contact Us</h1>
            </div>
        </div>
        {/* banner box end */}

        {/* <!-- about container start --> */}
        <div className="container">
            <div className="contactBox">
              
              <div className="formBlock">
                <div data-paperform-id="fm5gmick"></div>
              </div>
              
              <div className="leftBlock">
                  <div className="addressblock">
                    <h3>Address</h3>
                    <address>Hinds Plastic Machines Pvt. Ltd.Plot no 139, Sector 8,IMT Manesar, Gurugram,Haryana 122051</address>
                  </div>
                  <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.577522163158!2d76.88598357521681!3d28.37161979588173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e5b6ecd90a5%3A0x65b00f478b4b85f!2sHinds%20Plastic%20Machines%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1686903275686!5m2!1sen!2sin" width="100%" height="100%" style={{ border:"0"}}  loading="lazy" title="Hinds" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
              </div>
              
            </div>
          </div>
          {/* <!-- about container end --> */}

        <Footer />
      </>
    </HelmetProvider>
  );
}
