import React from "react";
import { useEffect } from "react";
import { TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import TeamCard from "../components/TeamCard";
function LoginPage() {
  return (
    <div className="loginpage flex-container">
      <div className="leftside">
        <div className="leftside_info">
          <h1 className="leftside_heading">
            It's Your <span className="yellow_col">Achievement</span>,<br></br>{" "}
            Showcase it.
          </h1>
          <p className="leftside_para">
            Be proud of your achievements! Login now and start sharing your
            achievements
          </p>
        </div>
        <div className="meet_the_team">
          <h3 className="team_heading">Meet the Team</h3>
          <hr className="hr_login" />
          <div className="flex-container team_cards">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
      <div className="rightside">
        <img className="rightside_logo" src="/logo01-1@2x.png" alt="" />
        <h1 className="rightside_heading">Hello ! Welcome back</h1>
        <form action="">
          <input className="input" type="text" name="" id="" placeholder="Enrollment number" />
          
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
