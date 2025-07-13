import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import assetImage from "../assets/Asset 16@4x.png";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faWhatsapp,
    url: "https://www.whatsapp.com",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com",
  },
  {
    icon: faTwitter,
    url: "https://x.com",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="inner-container">
        <div className="nav-container">
          <a href="/">
            <img src={assetImage} alt="header logo" className="logo" />
          </a>
          <nav className="social-nav">
            <ul className="social-list">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FontAwesomeIcon icon={social.icon} size="1x" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="main-menu">
            <div className="desktop-menu">
              <a href="/menu" className="menu-link">
                <strong>Menu</strong>
              </a>
              <a href="/reserve" className="menu-link">
                <strong>Bookings</strong>
              </a>
              <a href="/about" className="menu-link">
                <strong>About</strong>
              </a>
            </div>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            {menuOpen && (
              <div className="mobile-menu">
                <a href="/menu" className="mobile-menu-link">
                  <strong>Menu</strong>
                </a>
                <a href="/reserve" className="mobile-menu-link">
                  <strong>Bookings</strong>
                </a>
                <a href="#about" className="mobile-menu-link">
                  <strong>About</strong>
                </a>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;