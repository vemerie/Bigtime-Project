
import React, { Component } from 'react'
import ServiceCard from "./ServiceCard";

const text= {
    title:"Great up",
    link:"/link",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}
const ContainerStyle={
    
} 


const Service = () => (
    <div style={ContainerStyle}>
   <div className="container my-5" >
       <h1 className="my-5 text-center">Service</h1>
       <div className="row">
           <div className="col-md-5"><ServiceCard text={text} /></div>
       </div>
   </div>
   </div>
  );
  export default Service;