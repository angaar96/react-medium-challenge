import React from 'react';
import "./Button.scss"; 

const Button = (props) => {
  const { buttonClass, buttonText } = props; 
  return (
    <button className={buttonClass}> { buttonText } </button> 
  )
}

export default Button; 