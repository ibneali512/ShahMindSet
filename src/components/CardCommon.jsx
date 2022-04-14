import React from "react";
import element from "../element.module.css";
import portfolio from "../portfolio.module.css";
const CardCommon =(card)=>{

return(         
 
  
 
   <div className= {`col-lg-4 ${portfolio.course_box}`}>  
   <div className="card">
     <img className="card-img-top" src={card.img} alt="shah-portfolio"/>
     <div className="card-body text-center">
     <div class="card-title"><a href="#" style={{pointerEvents:"none"}}>{card.title}</a></div>
       <div className="card-text">{card.desc}</div>
     </div>
     <div className="price_box d-flex flex-row align-items-center">
              
     </div>
   </div>
 </div>  	

);
  
}


export default CardCommon;