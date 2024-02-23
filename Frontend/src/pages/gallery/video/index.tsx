import ReactPlayer from "react-player";
import "./index.scss";
import { useState } from "react";
export default function VideoGallery({ videoData }: { videoData: any }) {
  const [currentVideo, setCurrentVideo] = useState(null);
  return (
    <div className="video-align container">
      {videoData?.map((images, id) => (
        <ReactPlayer
          key={id}
          url={images?.url?.split(";")[0]}
          loop={true}
          controls={true}
          width={"420px"}
          height={"auto"}
          className="videoFrame"
          playing={currentVideo === id}
          onPlay={() => setCurrentVideo(id)}
          pip={true}
          stopOnUnmount={false}

        />
      ))}
    </div>
  );
}
