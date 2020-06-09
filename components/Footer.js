
import React, { Component } from 'react'
import WorkSub from "./WorkSub";
import FooterList from "./FooterList";
import FooterSub from "./FooterSub";
import {SocialMediaIconsReact} from 'social-media-icons-react';




const text1= [ "Photography","Videography","Training", "Model shot", "Wedding Coverage", "Video Directing"]
const text2= [ "Photography","Videography","Training","Video Making"]




const Footer = () => (
    <div style={{background:"#0A0F14", paddingBottom:""}}>
   <div className="container my-5" >
       {/* <h1 className="my-5">Discover Our Works</h1> */}
       <div className="row">
           <div className="col-md-3"><FooterList text={text1} /></div>
           <div className="col-md-3">
               <FooterList text={text2} />
                <div className="ml-4">
                <span className="mr-3"><SocialMediaIconsReact backgroundColor="grey" icon="twitter" url="https://twitter.com/your-twitter-handle"/></span>
                <span className="mr-3"><SocialMediaIconsReact icon="facebook" backgroundColor="grey" url="https://twitter.com/your-twitter-handle"/></span>
                <span className="mr-3"><SocialMediaIconsReact icon="youtube"  backgroundColor="grey" url="https://twitter.com/your-twitter-handle"/></span>


                </div>
           </div>
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