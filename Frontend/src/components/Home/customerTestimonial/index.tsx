import './index.scss';
import Achievement1 from '../../../assets/images/Achievement1.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomerTestimonial() {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"

    };
    return (
        <div className='Customers' >
            <h3>Our Happy Customers</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe est, impedit quam id dolorem adipisci omnis maxime odio! Illo, dolore!</p>
            <div className='row'>
                <div className='col-md-5 messageScroll'>

                    <div className='col-md-12 slide'>
                        <Slider {...settings}>
                            <div className='row rowUi'>

                                <img src={Achievement1} />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis? Lorem ipsum dolor sit amet consectetur. Lorem ips
                                    um dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti molestias rem blanditiis accusamus natus numquam?
                                </p>

                            </div>

                            <div className='row rowUi'>

                                <img src={Achievement1} />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis?</p>
                            </div>
                            <div className='row rowUi'>

                                <img src={Achievement1} />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis?</p>
                            </div>
                            <div className='row rowUi'>

                                <img src={Achievement1} />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis?</p>
                            </div>
                            <div className='row rowUi'>

                                <img src={Achievement1} />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis?</p>
                            </div>
                            <div className='row rowUi'>

                                <img src={Achievement1} />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis?</p>
                            </div>
                        </Slider>
                    </div>

                </div>

            </div>



        </div>
    )
};
