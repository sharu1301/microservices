import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FAQScreen from './pages/FAQ';
import ContactUs from './pages/ContactUs';

const routes = (
    <>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/FAQ" element={<FAQScreen />} />
            <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
    </>
)

export default routes;