import { useState } from "react";
import { Link } from "react-router-dom";

import ResponsiveMenu from "./ResponsiveMenu";
import FleshNews from "./FleshNews";
import HomeMenu from "./HomeMenu";
 import AboutUsMenu from "./AboutUsMenu";
import ServicesMenu from "./ServicesMenu";
import ProductMenu from "./ProductMenu";
import ApplicationsMenu from "./ApplicationsMenu";
import UpdatesMenu from "./UpdatesMenu";
import GallaryMenu from "./GallaryMenu";


export default function Header() {


  const [dropDownData, setDropDownData] = useState({
    isHomeDropdownOpen: false,
    isAboutUsDropdownOpen: false,
    isServicesDropdownOpen: false,
    isUpdatesDropdownOpen: false,
    isProductDropdownOpen: false,
    isApplicationsDropdownOpen: false,
    isGallaryDropdownOpen: false,
  })


  const initialDropDown = {
    isHomeDropdownOpen: false,
    isAboutUsDropdownOpen: false,
    isServicesDropdownOpen: false,
    isUpdatesDropdownOpen: false,
    isProductDropdownOpen: false,
    isApplicationsDropdownOpen: false,
    isGallaryDropdownOpen: false,
  }


  const [homeMenuImage, setHomeMenuImage] = useState(
    "images/menu/success_at_insignia/index.jpg"
  );
  const [aboutUsMenuImage, setAboutUsMenuImage] = useState(
    "images/menu/about_us/index.jpg"
  );
  const [productMenuImage, setProductMenuImage] = useState(
    "images/menu/product/index.jpg"
  );
  const [servicesMenuImage, setServicesMenuImage] = useState(
    "images/menu/services/index.jpg"
  );
  const [applicationsMenuImage, setApplicationsMenuImage] = useState(
    "images/menu/applications/index.jpg"
  );
  const[updatesMenuImage, setUpdatesMenuImage]=useState(
    "images/menu/updates/index.jpg"
  );
  const [gallaryMenuImage, setGallaryMenuImage] = useState(
    "images/menu/gallary/index.jpg"
  );


  const showDropdownContent = (nav: string) => {
    switch (nav) {

      case "product":
        setDropDownData({ ...initialDropDown, isProductDropdownOpen: true })
        break;
      case "applications":
        setDropDownData({ ...initialDropDown, isApplicationsDropdownOpen: true })
        break;
      case "Gallary":
        setDropDownData({ ...initialDropDown, isGallaryDropdownOpen: true })
        break;
      default:
        break;
    }
  };

  const hideDropdownContent = (nav: string) => {
    switch (nav) {
      case "home":
        setDropDownData({ ...dropDownData, isHomeDropdownOpen: false })
        break;
      case "aboutus":
        setDropDownData({ ...dropDownData, isAboutUsDropdownOpen: false })

        break;
      case "product":
        setDropDownData({ ...dropDownData, isProductDropdownOpen: false })
        break;
      case "services":
        setDropDownData({ ...dropDownData, isServicesDropdownOpen: false })
        break;
      case "applications":
        setDropDownData({ ...dropDownData, isApplicationsDropdownOpen: false })
        break;
      case "updates":
        setDropDownData({ ...dropDownData, isUpdatesDropdownOpen: false })
        break;
      case "gallary":
        setDropDownData({ ...dropDownData, isGallaryDropdownOpen: false })
        break;
      default:
        break;
    }


  };



  return (
    <>
      {/* header container start */}
      <header id="headerCntr">
        <FleshNews />
        <ResponsiveMenu />
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">

          <div className="container">

            <Link className="navbar-brand" id="logo" to="/" reloadDocument>
              <img
                className="logo_img"
                src="images/pages/home/logo.svg"
                alt="logo"
              />
              <img
                className="logo_icon"
                src="images/pages/home/logo_icon.png"
                alt="logo"
              />
            </Link>
            <div className="ml-auto d-flex">

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#demo"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="bi bi-list"></i>
                </span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li
                  className="nav-item"
                  onMouseEnter={() => showDropdownContent("home")}
                >
                  <Link
                    to="/" reloadDocument
                    className={
                      dropDownData.isHomeDropdownOpen
                        ? "nav-link nav-highlight"
                        : "nav-link"
                    }
                    id="success-nav"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onMouseEnter={() => showDropdownContent("aboutus")}
                >
                  <Link
                    to="/About-Us"
                    className={
                      dropDownData.isAboutUsDropdownOpen
                        ? "nav-link nav-highlight"
                        : "nav-link"
                    }
                    id="aboutus-nav"
                  >
                    About Us
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onMouseEnter={() => showDropdownContent("product")}
                >
                  <Link
                    to="/Product"
                    className={
                      dropDownData.isProductDropdownOpen
                        ? "nav-link nav-highlight"
                        : "nav-link"
                    }
                    id="product-nav"
                  >
                    Products
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onMouseEnter={() => showDropdownContent("services")}
                >
                  <Link
                    to="/Services"
                    className={
                      dropDownData.isServicesDropdownOpen
                        ? "nav-link nav-highlight"
                        : "nav-link"
                    }
                    id="services-nav"
                  >
                    Services
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onMouseEnter={() => showDropdownContent("applications")}
                >
                  <Link
                    to="/Application"
                    className={
                      dropDownData.isApplicationsDropdownOpen
                        ? "nav-link nav-highlight"
                        : "nav-link"
                    }
                    id="applications-nav"
                  >
                    Applications
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onMouseEnter={() => showDropdownContent("updates")}
                >
                  <Link
                    to="/Updates"
                    className={
                      dropDownData.isUpdatesDropdownOpen
                        ? "nav-link nav-highlight"
                        : "nav-link"
                    }
                    id="updates-nav"
                  >
                    Updates
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onMouseEnter={() => showDropdownContent("Gallary")}
                >
                  <Link to="/Gallary"

                    className={
                      dropDownData.isGallaryDropdownOpen
                        ? "nav-link nav-highlight"
                        : "nav-link"
                    }
                    id="gallary-nav"
                  >
                    Gallary
                  </Link>
                </li>
              </ul>
            </div>

            <div className="dropmenu">
              {/* {isHomeDropdownOpen && (
                <HomeMenu
                  homeMenuImage={homeMenuImage}
                  setHomeMenuImage={setHomeMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )} */}
              {dropDownData.isAboutUsDropdownOpen && (
                <AboutUsMenu
                  aboutUsMenuImage={aboutUsMenuImage}
                  setAboutUsMenuImage={setAboutUsMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
              {dropDownData.isProductDropdownOpen && (
                <ProductMenu
                  productMenuImage={productMenuImage}
                  setProductMenuImage={setProductMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
              {dropDownData.isServicesDropdownOpen && (
                <ServicesMenu
                  serviceMenuImage={servicesMenuImage}
                  setServiceMenuImage={setServicesMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
              {dropDownData.isApplicationsDropdownOpen && (
                <ApplicationsMenu
                  applicationsMenuImage={applicationsMenuImage}
                  setApplicationsMenuImage={setApplicationsMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
              {dropDownData.isUpdatesDropdownOpen && (
                <UpdatesMenu
                  updatesMenuImage={updatesMenuImage}
                  setUpdatesMenuImage={setUpdatesMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
              {dropDownData.isGallaryDropdownOpen && (
                <GallaryMenu
                  galleryMenuImage={gallaryMenuImage}
                  setgalleryMenuImage={setGallaryMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
            </div>


            <div className="nav-item">
              <Link className="nav-link contactbtn" to="/ContactUs">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>

      </header>
      <div className="blankheader"></div>
      {/* header container end */}
    </>
  );
}
