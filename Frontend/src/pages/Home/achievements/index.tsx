import React from "react";
import "./index.scss";
import Achievement1 from "../../../assets/images/Achievement1.png";
import Achievement2 from "../../../assets/images/Achievement2.png";
import Achievement3 from "../../../assets/images/Achievement3.png";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Achievements = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1


        // nextArrow: <></>,
        // prevArrow: <></>
    };
    return (

        <div className="achievements">
            <div className="container p-0">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Our Achievements</h4>
                        <p>Precision in Production – A Legacy of Achievement in Moulding Technology. </p>
                    </div>
                    <div className="imgSection">
                        <div className="col-md-4 pl-0">
                            <img src={Achievement1} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={Achievement2} alt="" />
                        </div>
                        <div className="col-md-4 pr-0">
                            <img src={Achievement3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="slide"> */}
            <div className="responsiveImgSection">
                <div className="slider">
                    <Slider {...settings}>
                        <div>

                            <img src={Achievement1} alt="" />
                        </div>
                        <div><img src={Achievement2} alt="" /></div>
                        <div>
                            <img src={Achievement3} alt="" />
                        </div>

                    </Slider>
                </div>
            </div>
            {/* </div> */}

            <div className="buttondiv">
                <button type="button" className="btn btn-formSubmit button">
                    See All Achievements <BsArrowRight size={22} />
                </button>
            </div>
        </div>

    )
};

export default Achievements;


