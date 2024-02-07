import "./index.scss";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useState } from "react";
import productData from "../../data/products.json";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = location.pathname;

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
                    <a href="https://www.facebook.com/hindsmachineries/" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className={"socialIcons01"}>
                    <a href="https://www.linkedin.com/in/parveen-sharma-02678a131/?originalSubdomain=in" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                  <div className={"socialIcons01"}>
                    <a href="https://www.youtube.com/channel/UCqmwpUQbu2hYXHvn4SvR8Vw" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="container">
            <img
              src={logo}
              className="logoIcon"
              alt=""
              onClick={() => navigate("/")}
            />
            <div className={openMenu ? "navList active" : "navList"}>
              <ul>
                <li
                  className={pathname === "/" ? "active" : ""}
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li
                  className={pathname === "/about" ? "active" : ""}
                  onClick={() => navigate("/about")}
                >
                  About Us
                </li>

                <li className="dropdown m-0 p-0">
                  <li
                    className={
                      pathname === "/service"
                        ? "active dropdown-toggle"
                        : "dropdown-toggle"
                    }
                    data-bs-toggle="dropdown"
                  // onClick={() => navigate("/service")}
                  >
                    Services
                  </li>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/service">
                        About Services
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/process">
                        Process Optimization
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/upgrades">
                        Upgrades
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/customermaintenance">
                        Customer Service and Maintenance
                      </a>
                    </li>
                  </ul>
                </li>

                
                <li className="dropdown">
                  <li
                    className="dropdown-toggle m-0 p-0"
                    data-bs-toggle="dropdown"
                  >
                    Products
                  </li>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" onClick={()=>navigate('/productlist')} >
                        Injection moulding machine
                      </button>
                      <ul className="submenu dropdown-menu">
                        {productData.map((list, i) => (
                          <li key={i}>
                            <a
                              className="dropdown-item"
                              href={`/product-specification/${list.title}`}
                            >
                              {list.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    {/* <li><a className="dropdown-item" href="/productlist">Blow moulding machine</a>
                      <ul className="submenu dropdown-menu">
                        {blowMouldingData.map((list, i) =>
                        (<li key={i}>
                          <a
                          className="dropdown-item" href={`/product-specification/${list.title}`}>{list.title}</a></li>
                        ))}
                      </ul>
                    </li> */}
                    <li>
                      <a className="dropdown-item" href="/auxiliaries">
                        Auxiliary Parts
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className={pathname === "/applications" ? "active" : ""}
                  onClick={() => navigate("/applications")}
                >
                  Applications
                </li>
                <li
                  className={pathname === "/gallery" ? "active" : ""}
                  onClick={() => navigate("/gallery")}
                >
                  Gallery
                </li>

                <li
                  className={pathname === "/career" ? "active" : ""}
                  onClick={() => navigate("/career")}
                >
                  Career
                </li>
              </ul>
              <div
                className="contactUsParent"
                onClick={() => navigate("/contactus")}
              >
                <b className="contactUs"> Contact Us</b>
              </div>
            </div>
            <div id="mobile" onClick={() => setOpenMenu(!openMenu)}>
              <i className={openMenu ? "fas fa-times" : "fas fa-bars"}> </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
