import React from 'react';
import './index.scss';
import image1 from '../../../assets/images/gallery/exhibition/img1.png';
import image2 from '../../../assets/images/gallery/exhibition/img2.png';
import image3 from '../../../assets/images/gallery/exhibition/img3.png';
import image4 from '../../../assets/images/gallery/exhibition/img4.png';




export default function ExhibitionGallery (){
    return(
        <>
        <div className='container'>
          <img className='image1' src={image1}/>
          <img className='image1' src={image2}/>
          <img className='image1' src={image3}/>
          <img className='image1' src={image4}/>

        
        </div>
        </>
    )
}