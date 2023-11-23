import React from 'react';

import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';


function App() {
  return (
    <>
      <Router>
        {routes}
      </Router>
    </>


  );
}

export default App;
