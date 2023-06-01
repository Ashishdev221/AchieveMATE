import React from 'react';
import "./TeamImageCard.css";
import { Icon } from '@iconify/react';
function TeamImageCard(props) {

  return (
    <div className='team_image_card'>
      <img className='team_card_img' src={props.img} alt="" />
      <a href={props.url} target='empty'>
        <Icon icon="devicon:linkedin" width="29" style={{ position: 'absolute', right: '10px', top: '10px' }} />
      </a>
      <div className='team_names'>{props.firstName} <br /> {props.lastName}</div> {/* Display full name */}
    </div>
  )
}

export default TeamImageCard;
