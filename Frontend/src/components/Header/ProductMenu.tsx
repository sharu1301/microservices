import { Link } from "react-router-dom";
import menu_data from "../../resources/content/menu.json";
import { ProductMenuProps } from "../../interfaces";
import { MenuDataInterface } from "../../interfaces/menu";
import CustomHeaderComponent from "./common";

export default function ProductMenu(props: ProductMenuProps) {

  const productMenu: MenuDataInterface = require('../../resources/content/product_menu.json')
  return (
    <div
      id="product-dropdown-content"
      className="dropdown-content responsive-hide border"
      onMouseLeave={() => props.hideDropdownContent("product")}
    >
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <Link to="/Product" className="maintitle">
                Product
              </Link>
            </div>
          </div>
          <div className="row">
            {productMenu.content.map((content, index) => (
              <div className="col-md-6" key={index}>
                <CustomHeaderComponent prop={props}
                setMenuImage={(img: string) => props.setProductMenuImage(img) }
                  content={content} />
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
