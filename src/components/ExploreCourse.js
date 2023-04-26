import React from 'react'
import "./ExploreCourse.css";
import LeaderboardCard from './LeaderboardCard';
import Button from './Button';

function ExploreCourse() {
  return (
    <div className='achievers'>
        <h3 className='achievers_heading'>Explore Courses</h3>
        <div className='explore_coin'>
            <h4 className='explore_coin_heading'>Available Course Coins</h4>
            <div className='coins'>150</div>
            <p className='explore_coin_para'>Earn more coins</p>
        </div>
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

export default ExploreCourse