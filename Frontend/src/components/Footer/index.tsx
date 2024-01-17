import "./index.scss";
import facebook from '../../assets/icons/facebook.png';
import x from '../../assets/icons/x.png';
import instagram from '../../assets/icons/instagram.png';
import linkedIn from '../../assets/icons/linkedin.png'

const Footer = () => {
  
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="row ml-0">
            <div className="col-md-3">
              <div className="footer-logo">
                <img src="images/pages/footer/logo.svg" alt="Logo" />
                <ul>
                  <p>Contact</p>
                  <li>
                    <a href="mailto:hinds@rediffmail.com">
                      <i className="fa-solid fa-envelope"></i>
                      hinds@rediffmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+9722390728">
                      <i className="fa-solid fa-phone"></i>+91 9312657397
                    </a>
                  </li>

                </ul>
                <div className=" imgDiv">
                      <img  alt="" src={x} />

                      <img  alt="" src={facebook} />


                      <img  alt="" src={instagram} />

                      <img  alt="" src={linkedIn} />

                  </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="footer-link pl-2">
                <h4>Quick Links</h4>
                <ul>
                  <li >
                    <a href="/productlist">Products</a>
                  </li>
                  <li>
                    <a href="/contactus">Contact us</a>
                  </li>
                  <li>
                    <a href="/buy">Careers</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-link">
                <h4>Others</h4>
                <ul>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/applications">Application</a>
                  </li>
                  <li>
                    <a href="/updates">Updates </a>
                  </li>
                  <li>
                    <a href="/productenquiry">Enquiry</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-link">
                <h4>Stay Up to Date</h4>
                <p>
                  Subscribe our newsletter and get all the latest information
                </p>
                <form action="">
                  <input type="text" placeholder="Your Email Address" />
                </form>
              </div>
            </div>
          </div>
          <div className="line">
            <div className="row">
              <div className="col-md-6">
              <div className="imgDiv responsive">
                      <img  alt="" src={x} />

                      <img  alt="" src={facebook} />


                      <img  alt="" src={instagram} />

                      <img  alt="" src={linkedIn} />

                  </div>
                <p>Plot No. 139, Sec-8, IMT Maneshwar, Gurgaon, India-6000214</p>
              </div>
              <div className="col-md-6 text-right">
                <ul className="copyright">
                  <li>
                    <a href="/privacy">Privacy</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="/terms">Terms of use</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="/privacy">Copyright 2023 @HindsMachine</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
