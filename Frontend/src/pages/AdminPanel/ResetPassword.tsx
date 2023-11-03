import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SHA256 } from "crypto-js";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    matchPassword()
      .then((result) => {
        if (result) {
          updatePassword();
        } else {
          setErrorMessage("Invalid username and password");
          setError(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const matchPassword = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          "https://stackby.com/api/betav1/rowlist/sthY4FT7hDG3xsbqTl/login",
          { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
        )
        .then((res) => {
          if (res.status === 200) {
            const hashedPassword = SHA256(password).toString();
            const matchpassword =
              email === res.data[0].field.email &&
              hashedPassword === res.data[0].field.password;

            resolve(matchpassword);
          } else {
            reject("Unable to fetch user data.");
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const updatePassword = async () => {
    const passwordBuffer = new TextEncoder().encode(newPassword);
    const hashBuffer = await crypto.subtle.digest("SHA-256", passwordBuffer);
    const hashedPassword = Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    const payload = {
      records: [
        {
          id: "rw1688099928123bce45f",
          field: {
            email,
            password: hashedPassword,
          },
        },
      ],
    };

    axios
      .patch(
        "https://stackby.com/api/betav1/rowupdate/sthY4FT7hDG3xsbqTl/login",
        payload,
        { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/AdminPanel");
        }
      });
  };

  function password_show_hide() {
    var x = document.getElementById("password") as HTMLInputElement;
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");

    hide_eye.classList.remove("d-none");
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

  function newPasswordShowHide() {
    var x = document.getElementById("resetPassword") as HTMLInputElement;
    var newShow_eye = document.getElementById("newShow_eye");
    var newHide_eye = document.getElementById("newHide_eye");

    newHide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      newShow_eye.style.display = "none";
      newHide_eye.style.display = "block";
    } else {
      x.type = "password";
      newShow_eye.style.display = "block";
      newHide_eye.style.display = "none";
    }
  }

  return (
    <>
      <div id="adminpanel">
        <div className="login_page position-relative d-flex justify-content-center align-items-center">
          <div className="loginBox">
            <form onSubmit={(e) => handleSubmit(e)}>
              <fieldset>
                <div className="text-center">
                  <img
                    className="logo"
                    src="images/pages/home/logo.png"
                    alt="logo"
                  />
                  <h3>Reset your password</h3>
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
                    placeholder="Current Password"
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

                <div className="input-group passwordInput mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-key"></i>
                    </span>
                  </div>
                  <input
                    name="password"
                    type="password"
                    value={newPassword}
                    className="input form-control"
                    id="resetPassword"
                    placeholder="New Password"
                    required={true}
                    aria-label="password"
                    aria-describedby="basic-addon1"
                    autoComplete="off"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      setError(false);
                    }}
                  />

                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      onClick={newPasswordShowHide}
                    >
                      <i className="bi bi-eye-fill" id="newShow_eye"></i>
                      <i
                        className="bi bi-eye-slash-fill d-none"
                        id="newHide_eye"
                      ></i>
                    </span>
                  </div>
                </div>
                <button type="submit" className="btn loginbtn">
                  Change Password
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
