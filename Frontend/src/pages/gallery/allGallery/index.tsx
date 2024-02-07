import "./index.scss";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { AllGalleryProps } from "../typeInterface";
import { List } from "immutable";

const AllGallery: React.FC<AllGalleryProps> = ({ pictures }) => {
  const list = List(pictures);
  const [currentVideo, setCurrentVideo] = useState<number | null>(null);

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
            wrapper={undefined}
            url={ele?.url?.split(";")[0]}
            loop={true}
            controls={true}
            height={"inherit"}
            width={"100%"}
            className="videoFrame"
            playing={currentVideo === id}
            onPlay={() => setCurrentVideo(id)}
            pip={true}
            stopOnUnmount={false}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(AllGallery);
