import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import Components from "./pages/Components";
import HomePage from "./pages/HomePage";
import Popover2 from "./pages/Popover2";
import Popover1 from "./pages/Popover1";
import Popover3 from "./pages/Popover3";
import Popover4 from "./pages/Popover4";
import UserDashboard from "./pages/UserDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import MyDashboard from "./pages/MyDashboard";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<LandingPage />]} />
          <Route path="/login" element={[<LoginPage />]} />
          <Route path="/Signup" element={[<SignUpPage />]} />
          <Route path="/comp" element={[<Components />]} />
          <Route path="/home-page" element={[<HomePage />]} />
          <Route path="/teacher-dashboard" element={[<TeacherDashboard />]} />
          <Route path="/user-dashboard" element={[<UserDashboard />]} />
          <Route path="/popover1" element={[<Popover1></Popover1>]} />
          <Route path="/popover2" element={[<Popover2></Popover2>]} />
          <Route path="/popover3" element={[<Popover3></Popover3>]} />
          <Route path="/popover4" element={[<Popover4></Popover4>]} />
          <Route path="/" element={[<LandingPage />]} />
          <Route path="/myDash" element={[<MyDashboard />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
