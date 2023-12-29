
import './index.scss';


export default function AppCard({image, icon, title, description, reverse,onClickApp}) {
    return(
           <div className="container pt-4" onClick={onClickApp}>
             <div  className='row cardContainer' style={{ flexDirection: reverse ? 'row-reverse': 'row' }}>
              <div className="col-md-6">
                <img className='cardImg' src={image} alt=''/>
              </div>
              <div className="col-md-6">
                <div className='textCard'>
                     <img src={icon} alt=''/>
                     <p className='title'>{title}</p>

                     <p className='description'>{description}</p>
                 </div>
              </div>
             </div>
             <div className="row">
              <div className="col-md-6">
                <img className='cardImg2' src={image} alt=''/>
              </div>
             </div>
           </div>
    )
}