import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DataProvider } from "./components/DataProvider";
import Details from "./components/Details";
import Cart from "./components/Cart";

import Nav from "./components/Navigation/Nav";
import SubHeader from './components/Navigation/SubHeader'
import Main from "./components/MainPage/Main";
import Home from "./components/Home/Home";
import NFT from "./components/NFT/NFT";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <ScrollToTop />
        <Router>
          <Nav />
          <SubHeader />
          {/* <Header /> */}
          <section>
            <Routes>
              <Route path="nft" element={<Products />} />
              <Route path="nft/:id" element={<Details />} />
              <Route path="cart" element={<Cart />} />

              <Route exact path="/" element={<Home />} />
              {/* <Route exact path="/home" element={<Home />} /> */}
              <Route exact path="/nft" element={<NFT />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </section>
        </Router>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
