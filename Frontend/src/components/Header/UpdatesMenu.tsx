import { Link } from "react-router-dom";
import menu_data from "../../resources/content/menu.json";
import { MenuDataInterface } from "../../interfaces/menu";
import CustomHeaderComponent from "./common";

type updateMenu = {
  "menu": "about_us",
  "content": []
}
export default function UpdatesMenu(props: any) {
  let updateMenuData: MenuDataInterface = require('../../resources/content/about_us_menu.json')
  return (
    <div
      id="updates-dropdown-content"
      className="dropdown-content responsive-hide border"
      onMouseLeave={() => props.hideDropdownContent("updates")}
    >
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <Link to="/Updates" className="maintitle">
                Updates
              </Link>
            </div>
          </div>
          <div className="row">
            {updateMenuData.content.map((content, index) => (

              <div className="col-md-6" key={index}>
                <CustomHeaderComponent prop={props} content={content} />
              </div>

            ))}
          </div>

        </div>
        <div className="col-4">
          <img
            src={props.productMenuImage}
            alt="product_img"
            id="product-dropdown-image"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>
    </div>
  );
}
