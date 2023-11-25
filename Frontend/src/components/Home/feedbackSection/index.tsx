import React from "react";
import "./index.scss";
import { BsArrowRight } from "react-icons/bs";
import IsoCertified from '../../../assets/icons/IsoCertifiedIcon.png'

const FeedbackSection = () => {
    return (
        <>
            <div className="feedback">
                <div className="row">
                    <div className="col-md-6">
                        <h4>We value your feedback.</h4>
                        <p>
                            Please take a moment to share your thoughts with us, so we can continue <br />
                            to improve our services and products to better meet your needs.
                        </p>
                        <button type="button" className="btn btn-formSubmit" color="red" >
                            Write a Feedback <BsArrowRight size={22} />
                        </button>
                    </div>
                    <div className="col-md-6">
                        <div className="iso">
                            <img alt="" src={IsoCertified} className="icon" />
                            <div>
                                <h6>ISO Certified Company</h6>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="iso">
                            <img alt="" src={IsoCertified} className="icon" />
                            <div>
                                <h6>ISO Certified Company</h6>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="iso">
                            <img alt="" src={IsoCertified} className="icon" />
                            <div>
                                <h6>ISO Certified Company</h6>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="iso">
                            <img alt="" src={IsoCertified} className="icon" />
                            <div>
                                <h6>ISO Certified Company</h6>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
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