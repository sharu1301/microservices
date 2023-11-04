import { Link } from "react-router-dom";
import { MenuDataInterface } from "../../interfaces/menu";
import { HomeMenuProps } from "../../interfaces";
import CustomHeaderComponent from "./common";

export default function HomeMenu(props: HomeMenuProps) {

  const homeMenuData: MenuDataInterface = require('../../resources/content/home_menu.json')
  return (
    <div
      id="home-dropdown-content"
      className="dropdown-content responsive-hide border"
      onMouseLeave={() => props.hideDropdownContent("home")}
    >
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <Link to="/Success-At-Insignia" className="maintitle">
                Success@Insignia
              </Link>
            </div>
          </div>
          <div className="row">
            {homeMenuData.content.map((content, index) => (
              <div className="col-md-6" key={index}>
                <CustomHeaderComponent prop={props} content={content} setMenuImage={(img: string) => props.setHomeMenuImage(img) }/>
              </div>


            ))}
          </div>
        </div>
        <div className="col-4">
          <img
            src={props.homeMenuImage}
            alt="success_img"
            id="success-at-insignia-dropdown-image"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>
    </div>
  );
}
