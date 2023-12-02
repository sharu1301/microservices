import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FAQScreen from './pages/FAQ';

const routes = (
    <>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/FAQ" element={<FAQScreen />} />
        </Routes>
    </>
)

export default routes;