import React from "react";
import './index.scss';
import automotive from '../../../assets/images/automotive.png'
import electrical from '../../../assets/images/electrical.png';
import car from '../../../assets/images/car.png';
import pet from '../../../assets/images/pet.png';
import packaging from '../../../assets/images/package.png';
import house from '../../../assets/images/house.png';
import plastic from '../../../assets/images/precision.png';
import construction from '../../../assets/images/construction.png';


export default function AllMachinery(){
    return(
        <div className={"containerAllMachinery"}>

<b className={'oneStopSourceFor1'}>One-Stop Source For All Machinery</b>

      <div className="cardContainer">


           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src={automotive} />
                <p style={{padding:'20px'}}>Automotive components</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src={car} />
                <p style={{ padding:'20px' }}>Toy Industry</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src={electrical} />
                <p style={{ padding:'20px' }}>Electrical & Electronics</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src={pet} />
                <p style={{padding:'20px'}}>Pet Perform</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src={packaging} />
                <p style={{padding:'20px'}}>Packaging</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src={house} />
                <p style={{padding:'20px'}}>House hold</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src={construction} />
                <p style={{padding:'20px'}}>construction</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src={plastic} />
                <p style={{padding:'20px'}}>Precision Plastic industry</p>
              </div>
           </div> 

      </div>
      
        </div>
    )
} 