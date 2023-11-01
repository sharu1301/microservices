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
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isApplicationsDropdownOpen, setIsApplicationsDropdownOpen] = useState(false);
  const [isUpdatesDropdownOpen, setIsUpdatesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isGallaryDropdownOpen, setIsGallaryDropdownOpen] = useState(false);

  // const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);

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

  const showDropdownContent = (nav) => {
    if (nav === "home") {
      setIsAboutUsDropdownOpen(false);
      setIsProductDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsApplicationsDropdownOpen(false);
      setIsGallaryDropdownOpen(false);
      setIsUpdatesDropdownOpen(false);
      //setIsHomeDropdownOpen(true);
    }
    if (nav === "aboutus") {
      setIsHomeDropdownOpen(false);
      setIsProductDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsApplicationsDropdownOpen(false);
      setIsGallaryDropdownOpen(false);
      setIsUpdatesDropdownOpen(false);
      // setIsAboutUsDropdownOpen(true);
    }
    if (nav === "product") {
      setIsHomeDropdownOpen(false);
      setIsAboutUsDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsProductDropdownOpen(false);
      setIsApplicationsDropdownOpen(false);
      setIsGallaryDropdownOpen(false);
      setIsUpdatesDropdownOpen(false);
      setIsProductDropdownOpen(true);
    }
    if (nav === "services") {
      setIsHomeDropdownOpen(false);
      setIsAboutUsDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsProductDropdownOpen(false);
      setIsApplicationsDropdownOpen(false);
      setIsGallaryDropdownOpen(false);
      setIsUpdatesDropdownOpen(false);
      //setIsServicesDropdownOpen(true);
    }
    if (nav === "applications") {
      setIsHomeDropdownOpen(false);
      setIsAboutUsDropdownOpen(false);
      setIsProductDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsGallaryDropdownOpen(false);
      setIsUpdatesDropdownOpen(false);
      setIsApplicationsDropdownOpen(true);
    }
    if (nav === "updates") {
      setIsHomeDropdownOpen(false);
      setIsAboutUsDropdownOpen(false);
      setIsProductDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsGallaryDropdownOpen(false);
      setIsApplicationsDropdownOpen(false);
      //setIsUpdatesDropdownOpen(true);
    }
    if (nav === "Gallary") {
      setIsHomeDropdownOpen(false);
      setIsAboutUsDropdownOpen(false);
      setIsProductDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsApplicationsDropdownOpen(false);
      setIsUpdatesDropdownOpen(false);
      setIsGallaryDropdownOpen(true);
    }
  };

  const hideDropdownContent = (nav) => {
    if (nav === "home") {
      setIsHomeDropdownOpen(false);
    }
    if (nav === "aboutus") {
      setIsAboutUsDropdownOpen(false);
    }
    if (nav === "product") {
      setIsProductDropdownOpen(false);
    }
    if (nav === "services") {
      setIsServicesDropdownOpen(false);
    }
    if (nav === "applications") {
      setIsApplicationsDropdownOpen(false);
    }
    if(nav === "updates"){
      setIsUpdatesDropdownOpen(false)
    }
    if (nav === "gallary") {
      setIsGallaryDropdownOpen(false);
    }
  };

  // const hideSearchbar = () => {
  //   setIsSearchbarOpen(false);
  // };

  // useEffect(() => {
  //   if (isSearchbarOpen === false) {
  //     window.CommandBar.close();
  //   }
  // }, [isSearchbarOpen]);

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
                      isHomeDropdownOpen
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
                      isAboutUsDropdownOpen
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
                      isProductDropdownOpen
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
                      isServicesDropdownOpen
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
                      isApplicationsDropdownOpen
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
                      isUpdatesDropdownOpen
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
                      isGallaryDropdownOpen
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
              {isHomeDropdownOpen && (
                <HomeMenu
                  homeMenuImage={homeMenuImage}
                  setHomeMenuImage={setHomeMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
              {isAboutUsDropdownOpen && (
                <AboutUsMenu
                  aboutUsMenuImage={aboutUsMenuImage}
                  setAboutUsMenuImage={setAboutUsMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
              {isProductDropdownOpen && (
                <ProductMenu
                  productMenuImage={productMenuImage}
                  setProductMenuImage={setProductMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
              {isServicesDropdownOpen && (
                <ServicesMenu
                  servicesMenuImage={servicesMenuImage}
                  setServicesMenuImage={setServicesMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
              {isApplicationsDropdownOpen && (
                <ApplicationsMenu
                  applicationsMenuImage={applicationsMenuImage}
                  setApplicationsMenuImage={setApplicationsMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
              {isUpdatesDropdownOpen && (
                <UpdatesMenu
                  updatesMenuImage={updatesMenuImage}
                  setUpdatesMenuImage={setUpdatesMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
              {isGallaryDropdownOpen && (
                <GallaryMenu
                  gallaryMenuImage={gallaryMenuImage}
                  setGallaryMenuImage={setGallaryMenuImage}
                  hideDropdownContent={hideDropdownContent}
                />
              )}
            </div>
{/* 
            <div
              id="headerSearch"
              className={isSearchbarOpen ? "hover" : ""}
              onMouseEnter={() => setIsSearchbarOpen(true)}
              onMouseLeave={() => hideSearchbar()}
            >
              <button className="searchbtn">
                <i className="bi bi-search" />
              </button>
              <div className="searchBar">
                <div id="commandbar-inline-root" />
              </div>
            </div> */}

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
