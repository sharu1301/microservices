import { useNavigate } from "react-router-dom";
import './index.scss';
import automotive from '../../../assets/images/automotive.png'
import electrical from '../../../assets/images/electrical.png';
import car from '../../../assets/images/car.png';
import pet from '../../../assets/images/pet.png';
import packaging from '../../../assets/images/package.png';
import house from '../../../assets/images/house.png';
import plastic from '../../../assets/images/precision.png';
import construction from '../../../assets/images/construction.png';

export default function AllMachinery() {

  const navigate = useNavigate();

  return (
    <div className={"containerAllMachinery"}>

      <b className={'oneStopSourceFor1'}>One-Stop Source For All Machinery</b>

      <div className="cardContainer">




        <div
          className={'rectangleParent'}
          onClick={() => navigate('/product-by-category/automotive')}
        >
          <div className={'instanceChild'}>
            <img className={'maskGroupIcon'} alt="" src={automotive} />
            <p className='title'>{'Automotive Components'}</p>
          </div>
        </div>




        <div className={'rectangleParent'} onClick={() => navigate('/product-by-category/toy industry')}>
          <div className={'instanceChild'} >
            <img className={'maskGroupIcon'} alt="" src={car} />
            <p className='title'>Toy Industry</p>
          </div>
        </div>

        <div className={'rectangleParent'} onClick={() => navigate('/product-by-category/electrical industry')}>
          <div className={'instanceChild'} >
            <img className={'maskGroupIcon'} alt="" src={electrical} />
            <p className='title'>Electrical & Electronics</p>
          </div>
        </div>

        <div className={'rectangleParent'} onClick={() => navigate('/product-by-category/pet preform')}>
          <div className={'instanceChild'} >
            <img className={'maskGroupIcon'} alt="" src={pet} />
            <p className='title'>Pet Perform</p>
          </div>
        </div>

        <div className={'rectangleParent'} onClick={() => navigate('/product-by-category/packaging')}>
          <div className={'instanceChild'} >
            <img className={'maskGroupIcon'} alt="" src={packaging} />
            <p className='title'>Packaging</p>
          </div>
        </div>

        <div className={'rectangleParent'} onClick={() => navigate('/product-by-category/household')}>
          <div className={'instanceChild'} >
            <img className={'maskGroupIcon'} alt="" src={house} />
            <p className='title'>House hold</p>
          </div>
        </div>

        <div className={'rectangleParent'} onClick={() => navigate('/product-by-category/construction')}>
          <div className={'instanceChild'} >
            <img className={'maskGroupIcon'} alt="" src={construction} />
            <p className='title'>Construction</p>
          </div>
        </div>

        <div className={'rectangleParent'} onClick={() => navigate('/product-by-category/precision plastic')}>
          <div className={'instanceChild'} >
            <img className={'maskGroupIcon'} alt="" src={plastic} />
            <p className='title'>Precision Plastic industry</p>
          </div>
        </div>

      </div>

    </div >
  )
} 