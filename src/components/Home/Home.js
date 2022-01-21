import React from "react";
import { Link } from "react-router-dom";
import NFTDataOne from "./data";
import "./home.scss";
// import "../About/about.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <h2>Welcome to Blazed Kid nft's</h2>
        <p>
          These Kid has been around for a very short time, but only just now
          they decided to Blazed themselves, but there is only one
          problem, everytime they blazed themselves, their own teeth start to fall off.
        </p>
        <p>OVERVIEW</p>
        <ul>
          <li>​These Blazed Kid are 100% hand-made​</li>
          <li>
            999 Blazed Kid will blazed at the same time.
          </li>
          <li>Legendary Blazed Kid : There is only 10 of them existed</li>
          <li>
            Rare Blazed Kid : Less than 15% of them will be rare (Nose Piercing)
          </li>
          <li>
            Uncommon Blazed Kid : Less than 40% of them will be Uncommon (Unique
            Braces)
          </li>
          <li>
            Common Blazed Kid : 50% of the Blazed Kid will be common (NO ATTR)
          </li>
        </ul>
      </div>

      <div className="about">
      {NFTDataOne.map((item, index) => {
        return (
          <Link to={item.path}>
            <div key={index} className="about__nft-container">
              <div className="about__nft-heading">
                <h3>{item.title}</h3>
              </div>
              <div className="about__nft-img">
                <img src={item.img} alt="NTF's" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
    </div>
  );
};

export default Home;
