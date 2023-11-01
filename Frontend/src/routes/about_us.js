import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";

const getAboutUsRoutes = () => {
  return (
    <Routes>
      <Route path="/About-Us" element={<AboutUs />} />
      <Route
        path="*"
        element={<div style={{ display: "none" }}>Not Found</div>}
      />
    </Routes>
  );
};

export default getAboutUsRoutes;
