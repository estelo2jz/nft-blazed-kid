import React from "react";
import { Link } from "react-router-dom";
import NFTDataOne from "./data";
import "./home.scss";

import BKBanner from "../../assets/featured/BKBanner.png";
import BKBannerTM from "./BKBannerTrademark.png";

import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaPinterest,
} from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home__container">
        <div className="home__summary">
          <p>
            Welcome to <span>Blazed</span>
            <span>Kid</span>
          </p>
          <section>
            These Blazed Kid NTF's has been around for a very short time, but
            only just now they decided to Blazed themselves, but there is only
            one problem, they blazing themselves, and they connot be stop.{" "}
            <br></br>The only way to stop them is to capture all 999 Blazed Kid
            NFT's
          </section>
        </div>
        <div href="#overview" className="home__overview">
          <p>OVERVIEW</p>
          <ul>
            <li>​These Blazed Kid are 100% hand-made​</li>
            <li>999 Blazed Kid will blazed at the same time.</li>
            <li>Legendary Blazed Kid : There is only 10 of them existed</li>
            <li>
              Rare Blazed Kid : Less than 15% of them will be rare (Nose
              Piercing)
            </li>
            <li>
              Uncommon Blazed Kid : Less than 40% of them will be Uncommon
              (Unique)
            </li>
            <li>Common Blazed Kid : 50% of the Blazed Kid will be common</li>
          </ul>
        </div>
      </div>

      <div id="overview" className="home__section-content">
        {NFTDataOne.map((item, index) => {
          return (
            <Link to="/nft">
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

      <div className="home__bottom">
        <div className="home__bottom__p">
          <p>Free Banner Get It Now!</p>
        </div>
        <div className="home__bottom__banner">
          <img src={BKBanner} alt="Banner" />
        </div>
        <div className="home__bottom__download">
          <a href={BKBannerTM} download="BKBanner">
            Click to download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
