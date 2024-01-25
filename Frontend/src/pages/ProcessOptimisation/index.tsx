import "./index.scss";
import Header from "../../components/Header";
import PageTitle from "../../components/pageTitle";
import Footer from "../../components/Footer";
import SubFooter from "../../components/subFooter";

export default function Process() {
  return (
    <div className="process-optimization">
      <Header />
      <PageTitle title="Process Optimisation" />
      <main className="ContentWrapper">
        <div className="container">
          <div className="section ourstory">
            <div className="row justify-content-center ml-0">
              <div className="col-lg-8 text-center">
                <h4>Optimization of Injection Moulding Processes</h4>
                <h6>with Customized Consulting and Digital Solution</h6>
                <p className="pt-2">
                  We support you in optimizing your injection moulding processes with our knowledge in application technology and plasticizing as well as with HIND's digital solutions.
                  You benefit from shorter cycle times, less wear, higher energy efficiency and sustainable plastics processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="processWrapper pt-0 pb-5">
        <div className="container">
          <div className="row ml-0">
            <div className="col-md-5 col-lg-5">
              <div className="process-img">
                <img
                  src="../../images/pages/process1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-7">
              <div className="right-panel">
                <div className="panel bg-light">
                  <h6>Your Advantages When Optimizing Injection Moulding Processes With HINDS</h6>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consec tetur adipi scing elit.
                    Praesent vitae venenatis. Maecenas venenatis. Maecenas
                    molestie sagittis. eros vel ante rutrum mollis in at mauris.
                    Praesent,
                  </p> */}
                  <img
                    src="../../images/pages/process-mobile.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="panel-sub pl-0">
                  <h6>	Plasticizing advice</h6>
                </div>
                <div className="panel-sub pl-0">
                  <h6>	Optimized Injection Moulding Processes at the Push of a Button</h6>
                </div>
                <div className="panel-sub pl-0">
                  <h6>	Get More Out of Your Machines – with Application Technology</h6>
                </div>
                <div className="panel-sub pl-0">
                  <h6>Get More Out of Your Machines – with Application Technology</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light stepswrapper">
        <div className="container">
          <div className="row justify-content-center ml-0">
            <div className="col-md-10 col-lg-10 col-xl-7 text-center">
              <h4 className="mb-2">Possibilities for Optimizing Injection Moulding Processes</h4>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices
                vulputate tristique molestie non. Iaculis urna vestibulum sed
                velit neque
              </p> */}
            </div>
          </div>
          <div className="row pt-4 ml-0">
            <div className="col-md-4">
              <div className="step-card">
                <h2>01</h2>
                <h6>Application Engineering</h6>
                <p>
                • Check feasibility of injection  moulding processes
                 
                </p>
                <p>
                • Trails in ENGEL technology centers
                 
                </p>
                <p>
                • Optimize ongoing injection molding processes
                 
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card">
                <h2>02</h2>
                <h6>Plasticizing</h6>
                <p>
                • Parts of your plasticizing unit
                </p>
                <p>
                • Consulting and technical support
                </p>
                <p>
                • Customized solutions
                </p>
                <p>
                • Fast, worldwide delivery
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card">
                <h2>03</h2>
                <h6>• Digital Solutions</h6>
                <p>
                • Optimization of Injection moulding processes along the product life cycle.
                </p>
                <p>
                • Cross-system networking.
                </p>
                <p>
                •	Utilize the full potential of your machine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section infoWrapper">
        <div className="customer-section">
          <div className="container">
            <div className="row w-100 ml-0">
              <div className="col-md-12 col-12 text-center mb-5">
                <h5>Our Customers</h5>
              </div>
              <div className="col-md-4 col-12 text-center">
                <div className="cust-wrapper">
                  <div className="cust-img">
                    <img
                      src={require('../../assets/images/user.png')}
                      alt="customer"
                    />
                  </div>
                  <span>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                  </span>
                  <p className="pt-4">
                  "We are really admire for their personal attention & services providing out of the way. We are very happy with performance of there Injection Moulding Machines since 2009. Their quality & features are outstanding."
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-12 text-center">
                <div className="cust-wrapper">
                  <div className="cust-img">
                    <img
                      src={require('../../assets/images/user.png')}
                      alt="customer"
                    />
                  </div>
                  <span>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                  </span>
                  <p className="pt-4">
                  "We thanks to Mr. Praveen Sharma for providing the consultation to achieve minimum Breakdown, & increase the productivity. We achieve our goal up to saving of 20 lakhs per month"
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-12 text-center">
                <div className="cust-wrapper">
                  <div className="cust-img">
                    <img
                      src={require('../../assets/images/user.png')}
                      alt="customer"
                    />
                  </div>
                  <span>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                    <i className="fa-solid fa-star ml-2"></i>
                  </span>
                  <p className="pt-4">
                    "We feel immense pleasure to share that Mr. Praveen Sharma M.D of Hinds Plastic Machines Pvt ltd. help us to develop Blow Moulding Machine for producing our medical item, which we earlier buy from China. Now, we say that we are not dependant on China."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubFooter />
      <Footer />
    </div>
  );
}
