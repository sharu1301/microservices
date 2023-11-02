import { Link } from "react-router-dom";

import { MenuDataInterface } from "../../interfaces/menu";
import { ServiceMenuProps } from "../../interfaces";
import CustomHeaderComponent from "./common";

export default function ServicesMenu(props: ServiceMenuProps) {
  const serviceMenuData: MenuDataInterface = require('../../resources/content/services_menu.json')
  return (
    <div
      id="updates-dropdown-content"
      className="dropdown-content responsive-hide border"
      onMouseLeave={() => props.hideDropdownContent("services")}
    >
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <Link to="/Services" className="maintitle">
                Services
              </Link>
            </div>
          </div>

          <div className="row">


            {serviceMenuData.content.map((content, index) => (

              <div className="col-md-6" key={index}>
                <CustomHeaderComponent prop={props} content={content} />

              </div>))}
          </div>

        </div>
        <div className="col-4">
          <img
            src={props.serviceMenuImage}
            alt="product_img"
            id="product-dropdown-image"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>
    </div>
  );
}
