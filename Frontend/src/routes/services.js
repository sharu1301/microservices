import { Routes, Route } from "react-router-dom";

import Services from "../pages/Services";

const getUpdatesRoutes = () => {
  return (
    <Routes>
      <Route path="/Services" element={<Services />} />
      <Route
        path="*"
        element={<div style={{ display: "none" }}>Not Found</div>}
      />
    </Routes>
  );
};

export default getUpdatesRoutes;
