import React from "react";
import "./index.scss";
import { BsArrowRight } from "react-icons/bs";
import IsoCertified from '../../../assets/icons/IsoCertifiedIcon.png';
import topQualityIcon from '../../../assets/icons/topQualityIcon.png';
import productRangeIcon from '../../../assets/icons/productRangeIcon.png';
import supportIcon from '../../../assets/icons/supportIcon.png'

const FeedbackSection = () => {
    return (
        <>
            <div className="feedback">
                <div className="container">
                    <div className="secondaryfeedback row">
                        <div className="col-md-6">
                            <h5>We value your feedback.</h5>
                            <p>
                                Please take a moment to share your thoughts with us, so we can continue <br />
                                to improve our services and products to better meet your needs.
                            </p>
                            <button type="button" className="btn btn-formSubmit ml-0 mb-4" color="red" >
                                Write a Feedback <BsArrowRight size={22} />
                            </button>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 col-6">
                                    <div className="iso">
                                        <img alt="" src={IsoCertified} className="icon" />
                                        <div>
                                            <h6>ISO Certified Company</h6>
                                            <p>Seal of Excellence - Certified Quality in Every Machine </p>
                                            {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-6 pr-0">
                                    <div className="iso">
                                        <img alt="" src={productRangeIcon} className="icon" />
                                        <div>
                                            <h6>Wide Range of Products</h6>
                                            <p>Diverse Solutions – Moulding Possibilities for Every Need</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-6">
                                    <div className="iso">
                                        <img alt="" src={topQualityIcon} className="icon" />
                                        <div>
                                            <h6>Top-Notch Quality</h6>
                                            <p>Built to Last – Uncompromised Quality in Injection Moulding</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-6 pr-0">
                                    <div className="iso">
                                        <img alt="" src={supportIcon} className="icon" />
                                        <div>
                                            <h6>Dedicated Support Team</h6>
                                            <p>Commitment to You – Support That Shapes Your Success</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
};

export default FeedbackSection;