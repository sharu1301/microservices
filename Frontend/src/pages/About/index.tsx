import "./index.scss";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function About() {
  return (
    <>
      <Header />
      <PageTitle title="About us" />
      <main className="ContentWrapper">
        <div className="container-fluid">
          <section className="section ourStory">
            <div className="row">
              <div className="col-lg-6">
                <div className="sub-heading">Our Story</div>
                <h3>Tell the story of how your company came about</h3>
              </div>
              <div className="col-lg-6">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce varius faucibus massa sollicitudin amet augue. Nibh
                    metus a semper purus mauris duis. Lorem eu neque, tristique
                    quis duis. Nibh scelerisque ac adipiscing velit non nulla in
                    amet pellentesque.
                  </p>
                  <p>
                    Sit turpis pretium eget maecenas. Vestibulum dolor mattis
                    consectetur eget commodo vitae. Amet pellentesque sit
                    pulvinar lorem mi a, euismod risus rhoncus. Elementum
                    ullamcorper nec, habitasse vulputate. Eget dictum quis est
                    sed egestas tellus, a lectus. Quam ullamcorper in fringilla
                    arcu aliquet fames arcu.Lacinia eget faucibus urna, nam
                    risus nec elementum cras porta.
                  </p>
                  <p>
                    Sed elementum, sed dolor purus dolor dui. Ut dictum nulla
                    pulvinar vulputate sit sagittis in eleifend dignissim.
                    Natoque mauris cras molestie velit. Maecenas eget adipiscing
                    quisque viverra lectus arcu, tincidunt ultrices
                    pellentesque.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="mt-4 ourStory-banner">
                  <img
                    src="../../../images/pages/ourStory.png"
                    alt="ourStory"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section aboutFeaturesWrapper">
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
          </section>

          <section className="section bg-light aboutProductsWrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="section_head">
                  Lorem ipsum dolor sit amet consectetur. Sed id id.
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor
                </p>
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
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius enim in eros elementum tristique. Duis cursus, mi quis
                  viverra ornare, eros dolor interdum
                </p>
                <button className="mt-4 btn btn-custom">
                  Show All Products <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </section>

          <section className="section companyInformation">
            <div className="row justify-content-between">
              <div className="col-sm-6 col-md-6">
                <h4> Lorem ipsum dolor sit amet consectetur. Sed id id.</h4>
              </div>
              <div className="col-sm-6 col-md-5">
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
          </section>

          <SubFooter />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default About;
