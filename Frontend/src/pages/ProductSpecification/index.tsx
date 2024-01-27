import React, { useState, useEffect } from 'react';

import './index.scss';
import Header from '../../components/Header';
import PageTitle from '../../components/pageTitle';
import SubFooter from '../../components/subFooter';
import Footer from '../../components/Footer';
import Slider from "react-slick";
import downArrow from '../../assets/images/product-specification/arrow-down-circle.png';
// import mainImg from '../../assets/images/product-specification/mainImg.png';
import mainImg from '../../assets/images/product-specification/mainImgNumbered.png';
import { useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player';
import blowMouldingData from "../../data/blowMouldingList.json";
import injectionMouldingData from '../../data/productDescription.json';




export default function ProductSpecification() {

  const { productname }: any = useParams();

  // console.log('Params', productname)
  const [footerImg, setFooterImg] = useState(null);

  const [blowMoulding, setMouldingData] = useState<any>(null);
  const [injectionData, setInjectionMouldingData] = useState<any>(null)

  // const [clickMessage, setClickMessage] = useState('');
  const [modal, showModal] = useState(false)

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
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
    setInjectionMouldingData(injectionMouldingMatch)
    setMouldingData(blowMouldingMatch)
  }, [productname]);








  // const handleClick = (event) => {
  //   const x = event?.nativeEvent.offsetX;
  //   const y = event?.nativeEvent.offsetY;

  //   const clickableArea = {
  //     startX: 100, // Replace with your desired x-coordinate
  //     startY: 50,  // Replace with your desired y-coordinate
  //     endX: 200,   // Replace with your desired x-coordinate
  //     endY: 150    // Replace with your desired y-coordinate
  //   };

  //   if (x >= clickableArea.startX && x <= clickableArea.endX && y >= clickableArea.startY && y <= clickableArea.endY) {
  //     setClickMessage('Clicked on the specified portion of the image!');
  //   } else {
  //     setClickMessage('');
  //   }
  // };



  return (

    <>
      <Header />
      <PageTitle title={productname} />
      <div>

        {injectionData ? (
          injectionMouldingData?.filter((data) => data.title.toLowerCase() === productname?.toLowerCase())
            .map((data: any, index) => (

              <div key={index}>

                <div className='mainSectionContainer'>
                  <img src={mainImg}
                    className='image'
                    alt=''
                    // onClick={() => handleClick(data.id)}
                    style={{ cursor: 'pointer' }} />
                  {/* <p
                    style={{
                      paddingLeft: '760px',
                      paddingTop: '260px',
                      position: 'absolute',
                      cursor: 'grabbing',
                      fontWeight: '500'
                    }} onClick={() => showModal(true)}>1</p> */}
                  {modal && (
                    <div className="machine-unit">

                      <div className="machine-content">
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                          <h2 className="testimonial-author">
                            {"Injection Unit"}
                          </h2>
                          <div className="close"
                            onClick={() => showModal(false)}>
                            <i className="fa-solid fa-xmark"></i></div>
                        </div>
                        <img src={require(`../../assets/${data.image}`)} alt="" />
                        <ul style={{ listStyleType: 'disc' }}>
                          {data.injectionUnit?.map((data, i) =>
                            <li key={i} style={{ color: 'black', textAlign: 'left' }}>{data}</li>)}
                        </ul>

                      </div>
                    </div>
                  )}

                  <div className='detailcard'>
                    <div>
                      <b> End Application</b>
                      <ul>
                        {data?.industry?.map((industries, i) => (
                          <li key={i}>{industries}</li>
                        ))}

                      </ul>
                    </div>


                    <div className='slider'>


                      <Slider {...settings}>
                        {data?.sliderImages?.map((images, i) =>
                        (<div key={i}>
                          <img src={require(`../../assets/${images}`)} alt='' />
                        </div>))}

                      </Slider>
                    </div>


                    <div>
                      <b>Standard Features</b>
                      <ul>
                        {data?.standardFeatures?.map((features, index) => (
                          <li key={index}>{features}</li>
                        ))}

                      </ul>
                    </div>

                    <div className={'btnContainer'} style={{ background: 'blue' }}>
                      <img src={downArrow} alt='' />
                      <b>Download Broucher</b>
                    </div>
                  </div>
                </div>



                <div className='description'>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className='leftSection'>
                          <b className='title'>High Performance Servo series produce Better pressure & output.</b>
                          {/* <b className='subTitle'>Clamping Force 90-350</b> */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className='rightSection'>
                          <b className='title' >Hinds Machines, a leading name in the field of machine manufacturerers, is dedicated to providing cutting-edge solutions for diverse industrial needs.</b>
                          <p className='subTitle'>With a rich history spanning decades, their commitment to innovation and quality has set them apart in the industry. Renowned for their precision engineering and advanced technology, Hinds Machines consistently delivers reliable, high-performance products that meet the demands of modern manufacturing. Backed by a team of seasoned experts, Hinds Machines remains at the forefront of the injection molding machinery sector, setting the standard for excellence and customer satisfaction.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className='type'>
                  <div className='card1'>
                    {data?.cards?.map((cardData, i) =>
                      (<b className='title' key={i}>{cardData?.Type}</b>))}
                    <p className='description'>Type</p>
                  </div>

                  <div className='card1'>
                    {data?.cards?.map((cardData, i) =>
                      (<b className='title' key={i}>{cardData?.DriveType}</b>))}
                    <p className='description'>Drive Type</p>
                  </div>

                  <div className='card1'>
                    {data?.cards?.map((cardData, i) =>
                      (<b className='title' key={i}>{cardData?.ClampingForce}</b>))}
                    <p className='description'>Clamping Force</p>
                  </div>
                </div>



                <div className='bottomSlider' >
                  <div className="image-section">
                    <img src={footerImg || require(`../../assets/${data.overviewImages[0]}`)} alt='' />
                  </div>

                  <div className={'smallContainer'} >

                    {data.overviewImages?.map((image, index) => (

                      <div
                        key={index}
                        onClick={() => setFooterImg(require(`../../assets/${image}`))}>
                        <img className={footerImg === image ? 'active' : 'image'} src={require(`../../assets/${image}`)} alt='' />
                      </div>))}


                  </div>

                  <div className='paraContainer'>
                    <p>Click to Zoom</p>
                  </div>

                </div>
              </div>
            )))
          :
          blowMoulding && (

            <div className='reactplayer'>


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

      </div >
    </>
  )
}