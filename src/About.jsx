import React from "react";
import c from "./contact.module.css";
import t from "./teacher.module.css";
// import "./element.module.css";
// import "./styles/elements_styles.css";

import become from "./images/become.jpg";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About =()=>{
	


    return (

        <>
        <div className={c.home}>
    <div className={`${c.home_background_container} ${c.prlx_parent}`}> 
        <div className="home_background prlx"  style={{backgroundImage: 'url(' + require('./images/news_background.jpg') + ')'}}></div>
       
    </div>
    <div className={c.home_content}>
        <h1>About us</h1>
    </div>
</div>

{/* <!-- Become --> */}

        <div className={t.become}>
	<div className="container">
		<div className="row row-eq-height">   

			<div className="col-lg-6 order-2 order-lg-1">
				<div className={t.become_title}>
					<h1>Whatever challenges you face, we have the groundbreaking training courses and assets to help you with your optimal life.</h1>
				</div>
				<p className={t.become_text}>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies venenatis. Suspendisse fermentum sodales lacus, lacinia gravida elit dapibus sed. Cras in lectus elit. Maecenas tempus nunc vitae mi egestas venenatis. Aliquam rhoncus, purus in vehicula porttitor, lacus ante consequat purus, id elementum enim purus nec enim. In sed odio rhoncus, tristique ipsum id, pharetra neque.</p>
				<div className={` text-center ${t.become_button} ${t.trans_200} `}> 
					<a href="#">Get a Quote</a>
				</div>
			</div>

			<div className="col-lg-6 order-1 order-lg-2"> 
				<div className={t.become_image}>
					<img src={become} alt="Shah-mind-set-become"/>
				</div>
			</div>
			
		</div>
	</div>
</div>

{/* <div class={f.loaders}>
			<div class="container">
		

				<div class="row elements_loaders_container">
					<div class={ `col-lg-3 ${f.loader_col}`}>  
						
						<div class={f.loader} >	<CircularProgressbar strokeWidth={5}  value={100} text={`${100}%`} styles={buildStyles({  pathColor: '#ffb606',
    textColor: '#ffb606',
	
	})}/></div>                
	
						<div class= { `${f.loader_text} text-center`}>Photos Taken</div>
						<div class={ `${f.loader_sub} text-center`}>Etiam nec odio vestibulum est.</div>
					</div>
					<div class={ `col-lg-3 ${f.loader_col}`}>
					
						<div class={f.loader} >
						<CircularProgressbar  value={80} text={`${80}%`} styles={buildStyles({ pathColor: '#ffb606',
    textColor: '#ffb606',
	
	})}/>
						</div>
						<div class={ `${f.loader_text} text-center`}>Km Walked</div>
						<div class= { `${f.loader_sub} text-center`}>Odio vestibulum est mattis.</div>
						<span></span>
					</div>
					<div class={ `col-lg-3 ${f.loader_col}`}>
					
						<div class={f.loader}>	
						<div class={f.loader} >	<CircularProgressbar value={70}  text={`${70}%`} styles={buildStyles({ pathColor: '#ffb606',
    textColor: '#ffb606',
	
	})}/></div>
	</div>
						<div class={ `${f.loader_text} text-center`}>Cities Visited</div>
						<div class= { `${f.loader_sub} text-center`}>Vestibulum est mattis effic.</div>
					</div>
					<div class={ `col-lg-3 ${f.loader_col}`}>
					
						<div class={f.loader} >	
									<div class={f.loader} >	<CircularProgressbar  value={90} text={`${90}%`} styles={buildStyles({ pathColor: '#ffb606',
    textColor: '#ffb606',
	
	})}/></div></div>
						<div class={ `${f.loader_text} text-center`}>Cities Visited</div>
						<div class= { `${f.loader_sub} text-center`}>Vestibulum est mattis effic.</div>
					</div>
				</div>

			</div>
		</div> */}



		{/* <!-- Loaders --> */}





























        </>
    );
   
}

export default About;