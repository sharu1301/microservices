import React, { useState, useEffect } from "react";
import ImageMapper from "react-img-mapper";
import './index.scss'


interface ImageMapperProps {
  allData: any;
  src: string;
  areas: { name: string; shape: string; coords: number[]; data: any; title: string; }[];
}




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

  const getImageByUnit = (unit: string) => {
    // console.log("Image--1", allData.overviewImages[0], unit)
    switch (unit) {
      case "unit 1":
        return require(`../../assets/${allData?.overviewImages[0]}`);
      case "unit 2":
        return require(`../../assets/${allData?.overviewImages[1]}`);
      case "unit 3":
        return require(`../../assets/${allData?.overviewImages[2]}`);
      case "unit 4":
        return require(`../../assets/${allData?.overviewImages[3]}`);
      case "unit 5":
        return require(`../../assets/${allData?.overviewImages[4]}`);
      default:
        return "";
    }
  };

  const handleClick = (area: { name: string } | any) => {
    console.log("Handle Click area", area);
    const modalTrigger = document.getElementById("exampleModalTrigger");
    if (modalTrigger) {
      modalTrigger.click();
    }
    setSelectedUnit(area.name || "");
    setSelectedUnitData(area.data);
    setTitle(area.title);
  };


  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUnit("");
  };

  return (
    <div style={{}} data-bs-toggle="modal" data-bs-target="#exampleModal">
      <ImageMapper
        src={require(`../../assets/${src}`)}
        width={imageDimensions.width / 1.8}
        height={imageDimensions.height / 1.2}
        map={{ name: "image-map", areas: scaledAreas }}
        onClick={(area) => handleClick(area)}

      // className=""
      />



      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered h-100">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="exampleModalLabel">{title?title:""}</h6>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div className="modal-body pr-0">
              <div className="container p-0">

                {selectedUnit && (
                  <div className="row">
                    {/* <DialogTitle className="title">{title}</DialogTitle> */}
                    {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', }}> */}

                    <div className="col-md-3 d-flex align-items-center">
                      <img
                        src={getImageByUnit(selectedUnit ? selectedUnit : "")}
                        alt={`Unit ${selectedUnit}`}
                        style={{
                          width: "150px",
                          height: '220px',
                          position: "absolute", left: "-120px", top: "-40px"
                        }}
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="pl-3">

                        <ul>
                          {selectedUnitData?.map((listData, i) => (
                            <li key={i} className="listData">{listData}</li>)
                          )}
                        </ul>

                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                )}

              </div>

            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div> */}
          </div>
        </div>
      </div>
      {/* <div style={{  }}> */}
      {/* <Dialog
        aria-describedby="alert-dialog-slide-description"
        maxWidth={'sm'}
        TransitionComponent={Transition}
        // id="modal" 
        // className="modal"
        open={openModal}
        onClose={handleCloseModal}
        style={{}}
      >
    
        <DialogContent>
          {selectedUnit && (
            <div>
              <DialogTitle className="title">{title}</DialogTitle>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', }}>

                <img
                  src={getImageByUnit(selectedUnit ? selectedUnit : "")}
                  alt={`Unit ${selectedUnit}`}
                  style={{ width: "150px", height: '220px', marginRight: '20px', }}
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
      </Dialog> */}
      {/* </div> */}
    </div>
  );
};

export default ImageMapperComponent;
