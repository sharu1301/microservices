import "./index.scss";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from '../../assets/images/arrow_left.png';
import arrowRight from '../../assets/images/arrow_right.png';
import axios from "axios";


function About() {
  const navigate = useNavigate()
  const ref: any = useRef();

  const exposureURL = process.env.REACT_APP_EXPOSURE_URL
  const [coverImages, setCoverImages] = useState([])



  useEffect(() => {
    getCoverImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getCoverImage = () => {
    axios.get(`${exposureURL}/about-us`).then((response) => {
      setCoverImages(response.data.groups[0].photos)
    })
  }
  const ArrowLeft = () => {
    return (
      <div className='arrows' onClick={() => ref.current.slickNext()} >
        <img src={arrowLeft} style={{ width: '50px' }} alt='' />
      </div>
    )
  }

  const ArrowRight = () => {
    return (
      <div className='arrows' onClick={() => ref.current.slickPrev()} >
        <img src={arrowRight} alt='' style={{ width: '50px' }} />
      </div>
    )
  }


  const Settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 9,
    nextArrow: <></>,
    prevArrow: <></>


  };


  return (
    <>
      <Header />
      <PageTitle title="About us" />
      <main className="ContentWrapper">
        <div className="container">
          <section className="section ourStory">
            <div className="row ml-0">
              <div className="col-lg-6">
                <div className="sub-heading">Our Story</div>
                <h3>Empowering Make in India: Our Journey of Innovation and Dedication</h3>
              </div>
              <div className="col-lg-6">
                <div>
                  <h6>Our Founder's Journey:</h6>
                  <p style={{ textAlign: 'justify' }}>
                    Meet Parveen Sharma, the driving force behind Hinds Plastic Machines Pvt Ltd. A mechanical engineer by profession, his passion for engineering ignited during his formative years at CRSCE Murthal (now DCRUST). From crafting childhood toys in his father's workshop to earning accolades as a CBSE Board Engineering Drawing topper, Parveen's childhood was an exploration of engineering brilliance.
                  </p>
                  <h6>Pioneering Innovation:</h6>
                  <p style={{ textAlign: 'justify' }}>
                    In 1998, Parveen joined Joy Dzign Engineer, where he identified a burgeoning demand for high-quality plastic processing machines. In response, he founded Hinds Machineries in 1999, focusing on manufacturing machines with clamping forces ranging from 50 to 450 tons. The turning point came in 2003 with the launch of the Euro Series Injection Moulding Machine at PlastIndia, leading to rapid expansion. From a modest beginning, Hinds Plastic Machines evolved into a prominent player in the industry.
                  </p>
                  <h6>Milestones and Growth:</h6>
                  <p style={{ textAlign: 'justify' }}>
                    2003 marked the launch of the Euro Series Injection Moulding Machine, propelling Hinds' expansion to a 450 sqm factory in Haryana IMT Manesar. Responding to escalating demand, another unit was established in Sector 8, IMT Manesar, leading to the rebranding as Hinds Plastic Machines Pvt Ltd. Today, our story is one of continuous innovation, engineering excellence, and a commitment to delivering state-of-the-art plastic processing solutions.
                  </p>

                </div>
              </div>
            </div>
            <div className="container">

              <div className="col-md-12 banner">
                <ArrowLeft />
                <div className="mt-4 ourStory-banner">

                  <Slider {...Settings} ref={ref}>

                    {coverImages.map((item: any, id) => (
                      <img
                        key={id}
                        src={item.url}
                        alt="ourStory"
                        className="img-fluid"
                      />))}

                  </Slider>

                </div>
                <ArrowRight />
              </div>

            </div>
          </section>

          <section className="section aboutFeaturesWrapper">
            <div className="container">
              <div className="row justify-content-center ml-0 w-100">
                <div className="col-md-10 col-12 col-lg-10 col-xl-7 text-center">
                  <h3>Our Quality Commitment</h3>
                  <p>
                    <b>Excellence Defined, Quality Assured, Support Guaranteed</b>
                  </p>
                </div>
              </div>
              <div className="row ml-0 aboutFeatures">
                <div className="col-md-4 text-justify">
                  <div className="icon-box-wrapper">
                    <div className="icon text-center">
                      <img src="../../../images/pages/about-f1.svg" alt="icon" />
                    </div>
                    <h4 className="text-center">ISO Certified Excellence</h4>
                    <p>
                      Hinds Plastic Machines Pvt Ltd proudly holds ISO certification, showcasing our steadfast commitment to rigorous quality standards and operational excellence. This certification underscores our dedication to delivering products and services that surpass industry benchmarks, ensuring exceptional quality across all facets of our operations.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-justify">
                  <div className="icon-box-wrapper">
                    <div className="icon text-center">
                      <img src="../../../images/pages/about-f2.svg" alt="icon" />
                    </div>
                    <h4 className="text-center">Top-Quality Assurance</h4>
                    <p>
                      At Hinds Plastic Machines Pvt Ltd, top-notch quality is not just a goal; it's our standard. Our firm commitment to quality assurance permeates every aspect of our operations, from materials sourcing to manufacturing processes. We adhere to the highest standards, ensuring each product leaving our facilities is synonymous with durability, reliability, and uncompromising quality.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-justify">
                  <div className="icon-box-wrapper">
                    <div className="icon text-center">
                      <img src="../../../images/pages/about-f3.svg" alt="icon" />
                    </div>
                    <h4 className="text-center">Dedicated Support</h4>
                    <p>
                    Experience exceptional support with Hinds Plastic Machines Pvt Ltd. Our commitment to support goes beyond product delivery. We stand by our clients, offering responsive and personalized assistance at every stage. Our team ensures your experience with our machines is seamless, backed by a reliable network of professionals ready to assist you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <section className="section bg-light aboutProductsWrapper">
        <div className="container">
          <div className="row ml-0">
            <div className="col-md-6">
              <div className="left-content">
                <div className="section_head mb-3">
                Precision Performance, Enhanced Production
                </div>
                <p>
                <b>Injection Moulding Machines: </b>Uncover precision engineering and robust performance with our Injection Moulding Machines. Hinds Plastic Machines Pvt Ltd proudly introduces state-of-the-art machines designed to meet diverse manufacturing needs. Engineered for efficiency and reliability, our machines elevate production processes, empowering your manufacturing capabilities.
                </p>
              </div>
              <div className="responsive-img">
                <img src="../../../images/pages/about-p2.png" className="img-fluid" alt="responsive" />
              </div>
              <div className="productImage pt-94">
                <img
                  src="../../../images/pages/about-p1.png"
                  alt="product"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="productImage ">
                <img
                  src="../../../images/pages/about-p2.png"
                  alt="product"
                  className="img-fluid"
                />
              </div>
              <p className="mt-4">
              <b>Auxiliary Equipments: </b>Maximize operational efficiency with our seamlessly integrated Auxiliary Equipments. At Hinds Plastic Machines Pvt Ltd, we understand the pivotal role of support in manufacturing. Our carefully curated range of Auxiliary Equipments offers comprehensive solutions for a streamlined production workflow. From material handling to temperature control, trust us to empower your manufacturing success.
              </p>
              <div className="responsive-img">
                <img src="../../../images/pages/about-p1.png" className="img-fluid" alt="responsive" />
              </div>
              <button className="mt-4 btn btn-custom" onClick={() => navigate("/productlist")}>
                Show All Products <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section companyInformation">
        <div className="container">
          <div className="row justify-content-between company-head ml-0 w-100">
            <div className="col-md-6">
              <h4> Engineering Tomorrow's Plastic Revolution</h4>
            </div>
            <div className="col-md-5">
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor
              </p> */}
            </div>
          </div>
          <div className="row ptb-70 ml-0">
            <div className="col-sm-5 col-md-12 col-lg-5">
              <div className="companyInfoWrapper">
                <div className="company companyGoals">
                  <div className="icon">
                    <img
                      src="../../images/pages/goal-icon.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="company-content">
                    <h6>Why Hinds Plastic Machines</h6>
                    <p>
                    Choose Hinds Plastic Machines for a journey that spans from the roots of engineering passion to the forefront of industry innovation. With a legacy marked by precision, dedication, and a deep understanding of manufacturing needs, we stand as the trusted partner for those seeking high-quality, efficient, and sustainable plastic processing solutions. Join us in shaping the future of manufacturing.
                    </p>
                  </div>
                </div>
                <div className="company companyMission">
                  <div className="icon">
                    <img
                      src="../../images/pages/goal-icon.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="company-content">
                    <h6>Our Mission</h6>
                    <p>
                    Driven by a passion for innovation and engineering excellence, Hinds Plastic Machines is on a mission to revolutionize the plastic industry. Committed to delivering high-quality, efficient, and sustainable plastic processing solutions, our mission is to empower manufacturers with state-of-the-art machines that redefine industry standards.
                    </p>
                  </div>
                </div>
                <div className=" company companyVision">
                  <div className="icon">
                    <img
                      src="../../images/pages/vision-icon.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="company-content">
                    <h6>Our Vision</h6>
                    <p>
                    Hinds Plastic Machines envisions a future where precision and sustainability converge in the world of plastic processing. Our vision is to be a global leader, recognized for pioneering advancements in machine manufacturing. We aspire to shape a manufacturing landscape where efficiency, reliability, and environmental responsibility harmonize effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-7 col-md-12 col-lg-7">
              <div className="company-statistics">
                <div className="profile-image">
                  <img
                    src="../../../images/pages/ourStory.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="counterWrapper">
                  <div className="counter-box">
                    <div className="counter">10+</div>
                    <div className="counter-title ">Years of Experience</div>
                  </div>
                  <div className="counter-box">
                    <div className="counter">15+</div>
                    <div className="counter-title ">Range of Products</div>
                  </div>

                  <div className="counter-box">
                    <div className="counter">2K+</div>
                    <div className="counter-title ">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubFooter />
      <Footer />
    </>
  );
}

export default About;
