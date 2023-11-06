import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* footer container start */}
      <footer id="footerCntr">
        
          {/* footer box start */}
          <div className="footerBox">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="row mb-4">
                    <div className="col-lg-4 col-md-4">
                      <div className="introBox">
                        <figure><img className="footer_logo" src="images/pages/home/footer_logo.svg" alt="footer_logo" /></figure>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <h4>Company</h4>
                          <ul className="list">
                            <li>
                              <Link to="/About-Us">About Us</Link>
                            </li>
                            <li>
                              <Link to="/ContactUs">Contact Us</Link>
                            </li>
                            <li>
                              <Link to="/Gallary">Gallary</Link>
                            </li>
                            <li>
                              <Link to="/Updates">Update</Link>
                            </li>
                            <li>
                              <Link to="/Enquiry">Enquiry</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h4>Other</h4>
                          <ul className="list">
                            <li>
                              <Link to="/Product">
                                Products
                              </Link>
                            </li>
                            <li>
                              <Link to="/Application">
                                Applications
                              </Link>
                            </li>
                            <li>
                              <Link to="/Faq">FAQ</Link>
                            </li>
                            
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h4>Get in touch </h4>
                          <ul className="gettouch">
                            <li><i className="bi bi-geo-alt-fill"></i><address className="address">Plot No. 139, Sec-8, IMT Manesar, Gurgaon </address></li>
                            <li>
                              <i className="bi bi-envelope-fill"></i>
                              <a href="mailto:hinds@rediffmail.com">
                                hinds@rediffmail.com
                              </a>
                            </li>
                            <li>
                              <i className="bi bi-telephone-fill"></i>
                              <a href="tel:+91 9312657397">+91 9312657397</a>
                            </li>
                          </ul>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer box end */}

          {/* copyright box start */}
          <div className="copyrightBox">
            <div className="container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
          </div>
          {/* copyright box end */}

          {/* version number */}
          <div className="copyrightBox">
            <p>v19.5.2023_14:25</p>
          </div>
        
      </footer>
      {/* footer container end */}
    </>
  );
}
