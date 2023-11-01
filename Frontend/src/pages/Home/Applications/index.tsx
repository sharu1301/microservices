import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Applications() {
  return (
    <>
      {/* applications container start */}
      <section id="applicationsCntr">
        <div className="container">

          <div className="row">
              <div className="col-md-3 d-flex align-items-center">
                <div>
                  <h2>Applications</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                </div>
              </div>
              <div className="col-md-9">
                  <div className="rightBlock">
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                        navigation={{ clickable: true, delay:0, }}
                        spaceBetween={10}
                        slidesPerView={3}
                        loop={true}
                        // autoplay={{
                        //   delay: 0,
                        //   pauseOnMouseEnter: true,
                        //   disableOnInteraction: true,
                        // }}
                        speed={1500}
                        breakpoints={{
                          1200: {
                            slidesPerView: 3,
                            spaceBetween: 70,
                          },
                          1024: {
                            slidesPerView: 2,
                            spaceBetween: 70,
                          },
                          768: {
                            slidesPerView: 2,
                            spaceBetween: 70,
                          },
                          320: {
                            slidesPerView: 1,
                            spaceBetween: 70,
                          },
                        }}
                      >
                        <SwiperSlide>
                          <div className="slideBlock">
                            <Link to="/Application">
                            <figure>
                              <img src="icons/pages/home/automobile.svg" alt="automobile"/>
                            </figure>
                            <h3>Automobile</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="slideBlock">
                            <Link to="/Application">
                            <figure>
                              <img src="icons/pages/home/textile.svg" alt="textile"/>
                            </figure>
                            <h3>Textile</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="slideBlock">
                            <Link to="/Application">
                            <figure>
                              <img src="icons/pages/home/costruction.svg" alt="costruction"/>
                            </figure>
                            <h3>Costruction</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="slideBlock">
                            <Link to="/Application">
                            <figure>
                              <img src="icons/pages/home/automobile.svg" alt="automobile"/>
                            </figure>
                            <h3>Automobile</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="slideBlock">
                            <Link to="/Application">
                            <figure>
                              <img src="icons/pages/home/textile.svg" alt="textile"/>
                            </figure>
                            <h3>Textile</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="slideBlock">
                            <Link to="/Application">
                            <figure>
                              <img src="icons/pages/home/costruction.svg" alt="costruction"/>
                            </figure>
                            <h3>Costruction</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                            </Link>
                          </div>
                        </SwiperSlide>
                        
                      </Swiper>
                  </div>
              </div>
          </div>
          
        </div>
      </section>
      {/* applications container end */}
    </>
  );
}
