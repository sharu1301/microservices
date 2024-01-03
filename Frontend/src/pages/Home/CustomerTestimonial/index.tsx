import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import Achievement1 from '../../../assets/images/Achievement1.png';

const Sample1 = require('../../../assets/videos/Sample1.mp4')

interface Testimonial {
    id: number;
    author: string;
    text: string;
    place: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        author: "Alice",
        text: "Love this product! It really made a difference for me.",
        place: "AMD Plastic Toys (india)",
        image: Achievement1
    },
    {
        id: 2,
        author: "Bob",
        text: "Fantastic service, and the quality is top-notch.",
        place: "Northern Automobiles (india)",
        image: Achievement1
    },
    {
        id: 3,
        author: "Charlie",
        text: "Highly recommend to anyone looking for quality!",
        place: "Indie Pvc Pipes Pvt Ltd (india)",
        image: Achievement1
    },
];

const CustomerTestimonials = () => {
    const [selectedTestimonial, setSelectedTestimonial] =
        useState<Testimonial | null>(null);

    const VideoSettings = { 
        dots: true, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 2,
    }
    const handleTestimonialHover = (testimonial: Testimonial) => {
        setSelectedTestimonial(testimonial);
    };

    const handleTestimonialLeave = () => {
        setSelectedTestimonial(null);
    };

    return (
        <div className="container pb-5 mt-4">
            <div className='row w-100'>
                <div className="col-md-8 m-auto text-center mb-4">
                    <h2 className="heading mb-2">Our Happy customers</h2>
                    <p>Engineered Precision, Delivered Satisfaction – Hear from Our Happy Customers</p>
                </div>
                <div className="col-md-6 col-12">
                    <div
                        className="testimonial-container"
                        onMouseLeave={handleTestimonialLeave}
                    >
                        {selectedTestimonial ? (
                            <div className="testimonial-detail">
                                <div className="testimonial-content">
                                    <h2 className="testimonial-author">{selectedTestimonial.text}</h2>
                                    <img src={selectedTestimonial.image} alt="" />
                                    <h6 className="testimonial-text">{selectedTestimonial.author}</h6>
                                    <ul>
                                        <li>{selectedTestimonial.place}</li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className="scrolling-testimonials">
                                {testimonials.concat(testimonials).map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="testimonial-bubble-left"
                                        onMouseEnter={() => handleTestimonialHover(testimonial)}
                                    >
                                        <img src={testimonial.image} alt="" />
                                        <h2 className="testimonial-author">{testimonial.text}</h2>
                                        <h6 className="testimonial-text">{testimonial.author}</h6>
                                        <ul>
                                            <li>{testimonial.place}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>

                        )}
                    </div>
                </div>

                <div className="col-md-6 col-12 videoDiv">
                    <Slider {...VideoSettings}>
                        <video src={Sample1} controls />
                        <video src={Sample1} controls />
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default CustomerTestimonials;