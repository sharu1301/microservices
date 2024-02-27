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

interface ImageMapperProps {
  allData: any;
  src: string;
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



const ImageMapperComponent: React.FC<ImageMapperProps> = ({
  src,
  areas,
  allData,
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
        // strokeColor: "yellow",
      };
    }
    return area;
  });

  const getImageByUnit = (unit: string) => {
    console.log("Image--1", allData.overviewImages[0], unit)
    switch (unit) {
      case "unit 1":
        return require(`../../assets/${allData.overviewImages[0]}`);
      case "unit 2":
        return require(`../../assets/${allData.overviewImages[1]}`);
      case "unit 3":
        return require(`../../assets/${allData.overviewImages[2]}`);
      case "unit 4":
        return require(`../../assets/${allData.overviewImages[3]}`);
      case "unit 5":
        return require(`../../assets/${allData.overviewImages[4]}`);
      // default:
      //   return null;
    }
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
        height={imageDimensions.height/1.2}
        map={{ name: "image-map", areas: scaledAreas }}
        onClick={(area) => handleClick(area)}
      />
      {/* <div style={{  }}> */}
        <Dialog
          aria-describedby="alert-dialog-slide-description"
          maxWidth={'sm'}
          TransitionComponent={Transition}
          // id="modal" 
          // className="modal"
          open={openModal}
          onClose={handleCloseModal}
          style={{ }}
        >
          {/* <DialogTitle>Unit {selectedUnit}</DialogTitle> */}
          {/* <DialogTitle> {JSON.stringify(getImageByUnit(selectedUnit))}</DialogTitle> */}
          <DialogContent>
            {selectedUnit && (
              <div>
                <DialogTitle className="title">{title}</DialogTitle>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start',  }}>

                  <img
                    src={getImageByUnit(selectedUnit)}
                    alt={`Unit ${selectedUnit}`}
                    style={{ width: "150px", height: '220px',marginRight:'20px', }}
                  />
                  <div className="pl-3">

                    <ul>
                      {selectedUnitData?.map((listData, i) => (
                        <li key={i} className="listData">{listData}</li>)
                      )}
                    </ul>

                  </div>
                </div>
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Close</Button>
          </DialogActions>
        </Dialog>
      {/* </div> */}
    </div>
  );
};

export default ImageMapperComponent;
