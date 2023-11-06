import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import metadata from "../../resources/content/meta.json";

export default function Services() {
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
              <h1 className="main_title">Services</h1>
            </div>
        </div>
        {/* banner box end */}

        {/* serviece container start */}
        <div id="servieceCntr">
          

            {/* Overview box start */}
            <div className="overviewBox">
                <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="sub_title">Overview</div>
                      </div>
                    </div>

                    <div className="imageBox">
                      <figure><img src="images/pages/services/services_img.jpg" alt="Services" /></figure>
                    </div>
                    <p><strong>Unique and creative solutions that meet the clients’ expectations not only by realizing the clients’ business objectives, but particularly by our strict adherence to the ethical principles of public relations.</strong></p>
                    <p><strong>Your Satisfaction is Our Goal!</strong></p>
                    <p>Whether your Machine is two months or 02 years old, ensuring long term product satisfaction is our goal.</p>
                    <p>Once your Injection Moulding Machine arrives, an experienced Hinds service engineer will be at your door step to guide you for machine start-up & training. Our after sales service function with spare support service is staffed by Professional, Responsive & Customer Focused Personnel, offering dedicated support to Customer Network. It offers various Aftermarket Solutions & Support Activities for increasing your Profitability.</p>
                  
                </div>
            </div>
            {/* Overview box end */}

            {/* Retrofit box start */}
            <section className="RetrofitBox">
              <div className="container">
              <div className="row">
                  <div className="col-sm-12">
                    <div className="sub_title">Retrofit Solutions</div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 px-4">
                    
                    
                      <figure>
                        <img data-twic-src="image:home/news.jpg" alt="news" />
                      </figure>
                    
                  
                  </div>

                  <div className="col-md-6 px-4">
                    
                    
                      <figure>
                        <img data-twic-src="image:home/news.jpg" alt="news" />
                      </figure>
                  
                    
                  </div>

                </div>
              </div>
            </section>
            {/* Retrofit box end */}

        </div>
        {/* serviece container ends */}

        <Footer />
      </>
    </HelmetProvider>
  );
}
