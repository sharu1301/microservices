import React, {useRef} from 'react';
import imgExhibition from '../../../assets/images/exhibition_img_1.png';
import heroImage from '../../../assets/images/heroImage.png';
import './index.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import arrowLeft from '../../../assets/images/arrow_left.png';
import arrowRight from '../../../assets/images/arrow_right.png';

const images = [
    imgExhibition,
    heroImage,
    imgExhibition,
    heroImage,
]





export default function Exhibition() {

    const ref:any = useRef();


    const ArrowLeft =() =>{
        return(
            <div className='arrows' onClick={() => ref.current.slickNext()} >
            <img src={arrowLeft} style={{width: '70px'}}/>
            </div>
        )
    }
    
    const ArrowRight =() =>{
        return(
            <div className='arrows' onClick={() => ref.current.slickPrev()} >
              <img src={arrowRight} style={{width: '70px'}} />
            </div>
        )
    }

    const Settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>
      };

    return(
        <>
         <div className='container'>
            <h2 className='heading pt-5'> Around The Exhibition</h2>

            <p className='description'>Join us at the upcoming industry exhibition to explore the latest innovations and advancements in injection molding technology. Visit the Hinds Machines booth to experience firsthand our state-of-the-art machinery, tailored solutions, and expert insights that can elevate your manufacturing processes.</p>

            <div className="slide-container">
            <ArrowLeft />
            <div style={{width: '90%'}}>
            <Slider ref={ref} {...Settings}>
         {images.map((image, index)=> (
            <div>
                 <img key={index} className='image' src={image } width="100%"  />
            </div>
         ))}  
        </Slider>
            </div>
            
      
        <ArrowRight />
      </div>
         </div>
        </>
    )
}