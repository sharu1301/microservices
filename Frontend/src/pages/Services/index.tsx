import "./index.scss";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Service = () => {
  return (
    <>
      <Header />
      <PageTitle title="About Services" />
      <main className="ContentWrapper">
        <section className="section introWrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h5>Hinds customer service For a lifetime partnership</h5>
              </div>
              <div className="col-md-10 text-center">
                <p className="pt-2">
                The journey with HINDS extends far beyond the delivery of our injection molding machines or automation systems. Our commitment is to accompany you from the moment your equipment is set up in your facility through to its full operational lifespan. When the time comes to consider a new machine, we tailor our approach to meet your unique needs, ensuring a strategic investment that fosters your ongoing prosperity. At HINDS, exceptional customer service is at the heart of ensuring your total contentment.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <div className="introImage pt-4">
                  <img
                    src="../../images/pages/service-intro.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section servicesWrapper">
          <div className="container">
            <div className="row box">
              <div className="col-md-6">
                <div className="service-img">
                  <img
                    src="../../images/pages/service1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-content">
                  <h2>Reasons to choose HINDS Service</h2>
                  <p className="pt-4">
                  Experience unparalleled support and efficiency with HINDS Service, where we ensure your operations are always running at their best. Our dedication to your success is round-the-clock with our 24/7 availability, guaranteeing you rapid and proficient assistance both on-site and online whenever you need it. With our swift delivery of spare parts, downtime is minimized, keeping your production on track. We're committed to empowering your team by enhancing the expertise of your specialists with comprehensive training and support. Plus, you'll gain direct access to the wealth of knowledge backed by our in-house injection molding machine experts. Choose HINDS Service for reliability that propels your business forward.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked
                            />
                            Available 24/7
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked
                            />
                            Rapid on-site and online support
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked
                            />
                            Immediate delivery of your spare parts
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked
                            />
                            Building up the knowledge of your specialists
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="mb-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked
                            />
                            Support from our in-house injection moulding machines
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section feature-counter">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-5">
                <h4>Create your own service contract</h4>
              </div>
              <div className="col-md-7">
                <p>Operational delays can be expensive, which is why you rely on HINDS customer service for clear communication, prompt support, and immediate hotline assistance, among other services. We deliver exactly that—responsive, on-demand plastic injection molding services to meet your needs without delay.</p>
              </div>
            </div>
            <div className="row mt-65 w-100">
              <div className="col-md-3 col-6">
                <div className="counterWrapper">
                  {/* <div className="counterValue">24/7</div> */}
                  <div className="counterLabel">
                    <p>24/7 availability</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="counterWrapper">
                  {/* <div className="counterValue">2K+</div> */}
                  <div className="counterLabel">
                    <p>720 speedy assistance on-site and online support</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="counterWrapper">
                  {/* <div className="counterValue">10+</div> */}
                  <div className="counterLabel">
                    <p>Immediate delivery of your spare parts</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="counterWrapper">
                  {/* <div className="counterValue">15</div> */}
                  <div className="counterLabel">
                    <p>Support from our in-house injection moulding experts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-12">
                <hr className="" />
              </div>
            </div>
          </div>
        </section>

        <section className="section servicesWrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Create your own service contract</h2>
                <p className="pt-4">No matter if your maintenance approach is reactive, preventive, or predictive.</p>
                <p>
                Are you looking to set specific times for access to our HINDS service professionals?
                </p>
                <p>Do you require assistance in maintaining a critical inventory of spare parts?</p>
                <p>Are you aiming to avoid unexpected expenses related to maintenance?</p>
                <p>If you're seeking specialized training for your staff to perform regular and effective maintenance on the machinery</p>
                <p>In that case, our customizable HINDS Service Level Agreement is precisely tailored to meet your needs!</p>
              </div>
              <div className="col-md-6">
                <div className="service-img">
                  <img
                    src="../../images/pages/service2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SubFooter />
      <Footer />
    </>
  );
};

export default Service;
