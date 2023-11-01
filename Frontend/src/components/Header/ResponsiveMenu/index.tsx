import "react-accessible-accordion/dist/fancy-example.css";

import { Accordion } from "react-accessible-accordion";
import AboutUsMenu from "./AboutUsMenu";
import ProductMenu from "./ProductMenu";
import ServicesMenu from "./ServicesMenu";
import ApplicationMenu from "./ApplicationMenu";
import UpdatesMenu from "./UpdatesMenu";
import GallaryMenu from "./GallaryMenu";

export default function ResponsiveMenu() {
  return (
    <div className="offcanvas offcanvas-start" id="demo">
      <div className="offcanvas-body">
      < button
        type="button"
        className="btn btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        ></button>
        <Accordion allowZeroExpanded>
          <AboutUsMenu />
          <ProductMenu />
          <ServicesMenu />
          <ApplicationMenu />
          <UpdatesMenu />
          <GallaryMenu />
        </Accordion>
      </div>
    </div>
  );
}
