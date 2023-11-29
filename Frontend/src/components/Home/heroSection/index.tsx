import React from "react";
import './index.scss'
export default function HeroSection(){
    return(
        <div className={'heroSection'}>
      <div className={'overlay'}></div>
      <div className={'content'}>
        <b className="title">Best industrial </b>
        <b className="title">service Provider</b>
        <p className="subtitle">Innovating Precision, Powering Progress: Welcome to the Future of Manufacturing with Hinds Machines.</p>
        <button>Explore Products</button>
      </div>
    </div>
    )
}