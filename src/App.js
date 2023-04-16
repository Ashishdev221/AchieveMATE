import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import Components from "./pages/Components";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
