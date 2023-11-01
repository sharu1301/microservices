import React from "react";

const Sidebar = ({ onItemClick, selectedItem }) => {
  const handleItemClick = (item) => {
    onItemClick(item);
  };


  return (
    
      <div className="sidebar">
        
        <ul>
          <li
            onClick={() => handleItemClick("news")}
            className={selectedItem === "news" ? "active" : ""}
          >
            News
          </li>
          <li
            onClick={() => handleItemClick("events")}
            className={selectedItem === "events" ? "active" : ""}
          >
            Events
          </li>
          <li
            onClick={() => handleItemClick("exhibitions")}
            className={selectedItem === "exhibitions" ? "active" : ""}
          >
            Exhibitions
          </li>
        </ul>
      </div>
    
  );
};

export default Sidebar;
