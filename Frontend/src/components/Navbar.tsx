import React from "react";

const Navbar = ({ isLoggedIn, handleLogout }) => {

  
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
