import React from 'react'
import LatestSubarticle from "../LatestSubarticle/LatestSubarticle";
import "./Latest.scss"; 
import Line from "../Line/Line"; 

const Latest = (props) => {
  return (
    <div className = "latestArticles">
      <h3> LATEST </h3> 
      <Line/> 
      <LatestSubarticle articleTitle = "Hive user impersonation" articleDetails = "This article centers around a real-life authorization requirement when hive data is..." articleAuthor = "Vibushanan Somasundaram" articleDateAndTime = "Sep 1 · 2 min read"></LatestSubarticle>
      <LatestSubarticle articleTitle = "How to export data to an XLSX spreadsheet on Rails?" articleDetails = "By: Swapnali Pise Category: Ruby on Rails Technologies: Ruby on Rails" articleAuthor = "Cryptex Technologies" articleDateAndTime = "Sep 1 · 2 min read"></LatestSubarticle>
      <LatestSubarticle articleTitle = "Build an Advice Generator Using Python" articleDetails = "No need to take anyone’s advice if you know Python and can create your own advice" articleAuthor = "Rajat upadhyaya in Python in Plain English" articleDateAndTime = "Aug 24 · 2 min read"></LatestSubarticle>
    </div>
  )
}

export default Latest
