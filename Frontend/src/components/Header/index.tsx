import "./index.scss";
import { useNavigate, useLocation } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import x from "../../assets/icons/x.png";
import linkedIn from "../../assets/icons/linkedin.png";
import instagram from "../../assets/icons/instagram.png";
import logo from "../../assets/logo/logo.png";
import { useState } from "react";
import productData from '../../data/products.json';
import blowMouldingData from '../../data/blowMouldingList.json'

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
            <img src={logo} className="logoIcon" alt="" onClick={() => navigate("/")} />

            <div className={openMenu ? 'navList active' : 'navList'} >
              <ul>
                <li className={pathname === "/" ? 'active' : ''} onClick={() => navigate("/")}>Home</li>
                <li className={pathname === "/about" ? 'active' : ''} onClick={() => navigate("/about")}>About Us</li>


                <li className="dropdown m-0 p-0">
                  <li className={pathname === "/service" ? 'active dropdown-toggle' : 'dropdown-toggle'}
                    data-bs-toggle="dropdown" onClick={() => navigate("/service")}>Services</li>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/process">Process Optimization</a>
                      
                    </li>
                    <li><a className="dropdown-item" href="/upgrades">Upgrades</a>
                      
                    </li>
                    <li><a className="dropdown-item" href="/customermaintenance">Customer Service and Maintenance</a></li>
                  </ul>


                </li>


                <li className="dropdown">
                  <li className="dropdown-toggle m-0 p-0" data-bs-toggle="dropdown">Products</li>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/productlist">Injection moulding machine</a>
                      <ul className="submenu dropdown-menu">
                        {productData.map((list, i) => (
                          <li><p className="dropdown-item" onClick={() => navigate(`/product-specification/${list.title}`)}>{list.title}</p></li>
                        ))}

                      </ul>
                    </li>
                    <li><a className="dropdown-item" href="/productlist">Blow moulding machine</a>
                      <ul className="submenu dropdown-menu">
                        {blowMouldingData.map((list, i) =>
                        (<li><a
                           className="dropdown-item" >{list.title}</a></li>
                        ))}
                      </ul>
                    </li>
                    <li><a className="dropdown-item" href="/productlist">Auxiliary Parts</a></li>
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


            <div id="mobile"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <i className={
                openMenu ? 'fas fa-times' : 'fas fa-bars'
              }> </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
