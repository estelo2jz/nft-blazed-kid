import React from "react";
import { NavLink } from "react-router-dom";
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
      <div className="nft-home">
        {/* Hero Section */}
        <section className="hero">
          <NavLink to="/gallery" className="container">
            <h1>Own a Piece of the Future</h1>
            <p>Join the decentralized art revolution. Collect rare digital assets backed by blockchain.</p>
            <button className="cta-btn">Explore Drops</button>
          </NavLink>
        </section>

        {/* Featured Collection */}
        <section className="featured-collection">
          <h2>🔥 Trending Collections</h2>
          <div className="grid">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="card">
                <img src={`/images/nft-${id}.png`} alt={`NFT ${id}`} />
                <h3>Blazed Series #{id}</h3>
                <p>Floor: 0.05 ETH</p>
              </div>
            ))}
          </div>
        </section>

        {/* Utility Section */}
        <section className="utility">
          <h2>✨ NFT Utility</h2>
          <ul>
            <li>💳 Staking for token rewards</li>
            <li>🎟️ Access to exclusive events</li>
            <li>🛍️ Discounts in partnered metaverse stores</li>
            <li>🌐 DAO governance access</li>
          </ul>
        </section>

        {/* How it Works */}
        <section className="how-it-works">
          <h2>🧠 How It Works</h2>
          <div className="steps">
            <div className="step">1. Connect Wallet</div>
            <div className="step">2. Discover Drops</div>
            <div className="step">3. Mint or Trade NFTs</div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>💬 What the Community Says</h2>
          <div className="quotes">
            <blockquote>
              “BlazedKid NFTs changed how I see digital art — it’s more than hype.”
              <span>— @degenqueen</span>
            </blockquote>
            <blockquote>
              “Easy to mint, exciting to collect. The roadmap is 🔥”
              <span>— @nftsamurai</span>
            </blockquote>
          </div>
        </section>

        {/* Roadmap */}
        <section className="roadmap">
          <h2>🚀 Roadmap</h2>
          <ol>
            <li><strong>Phase 1:</strong> Genesis Mint, Community Build</li>
            <li><strong>Phase 2:</strong> Token + Staking Integration</li>
            <li><strong>Phase 3:</strong> DAO Voting, Brand Partnerships</li>
            <li><strong>Phase 4:</strong> Metaverse Expansion</li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="faq">
          <h2>❓ Frequently Asked Questions</h2>
          <div className="qa">
            <div>
              <h4>What wallet do I need?</h4>
              <p>You can use MetaMask or any wallet that supports Ethereum.</p>
            </div>
            <div>
              <h4>Is this a limited collection?</h4>
              <p>Yes. The Genesis drop is capped at 8,888 unique NFTs.</p>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter">
          <h2>📬 Stay Updated</h2>
          <p>Subscribe to mint alerts, whitelist drops, and news.</p>
          <form>
            <input type="email" placeholder="your@email.com" />
            <button>Subscribe</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 BlazedKid NFT. Powered by Ethereum. All rights reserved.</p>
          <div className="socials">
            <a target="_blank" href="https://opensea.io/collection/blazed-kid-nft">Twitter</a> | <a target="_blank" href="https://opensea.io/collection/blazed-kid-nft" >Discord</a> | <a target="_blank" href="https://opensea.io/collection/blazed-kid-nft">Opensea</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Home;
