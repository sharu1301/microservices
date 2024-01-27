import './index.scss'
import galleryImg1 from '../../../assets/images/gallery_img_1.png';
import galleryImg2 from '../../../assets/images/gallery_img_2.png';

import News from './News';

export default function NewsGallery() {
    return (
        <>
            <div className='newsContainer'>
                <div className='ourGallery'>
                    <b className='mainTitle'>Our Gallery</b>
                    <div className='horizontalContainer'>
                        <div className='rectangleDiv'>
                            <img src={galleryImg1} width='100%' alt='' />
                            {/* <p className='title'>at massa nulla quisque posuere.</p>
                            <p className='subtitle'>Lorem ipsum dolor sit amet </p> */}
                        </div>
                        <div className='rectangleDiv'>
                            <img src={galleryImg2} width='100%' alt='' />
                            {/* <p className='title' >at massa nulla quisque posuere.</p>
                            <p className='subtitle'>Lorem ipsum dolor sit amet </p> */}
                        </div>
                    </div>

                </div>
                <div className='ourNews'>
                    <b className='mainTitle'> Our News</b>
                    <News limit={3} />

                </div>
            </div>
        </>
    )
}
