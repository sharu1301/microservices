import "./index.scss";
import { useNavigate, useLocation } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import x from "../../assets/icons/x.png";
import linkedIn from "../../assets/icons/linkedin.png";
import instagram from "../../assets/icons/instagram.png";
import logo from "../../assets/logo/logo.png";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = location.pathname
  return (
    <>
      <div className="headerContainer">
        <div className="rectangleDiv">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <p className="welcomeToHinds1">
                  Welcome to hinds machine (ISO Certified company)
                </p>
              </div>
              <div className="col-md-4 pr-0 text-right">
                <div className={"icons"}>
                <div className={"socialIcons01"}>
                  <img
                    className={"e3ac851901b7444af8c2c6XLogoIcon1"}
                    alt=""
                    src={x}
                  />
                </div>
                <div className={"socialIcons01"}>
                  <img
                    className={"e3ac851901b7444af8c2c6XLogoIcon1"}
                    alt=""
                    src={facebook}
                  />
                </div>
                <div className={"socialIcons03"}>
                  <img
                    className={"e3ac851901b7444af8c2c6XLogoIcon1"}
                    alt=""
                    src={instagram}
                  />
                </div>
                <div className={"socialIcons03"}>
                  <img
                    className={"e3ac851901b7444af8c2c6XLogoIcon1"}
                    alt=""
                    src={linkedIn}
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar">
          <div className="container">
          <img src={logo} className="logoIcon" alt="" onClick={() => navigate("/")}/>

          <div className={ openMenu ? 'navList active': 'navList'} >
            <ul>
              <li className={pathname === "/" ? 'active' : ''} onClick={() => navigate("/")}>Home</li>
              <li   className={pathname === "/about" ? 'active' : ''}  onClick={() => navigate("/about")}>About Us</li>
              <li className={pathname === "/service" ? 'active' : ''} onClick={() => navigate("/service")}>Services</li>
              <li className="dropdown">
                <a className="dropdown-toggle" href="#" data-bs-toggle="dropdown">Products</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Injection moulding machine</a>
                    <ul className="submenu dropdown-menu">
                      <li><a className="dropdown-item" href="#">Euro Servo series</a></li>
                      <li><a className="dropdown-item" href="#">Euro Pac Series</a></li>
                      <li><a className="dropdown-item" href="#">Euro Pet Series</a></li>
                      <li><a className="dropdown-item" href="#">Euro Star Series</a></li>
                      <li><a className="dropdown-item" href="#">Euro CPVC Series</a></li>
                      <li><a className="dropdown-item" href="#">Euro PVC Series</a></li>
                      <li><a className="dropdown-item" href="#">Euro R Series</a></li>
                      <li><a className="dropdown-item" href="#">Euro Series</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="#">Blow moulding machine</a>
                    <ul className="submenu dropdown-menu">
                      <li><a className="dropdown-item" href="#">Crimping press Machine</a></li>
                      <li><a className="dropdown-item" href="#">Leak testing machine</a></li>
                      <li><a className="dropdown-item" href="#">spacer insert machine</a></li>
                      <li><a className="dropdown-item" href="#">u bolt bend machine</a></li>
                      <li><a className="dropdown-item" href="#">drilling & tapping machine</a></li>
                      <li><a className="dropdown-item" href="#">chamfering machine</a></li>
                      <li><a className="dropdown-item" href="#">hydraulic press machine</a></li>
                    </ul>
			            </li>
                  <li><a className="dropdown-item" href="#">Auxiliary Parts</a></li>
		            </ul>
              </li>

              <li className={pathname === "/applications" ? 'active' : ''} onClick={() => navigate("/applications")} >Applications</li>
              <li className={pathname === "/gallery" ? 'active' : ''} onClick={() => navigate("/gallery")}>Gallery</li>



              <li className={pathname === "/career" ? 'active' : ''}>Career</li>
            </ul>

            <div
            className="contactUsParent"
            onClick={() => navigate("/contactus")}
          >
            <b className="contactUs"> Contact Us</b>
          </div>

          </div>

         
          <div  id="mobile"
           onClick={() => setOpenMenu(!openMenu)}
          >
             <i className={
              openMenu ? 'fas fa-times': 'fas fa-bars'
             }> </i> 
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
