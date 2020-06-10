
import React, { Component } from 'react'
import Button from './Button'
import { RubberBand } from 'react-awesome-reveal';



const headerStyle={
    
} 

const sectionStyle ={
    position:"relative",
    backgroundImage:"url(/Vector.svg)",
    backgroundRepeat:"no-repeat",
    height:"800px",
    backgroundSize:"50%",
    backgroundPosition:"-30% 140%",



}
const  buttonStyle= {
    textTransform: "Capitalize",
    display:"block",
    margin:"3rem auto",
    letterSpacing:"3px",
    padding:"8px 15px",
    borderRadius:"5px",
    background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%)",


}

const CertifiedSection = () => (
    <div id="training" style={sectionStyle}>
   <div className="container" style={{marginTop:"15rem"}} >
       <RubberBand><h1 className="my-5 text-center">Become a certified photographer</h1>
       </RubberBand>
       <div className="col-md-8 mx-auto">
       <p className="text-center" style={{fontSize:"13px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
       </div>

       <Button  link="training" text="Get Started" buttonStyle={buttonStyle} />
   </div>
   </div>
  );
  export default CertifiedSection;