import { Routes, Route } from "react-router-dom";
import Enquiry from "../pages/Enquiry";
import Faq from "../pages/Enquiry/Faq"
const getEnquiryRoutes = () => {
  return (
    <Routes>
      <Route path="/Enquiry" element={<Enquiry />} />
      <Route path="/Faq" element={<Faq />} />
      <Route
        path="*"
        element={<div style={{ display: "none" }}>Not Found</div>}
      />
    </Routes>
  );
};

export default getEnquiryRoutes;
