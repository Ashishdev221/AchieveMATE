import React from 'react'
import "./WhyAchieveCard.css";

function WhyAchieveCard({heading, para}) {
  return (
    <div className='why_achieve_card'>
        <h4 className='why_achieve_card_heading'>{heading}</h4>
        <p className='why_achieve_card_para'>{para}</p>
    </div>
  )
}

export default WhyAchieveCard