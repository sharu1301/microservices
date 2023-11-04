import { Link } from "react-router-dom";


interface ElementInterface{
  classList: any;
  
  
  
}
export default function SideAdminMenu() {

    function sideMenu() {
        var element  = document.getElementById("adminpanel") as HTMLElement;
        element.classList.toggle("show");
        
     }
    
  return (
    
      <>
        <div className="sidbar">
          <figure className="logo"><img src="images/pages/home/logo.png" alt="logo" /></figure>
          <button onClick={sideMenu} className="burger_icon"><i className="bi bi-list"></i></button>
          <ul>
            <li><Link to="/News">Latest News</Link></li>
            <li><Link to="/Events">Upcoming Events</Link></li>
            <li><Link to="/Exhibitions">Upcoming Exhibitions</Link></li>
          </ul>
        </div>
      </>
    
  );
}
