import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <ScrollToTop>
   <App/>
   </ScrollToTop>
   </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
