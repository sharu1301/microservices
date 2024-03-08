import { useState, useEffect } from "react";
import "./index.scss";
import Header from "../../components/Header";
import PageTitle from "../../components/pageTitle";
import SubFooter from "../../components/subFooter";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import downArrow from "../../assets/images/product-specification/arrow-down-circle.png";
import { useParams, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import blowMouldingData from "../../data/blowMouldingList.json";
import injectionMouldingData from "../../data/productDescription.json";
import ImageMapperComponent from "../../components/ImageMapperComponent";

export default function ProductSpecification() {
  const navigate = useNavigate();
  const { productname }: any = useParams();

  const [footerImg, setFooterImg] = useState(null);
  const [blowMoulding, setMouldingData] = useState<any>(null);
  const [injectionData, setInjectionMouldingData] = useState<any>(null);

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };


  useEffect(() => {
    // Check if the product name matches with injection moulding data
    const injectionMouldingMatch = injectionMouldingData.find(
      (data) => data.title.toLowerCase() === productname?.toLowerCase()
    );

    // Check if the product name matches with blow moulding data
    const blowMouldingMatch = blowMouldingData.find(
      (data) => data.title.toLowerCase() === productname?.toLowerCase()
    );

    // Set the matching data based on the priority (e.g., show injection moulding data if it matches)
    // setMatchingData(injectionMouldingMatch || blowMouldingMatch);
    setInjectionMouldingData(injectionMouldingMatch);
    setMouldingData(blowMouldingMatch);
  }, [productname]);

  return (
    <>
      <Header />
      <PageTitle title={productname} subtitle={productname} />
      <div>
        {injectionData
          ? injectionMouldingData
            ?.filter(
              (data) =>
                data.title.toLowerCase() === productname?.toLowerCase()
            )
            .map((data: any, index) => (
              <div key={index}>
                <div className="mainSectionContainer row">
                  {/* for desktop */}
                  <div className="imgSlider col-md-7">
                    {data.id === 1 && (
                      <ImageMapperComponent
                        forScreen="desktop"
                        src={data?.mainImg}
                        allData={data}
                        name="EuroPacSeries"
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [35, 35, 46, 48], data: data.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 2", shape: "rect", coords: [22, 45, 26, 28], data: data.controls, title: 'Display Unit' },
                          { name: "unit 3", shape: "rect", coords: [12.3, 50, 21.9, 28], data: data.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 4", shape: "rect", coords: [25, 68, 46, 55], data: [], title: '' }
                        ]}
                      />)}

                    {data.id === 2 && (<ImageMapperComponent
                      src={data?.mainImg}
                      name="EuroPETSeries"
                      forScreen="desktop"
                      allData={data}
                      areas={[
                        { name: "unit 1", shape: "rect", coords: [22, 43, 29, 60], data: data.injectionUnit, title: '' },
                        { name: "unit 2", shape: "rect", coords: [17, 72, 24, 62], data: data.controls, title: '' },
                        { name: "unit 3", shape: "rect", coords: [12.3, 58, 21.9, 43], data: data.clampingUnit, title: '' },
                        { name: "unit 4", shape: "rect", coords: [37, 67, 43, 56], data: data.injectionUnit, title: '' }
                      ]}
                    />)}

                    {data.id === 3 && (
                      <ImageMapperComponent
                        name="EuroServoSeries"
                        forScreen="desktop"
                        src={data?.mainImg}
                        allData={data}
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [0, 15, 10, 38], data: data?.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [35, 23, 46, 40], data: data?.hydraulics, title: 'Hydraulics Unit' },
                          { name: "unit 3", shape: "rect", coords: [50, 36, 46.9, 25], data: data?.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 4", shape: "rect", coords: [47, 50, 33, 65], data: data?.controlPanel, title: 'Control Panel' },
                          { name: "unit 5", shape: "rect", coords: [21, 37, 25, 14], data: data?.controls, title: 'HMI' },
                        ]}
                      />)}

                    {data.id === 4 && (
                      <ImageMapperComponent
                        name="EuroStarSeries"
                        forScreen="desktop"
                        src={data?.mainImg}
                        allData={data}
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [5, 10, 12, 30], data: data.heavydutyclampingunit, title: 'Heavy Duty Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [14, 36, 22, 16], data: data.lowmaintenanceclampingunit, title: 'Low Maintenance Clamping Unit' },
                          { name: "unit 3", shape: "rect", coords: [23, 38, 28, 10], data: data.controlUnit, title: 'Control Unit' },
                          { name: "unit 4", shape: "rect", coords: [34, 23, 43, 38], data: data.injectionunit, title: 'Injection Unit' },
                          { name: "unit 5", shape: "rect", coords: [25, 67, 43, 45], data: [], title: '' },
                        ]}
                      />)}
                    {data.id === 5 && (
                      <ImageMapperComponent
                        name="EuroCPVCSeries"
                        forScreen="desktop"
                        src={data?.mainImg}
                        allData={data}
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [0, 15, 10, 38], data: data.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [35, 23, 46, 40], data: data.hydraulics, title: 'Hydraulics Unit' },
                          { name: "unit 3", shape: "rect", coords: [50, 36, 46.9, 25], data: data.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 4", shape: "rect", coords: [47, 50, 33, 65], data: data.controlPanel, title: 'Control Panel' },
                          { name: "unit 5", shape: "rect", coords: [21, 37, 25, 14], data: data.controls, title: 'HMI' },
                        ]}
                      />)}

                    {data.id === 6 && (
                      <ImageMapperComponent
                        name="EuroPVCSeries"
                        forScreen="desktop"
                        src={data?.mainImg}
                        allData={data}
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [0, 15, 10, 38], data: data.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [35, 23, 46, 40], data: data.hydraulics, title: 'Hydraulics Unit' },
                          { name: "unit 3", shape: "rect", coords: [50, 36, 46.9, 25], data: data.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 4", shape: "rect", coords: [47, 50, 33, 65], data: data.controlPanel, title: 'Control Panel' },
                          { name: "unit 5", shape: "rect", coords: [21, 37, 25, 14], data: data.controls, title: 'HMI' },
                        ]}
                      />)}



                    {data.id === 7 && (
                      <ImageMapperComponent
                        name="EuroRSeries"
                        forScreen="desktop"
                        src={data?.mainImg}
                        allData={data}
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [1, 25, 18, 43], data: data.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [42, 23, 46, 37], data: data.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 3", shape: "rect", coords: [35, 41, 31, 23], data: data.hmi, title: 'HMI' },
                          { name: "unit 4", shape: "rect", coords: [54, 46, 40, 65], data: data.hydraulics, title: 'Hydraulics Unit' },

                        ]}
                      />)}

                    {data.id === 8 && (
                      <ImageMapperComponent
                        forScreen="desktop"
                        name="EuroServoR"
                        src={data?.mainImg}
                        allData={data}
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [1, 25, 18, 43], data: data.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [42, 23, 46, 37], data: data.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 3", shape: "rect", coords: [35, 41, 31, 23], data: data.hmi, title: 'HMI' },
                          { name: "unit 4", shape: "rect", coords: [54, 46, 40, 65], data: data.hydraulics, title: 'Hydraulics Unit' },

                        ]}
                      />)}
                    {data.id === 9 && (
                      <ImageMapperComponent
                        name="EuroRSmart"
                        forScreen="desktop"
                        src={data?.mainImg}
                        allData={data}
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [1, 25, 18, 43], data: data.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [42, 23, 46, 37], data: data.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 3", shape: "rect", coords: [35, 41, 31, 23], data: data.hmi, title: 'HMI' },
                          { name: "unit 4", shape: "rect", coords: [54, 46, 40, 65], data: data.hydraulics, title: 'Hydraulics Unit' },

                        ]}
                      />)}
                    {data.id === 10 && (
                      <ImageMapperComponent
                        name="EuroServoSmart"
                        forScreen="desktop"
                        src={data?.mainImg}
                        allData={data}
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [0, 15, 10, 38], data: data.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [35, 23, 46, 40], data: data.hydraulics, title: 'Hydraulics Unit' },
                          { name: "unit 3", shape: "rect", coords: [50, 36, 46.9, 25], data: data.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 4", shape: "rect", coords: [47, 50, 33, 65], data: data.controlPanel, title: 'Control Panel' },
                          { name: "unit 5", shape: "rect", coords: [21, 37, 25, 14], data: data.controls, title: 'HMI' },
                        ]}
                      />)}
                    {/* <SectionModal image={data?.mainImg} /> */}




                  </div>
                  {/* for Mobile */}
                  <div className="imgslider-section col-md-7 d-none">
                    {data.id === 1 && (
                      <ImageMapperComponent
                        forScreen="mobile"
                        src={data?.mainImg}
                        allData={data}
                        name="EuroPacSeries"
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [58, 20, 76, 29], data: data.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 2", shape: "rect", coords: [36, 27, 42, 16], data: data.controls, title: 'Display Unit' },
                          { name: "unit 3", shape: "rect", coords: [20, 30, 36, 16], data: data.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 4", shape: "rect", coords: [41, 42, 76, 34], data: [], title: '' }
                        ]}
                      />)}

                    {data.id === 2 && (<ImageMapperComponent
                      src={data?.mainImg}
                      name="EuroPETSeries"
                      forScreen="mobile"
                      allData={data}
                      areas={[
                        { name: "unit 1", shape: "rect", coords: [36, 26, 48, 36], data: data.injectionUnit, title: '' },
                        { name: "unit 2", shape: "rect", coords: [28, 43, 40, 37], data: data.controls, title: '' },
                        { name: "unit 3", shape: "rect", coords: [20, 36, 35, 26], data: data.clampingUnit, title: '' },
                        { name: "unit 4", shape: "rect", coords: [60, 34, 70, 40], data: data.injectionUnit, title: '' }
                      ]}
                    />)}

                    {data.id === 3 && (
                      <ImageMapperComponent
                        name="EuroServoSeries"
                        forScreen="mobile"
                        src={data?.mainImg}
                        allData={data}
                        areas={[

                          { name: "unit 1", shape: "rect", coords: [0, 9, 18, 23], data: data?.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [57, 14, 75, 24], data: data?.hydraulics, title: 'Hydraulics Unit' },
                          { name: "unit 3", shape: "rect", coords: [77, 16, 84, 25], data: data?.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 4", shape: "rect", coords: [54, 30, 77, 40], data: data?.controlPanel, title: 'Control Panel' },
                          { name: "unit 5", shape: "rect", coords: [34, 22, 41, 8], data: data?.controls, title: 'HMI' },
                        ]}
                      />)}

                    {data.id === 4 && (
                      <ImageMapperComponent
                        name="EuroStarSeries"
                        forScreen="mobile"
                        src={data?.mainImg}
                        allData={data}
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [8, 5, 20, 18], data: data.heavydutyclampingunit, title: 'Heavy Duty Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [23, 19, 36, 9], data: data.lowmaintenanceclampingunit, title: 'Low Maintenance Clamping Unit' },
                          { name: "unit 3", shape: "rect", coords: [37, 23, 46, 6], data: data.controlUnit, title: 'Control Unit' },
                          { name: "unit 4", shape: "rect", coords: [56, 13, 70, 23], data: data.injectionunit, title: 'Injection Unit' },
                          { name: "unit 5", shape: "rect", coords: [42, 27, 70, 40], data: [], title: '' },
                        ]}
                      />)}

                    {data.id === 5 && (
                      <ImageMapperComponent
                        name="EuroCPVCSeries"
                        forScreen="mobile"
                        src={data?.mainImg}
                        allData={data}
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [0, 9, 18, 23], data: data.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [57, 14, 75, 24], data: data.hydraulics, title: 'Hydraulics Unit' },
                          { name: "unit 3", shape: "rect", coords: [77, 16, 84, 25], data: data.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 4", shape: "rect", coords: [54, 30, 77, 40], data: data.controlPanel, title: 'Control Panel' },
                          { name: "unit 5", shape: "rect", coords: [34, 22, 41, 8], data: data.controls, title: 'HMI' },
                        ]}
                      />)}

                    {data.id === 6 && (
                      <ImageMapperComponent
                        name="EuroPVCSeries"
                        forScreen="mobile"
                        src={data?.mainImg}
                        allData={data}
                        areas={[
                          { name: "unit 1", shape: "rect", coords: [0, 9, 18, 23], data: data.clampingUnit, title: 'Clamping Unit' },
                          { name: "unit 2", shape: "rect", coords: [57, 14, 75, 24], data: data.hydraulics, title: 'Hydraulics Unit' },
                          { name: "unit 3", shape: "rect", coords: [77, 16, 84, 25], data: data.injectionUnit, title: 'Injection Unit' },
                          { name: "unit 4", shape: "rect", coords: [54, 30, 77, 40], data: data.controlPanel, title: 'Control Panel' },
                          { name: "unit 5", shape: "rect", coords: [34, 22, 41, 8], data: data.controls, title: 'HMI' },
                        ]}
                      />)}

                  </div>
                  <div className="detailcard col-md-6">
                    <div>
                      <b> End Application</b>
                      <ul className="pl-4">
                        {data?.industry?.map((industries, i) => (
                          <li key={i}>{industries}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="slider">
                      <Slider {...settings}>
                        {data?.sliderImages?.map((images, i) => (
                          <div key={i}>
                            <img
                              src={require(`../../assets/${images}`)}
                              alt="lorem"
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="mt-5 mb-4">
                      <b>Standard Features</b>
                      <ul className="pl-4">
                        {data?.standardFeatures?.map((features, index) => (
                          <li key={index}>{features}</li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={"btnContainer mt-2"}
                      onClick={() => navigate("/productenquiry")}
                    >
                      <img src={downArrow} alt="" />
                      <b>Download Broucher</b>
                    </div>
                  </div>
                </div>
                <div className="description">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="leftSection">
                          <b className="title">{data.description}</b>
                          {/* <b className='subTitle'>Clamping Force 90-350</b> */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="rightSection">
                          <b className="title">
                            Hinds Machines, a leading name in the field of
                            machine manufacturerers, is dedicated to providing
                            cutting-edge solutions for diverse industrial
                            needs.
                          </b>
                          <p className="subTitle">
                            With a rich history spanning decades, their
                            commitment to innovation and quality has set them
                            apart in the industry. Renowned for their
                            precision engineering and advanced technology,
                            Hinds Machines consistently delivers reliable,
                            high-performance products that meet the demands of
                            modern manufacturing. Backed by a team of seasoned
                            experts, Hinds Machines remains at the forefront
                            of the injection molding machinery sector, setting
                            the standard for excellence and customer
                            satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="type">
                  <div className="card1">
                    <b className="title">{data?.Type}</b>
                    <p className="description">Type</p>
                  </div>
                  <div className="card1">
                    <b className="title">{data?.DriveType}</b>
                    <p className="description">Drive Type</p>
                  </div>
                  <div className="card1">
                    <b className="title">{data?.ClampingForce}</b>
                    <p className="description">Clamping Force</p>
                  </div>
                </div>
                <div className="bottomSlider">
                  <div className="image-section text-center">
                    <img
                      src={
                        footerImg ||
                        require(`../../assets/${data.overviewImages[0]}`)
                      }
                      alt=""
                    />
                  </div>
                  <div className={"smallContainer"}>
                    {data.overviewImages?.map((image, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          setFooterImg(require(`../../assets/${image}`))
                        }
                      >
                        <img
                          className={footerImg === image ? "active" : "image"}
                          src={require(`../../assets/${image}`)}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                  <div className="paraContainer">
                    {/* <p>Click to Zoom</p> */}
                  </div>
                </div>
              </div>
            ))
          : blowMoulding && (
            <div className="reactplayer">
              <ReactPlayer
                url={blowMoulding?.videoLink}
                loop={true}
                controls={true}
              />
              {/* )} */}
            </div>
          )}
        <SubFooter />
        <Footer />
      </div>
    </>
  );
}
