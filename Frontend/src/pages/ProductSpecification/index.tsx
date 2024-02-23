import { useState, useEffect } from 'react';

import './index.scss';
import Header from '../../components/Header';
import PageTitle from '../../components/pageTitle';
import SubFooter from '../../components/subFooter';
import Footer from '../../components/Footer';
import Slider from "react-slick";
import downArrow from '../../assets/images/product-specification/arrow-down-circle.png';
import { useParams, useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player';
import blowMouldingData from "../../data/blowMouldingList.json";
import injectionMouldingData from '../../data/productDescription.json';
import SectionModal from '../../components/SectionModal';



export default function ProductSpecification() {
  const navigate = useNavigate()
  const { productname }: any = useParams();

  // console.log('Params', productname)
  const [footerImg, setFooterImg] = useState(null);

  const [blowMoulding, setMouldingData] = useState<any>(null);
  const [injectionData, setInjectionMouldingData] = useState<any>(null)



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

  const MainSliderSettings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <></>,
    // prevArrow: <></>,
  }


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
    // setMouldingData(blowMouldingMatch)
  }, [productname]);

  return (

    <>
      <Header />
      <PageTitle title={productname} subtitle={productname} />
      
      <div>

        {/* {injectionData ? ( */}
        {injectionMouldingData?.filter((data) => data.title.toLowerCase() === productname?.toLowerCase())
          .map((data: any, index) => (

            <div key={index}>

              <div className='mainSectionContainer row'>
                <div className='imgSlider col-md-7'>
                <SectionModal image={data.mainImg}/>
                  {/* <Slider {...MainSliderSettings}>
                    {data?.mainImg?.map((image, index) =>
                    ( */}
                      {/* <img
                        key={index}
                        src={require(`../../assets/${data.mainImg}`)}
                        className='image'
                        alt=''
                        style={{ cursor: 'pointer' }} /> */}
                    {/* ))} */}
                  {/* </Slider> */}
                </div>


                <div className='detailcard col-md-6'>
                  <div>
                    <b> End Application</b>
                    <ul className='pl-4'>
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


                  <div className='mt-5 mb-4'>
                    <b>Standard Features</b>
                    <ul className='pl-4'>
                      {data?.standardFeatures?.map((features, index) => (
                        <li key={index}>{features}</li>
                      ))}

                    </ul>
                  </div>

                  <div className={'btnContainer mt-2'} onClick={() => navigate('/productenquiry')}>
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
                        <b className='title'>{data.description}</b>
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

                  <b className='title'>{data?.Type}</b>
                  <p className='description'>Type</p>
                </div>
                <div className='card1'>

                  <b className='title'>{data?.DriveType}</b>
                  <p className='description'>Drive Type</p>
                </div>
                <div className='card1'>

                  <b className='title'>{data?.ClampingForce}</b>
                  <p className='description'>Clamping Force</p>
                </div>

                {/* <div className='card1'>
                    {data?.cards?.map((cardData, i) =>
                      (<b className='title' key={i}>{cardData?.DriveType}</b>))}
                    <p className='description'>Drive Type</p>
                  </div>

                  <div className='card1'>
                    {data?.cards?.map((cardData, i) =>
                      (<b className='title' key={i}>{cardData?.ClampingForce}</b>))}
                    <p className='description'>Clamping Force</p>
                  </div> */}
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
                  {/* <p>Click to Zoom</p> */}
                </div>

              </div>
            </div>
          ))}









        <SubFooter />
        <Footer />

      </div >
    </>
  )
}