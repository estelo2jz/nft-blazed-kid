import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from './ScrollToTop';
import About from "./components/About/About";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <Nav />
      <Home />
      <ScrollToTop />
      <Routes>
        {/* <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;