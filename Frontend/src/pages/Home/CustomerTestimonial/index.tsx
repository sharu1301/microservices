import React, { useEffect, useState } from "react"
import './index.scss';
import Achievement1 from '../../../assets/images/Achievement1.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ZoomModal from './ZoomModal';
const Sample1 = require('../../../assets/videos/Sample1.mp4')
// import Video2 from "../../../assets/videos/Sample2.mp4";


const testimonialData = [
    {
        "id": 1,
        "image": Achievement1,
        "data": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis? Lorem ipsum dolor sit amet consectetur. Lorem ips
        um dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti molestias rem blanditiis accusamus natus numquam?`
    },
    {
        "id": 2,
        "image": Achievement1,
        "data": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis? Lorem ipsum dolor sit amet consectetur.`
    },
    {
        "id": 3
        , "image": Achievement1,
        "data": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis? Lorem ipsum dolor sit amet consectetur.`
    },
    {
        "id": 4
        , "image": Achievement1,
        "data": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis? Lorem ipsum dolor sit amet consectetur.`
    },
    {
        "id": 5
        , "image": Achievement1,
        "data": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis? Lorem ipsum dolor sit amet consectetur.`
    }
]
interface dataInterface {
    id: number;
    image: string,
    data: string
}
export default function CustomerTestimonial() {
    const [onHover, setOnHover] = useState("")
    const [showZoomModal, setShowZoomModal] = useState(false)
    const [dataOnHover, setDataOnHover] = useState<any>({})

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <></>,
        prevArrow: <></>
    };
    const VideoSettings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    }
    const onMouseHover = (data: dataInterface, id: number) => {
        if (data.id == (id + 1)) {
            console.log('74', data.id, id)
            setDataOnHover(data)
            setShowZoomModal(true)

            setTimeout(() => {
                setShowZoomModal(false)
            }, 3000)
        }
        else {
            setDataOnHover(null)
            setShowZoomModal(false)
        }
    }
    return (
        <div className='Customers'>
            <div className="container-fluid">
            <h3>Our Happy Customers</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Vitae sit ultrices vulputate tristique molestie non.<br /> Consectetur sit enim facilisi faucibus elementum feugiat.</p>
            <div className='row'>
                <div className='col-md-5 col-12 pl-0 pr-0'>
                    <div className="messageScroll">
                    <div className='slide'>
                        <Slider {...settings}>
                            {testimonialData.map((testimonials, id) => (
                                <div key={id} className='row rowUi'
                                    onMouseEnter={() => onMouseHover(testimonials, id)}
                                >
                                    <img src={testimonials.image} />
                                    <p>{testimonials.data}</p>
                                </div>
                            ))}


                        </Slider>
                    </div>
                    </div>
                    
                </div>

                <div className="col-md-6 col-12 videoDiv">
                    <Slider {...VideoSettings}>
                        <video src={Sample1} controls />
                        <video src={Sample1} controls />
                    </Slider>
                </div>

            </div>

            <ZoomModal
                data={dataOnHover}
                isOpen={showZoomModal}
            />
        </div>
        </div>
    )
};
