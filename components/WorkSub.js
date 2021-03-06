
import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "./Button"
import Col from "react-bootstrap/Col";
import { Fade } from 'react-awesome-reveal';


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
const WorkSub = ({text}) => (
<Fade>
    <Card style={{ backgroundColor:"#301929" }}>
    <a href={text.link}><Card.Img variant="top" src={text.pix} /></a>
    <Card.Body>
    <Card.Title>{text.title}</Card.Title>
      <Card.Text style ={textStyle}>
        {text.description}
      </Card.Text>
      <Button buttonStyle={buttonStyle} text="See more"/>
    </Card.Body>
  </Card>
  </Fade>
  );
  export default WorkSub;