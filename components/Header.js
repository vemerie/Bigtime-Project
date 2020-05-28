// components/Header.js

import React, { Component } from 'react'
import NavBar from "./NavBar";
import Button from "./Button"


const headerStyle = {
    position: "relative",
    background: "url(https://images.pexels.com/photos/1595233/pexels-photo-1595233.jpeg?auto=compress&cs=tinysrgb&dpr=4&w=500)",
    // width: "2309px",
    height: "700px",
    backgroundRepeat:"no-repeat",
    backgroundSize:"content",
    fontFamily: "Alegreya Sans",
    fontFtyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    lineHeight: "36px",
    color: "white",
    backgroundPosition:"left top",
    opacity:1
  };

const buttonStyle ={
  width:"200px",
  padding:"5px",
  background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%)"
}

const buttonWatchStyle ={
  minWidth:"200px",
  padding:"5px",
  background: "transparent",
  border:"2px solid white",
  marginLeft:"15px"

}
const text= "Training";
const textWatch= "Watch Video";

   const imgStyle ={
    opacity:1,
    fontSize:"140px",
    fontWeight:900,
    textAlign:"center",
    marginTop:"15rem"
   }
  const Header = () => (
    <div className="Header" style={headerStyle}>
         <NavBar />
         <div className="container mt-5">
            <div className="row">
              <div className="col-md mt-5">
                <h1 className="font-weight-bolder mt-5">Photography For the Future</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

              </div>
              <div className="col-md">
                  <h1 style={imgStyle}  >
                    BTS
                  </h1>
                  <div className ="centerWrapper">
                  <Button buttonStyle={buttonStyle} text={text}></Button>
                  <Button buttonStyle={buttonWatchStyle} text={textWatch}></Button>
                  </div>

              </div>
            </div>
         </div>

    </div>
  );
  
  export default Header;