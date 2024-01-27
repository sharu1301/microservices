import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

import CustomerTestominialData from '../../../data/testimonial.json'

const Sample1 = require("../../../assets/videos/testimonial1.MOV");
const Sample2 = require("../../../assets/videos/testimonial2.MOV");

interface Testimonial {
  id: number;
  author: string;
  text: string;
  place: string;
  image: string;
}

const testimonials: Testimonial[] = CustomerTestominialData


const CustomerTestimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const VideoSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
  };
  const handleTestimonialHover = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleTestimonialLeave = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div className="container pb-5 mt-4">
      <div className="row w-100">
        <div className="col-md-8 m-auto text-center mb-4">
          <h2 className="heading mb-2">Our Happy customers</h2>
          <p>
            Engineered Precision, Delivered Satisfaction – Hear from Our Happy
            Customers
          </p>
        </div>
        <div className="col-md-6 col-12">
          <div
            className="testimonial-container"
            onMouseLeave={handleTestimonialLeave}
          >
            {selectedTestimonial ? (
              <div className="testimonial-detail">
                <div className="testimonial-content">
                  <h2 className="testimonial-author">
                    {selectedTestimonial.text}
                  </h2>
                  <img src={require(`../../../assets/${selectedTestimonial.image}`)} alt="" />
                  <h6 className="testimonial-text">
                    {selectedTestimonial.author}
                  </h6>
                  <ul>
                    <li>{selectedTestimonial.place}</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="scrolling-testimonials">
                {testimonials.concat(testimonials).map((testimonial, index) => {
                   return index % 2 === 0 || index === 0 ? (
                    <div className="testimonial-main-container">
                      <div
                        key={index}
                        className="testimonial-bubble-left"
                        onMouseEnter={() => handleTestimonialHover(testimonial)}
                      >
                        <div className="image-container">
                        <img src={require(`../../../assets/${testimonial.image}`)} alt="" />
                        </div>
                        <div className="testimonial-contant-details">
                          <h2 className="testimonial-author">
                            {testimonial.text}
                          </h2>
                          <h6 className="testimonial-text">
                            {testimonial.author}
                          </h6>
                          <ul>
                            <li>{testimonial.place}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="testimonial-main-container">
                      <div
                        key={index}
                        className="testimonial-bubble-right "
                        onMouseEnter={() => handleTestimonialHover(testimonial)}
                      >
                        <div className="testimonial-contant-details">
                          <h2 className="testimonial-author">
                            {testimonial.text}
                          </h2>
                          <h6 className="testimonial-text">
                            {testimonial.author}
                          </h6>
                          <ul>
                            <li>{testimonial.place}</li>
                          </ul>
                        </div>
                        <div className="image-container">
                        <img src={require(`../../../assets/${testimonial.image}`)} alt="" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="col-md-6 col-12 videoDiv ">
          <Slider {...VideoSettings}>
            <video src={Sample1} controls />
            <video src={Sample2} controls />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
