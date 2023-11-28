import React from "react";
import "./index.scss";
import Achievement1 from "../../../assets/images/Achievement1.png";
import Achievement2 from "../../../assets/images/Achievement2.png";
import Achievement3 from "../../../assets/images/Achievement3.png";
import { BsArrowRight } from "react-icons/bs";


const Achievements = () => {


    return (

        <div className="achievements">
            <h4>Our Achievements</h4>
            <p>Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices vulputate tristique molestie non.<br />
                Consectetur sit enim facilisi faucibus elementum feugiat. </p>
            <div className="row imgSection">
                <img src={Achievement1} />
                <img src={Achievement2} />
                <img src={Achievement3} />

            </div>
            <div className="buttondiv">
                <button type="button" className="btn btn-formSubmit button" color='white'>
                    See All Achievements <BsArrowRight size={22} />
                </button>
            </div>
        </div>

    )
};

export default Achievements;


