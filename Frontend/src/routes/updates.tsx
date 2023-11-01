import { Routes, Route } from "react-router-dom";

import Updates from "../pages/Updates";

const getUpdatesRoutes = () => {
  return (
    <Routes>
      <Route path="/Updates" element={<Updates />} />
      <Route
        path="*"
        element={<div style={{ display: "none" }}>Not Found</div>}
      />
    </Routes>
  );
};

export default getUpdatesRoutes;
