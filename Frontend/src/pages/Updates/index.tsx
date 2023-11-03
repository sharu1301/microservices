import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";


import metadata from "../../resources/content/meta.json";
//import { click } from "@testing-library/user-event/dist/click";
//import { Link } from "react-router-dom";



export default function Updates() {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  const[selectedIndex, setSelectedIndex] = useState<null|string>(null)

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

  //news showmore start here
    const handleReadmore = (index: string| null) => {
      setSelectedIndex(prevIndex => (prevIndex === index? null:index))
    }
  //news showmore ends here


  //news API start here
  const [newsData, setNewsData] = useState([]);
  const [isNewDataAdded] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://stackby.com/api/betav1/rowlist/sthY4FT7hDG3xsbqTl/news_section",

        { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
      )
      .then((res) => res.data && setNewsData(res.data))
      .catch((err) => console.log(err));
  }, [isNewDataAdded])


  //event API start here
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://stackby.com/api/betav1/rowlist/sthY4FT7hDG3xsbqTl/upcoming_events",

        { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
      )
      .then((res) => res.data && setEventsData(res.data))
      .catch((err) => console.log(err));
  }, [isNewDataAdded])

  //exhibition API start here
  const [exhibitionData, setExhibitionData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://stackby.com/api/betav1/rowlist/sthY4FT7hDG3xsbqTl/upcoming_exhibitions",

      { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
    )
    .then((res) => res.data && setExhibitionData(res.data))
    .catch((err) => console.log(err));
},[isNewDataAdded])

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
            background: 'url(images/pages/updates/updates_banner.jpg) no-repeat',

          }}
        >
          <div className="container">
            <h1 className="main_title">Updates</h1>
          </div>
        </div>
        {/* banner box end */}

        <div id="latestnewsCntr">

          {/* latest News box start */}
          <div className="latestnewsBox">
            <div className="container">

              <div className="row">
                <div className="col-sm-12">
                  <h2>Latest News</h2>
                </div>
              </div>

              <div className="row">

                <div col-sm-12>

                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    speed={1500}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
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

                    {newsData && newsData.map((data, index) => {
                      return (
                        <SwiperSlide key={index} className={selectedIndex === index.toString() && "showmore"}>
                          <div className="block newsblock">

                            <figure>
                              <img src={data.field.image && data.field.image[0].url} alt="updates_img" />
                            </figure>
                            <h2>{data.field.title}</h2>
                            <p>{data.field.description}</p>
                            <button className="readmoreBtn" onClick={() => handleReadmore(index.toString())}></button>
                          </div>
                        </SwiperSlide>
                      )
                    })}


                  </Swiper>
                </div>

              </div>

            </div>
          </div>
          {/* latest News box end */}

          {/* events box start */}
          <div className="eventsBox">
            <div className="container">

              <div className="row">
                <div className="col-sm-12">
                  <h2>Upcoming Events</h2>
                </div>
              </div>

              <Swiper
                modules={[Navigation, Autoplay, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                speed={1500}

                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
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

                {eventsData && eventsData.map((data, index) => {
                  let eventDay = moment(data.field.date).format("DD");
                  let eventMonth = moment(data.field.date).format("MMMM");
                  let eventYear = moment(data.field.date).format("YYYY");
                  //console.log(moment(data.field.date).format("DD"))
                  return (
                    <SwiperSlide>
                      <div className="eventblock">
                        <div className="dateCircle">
                          <div className="innercircle">
                            <div className="day">{eventDay}</div>
                            <div className="month">{eventMonth}</div>
                            <div className="year">{eventYear}</div>
                          </div>
                        </div>
                        <h3>{data.field.title}</h3>
                        <p>{data.field.description}</p>
                      </div>
                    </SwiperSlide>
                  )
                })}


              </Swiper>

              <div className="clear"></div>

            </div>
          </div>
          {/* events box end */}

          {/* upComingExhibitiobns box start */}
          <div className="upComingExhibitiobnsBox">
            <div className="container">

              <div className="row">
                <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
                  <h2 className="d-block d-sm-none">Upcoming Exhibitions </h2>
                  <figure><img src="icons/pages/updates/upcoming_exhibitions.svg" alt="upcoming_exhibitions" /></figure>
                  <h2 className="d-none d-sm-block">Upcoming Exhibitions </h2>
                </div>
                <div className="col-md-9">
                  <div className="right">

                    <Swiper
                      modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                      spaceBetween={0}
                      slidesPerView={1}
                      speed={1500}
                      loop={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      breakpoints={{
                        1200: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                      }}
                    >

                      {exhibitionData && exhibitionData.map((data, index) => {

                        const exhibitionDate = moment(data.field.date).format("dddd MMM DD YYYY");

                        return (
                          <SwiperSlide>
                            <div className="text">
                              <h3>{data.field.title}</h3>
                              <span className="date">{exhibitionDate}</span>
                              <p>{data.field.description}</p>
                            </div>
                          </SwiperSlide>
                        )
                      })}


                    </Swiper>

                    {/* <div className="text">
                              <h3>Lorem ipsum</h3>
                              <span className="date">Thursday, 23 June 2023</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* upComingExhibitiobns box end */}

        </div>

        <Footer />
      </>
    </HelmetProvider>
  );
}
