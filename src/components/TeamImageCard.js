import React from 'react';
import "./TeamImageCard.css";

function TeamImageCard(props) {
  const fullName = `${props.firstName} ${props.lastName}`; // Concatenate first name and last name

  return (
    <div className='team_image_card'>
      <img className='team_card_img' src={props.img} alt="" />
      <div className='team_names'>{fullName}</div> {/* Display full name */}
    </div>
  )
}

export default TeamImageCard;
