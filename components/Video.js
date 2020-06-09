
import React, { Component } from 'react'
import VideoSub from "./VideoSub";
import WorkSub from "./WorkSub";
import Button from "./Button";



const text= {
    title:"Great up",
    link:"/link",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}


const buttonStyle ={
   display:"block",
   marginTop:"2rem",
   marginLeft:"auto",
    width:"200px",
    padding:"2px",
    borderRadius:"4px",
    fontSize:"12px",
    letterSpacing:"3px",
    background: "black",
    border:"1px solid #212233"
}

const Video = () => (
    <div id="work" style={{background:"#0A0F14",minHeight:"800px", paddingBottom:"4rem"}}>
   <div className="container-fluid my-5" >
       <h2 className="text-center" style={{ marginBottom:"6rem", marginTop:"6rem"}}>Video Show</h2>
       <div className="row ">
           <div className="col-md-6"><VideoSub text={text} /></div>
           <div className="col-md-6">
            <div className="row">
            <div className="col-md-6"><VideoSub text={text} /></div>
            <div className="col-md-6"><VideoSub text={text} /></div>
            <div className="col-md-6"><VideoSub text={text} /></div>
            <div className="col-md-6"><VideoSub text={text} /></div>
            </div>
           </div>
       </div>
       <Button text="See more" buttonStyle={buttonStyle} />

   </div>
   </div>
  );
  export default Video;