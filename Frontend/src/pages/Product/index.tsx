import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import metadata from "../../resources/content/meta.json";


export default function Product() {
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
                <h1 className="main_title">Products</h1>
              </div>
          </div>
          {/* banner box end */}

        {/* product container start */} 
        <div id="productpageCntr">
          
          {/* product box start */}
          <div className="productdetailBox">
              <div className="container">
                  <h2 className="sub_title">Our Products</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </div>
          {/* product box end */}

          {/* category box start */}
          <div className="categoryBox">
                <div className="container">
                    <h2 className="sub_title">Injection Molding Machine</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="productBlock">
                                <figure className="images"><img src="images/pages/product/Injection_Molding_product1.jpg" alt="Injection_Molding_product1" /></figure>
                                <div className="detail">
                                    <div>
                                      <div className="categoryName">Euro Servo Series</div>
                                      <div className="productName">Thin Wall Molding</div>
                                    </div>
                                    <Link className="knowMoreBtn" to="/EuroServoSeries">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="productBlock">
                                <figure className="images"><img src="images/pages/product/Injection_Molding_product1.jpg" alt="Injection_Molding_product1" /></figure>
                                <div className="detail">
                                    <div>
                                      <div className="categoryName">Euro PAC Series</div>
                                      <div className="productName">Thin Wall Molding</div>
                                    </div>
                                    <Link className="knowMoreBtn" to="/EuroPacSeries">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="productBlock">
                                <figure className="images"><img src="images/pages/product/Injection_Molding_product1.jpg" alt="Injection_Molding_product1" /></figure>
                                <div className="detail">
                                    <div>
                                      <div className="categoryName"> Euro PET Series</div>
                                      <div className="productName">Thin Wall Molding</div>
                                    </div>
                                    <Link className="knowMoreBtn" to="/EuroPetSeries">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="productBlock">
                                <figure className="images"><img src="images/pages/product/Injection_Molding_product1.jpg" alt="Injection_Molding_product1" /></figure>
                                <div className="detail">
                                    <div>
                                      <div className="categoryName">Euro Star Series</div>
                                      <div className="productName">Thin Wall Molding</div>
                                    </div>
                                    <Link className="knowMoreBtn" to="/EuroStarSeries">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="productBlock d-flex justify-content-center">
                            <Link className="viewMoreBtn" to="/InjectionMoldingMachine">View More</Link>
                          </div>
                        </div>
                    </div>
                </div>
          </div>
          {/* category box end */}

          {/* category box start */}
          <div className="categoryBox">
                <div className="container">
                    <h2 className="sub_title">Special Purpose Machine</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="productBlock">
                                <figure className="images"><img src="images/pages/product/Injection_Molding_product1.jpg" alt="Injection_Molding_product1" /></figure>
                                <div className="detail">
                                    <div>
                                      <div className="categoryName">Crimping Press Machine</div>
                                      <div className="productName">Thin Wall Molding</div>
                                    </div>
                                    <Link className="knowMoreBtn" to="/CrimpingPressMachine">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="productBlock">
                                <figure className="images"><img src="images/pages/product/Injection_Molding_product1.jpg" alt="Injection_Molding_product1" /></figure>
                                <div className="detail">
                                    <div>
                                      <div className="categoryName">Leak Testing Machine</div>
                                      <div className="productName">Thin Wall Molding</div>
                                    </div>
                                    <Link className="knowMoreBtn" to="/LeakTestingMachine">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="productBlock">
                                <figure className="images"><img src="images/pages/product/Injection_Molding_product1.jpg" alt="Injection_Molding_product1" /></figure>
                                <div className="detail">
                                    <div>
                                      <div className="categoryName">Spacer Insert Machine</div>
                                      <div className="productName">Thin Wall Molding</div>
                                    </div>
                                    <Link className="knowMoreBtn" to="/SpacerInsertMachine">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="productBlock">
                                <figure className="images"><img src="images/pages/product/Injection_Molding_product1.jpg" alt="Injection_Molding_product1" /></figure>
                                <div className="detail">
                                    <div>
                                      <div className="categoryName">U Bolt Bend Machine</div>
                                      <div className="productName">Thin Wall Molding</div>
                                    </div>
                                    <Link className="knowMoreBtn" to="/UBoltBendMachine">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="productBlock d-flex justify-content-center">
                            <Link className="viewMoreBtn" to="/SpecialPurposeMachine">View More</Link>
                          </div>
                        </div>
                    </div>
                </div>
          </div>
          {/* category box end */}

          {/* category box start */}
          <div className="categoryBox">
                <div className="container">
                    <h2 className="sub_title">Hydraulic Presses, Power pack and Cylinders</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="productBlock">
                                <figure className="images"><img src="images/pages/product/Injection_Molding_product1.jpg" alt="Injection_Molding_product1" /></figure>
                                <div className="detail">
                                    <div>
                                      <div className="categoryName">Press Breaks</div>
                                      <div className="productName">Thin Wall Molding</div>
                                    </div>
                                    <Link className="knowMoreBtn" to="/PressBreak">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="productBlock">
                                <figure className="images"><img src="images/pages/product/Injection_Molding_product1.jpg" alt="Injection_Molding_product1" /></figure>
                                <div className="detail">
                                    <div>
                                      <div className="categoryName">Hydraulic Presses</div>
                                      <div className="productName">Thin Wall Molding</div>
                                    </div>
                                    <Link className="knowMoreBtn" to="/HydraulicPresses">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="productBlock">
                                <figure className="images"><img src="images/pages/product/Injection_Molding_product1.jpg" alt="Injection_Molding_product1" /></figure>
                                <div className="detail">
                                    <div>
                                      <div className="categoryName">Iron Worker</div>
                                      <div className="productName">Thin Wall Molding</div>
                                    </div>
                                    <Link className="knowMoreBtn" to="/IronWorker">Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="productBlock d-flex justify-content-center">
                            <Link className="viewMoreBtn" to="/HydraulicPressesPowerpackCylinders">View More</Link>
                          </div>
                        </div>
                    </div>
                </div>
          </div>
          {/* category box end */}

        </div>
        {/* product container end */} 

        <Footer />
      </>
    </HelmetProvider>
  );
}
