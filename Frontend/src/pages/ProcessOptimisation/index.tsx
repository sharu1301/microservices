import "./index.scss";
import Header from "../../components/Header";
import PageTitle from "../../components/pageTitle";
import Footer from "../../components/Footer";
import SubFooter from "../../components/subFooter";

export default function Process() {
  return (
    <div className="process-optimization">
      <Header />
      <PageTitle title="Process Optimisation"  subtitle="Process Optimisation"/>
      <main className="ContentWrapper">
        <div className="container">
          <div className="section ourstory">
            <div className="row justify-content-center ml-0">
              <div className="col-lg-10 text-center">
                <h4>Optimization of Injection Molding Processes</h4>
                <p><b>with Customized Consulting and Digital Solution</b></p>
                <p className="pt-2">
                Improve your injection molding processes using our expertise in application technology, plasticizing, and HIND's digital solutions. Benefit from reduced cycle times, decreased wear, enhanced energy efficiency, and sustainable plastics processing.
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
                  <h6>Your Advantages When Optimizing Injection Molding Processes With HINDS</h6>
                  <img
                    src="../../images/pages/process-mobile.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="panel-sub pl-0">
                  <h6>Expert Plasticizing Guidance</h6>
                </div>
                <div className="panel-sub pl-0">
                  <h6>Streamlined Injection Molding with the Push of a Button</h6>
                </div>
                <div className="panel-sub pl-0 pr-0">
                  <h6>Enhance Machine Efficiency through Application Technology</h6>
                </div>
                <div className="panel-sub pl-0">
                  <h6>Empower Yourself with Targeted Training Courses</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light stepswrapper">
        <div className="container">
          <div className="row justify-content-center ml-0 w-100">
            <div className="col-md-10 col-12 text-center">
              <h4 className="mb-2">Possibilities for Optimizing Injection Molding Processes</h4>
            </div>
          </div>
          <div className="row pt-4 ml-0">
            <div className="col-md-4">
              <div className="step-card">
                <h2>01</h2>
                <h6>Application Engineering</h6>
                <ul className="pl-3">
                  <li>Assessing Feasibility of Injection Molding Processes</li>
                  <li>Trials in ENGEL Technology Centers</li>
                  <li>Continuous Optimization of Injection Molding Processes</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card">
                <h2>02</h2>
                <h6>2.	Plasticizing</h6>
                <ul className="pl-3">
                  <li>Improving Your Plasticizing Unit</li>
                  <li>Consulting and Technical Support</li>
                  <li>Tailored Solutions</li>
                  <li>Fast Worldwide Delivery</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card">
                <h2>03</h2>
                <h6>3.	Digital Solutions</h6>
                <ul className="pl-3">
                  <li>Optimization of Injection Molding Processes throughout the Product Life Cycle</li>
                  <li>Cross-System Networking</li>
                  <li>Utilize the Full Potential of Your Machine</li>
                </ul>
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
