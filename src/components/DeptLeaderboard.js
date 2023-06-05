import React from 'react'
import "./DeptLeaderboard.css";
import Button from './Button';
import LeaderboardCard from './LeaderboardCard';
import DeptLeaderboardCard from './DeptLeaderboardCard';

function DeptLeaderboard() {
  return (
    <div className='dept_leaderboard'>
        <h3 className='dept_heading'>Department <br /> Leaderboard</h3>
        <div>
        <DeptLeaderboardCard />
        </div>
        {/* <Button label="Show all" className="button dept_btn"/> */}
    </div>
  )
}

export default DeptLeaderboard