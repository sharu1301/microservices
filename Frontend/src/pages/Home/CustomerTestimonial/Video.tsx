import { useEffect, useRef } from "react";

type videoType = {
  src: string;
  play?: boolean;
};
function Video(props: videoType) {
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
    />
  );
}

export default Video;
