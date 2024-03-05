import React, { useState, useEffect } from "react";
import ImageMapper from "react-img-mapper";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import './index.scss'
import { styled } from '@mui/material/styles';

interface ImageMapperProps {
  allData: any;
  src: string;
  name: string;
  areas: { name: string; shape: string; coords: number[]; data: any; title: string; }[];
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));



const ImageMapperComponent: React.FC<ImageMapperProps> = ({
  src,
  areas,
  allData,
  name
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
        // fillColor: "transaprent",
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
        width={imageDimensions.width / 1.8}
        height={imageDimensions.height / 1.2}
        map={{ name: "image-map", areas: scaledAreas }}
        onClick={(area) => handleClick(area)}
      // className=""


      />
      {/* <div style={{  }}> */}
      {selectedUnitData?.length != 0 ? (
        <Dialog
          // aria-describedby="alert-dialog-slide-description"
          maxWidth={'md'}
          TransitionComponent={Transition}
          // id="modal" 
          // className="modal"
          open={openModal}
          onClose={handleCloseModal}
          style={{}}
        >      <DialogTitle className="title">{title}</DialogTitle>


          <DialogContent>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', }}>

              <div className="col-md-4">
                <img
                  src={getImageByUnit(selectedUnit ? selectedUnit : "", name)}
                  alt={`Unit ${selectedUnit}`}
                  style={{}}
                />
              </div>
              <div className="pl-3 col-md-8">

                <ul>
                  {selectedUnitData?.map((listData, i) => (
                    <li key={i} className="listData">{listData}</li>)
                  )}
                </ul>

              </div>
            </div>

          </DialogContent>



          <DialogActions>
            <Button onClick={handleCloseModal}>Close</Button>
          </DialogActions>
        </Dialog>) :
        <Dialog open={openModal}
          onClose={handleCloseModal}
        // maxWidth={'sm'}
        >
          <DialogTitle className="title">{title}</DialogTitle>
          <div className="row">
            <div className="col-md-4">
              <DialogContent>
              <img
                className="dialogImg"
                src={getImageByUnit(selectedUnit ? selectedUnit : "", name)}
                alt={`Unit ${selectedUnit}`}
              // style={{height:'40%',width:'50%'}}
              />
            </DialogContent>
            </div>
          </div>
        </Dialog>}
      {/* </div> */}
    </div>
  );
};

export default ImageMapperComponent;
