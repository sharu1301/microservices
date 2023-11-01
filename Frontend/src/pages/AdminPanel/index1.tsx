
import { useState } from "react";
import axios from "axios";
import {  Link, useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import bcrypt from 'bcryptjs';

export default function AdminPanel() {
  
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState(false);
  const[errorMessage, setErrorMessage] = useState ("")
  
  //const [refresh, setRefresh] = useState(false);
  //const [isAdding, setIsAdding] = useState(false);
  
  const navigate = useNavigate()

  const submiteForm = (e) => {
    
    e.preventDefault();
     console.log(email, password)

     
  
    axios.get(
      "https://stackby.com/api/betav1/rowlist/sthY4FT7hDG3xsbqTl/login",
      
      { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
  
    )
    .then ( async (res) => {
        console.log(res)
            if(res.status === 200){

              console.log(res.data)
              
              let matchpassword = await bcrypt.compare(password ,res.data[0].field.password);
              console.log("matchpassword", matchpassword)
                  if(email === res.data[0].field.email && matchpassword){
                    navigate("/News")
                  }
                  else {setErrorMessage("invalid user name and password") ; setError(true)};
            }
     })

  }

        // const dataChange = async (e) => {
        //     console.log(password)
        //     const salt = await bcrypt.genSalt(10);
        //     let hashedpassword = await bcrypt.hash(password, salt);
          
        //       let payload = {
        //         records: [
        //           {
        //             id: "rw1688099928123bce45f",
        //             field: {
        //               email,
        //               password:hashedpassword,
        //             },
        //           },
        //         ],
        //       };

        //       axios.patch(
        //         "https://stackby.com/api/betav1/rowupdate/sthY4FT7hDG3xsbqTl/login",
        //         payload,
        //         { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
            
        //       )
        //       .then((res) => {
        //           console.log(res)
        //               if(res.status === 200){}
        //       })
        // }

  return (
    <>
     
      <div id="adminpanel">
        <div className="login_page position-relative d-flex justify-content-center align-items-center">
            {/* <!-- Login Box start --> */}
          <div className="loginBox">

              <form action="#" onSubmit={submiteForm}>
                  <fieldset>

                      <div className="text-center">
                          <img className="logo" src="images/pages/home/logo.png" alt="logo" />
                          <h3>Log in to your accout</h3>
                      </div>
                      {error && <div className="alert alert-danger" role="alert">
                          {errorMessage}
                      </div>
                      }
                      
                      <div className="form-group  position-relative">
                          <input type="email" className="form-control" placeholder="Enter email" value={email} autoComplete="off" onChange={(e) => {setEmail(e.target.value); setError(false)}} />
                          <i className="bi bi-person  position-absolute"></i>
                      </div>
                      <div className="form-group  position-relative">
                          <input type="password" className="form-control" placeholder="Password" value={password} autoComplete="off" onChange={(e) => {setPassword(e.target.value) ; setError(false) }} />
                          <i className="bi bi-key  position-absolute"></i>
                      </div>
                        <button type="submit" className="btn loginbtn">Login</button>
                        {/* <Link to="/News" type="submit" className="btn loginbtn">Login</Link> */}
                      
                  </fieldset>
              </form>
                {/* <button type="button" className="changepass" onClick={() =>dataChange()}>Change password</button> */}

                <Link className="changepass" to="/ResetPassword">Change password</Link>

          </div>
            {/* <!-- Login Box ends --> */}
        </div>
      </div>

    </>
  );
}
