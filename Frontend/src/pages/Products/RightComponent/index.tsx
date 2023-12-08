import React from 'react';
import './index.scss';
import EuroPacImg from '../../../assets/images/productimages/EuroPac.png';
import { BsArrowRight } from "react-icons/bs";


import { useNavigate,} from 'react-router-dom';

export default function RightImgComponent() {


    const navigate = useNavigate();
    return (
        <div className="row rightComponent">
            <div className='col-md-5 rightDescription'>
                <h4>Euro Pac Series</h4>
                <p>High speed hydraulic motor on screw drive for high plascizing rate. Energy efficient DFE series electronic variable pump for high output</p>
                <img className='responsiveImg' src={EuroPacImg} />
                <div className="row">
                    <p className='highlighed'>Low Power Consumption</p>
                    <p className='highlighed'>Hydraulic motor</p>
                    <p className='highlighed'>User Friendly</p>
                    <p className='highlighed'>+ 3 more</p>
                    <ul>
                        <li>Five point toggle. </li>
                        <li>Wide platen area & Robust design with wide state on moving platen.</li>
                        <li>Centralised lubricaon system with piston cylinder. </li>
                        <li>LPMT for posion measuring for moving platen, screw travel & Ejection. </li>
                    </ul>
                    <p className='highlighed'>Industry : Packaging, Cup & Closure</p>
                </div>
                <div className='button' onClick={() => navigate(`/product-specification/${title}`)}><p>View Details <BsArrowRight size={22} /></p> </div>
            </div>
            <div className='col-md-5 rightimgSection'>
                <img src={EuroPacImg} />
            </div>

            
        </div>

    )
}