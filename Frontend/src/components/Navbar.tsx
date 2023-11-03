import React from "react";
import { NavbarProps} from "../interfaces"

const Navbar = ({ isLoggedIn, handleLogout }:  NavbarProps ) => {

  
  return (
    <nav className="navbar">

      <figure className="logo"><img src="images/pages/home/logo.png" alt="logo" /></figure>
      
      {isLoggedIn && (

        <button className="btn btn-outline-light logoutBtn" onClick={handleLogout}>
          Logout
        </button>

      )}

    </nav>
  );
};

export default Navbar;
