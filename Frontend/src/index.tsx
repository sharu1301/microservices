import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { installTwicPics } from "@twicpics/components/react";
import "@twicpics/components/style.css";

installTwicPics({
  // domain is mandatory
  domain: "https://hindm-insigniaconsultancy.twic.pics",
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
       <BrowserRouter>
         <App />
       </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
