import { useEffect, useRef } from "react";

interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  play?: boolean;
}
function Video(props: VideoPlayerProps) {
  const { src, play } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && play === false) {
      videoRef.current.pause();
    }
  }, [play]);
  return (
    <video
      ref={videoRef}
      style={{ width: "100%", display: "inline-block" }}
      src={src}
      controls
      {...props}
    />
  );
}

export default Video;
