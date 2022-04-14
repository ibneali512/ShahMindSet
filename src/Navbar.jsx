import React from "react";
import "./plugins/fontawesome-free-5.0.1/css/fontawesome-all.css";
import navimg from"./images/phone-call.svg";
import navimg3 from "./images/logo4.png";
import { NavLink, Link} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import { useState } from "react";



function Navbar() {
 
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  return (
    <>
   
<div className="d-none d-md-none d-lg-block">
<header className="header d-flex flex-row">
    <div className="header_content d-flex flex-row align-items-center">
    <NavLink to="/">
        <div className="logo_container">
            <div className="logo">
                <img src={navimg3} alt="shah-mindset-logo"/>
                
            </div>
        </div>
        </NavLink>
      
        <nav className="main_nav_container">
            <div className="main_nav">
                <ul className="main_nav_list ">
                <li className="main_nav_item active">  <NavLink to="/">Home</NavLink></li>
                <li  className="main_nav_item"><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li className="main_nav_item"><NavLink to="/about">About Us</NavLink></li>
                <li className="main_nav_item"><NavLink  to="/contact">Contact</NavLink></li>
               
                 
                </ul>
            </div>
        </nav>
    </div>


    
    <div className="header_side d-flex flex-row justify-content-center align-items-center">
        <img src={navimg} alt="icon"/>
        <span>+43 4566 7788 2457</span>
    </div>

    
  
    <div className="hamburger_container navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars trans_200"></i>
    </div>

    

</header>

</div>

    


      



   
  
<Menu  isOpen={isOpen}
    onOpen={handleIsOpen}
    onClose={handleIsOpen}  width={ 300 }  >
<a  href="#" className="d-lg-none" style={{marginLeft:'-15px'}}>  <img src={navimg3} style={{width:'57%'}} alt="shah-mindset-logo"/></a>
         <ul >
        
      <li class="nav-item active   bm-item" >
        <NavLink class="menu-item " onClick={closeSideBar} to="/"><span style={{color:'#b8b7ad'}}>Home</span></NavLink><span class="sr-only">(current)</span>
      </li>
      <li class="nav-item  bm-item" >
      <NavLink class="menu-item " onClick={closeSideBar} to="/portfolio"><span style={{color:'#b8b7ad'}}>Portfolio</span></NavLink>
      </li>
      <li class="nav-item   bm-item" >
      <NavLink class="menu-item "  onClick={closeSideBar} to="/about"><span style={{color:'#b8b7ad'}}>About Us</span></NavLink>
      </li>
      <li class="nav-item   bm-item">
      <NavLink  class="menu-item "  onClick={closeSideBar} to="/contact"> <span style={{color:'#b8b7ad'}}>Contact</span></NavLink>
      </li>
    </ul>

       

   
  
      </Menu>

        <a  href="#" className="d-lg-none">  <img src={navimg3}  alt="shah-mindset-logo"/></a>
    
    
    
    
    
    
    
    
    
    </>
  );
}

export default Navbar;