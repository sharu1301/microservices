import { Link } from "react-router-dom";

export default function SideAdminMenu() {

    function sideMenu() {
        var element = document.getElementById("adminpanel");
        element.classList.toggle("show");
        
     }
    
  return (
    
      <>
        <div className="sidbar">
          <figure className="logo"><img src="images/pages/home/logo.png" alt="logo" /></figure>
          <button onClick={sideMenu} className="burger_icon"><i class="bi bi-list"></i></button>
          <ul>
            <li><Link to="/News">Latest News</Link></li>
            <li><Link to="/Events">Upcoming Events</Link></li>
            <li><Link to="/Exhibitions">Upcoming Exhibitions</Link></li>
          </ul>
        </div>
      </>
    
  );
}
