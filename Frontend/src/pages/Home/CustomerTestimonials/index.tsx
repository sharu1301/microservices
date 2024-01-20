import { useState } from "react";
import "./index.css";

interface Testimonial {
  id: number;
  author: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Alice",
    text: "Love this product! It really made a difference for me.",
  },
  {
    id: 2,
    author: "Bob",
    text: "Fantastic service, and the quality is top-notch.",
  },
  {
    id: 3,
    author: "Charlie",
    text: "Highly recommend to anyone looking for quality!",
  },
];

const CustomerTestimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const handleTestimonialHover = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleTestimonialLeave = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div
      className="testimonial-container"
      onMouseLeave={handleTestimonialLeave}
    >
      {selectedTestimonial ? (
        <div className="testimonial-detail">
          <div className="testimonial-author">{selectedTestimonial.author}</div>
          <div className="testimonial-text">{selectedTestimonial.text}</div>
        </div>
      ) : (
        <div className="scrolling-testimonials">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-bubble"
              onMouseEnter={() => handleTestimonialHover(testimonial)}
            >
              <div className="testimonial-author">{testimonial.author}</div>
              <div className="testimonial-text">{testimonial.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerTestimonials;
