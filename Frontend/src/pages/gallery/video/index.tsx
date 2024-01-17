import ReactPlayer from "react-player";
import "./index.scss";
export default function VideoGallery({ videoData }: { videoData: any }) {
  return (
    <div className="video-align container">
      {videoData?.map((images, id) => (
        <ReactPlayer
          key={id}
          url={images?.url?.split(";")[0]}
          loop={true}
          controls={true}
          width={"auto"}
          height={"100%"}
          className="videoFrame"
        />
      ))}
    </div>
  );
}
