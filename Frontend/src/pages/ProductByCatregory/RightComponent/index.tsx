import React from 'react';
import './index.scss';
import { BsArrowRight } from "react-icons/bs";


import { useNavigate, } from 'react-router-dom';


interface RightImgComponentInterface {
    data: {
        title: string
        image: string
        description: string,
        lists: []
        industry: []
    }
}
export default function RightImgComponent({ data }: RightImgComponentInterface) {


    const navigate = useNavigate();
    return (
        <div className="row rightComponent pt-4">
            <div className='col-md-5 rightDescription'>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <img className='responsiveImg' src={require(`../../../assets/${data.image}`)} alt='' />
                <div className="row">
                {data.industry.map((industryData,i)=>(  <p className='highlighed'>{industryData}</p>))}  
                    {data.lists.map((listData, i) => (
                        <ul>
                            <li>{listData}</li>
                        </ul>))}
                    <p className='highlighed'>Industry : Packaging, Cup & Closure</p>
                </div>
                <div className='button' onClick={() => navigate(`/product-specification/${data.title}`)}><p>View Details <BsArrowRight size={22} /></p> </div>
            </div>
            <div className='col-md-5 rightimgSection'>
                <img src={require(`../../../assets/${data.image}`)} alt='' />
            </div>


        </div>

    )
}