import React from 'react';
import "./RelatedTopics.scss";
import Line from "../Line/Line";

const RelatedTopics = (props) => {
  return (
    <div className = "relatedTopics"> 
      <h4>RELATED TOPICS</h4>
      <Line/> 
      <p> JAVASCRIPT </p>
      <p> SOFTWARE ENGINEERING </p>
      <p> DATA SCIENCE </p>
      <p> UX </p>
      <p> MATH </p>
    </div>
  )
}

export default RelatedTopics;
