import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FAQScreen from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/gallery";
import About from "./pages/About";
import ProductList from "./pages/Products";
import ProductEnquiry from "./pages/Enquiry";


const routes = (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQScreen />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/productenquiry" element={<ProductEnquiry />} />
    </Routes>
  </>
);

export default routes;
