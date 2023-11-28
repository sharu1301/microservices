import React from "react";
import './index.scss';
import construction from '../../../assets/icons/icon_machinery/construction.png'
import electrical from '../../../assets/icons/icon_machinery/electrical.png'

export default function AllMachinery(){
    return(
        <div className={"containerAllMachinery"}>

<b className={'oneStopSourceFor1'}>One-Stop Source For All Machinery</b>

      <div className="cardContainer">


           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src={construction} />
                <p style={{padding:'20px'}}>Automotive components</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src={electrical} />
                <p style={{ padding:'20px' }}>Toy Industry</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src="Mask group.png" />
                <p style={{ padding:'20px' }}>Electrical & Electronics</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src="Mask group.png" />
                <p style={{padding:'20px'}}>Pet Perform</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src="Mask group.png" />
                <p style={{padding:'20px'}}>Packaging</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src="Mask group.png" />
                <p style={{padding:'20px'}}>House hold</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src="Mask group.png" />
                <p style={{padding:'20px'}}>construction</p>
              </div>
           </div> 

           <div className={'rectangleParent'}>
             <div className={'instanceChild'} >
               <img className={'maskGroupIcon'} alt="" src="Mask group.png" />
                <p style={{padding:'20px'}}>Precision Plastic industry</p>
              </div>
           </div> 

      </div>
      
        </div>
    )
} 