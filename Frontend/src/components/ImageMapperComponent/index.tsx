import React, { useState, useEffect } from "react";
import ImageMapper from "react-img-mapper";
import './index.scss'
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';

interface ImageMapperProps {
  allData: any;
  src: string;
  name: string;
  areas: { name: string; shape: string; coords: number[]; data: any; title: string; }[];
  forScreen: string
}



const ImageMapperComponent: React.FC<ImageMapperProps> = ({
  src,
  areas,
  allData,
  name,
  forScreen
}) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [openModal, setOpenModal] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [title, setTitle] = useState("")
  const [selectedUnitData, setSelectedUnitData] = useState<any

  >()

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


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



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
        fillColor: "transaprent",
        // responsive: true,
        strokeColor: "red",
      };
    }
    else if (area.shape === "poly") {
      const scaledCoords = area.coords.map((coord, index) => {
        return index % 2 === 0
          ? calculatePercentX(coord)
          : calculatePercentY(coord);
      });
      return {
        ...area,
        coords: scaledCoords,
      };
    }
    return area;
  });

  const getImageByUnit = (unit: string, series: string) => {
    const seriesData = allData;
    console.log("seriesData", series, unit, seriesData);
    if (seriesData && seriesData.overviewImages) {
      const imageName = `${unit}.jpg`;
      console.log("imageName", imageName);
      const imagePath = `images/product-specification/productoverview/${series}/${imageName}`;
      console.log("imagePath", imagePath);
      const imageIndex = seriesData.overviewImages.indexOf(imagePath);
      console.log('image Index', imageIndex);
      if (imageIndex !== -1) {
        console.log("Image found:", imageName);
        return require(`../../assets/${imagePath}`);
      }
    }
    return "";
  };


  const handleClick = (area: { name: string } | any) => {
    console.log("Hanlde zCLick area", area)
    setOpenModal(true);
    setSelectedUnit(area.name || "");
    setSelectedUnitData(area.data)
    setTitle(area.title)
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUnit("");
  };

  return (
    <div style={{}}>
      <ImageMapper
        src={require(`../../assets/${src}`)}
        width={forScreen === "mobile" ? imageDimensions.width / 1.1 : imageDimensions.width / 1.8}
        height={forScreen === "mobile" ? imageDimensions.height / 2 : imageDimensions.height / 1.2}
        map={{
          name: "image-map",
          areas: areas.map((area) => ({
            ...area,
            coords: area.coords.map((coord, index) => {
              if (index % 2 === 0) {
                return calculatePercentX(coord);
              } else {
                return calculatePercentY(coord);
              }
            }),
            strokeColor: "transparent", // Add strokeColor property
            preFillColor: "transparent",
            fillColor: "transaprent",
          })),
        }}
        onClick={(area) => handleClick(area)}
      />
      {/* <div style={{  }}> */}
      {/* {selectedUnitData?.length != 0 ? ( */}

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}
      >
        <div style={{ position: 'fixed', top: '64%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>

          <div className="row">
            <div className="col-md-5 d-flex justify-content-center">
              {getImageByUnit(selectedUnit, name) && (<div className="image-section">
                <img
                  // className="img-fluid"
                  src={getImageByUnit(selectedUnit ? selectedUnit : "", name)}
                  alt={`Unit ${selectedUnit}`}
                  style={{ borderRadius: '10px' }}
                />
              </div>)}
            </div>
            <div className="col-md-7">
              <h2 id="modal-title">{title}</h2>
              <button type="button" className="close" onClick={handleCloseModal}><i className="fa-solid fa-xmark"></i></button>
              {selectedUnitData && selectedUnitData.length > 0 ? (
                <ul>
                  {selectedUnitData.map((data: any, index: number) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              ) : (
                <p style={{ paddingTop: '60px' }}>No data available for this unit.</p>
              )}
            </div>
          </div>
          {/* <button onClick={handleCloseModal}>Close</button> */}
        </div>
      </Modal>




    </div>
  );
};

export default ImageMapperComponent;
