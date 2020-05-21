// components/Header.js

import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import NavBar from "./NavBar";


const headerStyle = {
    position: "relative",
    // width: "170px",
    // height: "40px",
    // left: "calc(50% - 170px/2 + 121px)",
    background: "url(https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=3&w=500)",


    // width: "2309px",
    height: "700px",
    backgroundRepeat:"no-repeat",
    backgroundSize:"content",
    fontFamily: "Alegreya Sans",
    fontFtyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#F0D8D8",
    backgroundPosition:"center"
  };
  
  const Header = () => (
    <div className="Header" style={headerStyle}>
         <NavBar />

    </div>
  );
  
  export default Header;