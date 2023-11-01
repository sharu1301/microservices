import { Link } from "react-router-dom";
import menu_data from "../../resources/content/menu.json";

export default function GallaryMenu(props) {
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
              <Link to="/Gallary"  className="maintitle">
                Gallary
              </Link>
            </div>
          </div>
          <div className="row">
            {menu_data
              .filter((menu_data) => menu_data.menu === "gallary")
              .map((menu) => {
                return menu.content.map((content, index) => {
                  return (
                    <div className="col-md-6" key={index}>
                      <div className="submenu">
                        <Link
                          className="sub_link"
                          to={content.url}
                          onMouseEnter={() =>
                            props.setGallaryMenuImage(content.image_path)
                          }
                          onMouseLeave={() =>
                            props.setGallaryMenuImage(
                              content.default_image_path
                            )
                          }
                        >
                          <img
                            src={content.icon_path}
                            width={16}
                            height={16}
                            alt={content.title}
                          />{" "}
                          <strong>{content.title}</strong>
                        </Link>
                        {content.sub_menus ? (
                          content.sub_menus.map((sub_menu) => {
                            return (
                              <div className="step_third">
                                <div className="subtitle">
                                  <Link
                                    className="sub_link"
                                    to={sub_menu.url}
                                    onMouseEnter={() =>
                                      props.setSolutionsMenuImage(
                                        sub_menu.image_path
                                      )
                                    }
                                    onMouseLeave={() =>
                                      props.setSolutionsMenuImage(
                                        sub_menu.default_image_path
                                      )
                                    }
                                  >
                                    <img
                                      src={sub_menu.icon_path}
                                      width={16}
                                      height={16}
                                      alt={sub_menu.title}
                                    />{" "}
                                    <strong>{sub_menu.title}</strong>
                                  </Link>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <p>{content.description}</p>
                        )}
                      </div>
                    </div>
                  );
                });
              })}
          </div>
        </div>
        <div className="col-4">
          <img
            src={props.gallaryMenuImage}
            alt="Gallary"
            id="gallary-dropdown-image"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>
    </div>
  );
}
