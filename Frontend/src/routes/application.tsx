import { Routes, Route } from "react-router-dom";
import Application from "../pages/Application";

import ThinWallMoulding from "../pages/Application/ThinWallMoulding";
import EuroPacSeries from "../pages/Application/ThinWallMoulding/EuroPacSeries";
import EuroRPacSeries from "../pages/Application/ThinWallMoulding/EuroRPacSeries";

import CapsClosures from "../pages/Application/CapsClosures";
import EuroTsSeries from "../pages/Application/CapsClosures/EuroTsSeries";
import EuroRsSeries from "../pages/Application/CapsClosures/EuroRsSeries";

import AutomobileEngineeringComponent from "../pages/Application/AutomobileEngineeringComponent";
import EuroRSeries from "../pages/Application/AutomobileEngineeringComponent/EuroRSeries";
import EuroServoSeries from "../pages/Application/AutomobileEngineeringComponent/EuroServoSeries";

import PetPreform from "../pages/Application/PetPreform";
import EuroPetSeries from "../pages/Application/PetPreform/EuroPetSeries";
import EuroRPetSeries from "../pages/Application/PetPreform/EuroRPetSeries";

import SmallPrecisionComponent from "../pages/Application/SmallPrecisionComponent";
import EuroStarSeries from "../pages/Application/SmallPrecisionComponent/EuroStarSeries";

import CunstructionFittingPvc from "../pages/Application/CunstructionFittingPvc";
import PvcLineInjectionMoulding from "../pages/Application/CunstructionFittingPvc/PvcLineInjectionMoulding";

import CunstructionFittingCpvc from "../pages/Application/CunstructionFittingCpvc";
import CpvcLineInjectionMoulding from "../pages/Application/CunstructionFittingCpvc/CpvcLineInjectionMoulding";

const getServicesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/Application" element={<Application />} />
        {/* Automobile Engineering Component routes */}
        <>
          <Route path="/ThinWallMoulding" element={<ThinWallMoulding />} />
          <Route path="/EuroPacSeries" element={<EuroPacSeries />} />
          <Route path="/EuroRPacSeries" element={<EuroRPacSeries />} />
        </>
        {/* CapsClosures routes */}
        <>
          <Route path="/CapsClosures" element={<CapsClosures />} />
          <Route path="/EuroTsSeries" element={<EuroTsSeries />} />
          <Route path="/EuroRsSeries" element={<EuroRsSeries />} />
        </>
        {/* Automobile Engineering Component routes */}
        <>
          <Route
            path="/AutomobileEngineeringComponent"
            element={<AutomobileEngineeringComponent />}
          />
          <Route path="/EuroRSeries" element={<EuroRSeries />} />
          <Route path="/EuroServoSeries" element={<EuroServoSeries />} />
        </>
        {/* Pet Preform routes */}
        <>
          <Route path="/PetPreform" element={<PetPreform />} />
          <Route path="/EuroPetSeries" element={<EuroPetSeries />} />
          <Route path="/EuroRPetSeries" element={<EuroRPetSeries />} />
        </>
        {/* Small Precision Component routes */}
        <>
          <Route
            path="/SmallPrecisionComponent"
            element={<SmallPrecisionComponent />}
          />
          <Route path="/EuroStarSeries" element={<EuroStarSeries />} />
        </>

        {/* Cunstruction Fitting Pvc routes */}
        <>
          <Route
            path="/CunstructionFittingPvc"
            element={<CunstructionFittingPvc />}
          />
          <Route
            path="/PvcLineInjectionMoulding"
            element={<PvcLineInjectionMoulding />}
          />
        </>

        {/* Small Precision Component routes */}
        <>
          <Route
            path="/CunstructionFittingCpvc"
            element={<CunstructionFittingCpvc />}
          />
          <Route
            path="/CpvcLineInjectionMoulding"
            element={<CpvcLineInjectionMoulding />}
          />
        </>
        <Route
          path="*"
          element={<div style={{ display: "none" }}>Not Found</div>}
        />
      </Routes>
    </>
  );
};

export default getServicesRoutes;
