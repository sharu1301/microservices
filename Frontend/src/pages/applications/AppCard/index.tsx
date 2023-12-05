
import './index.scss';

import image1 from '../../../assets/images/applications/img1.png';
import image2 from '../../../assets/images/applications/img2.png';
import image3 from '../../../assets/images/applications/img3.png';
import image4 from '../../../assets/images/applications/img4.png';
import image5 from '../../../assets/images/applications/img5.png';
import image6 from '../../../assets/images/applications/img6.png';
import image7 from '../../../assets/images/applications/img7.png';
import image8 from '../../../assets/images/applications/img8.png';


import icon1 from '../../../assets/images/applications/icons/icon1.png';
import icon2 from '../../../assets/images/applications/icons/icon2.png';
import icon3 from '../../../assets/images/applications/icons/icon3.png';
import icon4 from '../../../assets/images/applications/icons/icon4.png';


export default function AppCard({image, icon, title, description, reverse}) {
    return(
           <div className="container">

             <div  className='cardContainer' style={{ flexDirection: reverse ? 'row-reverse': 'row' }}>
                <img  className='cardImg' src={image}/>
                 <div className='textCard'>
                     <img src={icon}/>
                     <p className='title'>{title}</p>

                     <p className='description'>{description}</p>
                 </div>
             </div>
           </div>
    )
}