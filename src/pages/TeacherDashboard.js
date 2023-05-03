import React from "react";
import "./TeacherDashboard.css";
import Footer from "../components/Footer";
import TeacherHeader from "../components/TeacherHeader";
import DeptLeaderboard from "../components/DeptLeaderboard";
import Dashboard from "../components/Dashboard";

function TeacherDashboard() {
  return (
    <div className="teacher_dashboard">
    <TeacherHeader />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Dashboard />
          </div>
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
