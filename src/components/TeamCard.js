import React from 'react'
import "./TeamCard.css";
import { Icon } from '@iconify/react';

function TeamCard(props) {
  return (
    <div className='team_card'>
      <img className='team_img' src={props.img} alt="" />
      <a href={props.url} target='empty'>
        <Icon icon="devicon:linkedin" width="15" style={{ position: 'absolute', right: '20px', top: '8px' }} />
      </a>
      <div className='team_name'>
        {props.firstName} <br /> {props.lastName}
      </div>
    </div>
  )
}

export default TeamCard