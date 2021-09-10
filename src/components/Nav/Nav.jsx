import React from 'react'; 
import "./Nav.scss"; 
import Button from "../Button/Button";

const Nav = (props) => {
  const { logoPath } = props; 
  return (
    <nav className = "navbar">
      <div className = "navbar__left-side">  
        <img src = {logoPath} className="navbar__left-side__logo" alt="logo"></img>
        <div className = "navbar__left-side__vertical-line"></div>
        <p> Programming </p>
      </div>
      <div className = "navbar__right-side"> 
        <p className = "navbar__right-side__items"> Become a member </p>
        <p className = "navbar__right-side__items navbar__right-side__sign-in"> Sign in </p>
        <Button buttonText = "Get Started" className = "navbar__right-side__items" buttonClass="getStartedButton"/>
      </div>
    </nav>
  )
}

export default Nav

