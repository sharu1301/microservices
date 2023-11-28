import React from 'react';
import imgExhibition from '../../../assets/images/exhibition_img_1.png';
import './index.scss';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const images = [
    imgExhibition,
    imgExhibition,
    imgExhibition
]





export default function Exhibition() {
    return(
        <>
         <div className='container'>
            <h2 className='heading'> Around The Exhibition</h2>

            <p className='description'>Join us at the upcoming industry exhibition to explore the latest innovations and advancements in injection molding technology. Visit the Hinds Machines booth to experience firsthand our state-of-the-art machinery, tailored solutions, and expert insights that can elevate your manufacturing processes.</p>

            <div className="slide-container">
        <Slide >
            {/* <div style={{display: 'flex', justifyContent: "center", alignItems:"center",}}> */}

           
         {images.map((image, index)=> (
            <img key={index} className="image" src={imgExhibition} width="1139px"  height="489px"/>
          ))} 
           {/* </div>  */}
        </Slide>
      </div>
            {/* <img className="image" src={imgExhibition} width="1139px"  height="489px"/> */}
         </div>
        </>
    )
}