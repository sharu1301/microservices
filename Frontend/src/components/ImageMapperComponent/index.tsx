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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';

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
        // map={{ name: "image-map", areas: scaledAreas }}
        // onClick={(area) => handleClick(area)}
        // className=""

        map={{
          name: "image-map", areas: areas.map(area => ({
            ...area,
            coords: area.coords.map((coord, index) => {
              if (index % 2 === 0) {
                return calculatePercentX(coord);
              } else {
                return calculatePercentY(coord);
              }
            })
          }))
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
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
        backgroundColor: 'white', padding: '20px' }}>
          <h2 id="modal-title">{title}</h2>
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center">
              <img
                // className="img-fluid"
                src={getImageByUnit(selectedUnit ? selectedUnit : "", name)}
                alt={`Unit ${selectedUnit}`}
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="col-md-7">
              {selectedUnitData && selectedUnitData.length > 0 ? (
                <ul>
                  {selectedUnitData.map((data: any, index: number) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              ) : (
                <p>No data available for this unit.</p>
              )}
            </div>
          </div>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </Modal>



      {/* <Dialog
        fullScreen={fullScreen}
        aria-labelledby="responsive-dialog-title"
        // aria-describedby="alert-dialog-slide-description"
        maxWidth={'md'}
        TransitionComponent={Transition}
        // id="modal" 
        // className="modal"
        open={openModal}
        onClose={handleCloseModal}
        style={{}}
      >      <DialogTitle className="title">{title}</DialogTitle>


        {selectedUnitData?.length != 0 ? (<DialogContent>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', top: '0pxs' }}>

            <div className="col-md-4" style={{ zIndex: '1', position: 'relative', right: '0px',
             height: '200px', width: '280px', paddingRight:'12px'}}>
              <img
                src={getImageByUnit(selectedUnit ? selectedUnit : "", name)}
                alt={`Unit ${selectedUnit}`}
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="pl-6 col-md-8">

              <ul>
                {selectedUnitData?.map((listData, i) => (
                  <li key={i} className="listData">{listData}</li>)
                )}
              </ul>

            </div>

          </div>

        </DialogContent>) :
          <DialogContent>
            <div className="col-md-12" style={{ zIndex: '1', position: 'relative', right: '0px', height: '250px', width: '350px' }}>
              <img
                src={getImageByUnit(selectedUnit ? selectedUnit : "", name)}
                alt={`Unit ${selectedUnit}`}
                style={{ borderRadius: '10px' }}
              />
            </div>
          </DialogContent>}



        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog> */}
      {/* //) :
        // <BootstrapDialog open={openModal}
        //   onClose={handleCloseModal}
        // // maxWidth={'sm'}
        // >
        //   <DialogTitle className="title">{title}</DialogTitle>
        //   <div className="row">
        //     <div className="col-md-4">
        //       <DialogContent>
        //       <img
        //         className="dialogImg"
        //         src={getImageByUnit(selectedUnit ? selectedUnit : "", name)}
        //         alt={`Unit ${selectedUnit}`}
        //       // style={{height:'40%',width:'50%'}}
        //       />
        //     </DialogContent>
        //     </div>
        //   </div>
        // </BootstrapDialog>} */}
      {/* </div> */}
    </div>
  );
};

export default ImageMapperComponent;
