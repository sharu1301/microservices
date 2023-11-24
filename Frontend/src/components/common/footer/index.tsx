import "./index.scss";

const Footer = () => {
  return (
    <>
    
      <div className="footer-section">
        
        <div className="row lg">
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
          </div>
          </div>


          <div className="col-md-3">
            <div className="footer-link pl-2">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="/about">Products</a>
                </li>
                <li>
                  <a href="/contact">Contact us</a>
                </li>
                <li>
                  <a href="/buy">Careers</a>
                </li>
                <li>
                  <a href="/buy">FAQ</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <div className="footer-link">
              <h4>Others</h4>
              <ul>
                <li>
                  <a href="/help">Gallery</a>
                </li>
                <li>
                  <a href="/shipping">Application</a>
                </li>
                <li>
                  <a href="/returns">Updates </a>
                </li>
                <li>
                  <a href="/buy">Enquiry</a>
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
    </>
  );
};

export default Footer;
