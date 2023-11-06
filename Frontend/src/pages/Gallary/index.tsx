import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

import metadata from "../../resources/content/meta.json";
import { Link } from "react-router-dom";

export default function Gallary() {
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

        {/* banner box start */}
        <div
        className="innerBannerBox"
          style={{
            background: 'url(images/pages/gallary/gallary_banner.jpg) no-repeat',
            
            }}
          >
            <div className="container">
              <h1 className="main_title">Gallary</h1>
            </div>
        </div>
        {/* banner box end */}

        {/* gallary box start */}
        <div className="gallaryBox">
            <div className="container">
              <div className="sub_title">Images Gallary</div>

              <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image1.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image1.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image1.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <Link to="/Images" className="viewMoreBtn">View More</Link>
                </div>
              </div>
            </div>
        </div>
        {/* gallary box end */}

        {/* gallary box start */}
        <div className="gallaryBox mb-5">
            <div className="container">
              <div className="sub_title">Video Gallary</div>

              <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image1.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image1.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image1.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                <Link to="/Video" className="viewMoreBtn">View More</Link>
                </div>
              </div>
            </div>
        </div>
        {/* gallary box end */}

        <Footer />
      </>
    </HelmetProvider>
  );
}
