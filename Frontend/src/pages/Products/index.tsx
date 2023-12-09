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
import EuroPetImg from '../../assets/images/productimages/EuroPet.png'



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
            />

            <RightImgComponent
                title={'Euro Pet Series'} img={EuroPetImg} description={`Heavy duty five point toggle mechanism.Higher torque radial piston
                hydraulic motor for screw drive.`}
                l1={`Dedicated for PET preform with higher output at low cos`}
                l2={""}
                l3={""}
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
            />

            <RightImgComponent title={""} img={""} description={""} l1={""} l2={""} l3={""} />

            <LeftImgComponent
                title="Euro (CPVC) Series"
                img={EuroCPVCImg}
                description={`Toggle clamping machine 50 Tons to 550 Tons Energy Driven closed
                loop circuit Ergonomic hydraulic Layout for each approach`}
                l1={`Dedicated CPVC Machine`}
                l2={`Unscrew feature for electric motor`}
                l3={`Separate manifolds for injection unit and clamping unit`}

            />

            <RightImgComponent title={""} img={""} description={""} l1={""} l2={""} l3={""} />

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
            />

            <RightImgComponent title={""} img={""} description={""} l1={""} l2={""} l3={""} />

            <SubFooter />
            <Footer />

        </div>
    )
};
export default ProductList;