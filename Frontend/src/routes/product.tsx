import { Routes, Route } from "react-router-dom";

import Product from "../pages/Product";

import LatestMachines from "../pages/Product/LatestMachines";

import InjectionMoldingMachine from "../pages/Product/InjectionMoldingMachine";
import EuroServoSeries from "../pages/Product/InjectionMoldingMachine/EuroServoSeries";
import EuroPacSeries from "../pages/Product/InjectionMoldingMachine/EuroPacSeries";
import EuroPetSeries from "../pages/Product/InjectionMoldingMachine/EuroPetSeries";
import EuroStarSeries from "../pages/Product/InjectionMoldingMachine/EuroStarSeries";
import EuroCpvcSeries from "../pages/Product/InjectionMoldingMachine/EuroCpvcSeries";
import EuroPvcSeries from "../pages/Product/InjectionMoldingMachine/EuroPvcSeries";
import EuroRSeries from "../pages/Product/InjectionMoldingMachine/EuroRSeries";
import EuroSeries from "../pages/Product/InjectionMoldingMachine/EuroSeries";

import SpecialPurposeMachine from "../pages/Product/SpecialPurposeMachine";
import CrimpingPressMachine from "../pages/Product/SpecialPurposeMachine/CrimpingPressMachine";
import LeakTestingMachine from "../pages/Product/SpecialPurposeMachine/LeakTestingMachine";
import SpacerInsertMachine from "../pages/Product/SpecialPurposeMachine/SpacerInsertMachine";
import UBoltBendMachine from "../pages/Product/SpecialPurposeMachine/UBoltBendMachine";
import DrillingTappingMachine from "../pages/Product/SpecialPurposeMachine/DrillingTappingMachine";
import ChamferingMachine from "../pages/Product/SpecialPurposeMachine/ChamferingMachine";
import HydraulicPressMachine from "../pages/Product/SpecialPurposeMachine/HydraulicPressMachine";

import HydraulicPressesPowerpackCylinders from "../pages/Product/HydraulicPressesPowerpackCylinders";
import PressBreak from "../pages/Product/HydraulicPressesPowerpackCylinders/PressBreak";
import HydraulicPresses from "../pages/Product/HydraulicPressesPowerpackCylinders/HydraulicPresses";
import IronWorker from "../pages/Product/HydraulicPressesPowerpackCylinders/HydraulicPresses";

const getProductRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/Product" element={<Product />} />

        {/* Latest Machines */}
        <Route path="/LatestMachines" element={<LatestMachines />} />
        

        {/* InjectionMoldingMachine */}
        <Route path="/InjectionMoldingMachine" element={<InjectionMoldingMachine />} />
        <Route path="/EuroServoSeries" element={<EuroServoSeries />} />
        <Route path="/EuroPacSeries" element={<EuroPacSeries />} />
        <Route path="/EuroPetSeries" element={<EuroPetSeries />} />
        <Route path="/EuroStarSeries" element={<EuroStarSeries />} />
        <Route path="/EuroCpvcSeries" element={<EuroCpvcSeries />} />
        <Route path="/EuroPvcSeries" element={<EuroPvcSeries />} />
        <Route path="/EuroRSeries" element={<EuroRSeries />} />
        <Route path="/EuroSeries" element={<EuroSeries />} />

        {/* SpecialPurposeMachine */}
        <Route path="/SpecialPurposeMachine" element={<SpecialPurposeMachine />} />
        <Route path="/CrimpingPressMachine" element={<CrimpingPressMachine />} />
        <Route path="/LeakTestingMachine" element={<LeakTestingMachine />} />
        <Route path="/SpacerInsertMachine" element={<SpacerInsertMachine />} />
        <Route path="/UBoltBendMachine" element={<UBoltBendMachine />} />
        <Route path="/DrillingTappingMachine" element={<DrillingTappingMachine />} />
        <Route path="/ChamferingMachine" element={<ChamferingMachine />} />
        <Route path="/HydraulicPressMachine" element={<HydraulicPressMachine />} />

        {/* HydraulicPressesPowerpackCylinders */}
        <Route path="/HydraulicPressesPowerpackCylinders" element={<HydraulicPressesPowerpackCylinders />} />
        <Route path="/PressBreak" element={<PressBreak />} />
        <Route path="/HydraulicPresses" element={<HydraulicPresses />} />
        <Route path="/IronWorker" element={<IronWorker />} />

        <Route
          path="*"
          element={<div style={{ display: "none" }}>Not Found</div>}
        />
      </Routes>
    </>
  );
};

export default getProductRoutes;
