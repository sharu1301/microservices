import React from "react";
import './index.scss'

const GetinTouch = () => {
    return (
        <div className="mainDiv pt-5">
            <div className="container">
                <div className="row w-100">
                    <div className="col-md-7 col-12">
                        <p>For all inquiries, please feel free to reach out to us using the contact form below.</p>
                        <div data-paperform-id="xmcap1xs" className="paper-form" >
                        </div>
                    </div>
                    <div className="col-md-5 col-12 pr-0">
                        <div className="contactCard m-0">
                            <h4>Get in touch to discover how Hinds Machines<br /> can elevate your production.</h4>
                            <p>Email</p>
                            <p>hinds@rediffmail.com</p>
                            <p>Phone</p>
                            <p>+91 9312657397</p>
                            {/* <div className='socialLinks'> */}
                            <p className="socialLinks">Find Us</p>

                            <div className=" imgDiv">

                                <a href="https://www.facebook.com/hindsmachineries/" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/parveen-sharma-02678a131/?originalSubdomain=in" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCqmwpUQbu2hYXHvn4SvR8Vw" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>

                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
};


export default GetinTouch;