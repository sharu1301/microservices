import './index.scss'
import galleryImg1 from '../../../assets/images/gallery_img_1.png';
import galleryImg2 from '../../../assets/images/gallery_img_2.png';

import News from './News';

export default function NewsGallery() {
    return (
        <>
            <div className='newsContainer'>
                <div className="container">
                    <div className='ourGallery d-flex row'>
                        <div className="col-md-8">
                            <b className='mainTitle'>Our Gallery</b>
                        </div>
                        <div className="col-md-4">
                            <b className='mainTitle md-none'> Our News</b>
                        </div>
                        <div className='horizontalContainer col-md-8'>
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
                        <div className='ourNews col-md-4'>
                            <b className='mainTitle pl-0 md-block'> Our News</b>
                            <News limit={3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
