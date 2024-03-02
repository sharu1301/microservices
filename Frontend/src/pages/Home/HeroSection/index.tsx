import "./index.scss";
import arrow from "../../../assets/images/right_arrow.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <div className={"heroSection"}>
      <div className="container">
        <div className={"overlay"}></div>
        <div className={"content"}>
          <b className="title">Best Industrial Service Provider</b>
          <p className="subtitle">
            Innovating Precision, Powering Progress: Welcome to the Future of
            Manufacturing with Hinds Machines.
          </p>
          <div className="btn" onClick={() => navigate('productlist')}>
            Explore Products
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
