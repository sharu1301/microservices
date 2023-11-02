
import { Link } from "react-router-dom";
// import menu_data from "../../resources/content/menu.json";
import { MenuDataInterface } from "../../interfaces/menu";
import { ApplicationMenuProps } from "../../interfaces";
import CustomHeaderComponent from './common';

export default function ApplicationsMenu(props: ApplicationMenuProps) {

  const applicationData: MenuDataInterface = require('../../resources/content/application_menu.json')

  return (
    <div
      id="applications-dropdown-content"
      className="dropdown-content responsive-hide border"
      onMouseLeave={() => props.hideDropdownContent("applications")}
    >
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <Link to="/Application" className="maintitle">
                Applications
              </Link>
            </div>
          </div>

          <div className="row gy-5">
            {applicationData.content.map((content, index) => (

              <div className="col-md-4" key={index}>
                <CustomHeaderComponent prop={props} content={content} />
              </div>

            ))}
          </div>
        </div>
        <div className="col-4">
          <img
            src={props.applicationsMenuImage}
            alt="Applications"
            id="application-dropdown-image"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>
    </div>
  );
}
