import { Link } from "react-router-dom";
import menu_data from "../../resources/content/menu.json";
import { MenuDataInterface } from "../../interfaces/menu";
import { GalleryMenuProps } from "../../interfaces";
import CustomHeaderComponent from "./common";


export default function GallaryMenu(props: GalleryMenuProps) {
  const galleryMenuData: MenuDataInterface = require('../../resources/content/gallery_menu.json')
  return (
    <div
      id="gallary-dropdown-content"
      className="dropdown-content responsive-hide border"
      onMouseLeave={() => props.hideDropdownContent("gallary")}
    >
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <Link to="/Gallary" className="maintitle">
                Gallary
              </Link>
            </div>
          </div>
          <div className="row">
            {galleryMenuData.content.map((content, index) => (
              <div className="col-md-6" key={index}>
                <CustomHeaderComponent prop={props} content={content} />

              </div>
            ))}
          </div>
        </div>
        <div className="col-4">
          <img
            src={props.galleryMenuImage}
            alt="Gallary"
            id="gallary-dropdown-image"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>
    </div>
  );
}
