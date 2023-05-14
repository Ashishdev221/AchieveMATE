import React from 'react'
import "./TeamCard.css";

function TeamCard(props) {
  return (
    <div className='team_card'>
      <img className='team_img' src={props.img} alt="" />
      <div className='team_name'>
        {props.firstName} <br /> {props.lastName}
      </div>
    </div>
  )
}

export default TeamCard