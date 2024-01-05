import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FAQScreen from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/gallery";
import About from "./pages/About";
import ProductList from "./pages/Products";
import ProductEnquiry from "./pages/Enquiry";

import Applications from "./pages/applications";
import ProductSpecification from "./pages/ProductSpecification";
import Service from "./pages/Services";
import Process from "./pages/ProcessOptimisation";
import ProductByCategory from "./pages/ProductByCatregory";
import Updates from "./pages/Updates";

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
      <Route path="/applications" element={<Applications/>}/>
      <Route path="/product-specification/:productname" element={<ProductSpecification/>}/>
      <Route path="/service" element={<Service />} />
      <Route path="/process" element={<Process />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/product-by-category/:category" element={< ProductByCategory/>}/>
    </Routes>
  </>
);

export default routes;
