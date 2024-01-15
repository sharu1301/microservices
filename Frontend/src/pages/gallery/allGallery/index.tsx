import "./index.scss";
import React from "react";
import ReactPlayer from "react-player";
import { AllGalleryProps } from "../typeInterface";
import { List } from "immutable";

const AllGallery: React.FC<AllGalleryProps> = ({ pictures }) => {
  const list = List(pictures);

  const filteredList = list.filter((item) => item.id !== undefined);

  return (
    <div className="grid-container img-aspect">
      {list
        .filter((item) => item.id === undefined)
        .map((ele, id) => (
          <div key={id}>
            <img src={ele.url} alt={ele.alt_text} />
          </div>
        ))}

      {filteredList.map((ele, id) => (
        <div key={id}>
          <ReactPlayer
            key={id}
            url={ele?.url?.split(";")[0]}
            loop={true}
            controls={true}
            height={230}
            width={430}
            className="videoFrame"
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(AllGallery);
