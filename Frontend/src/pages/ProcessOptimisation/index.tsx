import "./index.scss";
import Header from "../../components/Header"
import PageTitle from "../../components/pageTitle";
import Footer from "../../components/Footer";
import SubFooter from "../../components/subFooter";

export default function Process() {
  return (
    <>
      <Header />
      <PageTitle title="Process Optimisation" />
      <main className="ContentWrapper">
        <div className="container">
          <div className="section ourstory">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h5>Process Optimisation</h5>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices
                  vulputate tristique molestie non. Consectetur sit enim
                  facilisi faucibus elementum feugiat. Iaculis urna vestibulum
                  sed velit neque non eu. Id vitae ullamcorper praesent in
                  ipsum. Leo pretium posuere vulputate feugiat non id.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="processWrapper pt-0 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-5">
              <div className="process-img">
                <img src="../../images/pages/process1.jpg" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-7 col-lg-7">
              <div className="right-panel">
                <div className="panel bg-light">
                  <h6>Lorem ipsum dolor sit</h6>
                  <p>Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Praesent vitae venenatis. Maecenas
                    venenatis. Maecenas molestie sagittis. eros vel ante rutrum mollis in at mauris. Praesent,
                  </p>
                  <img src="../../images/pages/process-mobile.jpg" alt="" className="img-fluid" />
                </div>
                <div className="panel-sub pl-0">
                  <h6>Lorem ipsum dolor sit amet consectet.</h6>
                </div>
                <div className="panel-sub pl-0">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                </div>
                <div className="panel-sub pl-0">
                  <h6>Lorem ipsum dolor sit amet consectet.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light stepswrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-10 col-xl-7 text-center">
              <h4 className="mb-2">How It Works</h4>
              <p>Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices vulputate tristique molestie non.
                Iaculis urna vestibulum sed velit neque</p>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-md-4">
              <div className="step-card">
                <h2>01</h2>
                <h6>Lorem Ipsum dolor amet</h6>
                <p>Lorem ipsum dolor sit amet consectetur. Vitae
                  sit ultrices vulputate tristique molestie non. Iaculis
                  urna vestibulum sed velit neque</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card">
                <h2>02</h2>
                <h6>Lorem Ipsum dolor amet</h6>
                <p>Lorem ipsum dolor sit amet consectetur. Vitae
                  sit ultrices vulputate tristique molestie non. Iaculis
                  urna vestibulum sed velit neque</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card">
                <h2>03</h2>
                <h6>Lorem Ipsum dolor amet</h6>
                <p>Lorem ipsum dolor sit amet consectetur. Vitae
                  sit ultrices vulputate tristique molestie non. Iaculis
                  urna vestibulum sed velit neque</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section infoWrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-7">
              <h2>Lorem ipsum dolor sit amet consectur </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Praesent vitae venenatis. Maecenas
                venenatis. Maecenas molestie sagittis. eros vel ante rutrum mollis in at mauris. Praesent,
                pellen tesque hendrerit sapien suscipit. Fusce suscipit sed libero vitae venenatis. Maecenas
                venenatis. Maecenas molestie sagittis.
              </p>
              <p>
                venenatis. Maecenas molestie sagittis. eros vel ante rutrum mollis in at mauris. Praesent,
                pellen tesque hendrerit sapien suscipit. Fusce suscipit sed libero vitae venenatis. Maecenas
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
                        Lorem ipsum amet, consec
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
                        10+ Years Experience
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
                        Complete Facilities
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
      <SubFooter />
      <Footer />
    </>
  )
}