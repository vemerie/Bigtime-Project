
import React, { Component } from 'react'
import WorkSub from "./WorkSub";
import FooterList from "./FooterList";
import FooterSub from "./FooterSub";



const text1= [ "Photography","Videography","Training", "Model shot", "Wedding Coverage", "Video Directing"]
const text2= [ "Photography","Videography","Training","Video Making"]




const Footer = () => (
    <div style={{background:"#0A0F14", paddingBottom:""}}>
   <div className="container my-5" >
       {/* <h1 className="my-5">Discover Our Works</h1> */}
       <div className="row">
           <div className="col-md-3"><FooterList text={text1} /></div>
           <div className="col-md-3"><FooterList text={text2} /></div>
            <div className="col-md-3"></div>
            <div className="col-md-3">
                <img alt="Bigtime Logo" style={{width:"100%"}} src="/logo2.png" />
                <p className="text-center text-secondary">info@bigtime.com</p>
            </div>

       </div>
   </div>
    <FooterSub />
   </div>
  );
  export default Footer;