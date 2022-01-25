import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import Main from "./components/MainPage/Main"
import Home from "./components/Home/Home";
import NFT from "./components/NFT/NFT";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <Nav />
      <ul class="navigation">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/nft">NFT's</Link>
        </li>
      </ul>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/nft" element={<NFT />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
