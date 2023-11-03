import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Exhibitions() {
  return (
    <>
      {/* exhibitions container start */}
      <section id="exhibitionsCntr">
        <div className="container">
          <h2>Exhibitions</h2>
          <Swiper
                modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
                navigation={true}
          pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
                
                speed={1500}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
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
                      <img data-twic-src="image:home/exhibitions_img1.jpg" alt="Exhibitions"/>
                    </figure>
                    
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/exhibitions_img1.jpg" alt="Exhibitions"/>
                    </figure>
                    
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/exhibitions_img1.jpg" alt="Exhibitions"/>
                    </figure>
                    
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/exhibitions_img1.jpg" alt="Exhibitions"/>
                    </figure>
                    
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/exhibitions_img1.jpg" alt="Exhibitions"/>
                    </figure>
                    
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/exhibitions_img1.jpg" alt="Exhibitions"/>
                    </figure>
                    
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/exhibitions_img1.jpg" alt="Exhibitions"/>
                    </figure>
                    
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="block">
                    <Link to="/">
                    <figure>
                      <img data-twic-src="image:home/exhibitions_img1.jpg" alt="Exhibitions"/>
                    </figure>
                    
                    </Link>
                  </div>
                </SwiperSlide>
                
          </Swiper>
        </div>
      </section>
      {/* exhibitions container end */}
    </>
  );
}
