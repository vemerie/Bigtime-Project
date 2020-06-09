
import React, { Component } from 'react'
import WorkSub from "./WorkSub";
import Video from "./Video";



const text= {
    title:"Great up",
    link:"/link",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}
const headerStyle={
    
} 


const Works = () => (
    <div id="work" style={{background:"#0A0F14",minHeight:"800px", paddingBottom:"4rem"}}>
   <div className="container my-5" >
       <h1 className="" style={{ marginBottom:"6rem", marginTop:"6rem"}}>Discover Our Works</h1>
       <div className="row ">
           <div className="col-md-3"><WorkSub text={text} /></div>
           <div className="col-md-3"><WorkSub text={text} /></div>
            <div className="col-md-3"><WorkSub text={text} /></div>
            <div className="col-md-3"><WorkSub text={text} /></div>
       </div>
   </div>
   <Video />
   </div>
  );
  export default Works;