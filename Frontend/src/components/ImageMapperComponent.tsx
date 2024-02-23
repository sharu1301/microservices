import React, { useState, useEffect } from "react";
import ImageMapper from "react-img-mapper";

interface ImageMapperProps {
  src: string;
  areas: { name: string; shape: string; coords: number[] }[];
}

const ImageMapperComponent: React.FC<ImageMapperProps> = ({ src, areas }) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setImageDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculatePercentX = (percentX: number) => {
    return Math.round((percentX / 100) * imageDimensions.width);
  };

  const calculatePercentY = (percentY: number) => {
    return Math.round((percentY / 100) * imageDimensions.height);
  };

  const scaledAreas = areas.map((area) => {
    if (area.shape === "circle") {
      return {
        ...area,
        coords: [
          calculatePercentX(area.coords[0]),
          calculatePercentY(area.coords[1]),
          area.coords[2],
        ],
      };
    } else if (area.shape === "rect") {
      return {
        ...area,
        coords: [
          calculatePercentX(area.coords[0]),
          calculatePercentY(area.coords[1]),
          calculatePercentX(area.coords[2]),
          calculatePercentY(area.coords[3]),
        ],
        preFillColor: "transparent",
        strokeColor: "yellow",
      };
    }
    return area;
  });

  return (
    <div>
      <ImageMapper
        src={src}
        width={imageDimensions.width}
        height={imageDimensions.height}
        map={{ name: "image-map", areas: scaledAreas }}
      />
    </div>
  );
};

export default ImageMapperComponent;
