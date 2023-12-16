import './index.scss';
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


interface LeftImgComponentInterface {
    title: string
    img: string
    description: string,
    l1: string,
    l2: string,
    l3: string,
    l4?: string,
    highlight1:string,
    highlight2:string,
    highlight3:string
    
}
export default function LeftImgComponent({ title, img, description, l1, l2, l3, l4 ,highlight1,highlight2,highlight3}: LeftImgComponentInterface) {

    const navigate = useNavigate();

    return (
        <div className="row leftComponent pt-4">
            <div className='col-md-5 leftimgSection'>
                <img src={img} alt=''/>
            </div>
            <div className='col-md-5 rightDescription'>
                <h4>{title}</h4>
                <p>{description}</p>
                <img className='responsiveImg' src={img} alt=''/>
                <div className="row">
                    <p className='highlighed'>{highlight1}</p>
                    <p className='highlighed'>{highlight2}</p>
                    <p className='highlighed'>{highlight3}</p>
                    <p className='highlighed'>+ 3 more</p>
                </div>
                
                <ul>
                        <li>{l1}</li>
                        <li>{l2}</li>
                        <li>{l3}</li>
                        <li>{l4}</li>
                    </ul>
                    <p className='highlighed'>Industry : Packaging, Cup & Closure</p>

                <div className='button' onClick={() => navigate(`/product-specification/${title}`)}><p>View Details <BsArrowRight size={22} /></p> </div>
            </div>
        </div>

    )
}