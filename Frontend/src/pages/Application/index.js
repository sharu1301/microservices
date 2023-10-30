import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

import metadata from "../../resources/content/meta.json";

export default function Application() {
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
            background: 'url(images/pages/application/application_banner.jpg) no-repeat'}}>
            <div className="container">
                  <h1 className="page_title">
                      Hinds Machine
                      <span>Founded in 1999</span>
                  </h1>
            </div>
        </div>
        {/* banner box end */}

      {/* content container start */}
      <section id="contentCntr">
        {/* gallary box start */}
        <div className="applicaionBox">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              
              
              <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="applicaionBlock">
                      <figure><img src="images/pages/application/application1.jpg" alt="application" /></figure>
                      <div className="detail">
                        <div className="machine_name">Thin Wall Moulding</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="applicaionBlock">
                      <figure><img src="images/pages/application/application2.jpg" alt="application" /></figure>
                      <div className="detail">
                        <div className="machine_name">Thin Wall Moulding</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="applicaionBlock">
                      <figure><img src="images/pages/application/application3.jpg" alt="application" /></figure>
                      <div className="detail">
                        <div className="machine_name">Thin Wall Moulding</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="applicaionBlock">
                      <figure><img src="images/pages/application/application4.jpg" alt="application" /></figure>
                      <div className="detail">
                        <div className="machine_name">Thin Wall Moulding</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="applicaionBlock">
                      <figure><img src="images/pages/application/application5.jpg" alt="application" /></figure>
                      <div className="detail">
                        <div className="machine_name">Thin Wall Moulding</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                      </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="applicaionBlock">
                      <figure><img src="images/pages/application/application6.jpg" alt="application" /></figure>
                      <div className="detail">
                        <div className="machine_name">Thin Wall Moulding</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                      </div>
                    </div>
                </div>
              </div>
              
            </div>
        </div>
        {/* gallary box end */}
      </section>
      {/* content container end */}

      <Footer />
    </>
    </HelmetProvider>
  );
}
