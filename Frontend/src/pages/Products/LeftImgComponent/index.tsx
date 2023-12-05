import React from 'react';
import './index.scss';
import EuroPacImg from '../../../assets/images/productimages/EuroPac.png'
import { BsArrowRight } from "react-icons/bs";


interface LeftImgComponentInterface {
    title: string
    img: string
    description: string,
    l1: string,
    l2: string,
    l3: string,
    l4?: string
}
export default function LeftImgComponent({ title, img, description, l1, l2, l3, l4 }: LeftImgComponentInterface) {
    return (
        <div className="row leftComponent">
            <div className='col-md-5 leftimgSection'>
                <img src={img} />
            </div>
            <div className='col-md-5 rightDescription'>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="row">
                    <p className='highlighed'>Low Power Consumption</p>
                    <p className='highlighed'>Hydraulic motor</p>
                    <p className='highlighed'>User Friendly</p>
                    <p className='highlighed'>+ 3 more</p>

                </div>
                
                <ul>
                        <li>{l1}</li>
                        <li>{l2}</li>
                        <li>{l3}</li>
                        <li>{l4}</li>
                    </ul>
                    <p className='highlighed'>Industry : Packaging, Cup & Closure</p>

                <div className='button'><p>View Details <BsArrowRight size={22} /></p> </div>
            </div>
        </div>

    )
}