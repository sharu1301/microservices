import "./index.scss";
import arrow from "../../../assets/images/right_arrow.png";

const HeroSection = () => {
  return (
    <div className={"heroSection"}>
      <div className={"overlay"}></div>
      <div className={"content"}>
        <b className="title">Best Industrial Service Provider</b>
        <p className="subtitle">
          Innovating Precision, Powering Progress: Welcome to the Future of
          Manufacturing with Hinds Machines.
        </p>
        <div className="btn ml-0 mr-0">
          Explore Products
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
