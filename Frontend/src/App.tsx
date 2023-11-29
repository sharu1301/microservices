import React from 'react';

import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import Header from './components/common/header';
import "../src/assets/sass/main.scss"


function App() {
  return (
    <>
    {/* <Header/> */}
      <Router>
        {routes}
      </Router>
    </>


  );
}

export default App;
