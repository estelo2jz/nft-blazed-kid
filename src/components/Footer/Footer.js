import React from "react";
import "./footer.scss";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__socials">
        <a href="https://opensea.io/collection/blazed-kid-nft" target="_blank">
          <img src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).png" alt="open-sea-logo" />
        </a>
        {/* <span>
          <FaFacebookSquare />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaDiscord />
        </span>
        <span>
          <FaPinterest />
        </span> */}
      </div>
      &#169;2022 by Blazed Kid
    </div>
  );
};

export default Footer;
