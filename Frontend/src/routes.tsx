import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQScreen from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";

const routes = (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FAQ" element={<FAQScreen />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </>
);

export default routes;
