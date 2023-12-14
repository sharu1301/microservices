import React, { useState } from 'react';

import './index.scss';
import Header from '../../components/Header';
import PageTitle from '../../components/pageTitle';
import SubFooter from '../../components/subFooter';
import Footer from '../../components/Footer';
import Slider from "react-slick";

import downArrow from '../../assets/images/product-specification/arrow-down-circle.png';


import mainImg from '../../assets/images/product-specification/mainImg.png';


import sliderImg1 from '../../assets/images/product-specification/slider/img1.png';


import bottomSlider1 from '../../assets/images/product-specification/bottomSlider.png';
import bottomSlider2 from '../../assets/images/product-specification/bottomSlider2.png';
import bottomSlider3 from '../../assets/images/product-specification/bottomSlider3.png';
import bottomSlider4 from '../../assets/images/product-specification/bottomSlider4.png';
import { useParams } from 'react-router-dom';

export default function ProductSpecification() {

  const { productname } = useParams();

  const [footerImg, setFooterImg] = useState(bottomSlider1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,

  };

  return (

    <>
      <Header />
      <PageTitle title={productname || "Euro Pac Series"} />

      <div className='mainSectionContainer'>
        <img src={mainImg} className='image' alt=''/>

        <div className='detailcard'>
          <div>
            <b> End Application</b>
            <ul>
              <li> Cup & Closures</li>
              <li> Packaging</li>
            </ul>
          </div>


          <div className='slider'>


            <Slider {...settings}>
              <div>
                <img src={sliderImg1} alt='' />
              </div>
              <div>
                <img src={sliderImg1} alt=''/>
              </div>
              <div>
                <img src={sliderImg1} alt=''/>
              </div>
              <div>
                <img src={sliderImg1} alt=''/>
              </div>
            </Slider>
          </div>


          <div>
            <b>Standard Features</b>
            <ul>
              <li>Clamping</li>
              <li>Five point toggle.</li>
              <li>Wide platen area & Robust design with wide state on moving platen</li>
              <li>Centralized lubrication system with piston cylinder.</li>
              <li>LPMT for position measuring for moving platen, screw travel & Ejection.</li>
              <li>Air ejection system for ﬁxed platen & moving platen</li>
            </ul>
          </div>

          <div className={'btnContainer'} style={{ background: 'blue' }}>
            <img src={downArrow} alt=''/>
            <b>Download Broucher</b>
          </div>
        </div>
      </div>

      <div className='descriptionContainer'>
        <div className='leftSection'>
          <b className='title'>High Performance Servo series produce Better pressure & output.</b>

          <b className='subTitle'>Clamping Force 90-350</b>
        </div>

        <div className='rightSection'>
          <b className='title' >Hinds Machines, a leading name in the field of machine manufacturerers, is dedicated to providing cutting-edge solutions for diverse industrial needs.</b>


          <p className='subTitle'>With a rich history spanning decades, their commitment to innovation and quality has set them apart in the industry. Renowned for their precision engineering and advanced technology, Hinds Machines consistently delivers reliable, high-performance products that meet the demands of modern manufacturing. Backed by a team of seasoned experts, Hinds Machines remains at the forefront of the injection molding machinery sector, setting the standard for excellence and customer satisfaction.</p>
        </div>

      </div>



      <div className='type'>
        <div className='card1'>
          <b className='title'>Injection Moulding</b>
          <p className='description'>Type</p>
        </div>

        <div className='card1'>
          <b className='title'>Fully Electric</b>
          <p className='description'>Drive Type</p>
        </div>

        <div className='card1'>
          <b className='title'>90-350 KN</b>
          <p className='description'>Clamping Force</p>
        </div>
      </div>



      <div className='bottomSlider'>
        <img src={footerImg} alt=''/>

        <div className={'smallContainer'} >
          <div onClick={() => setFooterImg(bottomSlider1)}>
            <img className={footerImg === bottomSlider1 ? 'active' : 'image'} src={bottomSlider1}alt='' />
          </div>

          <div onClick={() => setFooterImg(bottomSlider2)}>
            <img className={footerImg === bottomSlider2 ? 'active' : 'image'} src={bottomSlider2} alt='' />
          </div>

          <div onClick={() => setFooterImg(bottomSlider3)}>
            <img className={footerImg === bottomSlider3 ? 'active' : 'image'} src={bottomSlider3} alt=''/>
          </div>

          <div onClick={() => setFooterImg(bottomSlider4)}>
            <img className={footerImg === bottomSlider4 ? 'active' : 'image'} src={bottomSlider4} alt=''/>
          </div>
        </div>

        <div className='paraContainer'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
        </div>

      </div>


      <SubFooter />
      <Footer />
    </>
  )
}