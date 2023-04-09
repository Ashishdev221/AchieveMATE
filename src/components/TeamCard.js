import React from 'react'
import "./TeamCard.css";

function TeamCard() {
  return (
    <div className='team_card'>
      <img className='team_img' src="./passport-pic-2@2x.png" alt="" />
      <div className='team_name'>
        Ashish <br /> Dev
      </div>
    </div>
  )
}

export default TeamCard