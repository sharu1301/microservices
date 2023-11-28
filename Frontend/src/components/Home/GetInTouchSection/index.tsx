import React from "react";
import './index.scss'

import facebook from '../../../assets/icons/facebook.png';
import x from '../../../assets/icons/x.png';
import instagram from '../../../assets/icons/instagram.png';
import linkedIn from '../../../assets/icons/linkedin.png'

const GetinTouch = () => {
    return (
        <div className="mainDiv">
            {/* <div className="row"> */}
            <div className="col-md-7">
                <p>For all inquiries, please feel free to reach out to us using the contact form below.</p>
                <div data-paperform-id="xmcap1xs" className="paper-form" >
                </div>
            </div>

            <div className="col-md-4 contactCard">
                <h4>Get in touch to discover how Hinds Machines<br /> can elevate your production.</h4>
                <p>Email</p>
                <p>hinds@rediffmail.com</p>
                <p>Phone</p>
                <p>+91 +91 9312657397</p>
                {/* <div className='socialLinks'> */}
                <p className="socialLinks">Find Us</p>
                <div className="imgDiv">
                    <img  alt="" src={x} />

                    <img className={'e3ac851901b7444af8c2c6XLogoIcon1'} alt="" src={facebook} />


                    <img  alt="" src={instagram} />

                    <img  alt="" src={linkedIn} />

                </div>
                {/* </div> */}
            </div>
            {/* </div> */}
        </div>
    )
};


export default GetinTouch;