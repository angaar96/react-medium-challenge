import React from 'react'
import PopularInProgramming from '../PopularInProgramming/PopularInProgramming';
import ProgrammingCard from '../ProgrammingCard/ProgrammingCard';
import RelatedTopics from "../RelatedTopics/RelatedTopics";
import "./RightCard.scss";

const RightCard = () => {
  return (
    <div className="right-card">
      <ProgrammingCard/>
      <RelatedTopics/>
      <PopularInProgramming/> 
    </div>
  )
}

export default RightCard;
