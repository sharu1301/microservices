import { Routes, Route } from "react-router-dom";
import AdminPanel from "../pages/AdminPanel";
import ResetPassword from "../pages/AdminPanel/ResetPassword";

const getAdminPanelRoutes = () => {
  return (
    <Routes>
      <Route path="/AdminPanel" element={<AdminPanel />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route
        path="*"
        element={<div style={{ display: "none" }}>Not Found</div>}
      />
    </Routes>
  );
};

export default getAdminPanelRoutes;
