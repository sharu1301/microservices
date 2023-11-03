import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import ContentArea from "../../components/ContentArea";
import { Link } from "react-router-dom";
import { SHA256 } from "crypto-js";
import axios from "axios";

const AdminPanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "true"
  );
  const [selectedItem, setSelectedItem] = useState<{}>({});

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    axios
      .get(
        "https://stackby.com/api/betav1/rowlist/sthY4FT7hDG3xsbqTl/login",

        { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data);

          const hashedPassword = SHA256(password).toString();

          if (
            email === res.data[0].field.email &&
            hashedPassword === res.data[0].field.password
          ) {
            console.log("hi ");
            sessionStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);
          } else {
            setErrorMessage("Invalid username and password");
            setError(true);
          }
        }
      });
  };

  const handleLogout = () => {
    sessionStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  const handleSidebarItemClick = (item: {}) => {
    setSelectedItem(item);
  };

  function password_show_hide() {
    var x = document.getElementById("password") as HTMLInputElement | null;
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");

    hide_eye.classList.remove("d-none");

    if(x != null){
      if (x.type === "password") {
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
      } else {
        x.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
      }
    }
    
  }

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      {isLoggedIn ? (
        <div id="adminpanel">
          <Sidebar
            onItemClick={handleSidebarItemClick}
            selectedItem={selectedItem}
          />

          <ContentArea selectedItem={selectedItem} />
        </div>
      ) : (
        <div id="adminpanel">
          <div className="login_page position-relative d-flex justify-content-center align-items-center">
            <div className="loginBox">
              <form onSubmit={handleLogin}>
                <fieldset>
                  <div className="text-center">
                    <img
                      className="logo"
                      src="images/pages/home/logo.png"
                      alt="logo"
                    />
                    <h3>Log in to your account</h3>
                  </div>
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <div className="form-group  position-relative">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      autoComplete="off"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError(false);
                      }}
                    />
                    <i className="bi bi-person  position-absolute"></i>
                  </div>

                  <div className="input-group passwordInput mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-key"></i>
                      </span>
                    </div>
                    <input
                      name="password"
                      type="password"
                      value={password}
                      className="input form-control"
                      id="password"
                      placeholder="Password"
                      required={true}
                      aria-label="password"
                      aria-describedby="basic-addon1"
                      autoComplete="off"
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError(false);
                      }}
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text"
                        onClick={password_show_hide}
                      >
                        <i className="bi bi-eye-fill" id="show_eye"></i>
                        <i
                          className="bi bi-eye-slash-fill d-none"
                          id="hide_eye"
                        ></i>
                      </span>
                    </div>
                  </div>

                  <button type="submit" className="btn loginbtn">
                    Login
                  </button>
                </fieldset>
              </form>

              <Link className="changepass" to="/ResetPassword">
                Change password
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
