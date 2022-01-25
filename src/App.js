import React from "react";
// import Header from "./components/Header";
import Products from "./components/NFTs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DataNFTProvider } from "./components/DataNFTProvider";
import { DataProvider } from "./components/Shop/DataProvider";
import Details from "./components/Details";
import Cart from "./components/Cart";

import ShopDetails from './components/Shop/ShopDetails'

import Nav from "./components/Navigation/Nav";
import SubHeader from "./components/Navigation/SubHeader";
import Main from "./components/MainPage/Main";
import Home from "./components/Home/Home";
import NFT from "./components/NFT/NFT";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import ErrorPage from "./Pages/ErrorPage";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <DataProvider>
      <DataNFTProvider>
        <div className="App">
          <ScrollToTop />
          <Router>
            <Nav />
            <SubHeader />
            <section>
              <Routes>
                <Route exact path="/nft" element={<Products />} />
                <Route exact path="/nft/:id" element={<Details />} />
                <Route exact path="/shop" element={<Shop />} />
                <Route exact path="/shop/:id" element={<ShopDetails />} />
                <Route exact path="/cart" element={<Cart />} />

                <Route exact path="/" element={<Home />} />
                {/* <Route exact path="/home" element={<Home />} /> */}
                <Route exact path="/nft" element={<NFT />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </section>
          </Router>
          <Footer />
        </div>
      </DataNFTProvider>
    </DataProvider>
  );
}

export default App;
