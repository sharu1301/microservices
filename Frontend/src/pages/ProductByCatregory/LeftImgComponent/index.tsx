import './index.scss';
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


interface LeftImgComponentInterface {
    data:
    {
        title: string
        image: string
        description: string,
        lists: []
        industry: []
    }


}
export default function LeftImgComponent({ data }: LeftImgComponentInterface) {

    const navigate = useNavigate();

    return (
        <div className="row leftComponent pt-4">
            <div className='col-md-6 leftimgSection'>
                <img src={require(`../../../assets/${data.image}`)} alt='' />
            </div>
            <div className='col-md-6 rightDescription pl-5'>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <img className='responsiveImg' src={require(`../../../assets/${data.image}`)} alt='' />

                <div className="row d-flex mb-3">
                    {data.industry.map((industryData, i) => (<p className='highlighed'>{industryData}</p>))}

                    {/* <p className='highlighed'>+ 3 more</p> */}
                </div>

                {data.lists.map((listData, i) => (
                    <ul>
                        <li>{listData}</li>
                    </ul>))}
                <p className='highlighed ml-1 mt-3'>Industry : Packaging, Cup & Closure</p>

                <div className='button' onClick={() => navigate(`/product-specification/${data.title}`)}><p>View Details <BsArrowRight size={22} /></p> </div>
            </div>
        </div>

    )
}