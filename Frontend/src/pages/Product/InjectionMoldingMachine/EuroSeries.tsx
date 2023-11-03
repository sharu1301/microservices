import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import metadata from "../../../resources/content/meta.json";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Swiper, SwiperSlide } from "swiper/react";
//import {FreeMode, Navigation, Thumbs } from "swiper";
import { Navigation, Thumbs, Mousewheel } from "swiper";

const slides = [
  "images/pages/product/Injection_Molding_product1.jpg",
  "images/pages/product/Injection_Molding_product1.jpg",
  "images/pages/product/Injection_Molding_product1.jpg",
  "images/pages/product/Injection_Molding_product1.jpg",
  "images/pages/product/Injection_Molding_product1.jpg",
  "images/pages/product/Injection_Molding_product1.jpg",
  "images/pages/product/Injection_Molding_product1.jpg",
  "images/pages/product/Injection_Molding_product1.jpg",
  "images/pages/product/Injection_Molding_product1.jpg",
  "images/pages/product/Injection_Molding_product1.jpg",
];

export default function EuroSeries() {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  //const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imagesNavSlider, setImagesNavSlider] = useState();

  useEffect(() => {
    for (let i = 0; i < metadata.length; i++) {
      if (metadata[i].url === window.location.pathname) {
        setMetaTitle(metadata[i].title);
        setMetaDescription(metadata[i].description);
        setMetaKeywords(metadata[i].keywords);

        break;
      }
    }
  }, []);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeywords} />
        </Helmet>

        <Header />

        {/* banner box start */}
        <div
          className="innerBannerBox"
          style={{
            background:
              "url(images/pages/gallary/gallary_banner.jpg) no-repeat",
          }}
        >
          <div className="container">
            <h1 className="main_title">Euro Series</h1>
          </div>
        </div>
        {/* banner box end */}

        {/* product container start */}
        <div id="productpageCntr">
          {/* product box start */}
          <div className="productdetailBox">
            <div className="container">
              <h2 className="sub_title">Euro Series</h2>

              <section className="slider">
                <div className="slider__flex">
                  <div className="slider__col">
                    <div className="slider__prev">Prev</div>

                    <div className="slider__thumbs">
                      <Swiper
                        onSwiper={imagesNavSlider}
                        direction="vertical"
                        spaceBetween={24}
                        slidesPerView={3}
                        navigation={{
                          nextEl: ".slider__next",
                          prevEl: ".slider__prev",
                        }}
                        className="swiper-container1"
                        breakpoints={{
                          0: {
                            direction: "horizontal",
                          },
                          768: {
                            direction: "vertical",
                          },
                        }}
                        modules={[Navigation, Thumbs]}
                      >
                        {slides.map((slide, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <div className="slider__image">
                                <img src={slide} alt="" />
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>

                    <div className="slider__next">Next</div>
                  </div>

                  <div className="slider__images">
                    <Swiper
                      thumbs={{
                        swiper:
                          imagesNavSlider && !imagesNavSlider.destroyed
                            ? imagesNavSlider
                            : null,
                      }}
                      direction="horizontal"
                      slidesPerView={1}
                      spaceBetween={32}
                      mousewheel={true}
                      navigation={{
                        nextEl: ".slider__next",
                        prevEl: ".slider__prev",
                      }}
                      breakpoints={{
                        0: {
                          direction: "horizontal",
                        },
                        768: {
                          direction: "horizontal",
                        },
                      }}
                      className="swiper-container2"
                      modules={[Navigation, Thumbs, Mousewheel]}
                    >
                      {slides.map((slide, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div className="slider__image">
                              <img src={slide} alt="" />
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </section>

              <div className="buttonBlock">
                  <Link className="viewCataloguebtn" to="/">View Catalogue</Link>
                  <Link className="viewCataloguebtn" to="/">View Video</Link>
              </div>
            </div>
          </div>
          {/* product box end */}

          {/* product box start */}
          <div className="productdetailBox">
            <div className="container">
              <h2 className="sub_title">Overview of Euro Series</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          {/* product box end */}

          {/* product box start */}
          <div className="productdetailBox pink_bg">
            <div className="container">
              <h4>Key Feature</h4>
              <ul>
                <li>
                  Unique and creative solutions that meet the clients’
                  expectations not only by realizing the clients’ business
                  objectives, but particularly by our strict adherence to the
                  ethical principles of public relations
                </li>
                <li>
                  Continuous search for opportunities beyond the agreed
                  communications and business objectives
                </li>
                <li>
                  Creative approaches to the clients’ special needs to find
                  unique and tailored communications solutions
                </li>
                <li>
                  Continuous approach towards the improvements in technology &
                  developments
                </li>
                <li>Provide best Services & Solutions</li>
              </ul>

              <h4>Product Range</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
              </ul>

              <h4>Applications</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
              </ul>

              <h4>Quality and Reliability</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
              </ul>
            </div>
          </div>
          {/* product box end */}

          {/* product box start */}
          <div className="productdetailBox">
            <div className="container">
              <h2 className="sub_title">Quick View</h2>

              <img
                src="images/pages/product/EuroSeries.jpg"
                alt="Euro Series"
              />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <Link className="enquiryBtn" to="/Enquiry">
                Enquiry
              </Link>
            </div>
          </div>
          {/* product box end */}
        </div>
        {/* product container start */}

        <Footer />
      </>
    </HelmetProvider>
  );
}
