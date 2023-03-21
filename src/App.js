import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage1 from "./pages/LandingPage1";
import LandingPage from "./pages/LandingPage";
import SignUpPage1 from "./pages/SignUpPage1";
import LoginPage1 from "./pages/LoginPage1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/login-page-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage1 />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/sign-up-page-1" element={<SignUpPage1 />} />
      <Route path="/login-page-1" element={<LoginPage1 />} />
    </Routes>
  );
}
export default App;
