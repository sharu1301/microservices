import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function OurMachines() {
  return (
    <>
      {/* ourmachines container start */}
      <section id="ourmachinesCntr">
        <div className="container">
          <h2>Our Machines</h2>
          <Swiper
                modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 0,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: true,
                }}
                speed={1500}
                //pagination={}
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 2,
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
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/machine1.png" alt="Our machine"/>
                      {/* <img data-twic-src="image:home/about_img.jpg" alt="About" /> */}
                    </figure>
                    <p>Lorem ipsum dolor sit.</p>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/machine1.png" alt="Our machine"/>
                    </figure>
                    <p>Lorem ipsum dolor sit.</p>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/machine1.png" alt="Our machine"/>
                    </figure>
                    <p>Lorem ipsum dolor sit.</p>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/machine1.png" alt="Our machine"/>
                    </figure>
                    <p>Lorem ipsum dolor sit.</p>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/machine1.png" alt="Our machine"/>
                    </figure>
                    <p>Lorem ipsum dolor sit.</p>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/machine1.png" alt="Our machine"/>
                    </figure>
                    <p>Lorem ipsum dolor sit.</p>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/machine1.png" alt="Our machine"/>
                    </figure>
                    <p>Lorem ipsum dolor sit.</p>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/machine1.png" alt="Our machine"/>
                    </figure>
                    <p>Lorem ipsum dolor sit.</p>
                    </Link>
                  </div>
                </SwiperSlide>
                
          </Swiper>
        </div>
      </section>
      {/* ourmachines container end */}
    </>
  );
}
