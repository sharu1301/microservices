import { useNavigate } from "react-router-dom";
import "./index.scss";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Upgrades = () => {
    const navigate=useNavigate()
    return (
        <>
            <Header />
            <PageTitle title="Upgrades" subtitle="Upgrades"/>
            <div className="description-section pt-5">
                <div className="container">
                    <div className="row ml-0">
                        <div className="col-md-10 m-auto text-center">
                            <h2 className="head">Retrofits for Injection Molding Machines and Robots</h2>
                            <p><b>Modernization or Adaptation of Existing Machines</b></p>
                            <p>Hinds machines demonstrate consistent reliability over decades. However, they can be retrofitted as necessary to align with evolving production requirements. Efficiency and flexibility often drive this need. Our retrofit solutions address the demand to upgrade existing injection molding machines and robots, equipping them to tackle new challenges and extending their service life.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="upgrades-section mt-5 pt-5 pb-5 bg-light">
                <div className="container">
                    <div className="row ml-0">
                        <div className="col-md-7 col-12">
                            <div className="right-panel">
                                <div className="panel bg-light">
                                    <h6>Your Advantages with Our Machine and Robot Retrofits</h6>
                                </div>
                                <div className="panel-sub pl-0 pr-0">
                                    <h6>Tailored modifications for new applications in injection molding</h6>
                                </div>
                                <div className="panel-sub pl-0 pr-0">
                                    <h6>Service life extension with increased efficiency</h6>
                                </div>
                                <div className="panel-sub pl-0 pr-0">
                                    <h6>Cost savings through retrofit solutions</h6>
                                </div>
                                <div className="panel-sub pl-0 pr-0">
                                    <h6>Swift resolution for emerging challenges</h6>
                                </div>
                                <div className="panel-sub pl-0 pr-0">
                                    <h6>Expertise for seamless machine modification</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="upgrade-img">
                                <img src="../../images/pages/upgrades/upgrade.jpg" alt="upgrades" className="img-fluid" />
                            </div>
                            <p className="mt-3">Our service experts analyze your individual needs for machine retrofits and advise you on options for machine and automation modifications as well as increased efficiency. They ensure that the retrofits of your injection molding machine are coordinated with existing processes and your peripherals. </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="upgrades-wrpper section">
                <div className="container">
                    <div className="row w-100 align-items-center ml-0">
                        <div className="col-md-7 col-12">
                            <div className="freq-content">
                                <h2 className="title">The Following Machine Retrofits are Frequently Requested</h2>
                                <ul>
                                    <li>Hydraulic aggregates</li>
                                    <li>Tool heating</li>
                                    <li>Tool nozzle control</li>
                                    <li>Hot runners</li>
                                    <li>Additional inputs/outputs (I/Os)</li>
                                    <li>Solutions for rapid tool assembly</li>
                                    <li>Turntables</li>
                                    <li>Tie bar pulling devices</li>
                                    <li>Pneumatic/hydraulic shut-off nozzles</li>
                                    <li>Tool nozzles</li>
                                    <li>Pneumatic air valves</li>
                                    <li>Robots & automation</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="up-img">
                                <img src="../../images/pages/upgrades/upgrades.jpg" alt="upgrades" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="row w-100 ml-0 mt-5">
                        <div className="col-md-8 col-12 text-center m-auto">
                            <h2 className="title">Using Machines Sustainably Thanks to Retrofits</h2>
                            <p>Are you aiming to utilize your injection molding machine for new applications, enhance efficiency, and simultaneously reduce energy costs? Our retrofit machine solutions are tailored to meet your requirements.</p>
                            <button onClick={()=>navigate('/productenquiry')}>request now</button>
                        </div>
                    </div>
                </div>
            </div>

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
            <SubFooter />
            <Footer />
        </>
    )
}

export default Upgrades;