
import Link from 'next/link';

import React, { Component } from 'react'
const Button = ({link, buttonStyle, text}) => (
   
    <button  style={buttonStyle}>
        {text}
    </button>
   
  );
  export default Button;