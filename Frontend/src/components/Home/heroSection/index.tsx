import React from "react";
import './index.scss'
import arrow from '../../../assets/images/right_arrow.png';
export default function HeroSection(){
    return(
        <div className={'heroSection'}>
      <div className={'overlay'}></div>
      <div className={'content'}>
        <b className="title">Best industrial </b>
        <b className="title">service Provider</b>
        <p className="subtitle">Innovating Precision, Powering Progress: Welcome to the Future of Manufacturing with Hinds Machines.</p>
        <div className="btn">
          Explore Products
         <img src={arrow}/>
        </div>
      </div>
    </div>
    )
}