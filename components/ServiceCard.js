
import React, { Component } from 'react'
import WorkSub from "./WorkSub";
import Button from './Button';
import { Fade } from 'react-awesome-reveal';


const text= {
    title:"Great up",
    link:"/link",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}
const buttonStyle ={
    display:"block",
    margin:"1rem auto  3rem  auto",
    width:"200px",
    padding:"2px",
    borderRadius:"4px",
    fontSize:"12px",
    letterSpacing:"3px",
    background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%)"
  }

const ServiceCard = () => (
    <Fade><div style={{ border:"1px solid white", padding:"3rem 1rem 1rem 1rem"}}>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <Button buttonStyle={buttonStyle} text="Photography" /> 

        <p></p>

        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <Button buttonStyle={buttonStyle} text="Movie Making" /> 

        <p></p>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <Button buttonStyle={buttonStyle} text="Model Works" /> 
   </div>
   </Fade>
  );
  export default ServiceCard;