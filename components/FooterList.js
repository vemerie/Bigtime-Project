
import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "./Button"
import Col from "react-bootstrap/Col"

const buttonStyle ={
    display:"block",
    margin:"auto",
    width:"200px",
    padding:"2px",
    borderRadius:"4px",
    fontSize:"12px",
    letterSpacing:"3px",
    background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%)"
  }

  const textStyle ={
      letterSpacing:"2px"

  }
const FooterList = ({text}) => (
    <ul>
        {text.map((res, key)=>
            <li style={{listStyle:"none"}} className="text-secondary">{res}</li>
        )}
    </ul>
  );
  export default FooterList;