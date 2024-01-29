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
                <img src="images/pages/footer/footerlogo.png" alt="Logo" />
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
                  <a href="/">
                    <img alt="" src={x} />
                  </a>

                  <a href="/">
                    <img alt="" src={facebook} />
                  </a>


                  <a href="/">
                    <img alt="" src={instagram} />
                  </a>

                  <a href="https://www.linkedin.com/in/parveen-sharma-02678a131/?originalSubdomain=in" target="_blank">
                    <img
                      className={"e3ac851901b7444af8c2c6XLogoIcon1"}
                      alt=""
                      src={linkedIn}
                    />
                  </a>

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
                  <li >
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contactus">Contact us</a>
                  </li>
                  <li>
                    <a href="/career">Careers</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ’s</a>
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
                  <img alt="" src={x} />

                  <img alt="" src={facebook} />


                  <img alt="" src={instagram} />

                  <img alt="" src={linkedIn} />

                </div>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1.66699C11.9891 1.66699 13.8968 2.45717 15.3033 3.86369C16.7098 5.27021 17.5 7.17787 17.5 9.16699C17.5 11.7287 16.1033 13.8253 14.6317 15.3295C13.8963 16.0727 13.094 16.7467 12.235 17.3428L11.88 17.5845L11.7133 17.6953L11.3992 17.8953L11.1192 18.0662L10.7725 18.2678C10.5371 18.4018 10.2709 18.4723 10 18.4723C9.72913 18.4723 9.46291 18.4018 9.2275 18.2678L8.88083 18.0662L8.4475 17.7995L8.2875 17.6953L7.94583 17.4678C7.01915 16.8406 6.15589 16.1244 5.36833 15.3295C3.89667 13.8237 2.5 11.7287 2.5 9.16699C2.5 7.17787 3.29018 5.27021 4.6967 3.86369C6.10322 2.45717 8.01088 1.66699 10 1.66699ZM10 6.66699C9.6717 6.66699 9.34661 6.73166 9.04329 6.85729C8.73998 6.98293 8.46438 7.16708 8.23223 7.39923C8.00009 7.63137 7.81594 7.90697 7.6903 8.21028C7.56466 8.5136 7.5 8.83869 7.5 9.16699C7.5 9.4953 7.56466 9.82039 7.6903 10.1237C7.81594 10.427 8.00009 10.7026 8.23223 10.9348C8.46438 11.1669 8.73998 11.3511 9.04329 11.4767C9.34661 11.6023 9.6717 11.667 10 11.667C10.663 11.667 11.2989 11.4036 11.7678 10.9348C12.2366 10.4659 12.5 9.83003 12.5 9.16699C12.5 8.50395 12.2366 7.86807 11.7678 7.39923C11.2989 6.93038 10.663 6.66699 10 6.66699Z" fill="#FAFAFA" />
                  </svg>
                  Plot No. 139, Sec-8, IMT Maneshwar, Gurgaon, India-6000214</p>
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
