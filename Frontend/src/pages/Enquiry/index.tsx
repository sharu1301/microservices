import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import './index.scss'

const ProductEnquiry = () => {
    return (
        <div>
            <Header />
            <PageTitle title="Product Enquiry" />
            <div className="productenquiry">
                <div className="col-md-4">
                    <p>Get a free quote</p>
                    <h6>General Enquiries</h6>
                    <p className="description">To inquire about our premium machines, please fill out the form below. Our dedicated team at Hinds Machines is ready to address your specific manufacturing needs and provide tailored solutions for your business. Experience the reliability and innovation that sets Hinds Machines apart in the industry.</p>
                    <h6>Or contact us directly</h6>
                    <p>+91 9312657397</p>
                    <p>
                        hinds@rediffmail.com</p>
                </div>
                <div data-paperform-id="izxnq1yn" className="col-md-5 dataForm"></div>
            </div>
            <SubFooter />
            <Footer />
        </div>
    )
}


export default ProductEnquiry;