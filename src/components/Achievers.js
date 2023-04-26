import React from 'react'
import "./Achievers.css";
import Button from './Button';
import LeaderboardCard from './LeaderboardCard';

function Achievers() {
  return (
    <div className='achievers'>
        <h3 className='achievers_heading'>Achiever's <br /> Leaderboard</h3>
        <div>
            <LeaderboardCard />
            <LeaderboardCard />
            <LeaderboardCard />
            <LeaderboardCard />
            <LeaderboardCard />
        </div>
        <Button label="Show all" className="button achievers_btn"/>
    </div>
  )
}

export default Achievers