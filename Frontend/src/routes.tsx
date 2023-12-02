import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/common/footer";
import About from "./pages/About";

const routes = (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </>
);

export default routes;
