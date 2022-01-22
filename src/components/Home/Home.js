import React from "react";
import { Link } from "react-router-dom";
import NFTDataOne from "./data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__summary">
          <p>Welcome to <span>Blazed</span><span>Kid</span></p>
          <section>
            These Blazed Kid NTF's has been around for a very short time, but only just now
            they decided to Blazed themselves, but there is only one problem,
            everytime they blazed themselves, their own teeth start to fall off.
          </section>
        </div>
        <div className="home__overview">
          <p>OVERVIEW</p>
          <ul>
            <li>​These Blazed Kid are 100% hand-made​</li>
            <li>999 Blazed Kid will blazed at the same time.</li>
            <li>Legendary Blazed Kid : There is only 10 of them existed</li>
            <li>
              Rare Blazed Kid : Less than 15% of them will be rare (Nose Piercing)
            </li>
            <li>
              Uncommon Blazed Kid : Less than 40% of them will be Uncommon (Unique
              Braces)
            </li>
            <li>
              Common Blazed Kid : 50% of the Blazed Kid will be common
            </li>
          </ul>
        </div>
      </div>

      <div className="home__section-content">
        {NFTDataOne.map((item, index) => {
          return (
            <a href={item.path} target="_blank">
              <div key={index} className="home__nft-container">
                <div className="home__nft-heading">
                  <h3>{item.title}</h3>
                </div>
                <div className="home__nft-img">
                  <img src={item.img} alt="NTF's" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
