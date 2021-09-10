import React from 'react'
import "./PopularInProgramming.scss"
import PopularSubarticle from '../PopularSubarticle/PopularSubarticle';
import Line from "../Line/Line"; 

const PopularInProgramming = () => {
  return (
    <div>
      <h3> POPULAR IN PROGRAMMING </h3> 
      <Line/> 
      <PopularSubarticle articleTitle = "C# is Dying" articleTime = "13 min read"/> 
      <PopularSubarticle articleTitle = "7 Signs of Software Engineers With High Emotional Intelligence" articleTime = "8 min read"/>
      <PopularSubarticle articleTitle = "“If software engineering is in demand, why is it so hard to get a software engineering job?”" articleTime = "13 min read"/>
      <PopularSubarticle articleTitle = "Learning Almost Nothing About LLVM" articleTime = "8 min read"/>
      <PopularSubarticle articleTitle = "15 Must-Know Python String Methods" articleTime = "4 min read"/>
    </div>
  )
}

export default PopularInProgramming; 