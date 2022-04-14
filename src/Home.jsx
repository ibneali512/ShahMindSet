import React from "react";
import i1 from"./images/earth-globe.svg";
import  i2 from "./images/books.svg";
import i3 from "./images/professor.svg";
import i4 from "./images/exam.svg";
import i6 from "./images/blackboard.svg";
import i7 from "./images/mortarboard.svg";
import m1 from "./images/milestone_1.svg";
import m2 from "./images/milestone_2.svg";
import m3 from "./images/milestone_3.svg";
import m4 from "./images/milestone_4.svg";
import become from "./images/become.jpg";
import "./styles/main_styles.css";
import "./styles/responsive.css";
import t from "./teacher.module.css";
import c1 from "./images/testimonials_user.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Home =()=>{

	
    return (
		
        <>
  
        <div className="home owl-theme">
		
		<div class="hero_slider_container">
		
        <OwlCarousel  items={1} rewind autoplay nav={true} loop 
		 >
		

		<div class='item '> 
          
       
        <div className="hero_slide">
            <div className="hero_slide_background" style={{backgroundImage: 'url(' + require('./images/slider_background.jpg') + ')'}}></div>
            <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
			<div className="hero_slide_content text-center">
                    <h1  className="animate__animated "  > Get yourrrrr <span>Education</span> today! </h1> 
					
                </div>
            </div>
        </div>
		</div>
		<div class='item '> 
          
       
        <div className="hero_slide">
            <div className="hero_slide_background" style={{backgroundImage: 'url(' + require('./images/news_background.jpg') + ')'}}></div>
            <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                <div className="hero_slide_content text-center">
				<h1  className="animate__animated "   > Get yourrrrr <span>Education</span> today! </h1>
				
                </div>
            </div>
        </div>
		</div>
		<div class='item '> 
          
       
        <div className="hero_slide">
            <div className="hero_slide_background" style={{backgroundImage: 'url(' + require('./images/search_background.jpg') + ')'}}></div>
            <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                <div className="hero_slide_content text-center">
				<h1  class="animate__animated "  > Get yourrrrr <span>Education</span> today! </h1> 
				
                </div>
            </div>
        </div>
		</div>
		   
		
	
</OwlCarousel>

</div>
</div>

<div className="hero_boxes">
		<div className="hero_boxes_inner">
			<div className="container">
				<div className="row">

					<div className="col-lg-4 hero_box_col">
						<div className="hero_box d-flex flex-row align-items-center justify-content-start">
						<img src={i1} className="svg" alt="shah-positive-icon"/>
						
							<div className="hero_box_content">
								<h2 className="hero_box_title">Shah Mindset Book</h2>
								<a href={i1} className="hero_box_link" download>Click to download</a>
							
							</div>
						</div>
					</div>

					<div className="col-lg-4 hero_box_col">
						<div className="hero_box d-flex flex-row align-items-center justify-content-start">
							<img src={i2} className="svg" alt="shah-positive-icon"/>
							<div className="hero_box_content">
								<h2 className="hero_box_title">Our Library</h2>
								<Link to="/portfolio" className="hero_box_link"> view more</Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 hero_box_col">
						<div className="hero_box d-flex flex-row align-items-center justify-content-start">
							<img src={i3} className="svg" alt="shah-positive-icon"/>
							<div className="hero_box_content">
								<h2 className="hero_box_title">Our Teachers</h2>
								<Link to="/portfolio" className="hero_box_link"> view more</Link>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>



	<div className="services page_section">
	<AnimationOnScroll animateIn="animate__slideInLeft" animateOnce> 
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title text-center">
						<h1>How might I help you!</h1>
					</div>
				</div>
			</div>

			<div className="row services_row">

				<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
					<div className="icon_container d-flex flex-column justify-content-end">
						<img src={i1} alt=""/>
					</div>
					<h3>Self Development</h3>
					<p>It builds up an individual’s capacities and improve the personal satisfaction and the acknowledgment of dreams and goals.</p>
				</div>

				<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
					<div className="icon_container d-flex flex-column justify-content-end">
						<img src={i4}alt=""/>
					</div>
					<h3>Indoor Courses</h3>
					<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
				</div>

				<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
					<div className="icon_container d-flex flex-column justify-content-end">
						<img src={i2} alt=""/>
					</div>
					<h3>Amazing Library</h3>
					<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
				</div>

				<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
					<div className="icon_container d-flex flex-column justify-content-end">
						<img src={i3} alt=""/>
					</div>
					<h3>Exceptional Professors</h3>
					<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
				</div>

				<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
					<div className="icon_container d-flex flex-column justify-content-end">
						<img src={i6} alt=""/>
					</div>
					<h3>Top Programs</h3>
					<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
				</div>

				<div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
					<div className="icon_container d-flex flex-column justify-content-end">
						<img src={i7} alt=""/>
					</div>
					<h3>Graduate Diploma</h3>
					<p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
				</div>

			</div>
		</div>
		</AnimationOnScroll>
	</div>


	   <div className={t.milestones}>
		
				<div className={t.milestones_background} style={{backgroundImage: 'url(' + require('./images/milestones_background.jpg') + ')'}}></div>
				
				<div className="container">
					<div className="row">
				
						
						<div className=	{` col-lg-3 ${t.milestone_col} `}>
							<div className={` text-center ${t.milestone} `}> 
								<div className={t.milestone_icon}><img src={m1} alt="Milestone1"/></div>
								<div className={t.milestone_counter} data-end-value="750">100+</div>
								<div className={t.milestone_text}>Current Students</div>
							</div>
						</div>

						
						<div className=	{` col-lg-3 ${t.milestone_col} `}>
							<div className={`${t.milestone} text-center`}>
								<div className={t.milestone_icon}><img src={m2} alt="Milestone1"/></div>
								<div className={t.milestone_counter} data-end-value="120">1800+</div>
								<div className={t.milestone_text}>Happy Clients</div>
							</div>
						</div>

					
						<div className=	{` col-lg-3 ${t.milestone_col} `}>
							<div className={`${t.milestone} text-center`}>
								<div className={t.milestone_icon}><img src={m3} alt="Milestone1"/></div>
								<div className={t.milestone_counter} data-end-value="39">10+</div>
								<div className={t.milestone_text}>Online Courses</div>
							</div>
						</div>

					
						<div className=	{` col-lg-3 ${t.milestone_col} `}>
							<div className={`${t.milestone} text-center`}>
								<div className={t.milestone_icon}><img src={m4} alt="Milestone1"/></div>
								<div className={t.milestone_counter} data-end-value="3500" data-sign-before="+">20+</div>
								<div className={t.milestone_text}>Won Awards</div>
							</div>
						</div>

					</div>
				</div>
	

		</div>

		{/* <!-- Become --> */}

<div className={t.become}>
	<div className="container">
		<div className="row row-eq-height">   

			<div className="col-lg-6 order-2 order-lg-1">
			<AnimationOnScroll animateIn="animate__slideInLeft" animateOnce> 
				<div className={t.become_title}>
					<h1>Whatever challenges you face, we have the groundbreaking training courses and assets to help you with your optimal life.</h1>
				</div>
				<p className={t.become_text}>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies venenatis. Suspendisse fermentum sodales lacus, lacinia gravida elit dapibus sed. Cras in lectus elit. Maecenas tempus nunc vitae mi egestas venenatis. Aliquam rhoncus, purus in vehicula porttitor, lacus ante consequat purus, id elementum enim purus nec enim. In sed odio rhoncus, tristique ipsum id, pharetra neque.</p>
				<div className={` text-center ${t.become_button} ${t.trans_200} `}> 
					<a href="#">Read More</a>
				</div>
				</AnimationOnScroll>
			</div>

			<div className="col-lg-6 order-1 order-lg-2"> 
			<AnimationOnScroll animateIn="animate__slideInRight" animateOnce> 
				<div className={t.become_image}>
					<img src={become} alt="Shah-mind-set-become"/>
				</div>
				</AnimationOnScroll>
			</div>
			
		</div>
	</div>
</div>




{/* testimonial */}


<div className="testimonials page_section">
	
	<div className="testimonials_background_container prlx_parent">
		<div className="testimonials_background prlx" style={{backgroundImage: 'url(' + require('./images/event_1.jpg') + ')'}}></div>
	</div>  
	<div className="container">

		<div className="row">
			<div className="col">
				<div className="section_title text-center">
					<h1>What our Clients say</h1>
				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-lg-10 offset-lg-1">
				
				<div className="testimonials_slider_container">	

				<OwlCarousel items={1} rewind autoplay >
				<div class='item '> 			
					<div className=" testimonials_slider">
						
					
						<div className="item">
							<div className="testimonials_item text-center">
								<div className="quote">“</div>
								<p className="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
								<div className="testimonial_user">
									<div className="testimonial_image mx-auto">
										<img src={c1} alt=""/>
									</div>

									<div className="testimonial_name">james cooper</div>
									<div className="testimonial_title">Graduate Student</div>
								</div>
							</div>
						</div>

						

					</div>
					</div>


					<div class="item">
					<div className="testimonials_item text-center">
								<div className="quote">“</div>
								<p className="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
								<div className="testimonial_user">
									<div className="testimonial_image mx-auto">
										<img src={c1} alt=""/>
									</div>

									<div className="testimonial_name">james cooper</div>
									<div className="testimonial_title">Graduate Student</div>
								</div>
							</div>
								
							</div>
					</OwlCarousel>	
				</div>
			</div>
		
			




		</div>

	</div>
</div>












        </>
    );
}

export default Home;