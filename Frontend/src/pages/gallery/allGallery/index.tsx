import React from "react";

import img1 from '../../../assets/images/gallery/all/img1.jpeg';
import img2 from '../../../assets/images/gallery/all/img2.jpeg';
import img3 from '../../../assets/images/gallery/all/img3.jpeg';
import img4 from '../../../assets/images/gallery/all/img4.jpeg';
import img5 from '../../../assets/images/gallery/all/img5.jpeg';
import img6 from '../../../assets/images/gallery/all/img6.jpg';
import './index.scss';

export default function AllGallery() {
    return (
        <div className="container">
            {/* <h2> All Gallery section </h2> */}
            <div className="gallery">
                <div className="row">
                    <div className="col-md-4 ol-12">
                        <img className="image" src={img1} />
                    </div>
                    <div className="col-md-8 col-12">
                        <img className="image" src={img2} />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-8">
                        <div className="row mt-3">
                            <div className="col-md-6 col-12">
                                <img className="image" src={img3} />
                            </div>
                            <div className="col-md-6 col-12">
                                <img className="image" src={img4} />
                            </div>
                            <div className="col-md-12 col-12 mt-3">
                                <img className="image" src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-3">
                        <img className="image" src={img5} />
                    </div>  
                </div>
                {/* <div className="image" style={{backgroundColor: "red", width:"600px", height:'500px'}}></div>
                <div className="image" style={{backgroundColor: "red", width:"600px", height:'500px'}}></div>
                <div  className="image" style={{backgroundColor: "red", width:"600px", height:'500px'}}></div>
                <div className="image" style={{backgroundColor: "red", width:"600px", height:'500px'}}></div>
                <div className="image" style={{backgroundColor: "red", width:"600px", height:'500px'}}></div>
                <div className="image" style={{backgroundColor: "red", width:"600px", height:'500px'}}></div> */}
            </div>  
        </div>
    )
}