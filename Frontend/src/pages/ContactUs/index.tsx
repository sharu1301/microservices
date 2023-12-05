import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageTitle from "../../components/pageTitle";
import SubFooter from "../../components/subFooter";
import "./index.scss";

export default function ContactUs() {
  return (
    <div>
      <Header />
      <PageTitle title="Contact us" />
      <div className="contact">
        <div className="getInTouch col-md-5">
          <h4> Get in touch</h4>
          <p>We’d love to hear from you. Please fill out this form.</p>
          <div className="row">
            <div className="col-md-6">
              <h6>Contact Us</h6>
              <a href="tel:++91 8499851142">+91 8499851142</a>
              <br />
              <a href="tel:+91 8499851252">+91 8499851252</a>

              <h6>Email Us</h6>
              <p>info@hindsmachine.com</p>
            </div>

            <div className="col-md-6">
              <h6>Reach Us</h6>
              <p>No 139, Sector 8, IMT Manesar, Gurugram,Haryana 122051</p>
              <h6>WhatsApp Us</h6>
              <a href="https://wa.me/+91 8499851142">+91 8499851142</a>
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.577522163158!2d76.88598357521681!3d28.37161979588173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e5b6ecd90a5%3A0x65b00f478b4b85f!2sHinds%20Plastic%20Machines%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1686903275686!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              title="Hinds"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div data-paperform-id="eajtqio6" className="col-md-5 dataForm"></div>
      </div>
      <SubFooter />
      <Footer />
    </div>
  );
}
