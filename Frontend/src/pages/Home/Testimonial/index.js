
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Testimonial() {
  return (
    <>
      {/* testimonial container start */}
      <section id="testimonialCntr">
        <div className="container">
          <h2>Client Testimonial</h2>
          <div className="testiMonialBox">
              <div className="holder">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 500,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: true,
                }}
                speed={3000}
                //pagination={}
                breakpoints={{
                  1200: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
              >
                <SwiperSlide>
                 
                    <div className="block">
                      <div className="image">
                      
                        <figure><img src="images/pages/home/pic.jpg" alt="pic" /></figure>
                        <div className="name">Lorem Ipsum 3</div>
                        <div className="star"><img data-twic-src="image:home/star.png" alt="star"/></div>
                      </div>
                      <div className="detail">
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                      </div>

                      <div className="clear"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                 
                    <div className="block">
                      <div className="image">
                      
                        <figure><img src="images/pages/home/pic.jpg" alt="pic" /></figure>
                        <div className="name">Lorem Ipsum 3</div>
                        <div className="star"><img data-twic-src="image:home/star.png" alt="star"/></div>
                      </div>
                      <div className="detail">
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                      </div>

                      <div className="clear"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                 
                    <div className="block">
                      <div className="image">
                      
                        <figure><img src="images/pages/home/pic.jpg" alt="pic" /></figure>
                        <div className="name">Lorem Ipsum 3</div>
                        <div className="star"><img data-twic-src="image:home/star.png" alt="star"/></div>
                      </div>
                      <div className="detail">
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                      </div>

                      <div className="clear"></div>
                    </div>
                </SwiperSlide>
               
              </Swiper>
              </div>
          </div>
          
        </div>
      </section>
      {/* testimonial container end */}
    </>
  );
}
