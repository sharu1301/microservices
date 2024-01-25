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
                  <h2>Your Satisfaction is Our Goal! </h2>
                  <p className="pt-4">
                    Whether your Machine is two months or 02 years old, ensuring long term product satisfaction is our goal.
                    {/* Lorem ipsum dolor sit amet, consec tetur adipi scing elit.
                  Praesent vitae venenatis. MaecenasLorem ipsum dolor sit amet,
                  consec tetur adipi scing elit. Praesent vitae venenatis.
                  MaecenasLorem ipsum dolor sit amet, consec tetur adipi scing
                  elit. Praesent vitae venenatis. Maecenas */}
                  </p>
                  <p>
                    Once your Injection Moulding Machine arrives, an experienced Hinds  service engineer will be at your door step to guide you for machine start-up & training. Our after sales service function with spare support service is staffed by Professional, Responsive & Customer Focused Personnel, offering dedicated support to Customer Network. It offers various Aftermarket Solutions & Support Activities for increasing your Profitability.
                    {/* Lorem ipsum dolor sit amet, consec tetur adipi scing elit.
                  Praesent vitae venenatis. MaecenasLorem ipsum dolor sit amet,
                  consec tetur adipi scing elit. Praesent vitae venenatis.
                  Maecenas */}
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
                            Lorem ipsum amet consectur macnen
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
                            Lorem ipsum amet consectur macnen
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
                            Lorem ipsum amet consectur macnen
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
                            Lorem ipsum amet consectur macnen
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
                <h4>Always there where you need us</h4>
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
                <h2>Retrofit Solutions </h2>
                <p className="pt-4">
                  We, Hinds Plastic Machines Pvt Ltd., provide controlled Retrofitment solutions for our machines. Our service can increase the productivity level throughout the life of your machines.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipi scing elit.
                  Praesent vitae venenatis. MaecenasLorem ipsum dolor sit amet,
                  consec tetur adipi scing elit. Praesent vitae venenatis.
                  Maecenas
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
                          Lorem ipsum amet consectur macnen
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
                          Lorem ipsum amet consectur macnen
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
                          Lorem ipsum amet consectur macnen
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
                          Lorem ipsum amet consectur macnen
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
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
