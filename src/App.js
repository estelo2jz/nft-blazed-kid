import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DataNFTProvider } from "./components/DataNFTProvider";
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
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <DataNFTProvider>
      <div className="App">
        <ScrollToTop />
        <Router>
          <Nav />
          <SubHeader />
          <section>
            <Routes>
              <Route path="nft" element={<Products />} />
              <Route path="nft/:id" element={<Details />} />
              <Route path="cart" element={<Cart />} />

              <Route exact path="/" element={<Home />} />
              {/* <Route exact path="/home" element={<Home />} /> */}
              <Route exact path="/nft" element={<NFT />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </section>
        </Router>
        <Footer />
      </div>
    </DataNFTProvider>
  );
}

export default App;
