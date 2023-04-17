import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import Popover2 from "./pages/Popover2";
import Popover1 from "./pages/Popover1";
import Popover3 from "./pages/Popover3";
import Popover4 from "./pages/Popover4";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={[<LoginPage />]} />
          <Route path="/popover1" element={[<Popover1></Popover1>]} />
          <Route path="/popover2" element={[<Popover2></Popover2>]} />
          <Route path="/popover3" element={[<Popover3></Popover3>]} />
          <Route path="/popover4" element={[<Popover4></Popover4>]} />
          <Route path="/" element={[<LandingPage />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
