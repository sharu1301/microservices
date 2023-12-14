
import './index.scss';


export default function AppCard({image, icon, title, description, reverse}) {
    return(
           <div className="container">

             <div  className='cardContainer' style={{ flexDirection: reverse ? 'row-reverse': 'row' }}>
               <img className='cardImg' src={image} alt=''/>
                 <div className='textCard'>
                     <img src={icon} alt=''/>
                     <p className='title'>{title}</p>

                     <p className='description'>{description}</p>
                 </div>

                
             </div>
             <img className='cardImg2' src={image} alt=''/>
           </div>
    )
}