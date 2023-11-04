import { Link } from "react-router-dom";
import { MenuDataInterface } from "../../interfaces/menu";
import { AboutUsMenuProps } from "../../interfaces";
import CustomHeaderComponent from "./common";


export default function AboutUsMenu(props: AboutUsMenuProps) {
  const aboutUsMenu: MenuDataInterface = require('../../resources/content/about_us_menu.json')
  return (
    <div
      id="aboutus-dropdown-content"
      className="dropdown-content responsive-hide border"
      onMouseLeave={() => props.hideDropdownContent("aboutus")}
    >
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <Link to="/About-Us" className="maintitle">
                About Us
              </Link>
            </div>
          </div>
          <div className="row">
            {aboutUsMenu.content.map((content, index) => (

              <div className="col-md-6" key={index}>
                <CustomHeaderComponent prop={props} content={content} setMenuImage={(img: string) => props.setAboutUsMenuImage(img) }/>
              </div>

            ))}
          </div>
        </div>
        <div className="col-4">
          <img
            src={props.aboutUsMenuImage}
            alt="about_us_img"
            id="about-us-dropdown-image"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>
    </div>
  );
}
