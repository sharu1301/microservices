import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import LeftImgComponent from "./LeftImgComponent";
import RightImgComponent from "./RightComponent";
import './index.scss';
import EuroPacImg from "../../assets/images/productimages/EuroPac.png";
import EuroServoImg from "../../assets/images/productimages/EuroServoR.png";
import EuroCPVCImg from "../../assets/images/productimages/EuroCPVC.png";
import EuroRImg from "../../assets/images/productimages/EuroR.png";
import EuroPetImg from "../../assets/images/productimages/EuroPet.png";
import EuroStarImg from "../../assets/images/productimages/EuroStar.png";
import EuroPVCImg from "../../assets/images/productimages/EuroPVC.png";
import EuroServoRImg from "../../assets/images/productimages/EuroServoR.png";



const ProductList = () => {


    return (
        <div>
            <Header />
            <PageTitle title="Products" />

            <LeftImgComponent
                title="Euro Pac Series"
                img={EuroPacImg}
                description={`High speed hydraulic motor on screw drive for high plascizing rate.
                Energy efficient DFE series electronic variable pump for high output`}
                l1={`Five point toggle.`}
                l2={`Wide platen area & Robust design with wide state on moving platen`}
                l3={`Centralised lubricaon system with piston cylinder.`}
                l4={`  LPMT for posion measuring for moving platen, screw travel & Ejection.`}
                highlight1={`Low power consumption`}
                highlight2={`Hydraulic Motor`}
                highlight3={`User friendly`}
            />

            <RightImgComponent
                title={'Euro Pet Series'} 
                img={EuroPetImg}
                description={`Heavy duty five point toggle mechanism.Higher torque radial piston
                hydraulic motor for screw drive.`}
                l1={`Dedicated for PET preform with higher output at low cos`}
                l2={`Robust clamping unit for evenly distribute clamp free`}
                l3={`High Injecon speed with high response logic valves`}
                highlight1={`Low power consumption`}
                highlight2={`Hydraulic Motor`}
                highlight3={`Air Ejection`}
            />
            <LeftImgComponent
                title="Euro Servo Series"
                img={EuroServoImg}
                description={`Energy efficient Servo Driven gear pump with closed loop pressure
                transducer feedback`}
                l1={`Wide tie bar distance & daylight.`}
                l2={`Robust five point vertical toggle clamp mechanism`}
                l3={`Variable back pressure control`}
                l4={`Two stage speed with soft eject`}

                highlight1={`Air ejector`}
                highlight2={`Hydraulics core pull`}
                highlight3={`Water manifold`}
            />

            <RightImgComponent 
            title={"Euro Star Series"} 
            img={EuroStarImg}
             description={`High Caliber machine to satisfy your needs for the production of high
             speed, superior precision parts.`} 
            l1={"Dedicated for PET preform with higher output at low cost."} 
            l2={"Robust clamping unit for evenly distribute clamp free"} 
            l3={"High Injecon speed with high response logic valves"} 
            highlight1={`injection capacity 40gms - 120gms`}
            highlight2={`10.2” TFT Display`}
            highlight3={`USB Port`}
            />

            <LeftImgComponent
                title="Euro (CPVC) Series"
                img={EuroCPVCImg}
                description={`Toggle clamping machine 50 Tons to 550 Tons Energy Driven closed
                loop circuit Ergonomic hydraulic Layout for each approach`}
                l1={`Dedicated CPVC Machine`}
                l2={`Unscrew feature for electric motor`}
                l3={`Separate manifolds for injection unit and clamping unit`}
                highlight1={`TFT Color Display`}
                highlight2={`Energy Efficient`}
                highlight3={`High Productivity`}

            />

            <RightImgComponent 
            title={"Euro (PVC) Series"} 
            img={EuroPVCImg} 
            description={`Polyvinyl chloride (PVC) is a versatile thermoplastic material that is used in the production of hundreds of products.`} 
            l1={"Dedicated PVC Machine"} 
            l2={"Easily Programmable, User Friendly, Visual & Audio Alarm "} 
            l3={"Available in a range of 100 to 910 Ton"} 
             highlight1={`PID Control System`}
            highlight2={`Robot Interface`}
            highlight3={`TFT Color Display`}/>

            <LeftImgComponent
                title="Euro R Series"
                img={EuroRImg}
                description={`Toggle clamping machine 50 Tons to 550 Tons Energy Driven closed
                loop circuit Ergonomic hydraulic Layout for each approach`}
                l1={`Wide tie bar distance and daylight.`}
                l2={`Direct hydraulic clamping system enable stable and precisely
                controlled clamping force.`}
                l3={`Radial Piston type hydraulic motor enable high torque and excellent
                performance`}
                highlight1={`TFT Color Display`}
                highlight2={`Energy saving`}
                highlight3={`Mould Safety protection`}
            />

            <RightImgComponent
             title={"Euro Servo R Series"} 
             img={EuroServoRImg}
              description={`Hydraulic clamping injection moulding machine 110 to 180 Energy efficient Servo Driven gear pump `} 
              l1={`Wide tie bar distance and daylight.`} 
              l2={`Direct hydraulic clamping system enable stable and precisely
              controlled clamping force.`} 
              l3={`Radial Piston type hydraulic motor enable high torque and excellent
              performance.`} 
              highlight1={`PID Control System`}
              highlight2={`Robot Interface`}
              highlight3={`TFT Color Display`}
              />


            <SubFooter />
            <Footer />

        </div>
    )
};
export default ProductList;