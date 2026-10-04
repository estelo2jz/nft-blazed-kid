import React from "react";
import { NavLink } from "react-router-dom";
import "./home.scss";

import BKBanner from "../../assets/featured/BKBanner.png";
import BKBannerTM from "./BKBannerTrademark.png";
import BKPhone1 from "./Blazked_Kid_Phone-Wallpaper-001.JPG";

const Home = () => {
  return (
    <section id="home" className="home">
      {/* Background ambient glowing orbs for depth */}
      <div className="home__glow-orb orb-1"></div>
      <div className="home__glow-orb orb-2"></div>

      {/* Hero / Main Intro Section */}
      <div className="home__container">
        <div className="home__intro">
          <h1>
            Welcome to <span className="highlight-blazed">Blazed</span>{" "}
            <span className="highlight-kid">Kid</span>
          </h1>
          <p className="home__description">
            The Blazed Kid NFTs are heating up the digital space. They’ve just
            started blazing — and there’s no turning back. Scarcity, rarity, and
            unstoppable style. Are you ready to own the flame?
          </p>
          <div className="home__cta-group">
            <NavLink to="/gallery" className="btn-primary">
              Explore Drops <span className="arrow">→</span>
            </NavLink>
            <a href="#downloads" className="btn-secondary">
              Free Downloads
            </a>
          </div>
        </div>
      </div>

      {/* Free Downloads Section */}
      <div id="downloads" className="home__downloads">
        <div className="home__download-card">
          <div className="card-tag">Exclusive Perk</div>
          <h3>🎁 Free Banner</h3>
          <div className="img-wrapper">
            <img src={BKBanner} alt="Free Banner" />
          </div>
          <a href={BKBannerTM} download="BKBanner" className="btn-download">
            <span>Download Banner</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </a>
        </div>

        <div className="home__download-card">
          <div className="card-tag">Mobile Asset</div>
          <h3>📱 Phone Wallpaper</h3>
          <div className="img-wrapper">
            <img src={BKPhone1} alt="Phone Wallpaper" />
          </div>
          <a href={BKPhone1} download="BKPhone1" className="btn-download">
            <span>Download Wallpaper</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </a>
        </div>
      </div>

      <div className="nft-home">
        {/* Featured Collection */}
        <section className="featured-collection">
          <div className="section-header">
            <h2>🔥 Trending Collections</h2>
            <p>Hand-picked rarity from the latest blockchain blocks.</p>
          </div>
          <div className="grid">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="card">
                <div className="card-image-container">
                  <img src={`/images/nft-${id}.png`} alt={`NFT ${id}`} />
                  <span className="badge-live">Live</span>
                </div>
                <div className="card-content">
                  <h3>Blazed Series #{id}</h3>
                  <div className="card-footer-info">
                    <span className="label">Floor Price</span>
                    <span className="price">0.05 ETH</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      
        {/* How it Works */}
      

        {/* Testimonials */}
        <section className="testimonials">
          <h2>💬 What the Community Says</h2>
          <div className="quotes">
            <blockquote>
              <p>“BlazedKid NFTs changed how I see digital art — it’s more than hype.”</p>
              <span>— @degenqueen</span>
            </blockquote>
            <blockquote>
              <p>“Easy to mint, exciting to collect. The roadmap is 🔥”</p>
              <span>— @nftsamurai</span>
            </blockquote>
          </div>
        </section>


        {/* Newsletter */}
        <section className="newsletter">
          <div className="newsletter-box">
            <h2>📬 Stay Updated</h2>
            <p>Subscribe to mint alerts, whitelist drops, and news.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 BlazedKid NFT. Powered by Ethereum. All rights reserved.</p>
          <div className="socials">
            <a target="_blank" rel="noreferrer" href="https://opensea.io/collection/blazed-kid-nft">Twitter</a>
            <span>•</span>
            <a target="_blank" rel="noreferrer" href="https://opensea.io/collection/blazed-kid-nft">Discord</a>
            <span>•</span>
            <a target="_blank" rel="noreferrer" href="https://opensea.io/collection/blazed-kid-nft">OpenSea</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Home;