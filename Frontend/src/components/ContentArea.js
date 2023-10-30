import React from "react";
import News from "../pages/AdminPanel/News";
import Events from "../pages/AdminPanel/Events";
import Exhibitions from "../pages/AdminPanel/Exhibitions";

const ContentArea = ({ selectedItem }) => {
  let content;

  switch (selectedItem) {
    case "news":
      content = <News />;
      break;
    case "events":
      content = <Events />;
      break;
    case "exhibitions":
      content = <Exhibitions />;
      break;
    default:
      content = <News />;
  }


 
  return <div className="content-area rightContent">{content}</div>;
};

export default ContentArea;
