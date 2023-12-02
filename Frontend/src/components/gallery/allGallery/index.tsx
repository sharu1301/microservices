import React from "react";

import img1 from '../../../assets/images/gallery/all/img1.jpeg';
import img2 from '../../../assets/images/gallery/all/img2.jpeg';
import img3 from '../../../assets/images/gallery/all/img3.jpeg';
import img4 from '../../../assets/images/gallery/all/img4.jpeg';
import img5 from '../../../assets/images/gallery/all/img5.jpeg';
import './index.scss';

export default function AllGallery(){
    return(
        <div  className="container">
             {/* <h2> All Gallery section </h2> */}
             <div className="gallery">
                <img className="image" src={img1}/>
                <img className="image row-2" src={img2}/>
                <img className="image" src={img3}/>
                <img className="image" src={img4} />
                <img className="image " src={img5}/>
                <img className="image" src={img3}/>
              
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