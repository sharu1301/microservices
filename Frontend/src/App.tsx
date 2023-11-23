import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
function App() {
  return (
    <div className="App">
     <h2>App</h2>
     <Router>{routes} </Router>
    </div>
  );
}

export default App;
