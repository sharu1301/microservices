import "./index.scss";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState,useEffect,useRef } from "react";
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
}, [])

const getCoverImage = () => {
    axios.get(`${exposureURL}/achievements`).then((response) => {
      setCoverImages(response.data.groups[0].photos)
    })
}
const ArrowLeft = () => {
  return (
      <div className='arrows' onClick={() => ref.current.slickNext()} >
          <img src={arrowLeft} style={{ width: '70px' }} alt='' />
      </div>
  )
}

const ArrowRight = () => {
  return (
      <div className='arrows' onClick={() => ref.current.slickPrev()} >
          <img src={arrowRight}  alt='' />
      </div>
  )
}


  const Settings = {
    dots: true,
    // fade: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 9,
    // nextArrow: <ArrowRight />,
    //   prevArrow: <ArrowLeft />
   
    
};


  return (
    <>
      <Header />
      <PageTitle title="About us" />
      <main className="ContentWrapper">
        <div className="container">
          <section className="section ourStory">
            <div className="row">
              <div className="col-lg-6">
                <div className="sub-heading">Our Story</div>
                <h3>Tell the story of how your company came about</h3>
              </div>
              <div className="col-lg-6">
                <div>
                  <p style={{textAlign:'justify'}}>
                    Founded in 1999, by Mr. PARVEEN SHARMA, a Mechanical engineer, HINDS machineries
                    started with a small workshop at Subhash nagar New Delhi. In 2003 company introduced
                    the Euro Series of Injection molding during the PLASTINDIA 2003.
                  </p>
                  <p style={{textAlign:'justify'}}>
                    With overwhelming response from PLASTINDIA 2003. The company expanded itself to meet
                    the growing demand of customers, and set up a new factory at Manesar in 2005. With the
                    launch of new Euro R series of injection molding machine Hydraulic clamping type during
                    PLASTINDIA 2006, company expanded further its manufacturing set up with 2nd unit in
                    manesar at sec-8.
                  </p>
                  <p style={{textAlign:'justify'}}>
                    With the Start up of New Plant with a New Name M/s. Hinds Plastic Machines Pvt Ltd.
                    at Sector 8, Near Maruti Gate no.2, The Company Now Caters the other Automotive Sectors
                    also with Manufacturing the Special Purpose Machines & Also taking Complete Project
                    base services as per the customer needs.
                  </p>
                  <p>We at Hinds assures the best services & best solutions to our Customers.</p>
                </div>
              </div>
            </div>
            <div className="row">
            
              <div className="col-md-12">
             
                <div className="mt-4 ourStory-banner">
                {/* <ArrowLeft /> */}
                  <Slider {...Settings}>
                 
                 {coverImages.map((item:any,id)=>(
                   <img
                    src={item.url}
                    alt="ourStory"
                    className="img-fluid"
                  />))}
                
                  </Slider>
                
                </div>
                {/* <ArrowRight/> */}
              </div>
             
            </div>
          </section>

          <section className="section aboutFeaturesWrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-10 col-xl-7 text-center">
                  <h3>Lorem ipsum dolor sit amet consectetur. Sed id id.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare.
                  </p>
                </div>
              </div>
              <div className="row  aboutFeatures">
                <div className="col-md-4">
                  <div className="icon-box-wrapper text-center">
                    <div className="icon">
                      <img src="../../../images/pages/about-f1.svg" alt="icon" />
                    </div>
                    <h4>ISO Certified Company</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box-wrapper text-center">
                    <div className="icon">
                      <img src="../../../images/pages/about-f2.svg" alt="icon" />
                    </div>
                    <h4>ISO Certified Company</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box-wrapper text-center">
                    <div className="icon">
                      <img src="../../../images/pages/about-f3.svg" alt="icon" />
                    </div>
                    <h4>ISO Certified Company</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum
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
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <div className="section_head">
                  Lorem ipsum dolor sit amet consectetur. Sed id id.
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duais
                cursus, mi quis viverra ornare, eros dolor interdum Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique. Duis cursus, mi quis
                viverra ornare, eros dolor interdum
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
          <div className="row justify-content-between company-head">
            <div className="col-md-6">
              <h4> Lorem ipsum dolor sit amet consectetur. Sed id id.</h4>
            </div>
            <div className="col-md-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor
              </p>
            </div>
          </div>
          <div className="row ptb-70">
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
                    <h6>Our Goals</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                      Duis cursus, mi quis viverra ornare, eros dolor
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                      Duis cursus, mi quis viverra ornare, eros dolor
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                      Duis cursus, mi quis viverra ornare, eros dolor
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
