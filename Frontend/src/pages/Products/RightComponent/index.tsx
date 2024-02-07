import React,{useState} from 'react';
import './index.scss';
import { BsArrowRight } from "react-icons/bs";


import { useNavigate, } from 'react-router-dom';


interface RightImgComponentInterface {
    title: string
    img: string
    description: string,
    l1: string,
    l2: string,
    l3: string,
    l4?: string
    highlight1: string,
    highlight2: string,
    highlight3: string,
    industry1: string,
    industry2?: string,
    industry3?: string,
    highlight4?:string

}
export default function RightImgComponent({ title, img, description, l1, l2, l3, l4, highlight1, highlight2, highlight3,industry1,industry2,industry3,highlight4 }: RightImgComponentInterface) {


    const navigate = useNavigate();
    const[showMoreHighlight,setShowMoreHighlight]=useState(false)
    return (
        <div className="row rightComponent pt-5 d-flex w-100">
            <div className='col-md-6 rightDescription'>
                <h4>{title}</h4>
                <p>{description}</p>
                <img className='responsiveImg' src={img} alt='' />
                <div className="row">
                    <p className='highlighed'>{highlight1}</p>
                    <p className='highlighed'>{highlight2}</p>
                    <p className='highlighed'>{highlight3}</p>
                    {/* <p className='highlighed' onClick={()=>}>+ 3 more</p> */}
                    {highlight4 && !showMoreHighlight? (
                     <p className='highlighed' onClick={()=>setShowMoreHighlight(true)}>+ 1 more</p>)
                    :null}
                    {showMoreHighlight && (
                        <p className='highlighed'>{highlight4}</p> 
                    )}
                    </div>
                    <ul>
                        <li>{l1}</li>
                        <li>{l2}</li>
                        <li>{l3}</li>
                        {l4 && (<li>{l4}</li>)}
                    </ul>
                    <p className='highlighed ml-0'>
                    Industry :{` ${industry1}${industry2 ? ', ' + industry2 : ''}${industry3 ? ', ' + industry3 : ''}`}</p>
                {/* </div> */}
                <div className='button' onClick={() => navigate(`/product-specification/${title}`)}><p>View Details <BsArrowRight size={22} /></p> </div>
            </div>
            <div className='col-md-6 rightimgSection'>
                <img src={img} alt='' />
            </div>


        </div>

    )
}