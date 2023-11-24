import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/common/footer';

const routes = (
    <>
    <Routes>

        <Route path="/" element={<Home/>}/>
    </Routes>
    </>
)

export default routes;