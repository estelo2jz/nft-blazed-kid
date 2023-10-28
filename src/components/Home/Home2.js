import React from "react";
import { Link } from "react-router-dom";
import NFTDataOne from "./data";
import "./home.sass";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <section>
          <div className="home__sticky">BLAZED KID NFT Collection 1</div>
          <div className="home__content">
            {NFTDataOne.map((item, index) => {
              return (
                <Link to={item.path}>
                  <div key={index} className="home__nft-container">
                    <div className="home__nft-heading">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="home__nft-img">
                      <img src={item.img} alt="NTF's" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <section>
          <div className="home__sticky">BLAZED KID NFT Collection 2 </div>
          <div className="home__content">
            {NFTDataOne.map((item, index) => {
              return (
                <Link to={item.path}>
                  <div key={index} className="home__nft-container">
                    <div className="home__nft-heading">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="home__nft-img">
                      <img src={item.img} alt="NTF's" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <section>
          <div className="home__sticky">BLAZED KID NFT Collection 3</div>
          <div className="home__content">
            {NFTDataOne.map((item, index) => {
              return (
                <Link to={item.path}>
                  <div key={index} className="home__nft-container">
                    <div className="home__nft-heading">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="home__nft-img">
                      <img src={item.img} alt="NTF's" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <section>
          <div className="home__sticky">BLAZED KID NFT Collection 4</div>
          <div className="home__content">
            {NFTDataOne.map((item, index) => {
              return (
                <Link to={item.path}>
                  <div key={index} className="home__nft-container">
                    <div className="home__nft-heading">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="home__nft-img">
                      <img src={item.img} alt="NTF's" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
