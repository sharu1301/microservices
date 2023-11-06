import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import metadata from "../../../resources/content/meta.json";

export default function Images() {
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

//on scroll load start 
window.addEventListener('scroll', reveal);
function reveal (){
   var reveals = document.querySelectorAll('.reveal');
  for( var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');    
    }
    else{
      reveals[i].classList.remove('active');  
    }
  }
}
//on scroll load ends 

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
              <h1 className="main_title">Images</h1>
            </div>
        </div>
        {/* banner box end */}

        {/* gallary container start */}
        <div className="gallaryBox">
            <div className="container">
              <div className="sub_title">Image</div>

              <div className="row">
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image1.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image2.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image3.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image4.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image5.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image6.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image7.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image8.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image9.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image1.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image2.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image3.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image4.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image5.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image6.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image7.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image8.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 reveal">
                    <div className="gallaryBlock">
                      <figure><img src="images/pages/gallary/image9.jpg" alt="images" /></figure>
                      <div className="machine_name">image name</div>
                    </div>
                </div>
              </div>
              
            </div>
        </div>
        {/* gallary container end */}

        <Footer />
      </>
    </HelmetProvider>
  );
}
