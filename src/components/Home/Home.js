import React from "react";
import "./home.scss";

import BKBanner from "../../assets/featured/BKBanner.png";
import BKBannerTM from "./BKBannerTrademark.png";
import BKPhone1 from "./Blazked_Kid_Phone-Wallpaper-001.JPG";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__container">
        <div className="home__intro">
          <h1>
            Welcome to <span>Blazed</span> <span>Kid</span>
          </h1>
          <p className="home__description">
            The Blazed Kid NFTs are heating up the digital space. They’ve just started blazing — and there’s no turning back. Scarcity, rarity, and unstoppable style. Are you ready to own the flame?
          </p>
        </div>

        {/* <div className="home__overview">
          <h2>🔥 Collection Overview</h2>
          <ul>
            <li><strong>999</strong> Blazed Kids will blaze together in the drop</li>
            <li><strong>Legendary</strong>: Only <strong>10</strong> exist</li>
            <li><strong>Rare</strong>: < 15% (with nose piercings)</li>
            <li><strong>Uncommon</strong>: < 40% (unique designs)</li>
            <li><strong>Common</strong>: ~50% of total supply</li>
          </ul>
        </div> */}
      </div>

      <div className="home__downloads">
        <div className="home__download-card">
          <h3>🎁 Free Banner</h3>
          <img src={BKBanner} alt="Free Banner" />
          <a href={BKBannerTM} download="BKBanner" className="btn-download">
            Click to Download
          </a>
        </div>
        <div className="home__download-card">
          <h3>📱 Phone Wallpaper</h3>
          <img src={BKPhone1} alt="Phone Wallpaper" />
          <a href={BKPhone1} download="BKPhone1" className="btn-download">
            Click to Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
