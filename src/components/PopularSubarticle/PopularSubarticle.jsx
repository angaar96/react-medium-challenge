import React from 'react'
import "./PopularSubarticle.scss"; 
const PopularSubarticle = (props) => {
  const { articleTitle, articleTime } = props; 
  return (
    <div className = "article"> 
      <div className = "articleDetails">
        <h3 className = "articleTitle"> {articleTitle} </h3>
        <h4 className = "articleTime"> {articleTime} </h4>
      </div>
      <img src = "http://www.fillmurray.com/284/196" className="articlePicture" alt="article"></img>
    </div>
  )
}

export default PopularSubarticle;
