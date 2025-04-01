import React from "react";
// import Header from "./components/Header";
import Products from "./components/NFTs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataNFTProvider } from "./components/DataNFTProvider";
import { DataProvider } from "./components/Shop/DataProvider";
import NFTDetails from "./components/NFTDetails";
import Cart from "./components/Shop/Cart";
import ScrollToTopPage from "./components/ScrollToTopPage";

import ShopDetails from "./components/Shop/ShopDetails";
import Checkout from "./components/Shop/Checkout/Checkout";
import Shipping from "./components/Shop/Shipping/Shipping";
import Payment from "./components/Shop/Payment/Payment";
import Order from "./components/Shop/Order/Order";

import Nav from "./components/Navigation/Nav";
import SubHeader from "./components/Navigation/SubHeader";
import Home from "./components/Home/Home";
import NFT from "./components/NFT/NFT";
// import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import ErrorPage from "./Pages/ErrorPage";
import Shop from "./components/Shop/Shop";
import Gallery from "./components/Gallery/Gallery";

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
                <ScrollToTopPage>
                  <Routes>
                    <Route exact path="/nft" element={<Products />} />
                    <Route exact path="/nft/:id" element={<NFTDetails />} />
                    <Route exact path="/shop" element={<Shop />} />
                    <Route exact path="/gallery" element={<Gallery />} />
                    <Route exact path="/shop/:id" element={<ShopDetails />} />

                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/shipping" element={<Shipping />} />
                    <Route exact path="/payment" element={<Payment />} />
                    <Route exact path="/order" element={<Order />} />

                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/nft" element={<NFT />} />
                    <Route path="*" element={<ErrorPage />} />
                  </Routes>
                </ScrollToTopPage>
              </section>
            </Router>
            {/* <Footer /> */}
          </div>
        </DataNFTProvider>
    </DataProvider>
  );
}

export default App;
