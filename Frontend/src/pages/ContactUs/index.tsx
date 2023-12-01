import React from "react";
import { Header } from "../../components";
import './index.scss'



export default function ContactUs() {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="getInTouch col-md-6">
                    <h4> Get in touch</h4>
                    <p>We’d love to hear from you. Please fill out this form.</p>
                    <h6>Contact Us</h6>
                    <p>+91 8499851142</p>
                    <p>+91 8499851252</p>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.577522163158!2d76.88598357521681!3d28.37161979588173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e5b6ecd90a5%3A0x65b00f478b4b85f!2sHinds%20Plastic%20Machines%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1686903275686!5m2!1sen!2sin"
                            width="100%" height="100%"
                            allowFullScreen loading="lazy" title="Hinds" referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                </div>

            </div>
            {/* <div className="col-md-6">

            
            </div> */}
        </div>
    )
}