import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={[<LoginPage />]} />
          <Route path="/" element={[<LandingPage />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
