
import React, { Component } from 'react'
import WorkSub from "./WorkSub";

const text= {
    title:"Great up",
    link:"/link",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}
const headerStyle={
    
} 


const Works = () => (
    <div style={{background:"#301929", paddingBottom:"4rem"}}>
   <div className="container my-5" >
       <h1 className="my-5">Discover Our Works</h1>
       <div className="row">
           <div className="col"><WorkSub text={text} /></div>
           <div className="col"><WorkSub text={text} /></div>
            <div className="col"><WorkSub text={text} /></div>
            <div className="col"><WorkSub text={text} /></div>

       </div>
   </div>
   </div>
  );
  export default Works;