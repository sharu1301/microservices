import { Routes, Route } from "react-router-dom";

import Gallary from "../pages/Gallary";
import Video from "../pages/Gallary/Video";
import Images from "../pages/Gallary/Images";

const getGallaryRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/Gallary" element={<Gallary />} />
        <Route
          path="/Video"
          element={<Video />}
        />
        <Route
          path="/Images"
          element={<Images />}
        />
        <Route
          path="*"
          element={<div style={{ display: "none" }}>Not Found</div>}
        />
      </Routes>
    </>
  );
};

export default getGallaryRoutes;
