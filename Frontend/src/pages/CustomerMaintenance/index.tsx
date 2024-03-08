import "./index.scss";
import { Link } from "react-router-dom";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// const maintenanceData: object = [
//   {
//     title: "Reactive Maintenance",
//     details:
//       "Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices vulputate tristique molestienon. Iaculisurna vestibulum sed velit neque",
//     note1: "24/7 Hotline Availability With Hinds Specialist",
//     note2: "Quickly Start troubleshooting with remote maintainance tools.",
//     note3: "High parts availabilty.",
//     src: "../../images/pages/service/webillu-maintenance-reactive 1.png",
//   },
//   {
//     title: "Preventive Maintenance",
//     details:
//       "Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices vulputate tristique molestienon. Iaculisurna vestibulum sed velit neque",
//     note1: "24/7 Hotline Availability With Hinds Specialist",
//     note2: "24/7 Hotline Availability With Hinds Specialist",
//     note3: "24/7 Hotline Availability With Hinds Specialist",
//     src: "../../images/pages/service/webillu-maintenance-preventive 1.png",
//   },
//   {
//     title: "Preventive Maintenance",
//     details:
//       "Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices vulputate tristique molestienon. Iaculisurna vestibulum sed velit neque",
//     note1: "24/7 Hotline Availability With Hinds Specialist",
//     note2: "24/7 Hotline Availability With Hinds Specialist",
//     note3: "24/7 Hotline Availability With Hinds Specialist",
//     src: "../../images/pages/service/webillu-maintenance-predictive 1.png",
//   },
// ];

