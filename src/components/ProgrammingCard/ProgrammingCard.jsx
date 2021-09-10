import React from 'react'
import Button from "../Button/Button";
import "./ProgrammingCard.scss";
const ProgrammingCard = () => {
  return (
    <div className = "programmingCard">
      <h2> Programming </h2> 
      <p> The good, the bad, the buggy. </p>
      <Button buttonText = "Follow" buttonClass = "followButton"/>
      <p> Follow to see more stories about Programming on your homepage and in your Medium Daily Digest </p> 
    </div>
  )
}

export default ProgrammingCard