import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FAQScreen from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/gallery";
import About from "./pages/About";
import Applications from "./pages/applications";

const routes = (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQScreen />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/applications" element={<Applications/>}/>
    </Routes>
  </>
);

export default routes;
