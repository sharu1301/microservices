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
                <div className="secondaryfeedback">
                    <div className="col-md-6">
                        <h5>We value your feedback.</h5>
                        <p>
                            Please take a moment to share your thoughts with us, so we can continue <br />
                            to improve our services and products to better meet your needs.
                        </p>
                        <button type="button" className="btn btn-formSubmit" color="red" >
                            Write a Feedback <BsArrowRight size={22} />
                        </button>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="iso">
                                <img alt="" src={IsoCertified} className="icon" />
                                <div>
                                    <h6>ISO Certified Company</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className="iso">
                                <img alt="" src={productRangeIcon} className="icon" />
                                <div>
                                    <h6>Wide Range of Products</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>


                        <div className="row xs">
                            <div className="iso">
                                <img alt="" src={topQualityIcon} className="icon" />
                                <div>
                                    <h6>Top-Notch Quality</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className="iso">
                                <img alt="" src={supportIcon} className="icon" />
                                <div>
                                    <h6>Dedicated Support Team</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
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