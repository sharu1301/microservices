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
          
          {/* <img className='image1' src={image2}/>
          <img className='image1' src={image3}/>
          <img className='image1' src={image4}/> */}
          <div className="row">
            <div className="col-md-4 col-12">
              <img className='image1' src={image1}/>
            </div>
            <div className="col-md-4 col-12">
              <img className='image1' src={image2}/>
            </div>
            <div className="col-md-4 col-12">
              <img className='image1' src={image3}/>
            </div>
            <div className="col-md-4 col-12 mt-4">
              <img className='image1' src={image4}/>
            </div>
          </div>
        
        </div>
        </>
    )
}