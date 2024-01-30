import { useEffect, useState } from "react";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Achievements = () => {
    const exposureURL = process.env.REACT_APP_EXPOSURE_URL
    const [achievementImages, setAchievementImages] = useState([])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    useEffect(() => {
        axios.get(`${exposureURL}/achievements`).then((response) => {
            setAchievementImages(response.data.groups[0].photos)
            // console.log('hi')
        })
    }, [exposureURL])




    return (

        <div className="achievements">
            <div className="container p-0">
                <div className="row">
                    <div className="col-md-12">
                        <h6>Our Achievements</h6>
                        <p>Precision in Production – A Legacy of Achievement in Moulding Technology. </p>
                    </div>
                    <div className="imgSection">
                        {achievementImages.map((images: any, i) => (
                            <div className="col-md-4 pl-0" key={i}>
                                <img src={images.url} alt="" />
                            </div>))}

                    </div>
                </div>
            </div>
            {/* <div className="slide"> */}
            <div className="responsiveImgSection">
                <div className="slider">
                    <Slider {...settings}>
                        {achievementImages.map((images: any, i) => (

                            <div key={i}>
                                <img src={images.url} alt="" />
                            </div>))}

                    </Slider>
                </div>
            </div>
            {/* </div> */}

            {/* <div className="buttondiv">
                <button type="button" className="btn btn-formSubmit button">
                    See All Achievements <BsArrowRight size={22} />
                </button>
            </div> */}
        </div>

    )
};

export default Achievements;


