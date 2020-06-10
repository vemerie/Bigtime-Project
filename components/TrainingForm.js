
import React, { Component } from 'react'
import WorkSub from "./WorkSub";
import Button from './Button';

const formElementStyle={
    background:"#0A0F14",
    color:"white",
    border:"none"
} 

const buttonStyle ={
   
    width:"200px",
    padding:"2px",
    borderRadius:"4px",
    fontSize:"12px",
    letterSpacing:"3px",
    background: "black",
    border:"1px solid #761903"
}

const textColor ={
    color:"#c3c3c3"
}


const TrainingForm = () => (
    <div id="contact" style={{background:"black", padding:"6rem 0rem", minHeight:"700px", }}>
   <div className="container" >
       <h1 className="text-center my-5">Contact</h1>
       <div className="row">
           <div className="col-md-12">
               <h2 className="mt-5" style={{color:"#FE1903"}}>Feedbacks</h2>
               <p style={textColor}>Get in touch with us and we will serve you to your satisfactions, we would respond to your enquiries as quick as within an hour of you messaging us</p>
               <p style={textColor}>Also let us know what you think about our products and service and how we can improve on them, your positive feedbacks and criticisms are highly regarded and will be put into consideration</p>
           </div>

           <div className="col-md-12">
               <div className="form-row">
                   <div className="col-md-6">
                    <div className="form-group">
                            <input  style={formElementStyle} className="form-control" type="text" placeholder="First Name" name ="first-name" /> 
                        </div> 
                   </div>

                   <div className="col-md-6">
                        <div className="form-group">
                            <input  style={formElementStyle} className="form-control" type="text" placeholder="Last Name" name ="last-name" />
                        </div> 
                   </div>
               </div>

               <div className="form-group">
                   <input style={formElementStyle} className="form-control" type="email" placeholder="Email" name ="email" />
               </div> 

               <div className="form-group">
                   <input style={formElementStyle} className="form-control" type="email" placeholder="Email" name ="email" />
               </div> 
               
               <div className="form-group">
                   <input style={formElementStyle} className="form-control" type="email" placeholder="Email" name ="email" />
               </div>
               
                <div className="form-group">
                   <input style={formElementStyle} className="form-control" type="email" placeholder="Email" name ="email" />
               </div> 
               
               <div className="form-group">
                   <input style={formElementStyle} className="form-control" type="email" placeholder="Email" name ="email" />
               </div> 
               
               <div className="form-group">
                   <input style={formElementStyle} className="form-control" type="email" placeholder="Email" name ="email" />
               </div>
               
                <div className="form-group">
                   <input style={formElementStyle} className="form-control" type="email" placeholder="Email" name ="email" />
               </div>
               
                <div className="form-group">
                   <input style={formElementStyle} className="form-control" type="email" placeholder="Email" name ="email" />
               </div>
               
                <div className="form-group">
                   <input style={formElementStyle} className="form-control" type="email" placeholder="Email" name ="email" />
               </div>
                
               <div className="form-group">
                   <textarea style={{height:"300px",  background:"#0A0F14", color:"white",  border:"none", }} className="form-control" type= "text" placeholder="Comment" name="comment"></textarea>
               </div> 
               <Button text="Send" buttonStyle={buttonStyle} />
        </div>
       </div>

   </div>
   </div>
  );
  export default TrainingForm;