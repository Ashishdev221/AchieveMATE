import React from "react";
import "./TeacherDashboard.css";
import Footer from "../components/Footer";
import TeacherHeader from "../components/TeacherHeader";
import DeptLeaderboard from "../components/DeptLeaderboard";

function TeacherDashboard() {
  return (
    <div className="teacher_dashboard">
    <TeacherHeader />
      <div className="container">
        <div className="row">
          <div className="col-8"></div>
          <div className="col-3">
            <DeptLeaderboard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeacherDashboard;
