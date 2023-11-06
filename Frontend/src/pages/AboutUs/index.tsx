import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

import metadata from "../../resources/content/meta.json";


import { Swiper, SwiperSlide,  } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

type NavigationOptions = /*unresolved*/ any

export default function AboutUs() {
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
        <section
        className="innerBannerBox"
          style={{
            background: 'url(images/pages/about/about_banner.jpg) no-repeat',}}
          >
            <div className="container">
              <h1 className="main_title">About Us</h1>
            </div>
        </section>
        {/* banner box end */}
        
        <section id="servieceCntr">
          {/* Overview box start */}
          <div className="overviewBox">
              <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="sub_title">About Us</div>
                    </div>
                  </div>

                  <div className="imageBox">
                    <figure><img src="images/pages/services/services_img.jpg" alt="Services" /></figure>
                  </div>
                  <p>Founded in 1999, by Mr. PARVEEN SHARMA, a Mechanical engineer, HINDS machineries started with a small workshop at Subhash nagar New Delhi. In 2003 company introduced the Euro Series of Injection molding during the PLASTINDIA 2003.</p>
                  <p>With overwhelming response from PLASTINDIA 2003. The company expanded itself to meet the growing demand of customers, and set up a new factory at Manesar in 2005. With the launch of new Euro R series of injection molding machine Hydraulic clamping type during PLASTINDIA 2006, company expanded further its manufacturing set up with 2nd unit in manesar at sec-8.</p>              
                  <p>With the Start up of New Plant with a New Name M/s. Hinds Plastic Machines Pvt Ltd. at Sector 8, Near Maruti Gate no.2, The Company Now Caters the other Automotive Sectors also with Manufacturing the Special Purpose Machines & Also taking Complete Project base services as per the customer needs.</p>
                  <p>We at Hinds assures the best services & best solutions to our Customers.</p>
              </div>
          </div>
          {/* Overview box end */}
        </section>
        
        <section id="aboutpageCntr">

          {/* mission box start */}
          <section className="missionBox">
              <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="sub_title">Vision & Mission</div>
                      <div className="commit">“COMMITMENT”</div>
                      <div className="redtext">Hinds Commited for best of its Services</div>
                    </div>
                  </div>

                  <div className="blockholder">
                    <div className="block">
                      <figure className="circle">
                        <img src="icons/pages/about/Quality.svg" alt="Quality" />
                      </figure>
                      <span>Commitment for Quality</span>
                    </div>
                    <div className="block">
                      <figure className="circle">
                        <img src="icons/pages/about/time.svg" alt="time" />
                      </figure>
                      <span>Commitment for Time</span>
                    </div>
                    <div className="block">
                      <figure className="circle">
                        <img src="icons/pages/about/Value.svg" alt="Value" />
                      </figure>
                      <span>Commitment for Value</span>
                    </div>
                    <div className="block">
                      <figure className="circle">
                        <img src="icons/pages/about/Security.svg" alt="Security" />
                      </figure>
                      <span>Commitment for Security</span>
                    </div>
                    <div className="block">
                      <figure className="circle">
                        <img src="icons/pages/about/Satisfaction.svg" alt="Satisfaction" />
                      </figure>
                      <span>Commitment for Satisfaction</span>
                    </div>
                  </div>
                  
              </div>
          </section>
          {/* mission box end */}

          {/* merits box start */}
          <section className="meritsBox">
              <div className="container">

                  <h3>“Our merits”</h3>
                  <ul>
                    <li>Unique and creative solutions that meet the clients’ expectations not only by realizing the clients’ business objectives, but particularly by our strict adherence to the ethical principles of public relations</li>
                    <li>Continuous search for opportunities beyond the agreed communications and business objectives</li>
                    <li>Creative approaches to the clients’ special needs to find unique and tailored communications solutions</li>
                    <li>Continuous approach towards the improvements in technology & developments</li>
                    <li>Provide best Services & Solutions</li>
                  </ul>
                  
              </div>
          </section>
          {/* merits box end */}

          {/* manufacturing box start */}
          <section className="manufacturingBox">
            <div className="container">

              <div className="row">
                  <div className="col-sm-12">
                    <div>
                      <h2 className="sub_title">Manufacturing Facility</h2>
                    </div>
                  </div>
                  <div className="col-sm-12">
                      <div className="sliderBlock">
                          <Swiper
                            modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                            navigation={{ clickable: true, delay:0 }as  NavigationOptions}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            // autoplay={{
                            //   delay: 0,
                            //   pauseOnMouseEnter: true,
                            //   disableOnInteraction: true,
                            // }}
                            speed={1500}
                            breakpoints={{
                              1200: {
                                slidesPerView: 1,
                                spaceBetween: 70,
                              },
                              1024: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                              },
                              768: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                              },
                              320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                              },
                            }}
                          >
                            <SwiperSlide>
                              <div className="slideBlock">
                                <figure>
                                  <img src="images/pages/about/manufacturing_slider.jpg" alt="manufacturing_slider"/>
                                  <div className="content">
                                    <span> Over Head Crane of 10 ton</span>
                                  </div>
                                </figure>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="slideBlock">
                                <figure>
                                  <img src="images/pages/about/manufacturing_slider.jpg" alt="manufacturing_slider"/>
                                  <div className="content">
                                    <span> Over Head Crane of 10 ton</span>
                                  </div>
                                </figure>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="slideBlock">
                                <figure>
                                  <img src="images/pages/about/manufacturing_slider.jpg" alt="manufacturing_slider"/>
                                  <div className="content">
                                    <span> Over Head Crane of 10 ton</span>
                                  </div>
                                </figure>
                              </div>
                            </SwiperSlide>
                            
                          </Swiper>
                      </div>
                  </div>
              </div>
              
            </div>
          </section>
          {/* manufacturing box end */}

          {/* aboutappli box start */}
          <section className="aboutappliBox">
            <div className="container">
                <h2 className="sub_title">Serving Plastics Aapplications</h2>
            </div>
            <div className="holder">
                  <div className="container">
                        <div className="app_row">
                            <span className="test_left">Thin Wall Molding , Caps and Closure</span>
                            <span className="test_right">Euro PAC Series</span>
                        </div>
                        <div className="app_row">
                            <span className="test_left">PET preform</span>
                            <span className="test_right">Euro PET Series</span>
                        </div>
                        <div className="app_row">
                            <span className="test_left">Small Precision Component</span>
                            <span className="test_right">Euro Star Toggle Series</span>
                        </div>
                        <div className="app_row">
                            <span className="test_left">Automobile & Engineering Component</span>
                            <span className="test_right">Euro R series, Euro Servo Series</span>
                        </div>
                        <div className="app_row">
                            <span className="test_left">Construction Fitting – PVC</span>
                            <span className="test_right">PVC Line Injection Molding Machine</span>
                        </div>
                        <div className="app_row">
                            <span className="test_left">Construction Fitting – CPVC</span>
                            <span className="test_right">CPVC Line Injection Molding Machine</span>
                        </div>
                        <div className="app_row">
                            <span className="test_left">Hydraulic Powerpack and SPM’S</span>
                            <span className="test_right">Crimping press Machine, Hydraulic press Machine, Drilling and Tapping Machine, Chamfering Machine. </span>
                        </div>
                  </div>
            </div>
          </section>
          {/* aboutappli box end */}

        </section>
        
        <Footer />
      </>
    </HelmetProvider>
  );
}
