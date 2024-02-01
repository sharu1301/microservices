import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import mainImg from "../assets/images/product-specification/mainImg.png";
import Unit1 from "../assets/images/product-specification/productoverview/EuroPacSeries/1.png";
import Unit2 from "../assets/images/product-specification/productoverview/EuroPacSeries/2.png";
import Unit3 from "../assets/images/product-specification/productoverview/EuroPacSeries/3.png";
import Unit4 from "../assets/images/product-specification/productoverview/EuroPacSeries/4.png";

const SectionModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(0);

  const handleClick = (unit) => {
    setOpenModal(true);
    setSelectedUnit(unit);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUnit(0);
  };

  const getImageByUnit = (unit: number): string => {
    switch (unit) {
      case 1:
        return Unit1;
      case 2:
        return Unit2;
      case 3:
        return Unit3;
      case 4:
        return Unit4;
      default:
        return mainImg;
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <img src={mainImg} alt="main" style={{ display: "block" }} />
      <div
        style={{
          position: "absolute",
          top: "230px",
          left: "580px",
          width: "190px",
          height: "110px",
          border: "2px solid yellow",
        }}
        onClick={() => handleClick(1)}
      />
      <div
        style={{
          position: "absolute",
          top: "180px",
          left: "365px",
          width: "63px",
          height: "130px",
          border: "2px solid yellow",
        }}
        onClick={() => handleClick(2)}
      />
      <div
        style={{
          position: "absolute",
          top: "175px",
          left: "203.5px",
          width: "162px",
          height: "175px",
          border: "2px solid yellow",
        }}
        onClick={() => handleClick(3)}
      />
      <div
        style={{
          position: "absolute",
          top: "365px",
          left: "512.5px",
          width: "135px",
          height: "135px",
          border: "2px solid yellow",
        }}
        onClick={() => handleClick(4)}
      />
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Unit {selectedUnit}</DialogTitle>
        <DialogContent>
          {selectedUnit && (
            <img
              src={getImageByUnit(selectedUnit)}
              alt={`Unit ${selectedUnit}`}
              style={{ width: "100%" }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SectionModal;
