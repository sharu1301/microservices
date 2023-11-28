import React from 'react';
import './index.scss'
import galleryImg1 from '../../../assets/images/gallery_img_1.png';
import galleryImg2 from '../../../assets/images/gallery_img_2.png';
import newsImg1 from '../../../assets/images/news_img_1.png';
import newsImg2 from '../../../assets/images/news_img_2.png';
import newsImg3 from '../../../assets/images/news_img_3.png';

export default function NewsGallery(){
    return(
        <>
         <div className='newsContainer'>
            <div className='ourGallery'>
                    <b className='mainTitle'>Our Gallery</b>
                    <div className='horizontalContainer'>
                      <div className='rectangleDiv'>
                          <img  src={galleryImg1} width='100%'/>
                       </div>
                       <div className='rectangleDiv'>
                          <img  src={galleryImg2} width='100%'/>
                       </div>
                    </div>
                    
            </div>
            <div className='ourNews'>
                <b className='mainTitle'> Our News</b>
                <div className='vertialContainer'>
                <div className='newsCard'>
                           <img src={newsImg1} className='newsImage'/>
                           <div>
                              <p className='title'> Lorem ipsum dolor sit amet consect, Eleifend adipiscing amet ornare non am</p>
                              <p className='subtitle'>2mins read . 12 Aug 2023</p>   
                           </div>          
                </div>

                <div className='newsCard'>
                           <img src={newsImg1} className='newsImage'/>
                           <div>
                              <p className='title'> Lorem ipsum dolor sit amet consect, Eleifend adipiscing amet ornare non am</p>
                              <p className='subtitle'>2mins read . 12 Aug 2023</p>   
                           </div>          
                </div> 

                <div className='newsCard'>
                           <img src={newsImg1} className='newsImage'/>
                           <div>
                              <p className='title'> Lorem ipsum dolor sit amet consect, Eleifend adipiscing amet ornare non am</p>
                              <p className='subtitle'>2mins read . 12 Aug 2023</p>   
                           </div>          
                </div> 
                </div>
                
            </div>
         </div>
        </>
    )
}
