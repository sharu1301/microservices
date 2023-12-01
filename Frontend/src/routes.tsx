import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/common/footer';
import Gallery from './pages/gallery';

const routes = (
    <>
    <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>} />
    </Routes>
    </>
)

export default routes;