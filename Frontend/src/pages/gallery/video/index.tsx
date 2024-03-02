import ReactPlayer from "react-player";
import "./index.scss";
import { useState } from "react";
export default function VideoGallery({ videoData }: { videoData: any }) {
  const [currentVideo, setCurrentVideo] = useState(null);
  return (
    <div className="container">
      <div className="video-align">
        {videoData?.map((images, id) => (
          <ReactPlayer
            key={id}
            url={images?.url?.split(";")[0]}
            loop={true}
            controls={true}
            height={"200px"}
            className="videoFrame"
            playing={currentVideo === id}
            onPlay={() => setCurrentVideo(id)}
            pip={true}
            stopOnUnmount={false}

          />
        ))}
      </div>
    </div>
  );
}
