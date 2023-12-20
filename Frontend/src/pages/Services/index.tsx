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
              <div className="col-md-8 text-center">
                <h5>Hinds services</h5>
                <p className="pt-2">
                  Unique and creative solutions that meet the clients’ expectations not only by 
                  realizing the clients’ business objectives, but particularly by our strict 
                  adherence to the ethical principles of public relations.
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
                <h4>Lorem ipsum dolor sit</h4>
              </div>
              <div className="col-md-7">
                <p>Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices
                vulputate tristique molestie non. Consectetur sit enim facilisi
                faucibus elementum feugiat. Iaculis urna vestibulum sed velit
                neque non eu. Id vitae ullamcorper praesent in ipsum. Leo
                pretium posuere vulputate feugiat non id.</p>
              </div>
            </div>
            <div className="row mt-65 w-100">
              <div className="col-md-3 col-6">
                <div className="counterWrapper">
                  <div className="counterValue">100+</div>
                  <div className="counterLabel">
                    <p>Lorem ipsum dolor sit</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="counterWrapper">
                  <div className="counterValue">2K+</div>
                  <div className="counterLabel">
                    <p>Lorem ipsum dolor sit</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="counterWrapper">
                  <div className="counterValue">10+</div>
                  <div className="counterLabel">
                    <p>Lorem ipsum dolor sit</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="counterWrapper">
                  <div className="counterValue">15</div>
                  <div className="counterLabel">
                    <p>Lorem ipsum dolor sit</p>
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
              <div className="col-md-7">
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
              <div className="col-md-5 col-lg-5">
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
