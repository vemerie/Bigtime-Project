// components/Header.js

import React, { Component } from 'react'
import NavBar from "./NavBar";
import Button from "./Button"
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Fade } from 'react-awesome-reveal';
import { Slide } from 'react-awesome-reveal';



const headerStyle = {
    position: "relative",
    background: "url(https://images.pexels.com/photos/1595233/pexels-photo-1595233.jpeg?auto=compress&cs=tinysrgb&dpr=4&w=500)",
    // width: "2309px",
    minHeight: "700px",
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

   const { Element } = BannerAnim;
const BgElement = Element.BgElement;
  const Header = () => {
    return(
    <div  className="Header" style={headerStyle}>
          <NavBar  />

         <div className="container mt-5">
            <div className="row">
              <div className="col-md mt-5">
                <Slide><h1 className="font-weight-bolder mt-5">Photography For the Future</h1></Slide>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

              </div>
              <div className="col-md">
                  <Slide damping={3}><h1 style={imgStyle}  >
                    BTS
                  </h1>
                  </Slide>
                  <div className ="centerWrapper">
                  <Button buttonStyle={buttonStyle} text={text}></Button>
                  <Button buttonStyle={buttonWatchStyle} text={textWatch}></Button>
                  </div>

              </div>
            </div>
         </div>

         {/* <BannerAnim>
      <Element key="aaa"
        prefixCls="banner-user-elem"
      >
        <BgElement key="bg" className="bg">
          <video loop autoPlay>
            <source src="https://os.alipayobjects.com/rmsportal/CoDFvoxaQpTnLOM.mp4" type="video/mp4" />
          </video>
        </BgElement>
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: 'from' }} name="TweenOne">
          Ant Motion Demo.Ant MotionDemo
        </TweenOne>
      </Element>
      <Element key="bbb"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
          Ant Motion Demo.Ant MotionDemo
        </TweenOne>
      </Element>
      <Element key="ccc"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            position: "relative",
            background: "url(https://images.pexels.com/photos/1595233/pexels-photo-1595233.jpeg?auto=compress&cs=tinysrgb&dpr=4&w=500)",
            // width: "2309px",
            minHeight: "700px",
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
          }}
        />
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
          Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>
    </BannerAnim> */}

    </div>
  );}
  
  export default Header;