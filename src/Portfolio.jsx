import React from "react";
import portfolio from "./portfolio.module.css";
import CardCommon from "./components/CardCommon";
import Carddata from "./components/Carddata";


const Portfolio =()=>{
    return (

        <>
      <div className={portfolio.home}>
    <div className={`${portfolio.home_background_container} ${portfolio.prlx_parent}`}> 
        <div className="home_background prlx"  style={{backgroundImage: 'url(' + require('./images/courses_background.jpg') + ')'}}></div>
       
    </div>
    <div className={portfolio.home_content}>
        <h1>Our Portfolio</h1>
    </div>
</div>



{/* portfolio card section */}


<div className="popular page_section">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className={`${portfolio.section_title} text-center` }> 
						<h1>Popular Courses</h1>
					</div>
				</div>
		 </div>

			<div className={` row ${portfolio.course_boxes} `}>   
				
				{
      Carddata.map((val, ind)=>{

        return(
            <CardCommon key={ind} title={val.title} desc={val.des} img={val.img}/>
        );

 })
}

				
</div>
</div>
</div>
        </>
    );
}

export default Portfolio;