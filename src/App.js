import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import Components from "./pages/Components";
import HomePage from "./pages/HomePage";
import UserDashboard from "./pages/UserDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import SignUpPage from "./pages/SignUpPage";
import LoginTeacher from "./pages/LoginTeacher"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<LandingPage />]} />
          <Route path="/login" element={[<LoginPage />]} />
          <Route path="/loginTeacher" element={[<LoginTeacher />]} />
          <Route path="/signup" element={[<SignUpPage />]} />
          <Route path="/comp" element={[<Components />]} />
          <Route path="/home-page" element={[<HomePage />]} />
          <Route path="/teacher-dashboard" element={[<TeacherDashboard />]} />
          <Route path="/user-dashboard" element={[<UserDashboard />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
