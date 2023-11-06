import { Routes, Route } from "react-router-dom";
import ContactUs from "../pages/ContactUs";

const getContactUsRoutes = () => {
  return (
    <Routes>
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route
        path="*"
        element={<div style={{ display: "none" }}>Not Found</div>}
      />
    </Routes>
  );
};

export default getContactUsRoutes;
