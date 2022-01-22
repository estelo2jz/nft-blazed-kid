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
        <span>
          <FaTwitter />
        </span>
        <span>
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
        </span>
      </div>
      &#169;2022 by Blazed Kid
    </div>
  );
};

export default Footer;
