import "./index.scss";
import { Link } from "react-router-dom";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const maintenanceData: object = [
  {
    title: "Reactive Maintenance",
    details:
      "Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices vulputate tristique molestienon. Iaculisurna vestibulum sed velit neque",
    note1: "24/7 Hotline Availability With Hinds Specialist",
    note2: "Quickly Start troubleshooting with remote maintainance tools.",
    note3: "High parts availabilty.",
    src: "../../images/pages/service/webillu-maintenance-reactive 1.png",
  },
  {
    title: "Preventive Maintenance",
    details:
      "Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices vulputate tristique molestienon. Iaculisurna vestibulum sed velit neque",
    note1: "24/7 Hotline Availability With Hinds Specialist",
    note2: "24/7 Hotline Availability With Hinds Specialist",
    note3: "24/7 Hotline Availability With Hinds Specialist",
    src: "../../images/pages/service/webillu-maintenance-preventive 1.png",
  },
  {
    title: "Preventive Maintenance",
    details:
      "Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices vulputate tristique molestienon. Iaculisurna vestibulum sed velit neque",
    note1: "24/7 Hotline Availability With Hinds Specialist",
    note2: "24/7 Hotline Availability With Hinds Specialist",
    note3: "24/7 Hotline Availability With Hinds Specialist",
    src: "../../images/pages/service/webillu-maintenance-predictive 1.png",
  },
];

const CustomerMaintenance = () => {
  return (
    <>
      <Header />
      <div className="customer-maintenance">
        <PageTitle title="Customer Service And Maintenance" />
        <div className="description-section">
          <div className="container">
            <div className="row ml-0">
              <div className="col-md-10 m-auto text-center">
                <h2 className="head">
                  Customer service & injection <br /> molding machine
                  maintenance
                </h2>
                <p>Modernization or Adaptation of Existing Machines</p>
                <p>
                  Hinds service stands for solving problems in no time. Our
                  technical service solutions offe quality support throughout
                  the entire service life of your plastics injection molding
                  machines. When you need help immediately, you can count on us
                  - our service technicians are available in your area with
                  comprehensive product knowledge and many years of experience.
                  We have an extensive spare parts inventory with 24/7 parts
                  shipment, 365 days a year. In addition, our customer service &
                  maintenance experts are here to advise you on predictive
                  maintenance solutions for a trouble-free production.
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
                  Do you need assistance from the Hinds service experts for your
                  plastics injection molding machines or spare parts delivery?
                </h2>
                <p className="tel">
                  <Link to="tel:1800 1187 7718">
                    <i className="fa-solid fa-phone"></i>
                    1800 1187 7718
                  </Link>
                </p>

                <p className="spd-text">
                  Charges for the hotline vary depending on the country. <br />
                  You can find more information at Service & Support.
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
        <div className="processWapper-main">
          <section className="container">
            <div className="processWrapper">
              <div className="processWrapper-left">
                <div className="headingPanel">
                  <h6>Your Advantages with Our Machine and Robot Retrofits</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipi scing elit.
                    Praesent vitae venenatis. Maecenas venenatis. Maecenas
                    molestie sagittis. eros vel ante rutrum mollis in at mauris.
                    Praesent,
                  </p>
                </div>
                <div className="processWrapper-note">
                  <h6>Lorem ipsum dolor sit amet consectet.</h6>
                </div>
                <div className="processWrapper-note">
                  <h6>Lorem ipsum dolor sit amet consectet.</h6>
                </div>
                <div className="processWrapper-note">
                  <h6>Lorem ipsum dolor sit amet consectet.</h6>
                </div>
              </div>
              <div className="processWrapper-right">
                <div className="process-img">
                  <img
                    src="../../images/pages/service/our-machine.jpg"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <div className="process-img-details">
                  <p>
                    Our service experts analyze your individual needs for
                    machine retrofits and advise you on options for machine and
                    automation modifications as well as increased efficiency.
                    They ensure that the retrofits of your injection molding
                    machine are coordinated with existing processes and your
                    peripherals.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="all-solutions">
          <div className="container">
            <div className="all-solutions-details">
              <h5>
                All solutions for your machine in the area of customer service &
                maintenance
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices
                vulputate tristique molestie non. Iaculis urna vestibulum sed
                velit neque
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
                <h6>Reactive Maintenance</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices
                  vulputate tristique molestie non. Iaculis urna vestibulum sed
                  velit neque
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>24/7 Hotline
                    Availability With Hinds Specialist
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Quickly Start
                    troubleshooting with remote maintenance tools.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>High parts
                    availability.
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
                <h6>Preventive Maintenance</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices
                  vulputate tristique molestie non. Iaculis urna vestibulum sed
                  velit neque
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>24/7 Hotline
                    Availability With Hinds Specialist
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>24/7 Hotline
                    Availability With Hinds Specialist
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>24/7 Hotline
                    Availability With Hinds Specialist
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
                <h6>Predictive Maintenance </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices
                  vulputate tristique molestie non. Iaculis urna vestibulum sed
                  velit neque
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>24/7 Hotline
                    Availability With Hinds Specialist
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>24/7 Hotline
                    Availability With Hinds Specialist
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>24/7 Hotline
                    Availability With Hinds Specialist
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
