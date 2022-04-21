import React from "react";
import c1 from "./images/placeholder.svg";
import c2 from "./images/smartphone.svg";
import c3 from "./images/envelope.svg";
import c from "./contact.module.css";
import { useState } from "react";
import { useNavigate} from "react-router-dom";





const Contact =()=>{
// const navigate= useNavigate();

    const [data, setdata] = useState(
        {
          name:"",
          phone: "",
          email: "",
          message: "",
        }
      );
      
      
      const InputEvent=(get)=>{
//    user jo likh rha target.name py jo b para hoga misal ky tor
//    par email para hai name="email" to wo store hojiayga name field mei    let name= get.target.name;

   let name= get.target.name;

//    aur value ky case mei jo user ny type ki value wo dikhani jo user likh rha aus email mei 
//    upar waly option mei khali wo chk kryga aus name py field aur second waly b jo wo type kr rha
//    let value= get.target.value;
   
        let value= get.target.value;
         
      
      setdata((preval)=>{
        return{
          ...preval,
          [name]: value,
      
        };
      })
      }

    //   const FormSubmit=(e)=>{
    //     e.preventDefault();
    //     alert( ` ${data.phone} ${data.email} ${data.name} ${data.msge}`);
      
    //   }

const PostData = async(e)=>{

    e.preventDefault();
    const {name, email, phone, message}=data;
const res = await fetch("/register", {

    method: 'POST',
   
    headers : { 
        'Content-Type': 'application/json',
       
        'Accept': 'application/json'
       },
    body: JSON.stringify({
       
        name, email, phone, message

    })

});

const dataa= await res.json();
// if (res.status === 400 || !dataa){
//     window.alert ("Inavlid Credential");
    
// } 
if (res.status === 422 || !dataa){
    window.alert ("invalid Details Please Fill the Field Properly");
    console.log ("invalid message");
} 

else if(res.status === 400){
    window.alert ("Email is Not Valid");
    console.log ("invalid email");
}



else  {
    window.alert ("Thankyou Your Message has been Sent ");
    console.log ("form has sent");
    // navigate.push("/portfolio");
}


}











    return (

        <>
    	{/* <!-- Home --> */}

<div className={c.home}>
    <div className={`${c.home_background_container} ${c.prlx_parent}`}> 
        <div className="home_background prlx"  style={{backgroundImage: 'url(' + require('./images/contact_background.jpg') + ')'}}></div>
       
    </div>
    <div className={c.home_content}>
        <h1>Contact</h1>
    </div>
</div>

{/* <!-- Contact --> */}

<div className={c.contact}>
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                
                {/* <!-- Contact Form --> */}
                <div className={c.contact_form}>
                    <div className={c.contact_title}>Get in touch</div>

                    <div className={c.contact_form_container}>       
                        <form  method="POST" >
                            <input id="contact_form_name" name= "name" className=  {`${c.input_field} ${c.contact_form_name}`} 
                            type="text" placeholder="Name" required="true" value={data.name}  onChange={InputEvent} />
                          <input id="contact_form_email" className={`${c.input_field} ${c.contact_form_email}`}
                             type="email" placeholder="E-mail" name="email"value={data.email} required onChange={InputEvent}/>

                           <input id="contact_form_email" name="phone" className={`${c.input_field} ${c.contact_form_email}`}
                             type="number" placeholder="your Phone Number" required value={data.phone} onChange={InputEvent}/>


                            <textarea id="contact_form_message" rows="3" className= {`${c.text_field} ${c.contact_form_message}`}
                            
                            name="message" placeholder="Message" required value={data.message} onChange={InputEvent}></textarea>

                           <button id="contact_send_btn" type="submit"  onClick={PostData} className={`${c.contact_send_btn} ${c.trans_200}`} >send message</button>
                        </form>
                    </div>
                </div>
                    
            </div>

            
           
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            <div className="col-lg-4">
                <div className={c.about}>
                    <div className={c.about_title}>Join Courses</div>
                    <p className={c.about_text}>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies. Etiam eu purus nec eros varius luctus.</p>

                    <div className={c.contact_info}>
                        <ul>
                            <li className={c.contact_info_item}>
                                <div className={c.contact_info_icon}>
                                    <img src={c1} alt="contact"/>
                                </div>
                                Blvd Libertad, 34 m05200 Arévalo
                            </li>
                            <li className={c.contact_info_item}>
                                <div className={c.contact_info_icon}>
                                    <img src={c2} alt="contact"/>
                                </div>
                                0034 37483 2445 322
                            </li>
                            <li className={c.contact_info_item}>
                                <div className={c.contact_info_icon}>
                                    <img src={c3} alt="https://www.flaticon.com/authors/lucy-g"/>
                                </div>hello@company.com
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>

        

    </div>
</div>
<div className="container-fluid">
    {/* <!-- Google Map --> */}

    <div className="row" >
            <div className="col-12" style={{padding: '0px'}}>
                <div id={c.google_map}>
                    <div className={c.map_container}>
                        <div id="map">
                        <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d26781.934063763365!2d73.6848394450614!3d32.95782682872061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d32.9489912!2d73.7165594!4m5!1s0x391f9313f43c42a9%3A0x6562ee035f583a5f!2sgoogle%20map%20shah%20corporation!3m2!1d32.974245499999995!2d73.687153!5e0!3m2!1sen!2s!4v1647848108242!5m2!1sen!2s" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>

</>
    );
    
}

export default Contact;