import React from 'react'
import "./ExploreCourse.css";
import LeaderboardCard from './LeaderboardCard';
import Button from './Button';

function ExploreCourse({leaderBoardData}) {
  return (
    <div className='achievers'>
        <h3 className='achievers_heading'>Explore Courses</h3>
        <div className='explore_coin'>
            <h4 className='explore_coin_heading'>Available Course Coins</h4>
            <div className='coins'>150</div>
            <p className='explore_coin_para'>Earn more coins</p>
        </div>
        <div>
        {leaderBoardData.map((item,index) => {
          return (
            <LeaderboardCard
              count={item.count}
              name={item.user.name}
              image={item.user.img}
              badgeImage={index===0?"1-1@2x.png":index===1?"2-24@2x.png":"3-51@2x.png"}
            />
          );
        })}
        </div>
        <Button label="Show all" className="button achievers_btn"/>
    </div>
  )
}

export default ExploreCourse