import React from 'react'
import "./MainContent.scss"
import Latest from "../Latest/Latest"
import FeaturedWriter from '../FeaturedWriter/FeaturedWriter';
const MainContent = (props) => {
  const {authorName, sourceName, articleDateAndDuration} = props; 
  return (
    <div className = "main-content">
      <img src = "http://www.fillmurray.com/460/300" alt = "bill murray" className = "main-content__img"></img>
      <h2 className = "main-content__article__header"> Is It Time to Get Excited About Windows 11? </h2>
      <h3 className = "main-content__article__subheader"> Big changes are coming and that might be a good thing </h3>
      <div className = "main-content__article">
        <img className = "main-content__article__img" alt = "main article" src ="http://www.fillmurray.com/140/100"></img>
        <div className = "main-content__article__data"> 
          <p> {authorName} in {sourceName} </p>
          <p className = "main-content__article__data__date"> {articleDateAndDuration} </p>
        </div>
      </div>
      <Latest/>
      <FeaturedWriter/>  
    </div>

  )
}

export default MainContent