const CustomerMaintenance = () => {
  return (
    <>
      <Header />
      <div className="customer-maintenance">
        <PageTitle title="Customer Service And Maintenance" subtitle="Customer Service And Maintenance" />
        <div className="description-section">
          <div className="container">
            <div className="row ml-0">
              <div className="col-md-8 m-auto text-center">
                <h2 className="head">
                  Customer service & injection molding machine maintenance
                </h2>
                <p className="text-center">Uncomplicated and fast – throughout the service life of the machine</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-10 m-auto">
                <p>
                  Hinds service stands for solving problems in no time. Our technical service solutions offer quality support throughout the entire service life of your plastics injection molding machines. When you need help immediately, you can count on us - our service technicians are available in your area with comprehensive product knowledge and many years of experience. We have an extensive spare parts inventory with 24/7 parts shipment, 365 days a year. In addition, our customer service & maintenance experts are here to advise you on predictive maintenance solutions for a trouble-free production.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sqare-part-delivery">
          <div className="container">
            <div className="row ml-0">
              <div className="col-md-10 m-auto text-center parts-delivery">
                <h2 className="head ">
                  Do you need assistance from the Hinds Machine service experts for your plastics injection molding machines or spare parts delivery?
                </h2>
                <p className="tel">
                  <Link to="tel:717 764 6818 ">
                    <i className="fa-solid fa-phone"></i>
                    +1 717 764 6818
                  </Link>
                </p>

                <p className="spd-text">
                  Charges for the hotline vary depending on the country. <br />
                  You can find more information at service and support
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="processWrapper pt-0 pb-3 ">
          <div className="container">
            <div className="row ml-0">
              <div className="col-md-7 col-lg-7">
                <div className="process-details">
                  <div className="right-panel">
                    <div className="panel bg-light">
                      <h6>
                        Your Advantages with Our Machine and Robot Retrofits
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consec tetur adipi scing
                        elit. Praesent vitae venenatis. Maecenas venenatis.
                        Maecenas molestie sagittis. eros vel ante rutrum mollis
                        in at mauris. Praesent,
                      </p>
                    </div>
                    <div className="panel-sub pl-0 pr-0">
                      <h6>Lorem ipsum dolor sit amet consectet.</h6>
                    </div>
                    <div className="panel-sub pl-0 pr-0">
                      <h6>Lorem ipsum dolor sit amet consectet.</h6>
                    </div>
                    <div className="panel-sub pl-0 pr-0">
                      <h6>Lorem ipsum dolor sit amet consectet.</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="process-image-details">
                  <div className="process-img">
                    <img
                      src="../../images/pages/service/our-machine.jpg"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <div className="process-right-details">
                    <p>
                      Our service experts analyze your individual needs for
                      machine retrofits and advise you on options for machine
                      and automation modifications as well as increased
                      efficiency. They ensure that the retrofits of your
                      injection molding machine are coordinated with existing
                      processes and your peripherals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <div className="processWapper-main upgrades-section">
          <div className="container">
            <div className="row ml-0">
              <div className="col-md-7 col-12">
                <div className="right-panel">
                  <div className="panel bg-light">
                    <h6>Your Advantages with HINDS Retrofits</h6>
                    <p>Experience revitalized performance and enhanced productivity with retrofits for HINDS machines and robots. Our upgrades ensure your equipment remains at the forefront of efficiency and reliability, giving you the competitive edge in today's market.</p>
                  </div>
                  <div className="panel-sub pl-0 pr-0">
                    <h6>Enhanced Efficiency and Reliability</h6>
                  </div>
                  <div className="panel-sub pl-0 pr-0">
                    <h6>Streamlined Operations and Longevity</h6>
                  </div>
                  <div className="panel-sub pl-0 pr-0">
                    <h6>Cutting-edge Technology Integration</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-12">
                <div className="upgrade-img">
                  <img src="../../images/pages/service/our-machine.jpg" alt="serivec" className="img-fluid" />
                </div>
                <p className="mt-3">Our service experts analyze your individual needs for
                  machine retrofits and advise you on options for machine and
                  automation modifications as well as increased efficiency.
                  They ensure that the retrofits of your injection molding
                  machine are coordinated with existing processes and your
                  peripherals. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="all-solutions">
          <div className="container">
            <div className="all-solutions-details">
              <h5>
                All solutions for your injection moulding machine in the area of customer service & maintenance
              </h5>
              <p>
                Within our extensive range of services, you'll discover the perfect solution to meet your unique challenges, no matter which service model you implement. HINDS provides all-encompassing maintenance strategies, including reactive, preventive, and predictive approaches.
              </p>
            </div>
            <div className=" all-solutions-cards-container">
              <div className="all-solutions-cards">
                <div className="icon">
                  <img
                    src="../../images/pages/service/webillu-maintenance-reactive 1.png"
                    alt="icon"
                  />
                </div>
                <h6>Reactive Maintenance </h6>
                <p>
                  Are your machines operating smoothly until an unexpected issue arises, necessitating immediate assistance for your injection molding machine?
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Extensive hotline support boasting a wealth of technical expertise.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Rapid initiation of troubleshooting via remote maintenance capabilities.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Ready availability of essential parts.
                  </li>
                </ul>
              </div>
              <div className="all-solutions-cards">
                <div className="icon">
                  <img
                    src="../../images/pages/service/webillu-maintenance-preventive 1.png"
                    alt="icon"
                  />
                </div>
                <h6>Preventive Maintenance for Injection Molding Machines </h6>
                <p>
                  Do you schedule your maintenance activities to preemptively address issues before they surface?
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Tailored maintenance conducted at regular intervals.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Service support from skilled HINDS professionals for your injection molding machines.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Enhanced safety and dependability of your equipment.
                  </li>
                </ul>
              </div>
              <div className="all-solutions-cards">
                <div className="icon">
                  <img
                    src="../../images/pages/service/webillu-maintenance-predictive 1.png"
                    alt="icon"
                  />
                </div>
                <h6>Predictive Maintenance for the Injection Molding Machine </h6>
                <p>
                  Are you looking to consistently monitor your machinery's health to foresee potential issues?
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Real-time tracking of mission-critical machine components with state-of-the-art condition monitoring.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>24/7 Hotline
                    Proactively forecast the wear and potential failure of components.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>24/7 Hotline
                    Prevent unexpected machine downtimes and sidestep unnecessary repairs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
      <Footer />
    </>
  );
};

export default CustomerMaintenance;
