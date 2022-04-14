import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Portfolio from "./Portfolio";
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const App =()=>{
  
  return(
    <>
    <Navbar/>
   
    <Routes >
  
     <Route  exact path="/ShahMindSet" element={<Home/>}/>
    <Route  exact path="/about" element={<About/>}/>
    <Route  exact path="/contact" element={<Contact/>}/>
    <Route  exact path="/portfolio" element={<Portfolio/>}/>
   
  </Routes>
    <Footer/>
 
    </>
    
  
  );
    
  }
  
  
  export default App;
